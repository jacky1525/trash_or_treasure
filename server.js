import { createServer } from "node:http";
import { parse } from "node:url";
import next from "next";
import { Server } from "socket.io";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const rooms = {}; // { [roomCode]: { host, players: [], state, currentItem, round, items: [] } }

const RARITIES = {
    COMMON: { name: "SIRADAN", color: "#64748b", weight: 70, multiplier: 1 },
    RARE: { name: "NADİR", color: "#3b82f6", weight: 20, multiplier: 1.5 },
    LEGENDARY: { name: "EFSANEVİ", color: "#f59e0b", weight: 9, multiplier: 3 },
    SHINY: { name: "IŞILTILI ✨", color: "#ec4899", weight: 1, multiplier: 5 }
};

// Utility to get random rarity based on weights
function getRarity() {
    const rand = Math.random() * 100;
    if (rand < 1) return "SHINY";
    if (rand < 10) return "LEGENDARY";
    if (rand < 30) return "RARE";
    return "COMMON";
}

// Utility to shuffle array
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

app.prepare().then(() => {
    const server = createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
    });

    const io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });

    // Cleanup timers map
    const cleanupTimers = {};

    io.on("connection", (socket) => {
        console.log("User connected:", socket.id);

        socket.on("create-room", ({ roomCode, hostId }) => {
            rooms[roomCode] = {
                host: socket.id,
                hostId: hostId, // Store persistent host session ID
                players: [],
                state: "LOBBY",
                currentItem: null,
                round: 1,
                maxRounds: 9, // Default max rounds
                items: [], // Session specific unique items
                readyPlayers: new Set(),
                bidHistory: [],
                soldHistory: [], // Track all sold items
                currentBid: 0,
                highestBidder: null
            };
            socket.join(roomCode);
            socket.emit("room-synced", {
                state: "LOBBY",
                players: [],
                currentItem: null,
                revealData: null,
                round: 1,
                maxRounds: 9,
                soldHistory: [],
                currentBid: 0,
                highestBidder: null,
                isAuthorizedHost: true
            });
            console.log(`Room created: ${roomCode} by host: ${hostId}`);
        });

        socket.on("join-room", ({ roomCode, playerName, playerId }) => {
            if (rooms[roomCode]) {
                // Clear any pending cleanup if someone joins
                if (cleanupTimers[roomCode]) {
                    clearTimeout(cleanupTimers[roomCode]);
                    delete cleanupTimers[roomCode];
                    console.log(`[CLEANUP] Cancelled cleanup for room ${roomCode}`);
                }

                // Check if player is already in room (reconnection)
                // Check if player is already in room (reconnection)
                let player = rooms[roomCode].players.find(p => p.playerId === playerId);

                if (player) {
                    player.id = socket.id; // Update socket ID
                    player.name = playerName; // Update name just in case
                    console.log(`Player ${playerName} reconnected to ${roomCode}`);
                } else {
                    player = {
                        id: socket.id,
                        playerId: playerId,
                        name: playerName,
                        balance: 500000,
                        inventory: [],
                        intel: null
                    };
                    rooms[roomCode].players.push(player);
                    console.log(`${playerName} joined room ${roomCode}`);
                }

                socket.join(roomCode);

                // Always emit join confirmation
                socket.emit("room-joined", {
                    player,
                    state: rooms[roomCode].state,
                    currentItem: rooms[roomCode].currentItem,
                    round: rooms[roomCode].round,
                    maxRounds: rooms[roomCode].maxRounds
                });

                io.to(roomCode).emit("player-joined", {
                    players: rooms[roomCode].players,
                    playerName
                });
            } else {
                socket.emit("error-msg", "Room not found");
            }
        });

        socket.on("sync-room", ({ roomCode, sessionId, isHost }) => {
            const room = rooms[roomCode];
            if (!room) {
                socket.emit("error-msg", "Room not found");
                return;
            }

            if (isHost) {
                if (room.hostId === sessionId) {
                    room.host = socket.id;
                    socket.join(roomCode);
                    console.log(`Host re-synced to room ${roomCode}`);
                }
            } else {
                const player = room.players.find(p => p.playerId === sessionId);
                if (player) {
                    player.id = socket.id;
                    socket.join(roomCode);
                    console.log(`Player ${player.name} re-synced to room ${roomCode}`);
                }
            }

            // Sync means activity -> cancel cleanup
            if (cleanupTimers[roomCode]) {
                clearTimeout(cleanupTimers[roomCode]);
                delete cleanupTimers[roomCode];
                console.log(`[CLEANUP] Cancelled cleanup for room ${roomCode} (Sync)`);
            }

            // Send full current state for synchronization
            socket.emit("room-synced", {
                state: room.state,
                players: room.players,
                currentItem: room.currentItem,
                revealData: room.state === "REVEAL" ? room.revealData : null,
                round: room.round,
                maxRounds: room.maxRounds,
                soldHistory: room.soldHistory,
                currentBid: room.currentBid,
                items: room.items.map(i => i.name), // Just names for security if needed
                highestBidder: room.highestBidder,
                isAuthorizedHost: isHost && room.hostId === sessionId
            });
        });

        socket.on("reset-session", ({ roomCode, hostId }) => {
            if (rooms[roomCode] && (rooms[roomCode].host === socket.id || rooms[roomCode].hostId === hostId)) {
                const room = rooms[roomCode];
                room.state = "LOBBY";
                room.round = 1;
                room.currentItem = null;
                room.items = [];
                room.readyPlayers.clear();
                room.bidHistory = [];
                room.soldHistory = [];
                room.currentBid = 0;
                room.highestBidder = null;
                room.revealData = null;

                // Reset player balances and states
                room.players.forEach(p => {
                    p.balance = 500000;
                    p.inventory = [];
                    p.intel = null;
                });

                io.to(roomCode).emit("session-reset", {
                    state: room.state,
                    players: room.players
                });
                console.log(`[RESET] Room ${roomCode} reset to lobby by host.`);
            }
        });

        socket.on("start-game", async (roomCode, settings) => {
            if (rooms[roomCode] && rooms[roomCode].host === socket.id) {
                const room = rooms[roomCode];
                // Default settings
                const defaultSettings = {
                    roundDuration: 60,
                    selectedCategory: "HEPSİ",
                    maxRounds: 8,
                    selectedSet: "SET_A" // Default to Set A
                };

                room.settings = { ...defaultSettings, ...settings };
                room.maxRounds = room.settings.maxRounds || 8;

                console.log(`[DEBUG] Starting game in room ${roomCode} with Set: ${room.settings.selectedSet}, Rounds: ${room.maxRounds}`);

                // Build Prisma Query
                const queryWhere = {};

                // 1. Filter by Set (if not "HEPSİ" or "REMIX")
                if (room.settings.selectedSet && room.settings.selectedSet !== "HEPSİ" && room.settings.selectedSet !== "REMIX") {
                    queryWhere.gameSet = room.settings.selectedSet;
                }

                // 2. Filter by Category (if not "HEPSİ")
                const selectedCats = room.settings.selectedCategories || [room.settings.selectedCategory || "HEPSİ"];
                if (!selectedCats.includes("HEPSİ")) {
                    const targetCats = selectedCats.map(c => c.toUpperCase());
                    // Prisma's "in" operator for array filtering
                    queryWhere.category = { in: targetCats, mode: 'insensitive' };
                }

                // Fetch items based on query
                let allItems = await prisma.item.findMany({
                    where: queryWhere
                });

                // Fallback: If no items found (maybe set is empty?), fetch all
                if (allItems.length === 0) {
                    console.log("[WARN] No items found for filter, fetching all items fallback.");
                    allItems = await prisma.item.findMany();
                }

                // Shuffle logic
                rooms[roomCode].items = shuffle([...allItems]);

                rooms[roomCode].state = "GAME_START";
                rooms[roomCode].round = 1;

                await startNewRound(roomCode);
            }
        });

        async function startNewRound(roomCode) {
            const room = rooms[roomCode];
            // Pick next unique item from pre-shuffled session list
            const currentItemIndex = room.round - 1;
            const baseItem = room.items[currentItemIndex % room.items.length];

            // Calculate Rarity & Dynamic Values
            const rarityKey = getRarity();
            const rarity = RARITIES[rarityKey];
            const isShiny = rarityKey === "SHINY";

            // Real Value calculation: baseValue * rarityMultiplier * randomVariation
            // We allow for "Shiny Trash" by having a floor of nearly 0 but high ceiling
            const variation = 0.5 + Math.random(); // 0.5x to 1.5x variation
            const realValue = Math.round(baseItem.realValue * rarity.multiplier * variation);

            // Estimated Range: Usually accurate but can be deceptive
            const estimateVariation = 0.8 + Math.random() * 0.4; // 0.8x to 1.2x accuracy
            const midEstimate = baseItem.displayedValue * rarity.multiplier * estimateVariation;
            const estimateMin = Math.round(midEstimate * 0.7);
            const estimateMax = Math.round(midEstimate * 1.3);

            room.currentItem = {
                ...baseItem,
                realValue,
                rarity: rarityKey,
                rarityLabel: rarity.name,
                rarityColor: rarity.color,
                isShiny,
                estimateRange: [estimateMin, estimateMax]
            };

            const randomItem = room.currentItem; // For easier reference in existing code
            room.currentBid = 0;
            room.highestBidder = null;
            room.state = "INTEL_PHASE";
            room.bidHistory = [];
            room.readyPlayers.clear();

            // Distribute initial intel (Public Rumor)
            const players = room.players;
            players.forEach((player) => {
                player.intel = []; // Reset bought intel for the new round
                io.to(player.id).emit("receive-intel", {
                    publicRumor: randomItem.publicRumor,
                    purchased: []
                });
            });

            io.to(roomCode).emit("round-started", {
                item: {
                    name: randomItem.name,
                    description: randomItem.description,
                    displayedValue: randomItem.displayedValue,
                    imageUrl: randomItem.imageUrl,
                    rarity: randomItem.rarity,
                    rarityLabel: randomItem.rarityLabel,
                    rarityColor: randomItem.rarityColor,
                    isShiny: randomItem.isShiny,
                    estimateRange: randomItem.estimateRange
                },
                round: room.round,
                totalRounds: room.maxRounds
            });

            // After 10 seconds of intel, start bidding
            setTimeout(() => {
                room.state = "BIDDING";
                room.timeLeft = room.settings?.roundDuration || 60;
                io.to(roomCode).emit("bidding-started", { duration: room.timeLeft });

                const timer = setInterval(() => {
                    room.timeLeft--;
                    if (room.timeLeft <= 0) {
                        clearInterval(timer);
                        finishBidding(roomCode);
                    } else {
                        io.to(roomCode).emit("timer-update", room.timeLeft);
                    }
                }, 1000);
            }, 10000);
        }

        socket.on("place-bid", ({ roomCode, amount }) => {
            const room = rooms[roomCode];
            if (room && room.state === "BIDDING") {
                const player = room.players.find(p => p.id === socket.id);
                if (player && player.balance >= room.currentBid + amount) {
                    room.currentBid += amount;
                    room.highestBidder = player;

                    const bidEntry = {
                        playerName: player.name,
                        amount: amount,
                        totalBid: room.currentBid,
                        timestamp: new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
                    };
                    room.bidHistory.unshift(bidEntry); // Most recent first

                    io.to(roomCode).emit("bid-updated", {
                        currentBid: room.currentBid,
                        highestBidder: player.name,
                        bidHistory: room.bidHistory,
                        players: room.players // Update balances on host
                    });

                    // Anti-Sniper Feature: If bid is placed in last 5 seconds, add 5 seconds
                    if (room.timeLeft <= 5) {
                        room.timeLeft += 5;
                        io.to(roomCode).emit("timer-update", room.timeLeft);
                        console.log(`Anti-Sniper: Room ${roomCode} timer extended to ${room.timeLeft}s`);
                    }
                }
            }
        });

        socket.on("buy-intel", ({ roomCode }) => {
            const room = rooms[roomCode];
            if (!room || (room.state !== "INTEL_PHASE" && room.state !== "BIDDING")) return;

            const player = room.players.find(p => p.id === socket.id);
            if (!player) return;

            const boughtCount = player.intel.length;
            if (boughtCount >= 3) return;

            const costs = [500, 2500, 5000];
            const cost = costs[boughtCount];

            if (player.balance < cost) {
                socket.emit("error-msg", "Yetersiz bakiye!");
                return;
            }

            // Randomize based on weights
            const pool = room.currentItem.intelPool || [];
            if (pool.length === 0) {
                socket.emit("error-msg", "Bu eşya için daha fazla istihbarat yok.");
                return;
            }

            // Filter out already owned
            const ownedIds = player.intel.map(i => i.id);
            const available = pool.filter(i => !ownedIds.includes(i.id));

            if (available.length === 0) {
                socket.emit("error-msg", "Bu eşya için tüm istihbaratı aldın!");
                return;
            }

            const rand = Math.random() * 100;
            let targetRarity = "common";
            if (rand < 15) targetRarity = "legendary";
            else if (rand < 50) targetRarity = "rare"; // 15 to 50 = 35%
            else targetRarity = "common"; // 50 to 100 = 50%

            // Try to find one of that rarity
            let candidates = available.filter(i => i.rarity === targetRarity);

            // Fallback if that rarity is exhausted
            if (candidates.length === 0) {
                candidates = available;
            }

            const picked = candidates[Math.floor(Math.random() * candidates.length)];

            player.balance -= cost;
            player.intel.push(picked);

            // Notify player and host (host needs balance update)
            socket.emit("receive-intel", {
                publicRumor: room.currentItem.publicRumor,
                purchased: player.intel,
                newBalance: player.balance
            });

            io.to(roomCode).emit("bid-updated", {
                currentBid: room.currentBid,
                highestBidder: room.highestBidder?.name || "",
                bidHistory: room.bidHistory,
                players: room.players
            });

            console.log(`[INTEL] ${player.name} bought ${picked.rarity} intel for $${cost}`);
        });

        function finishBidding(roomCode) {
            const room = rooms[roomCode];
            room.state = "REVEAL";
            const winner = room.highestBidder;

            if (winner) {
                // Return on Investment (ROI) Logic:
                // Player pays the bid price, but gains the item's real value back into their liquid assets
                winner.balance = (winner.balance - room.currentBid) + room.currentItem.realValue;
                winner.inventory.push(room.currentItem);
                const profit = room.currentItem.realValue - room.currentBid;

                const revealData = {
                    winner: winner.name,
                    price: room.currentBid,
                    realValue: room.currentItem.realValue,
                    profit: profit,
                    newBalance: winner.balance
                };

                const soldData = {
                    item: room.currentItem,
                    winner: winner.name,
                    price: room.currentBid,
                    realValue: room.currentItem.realValue,
                    profit: profit,
                    success: true
                };
                room.soldHistory.push(soldData);
                room.revealData = revealData;
                console.log(`[DEBUG] Item added to history. Total count: ${room.soldHistory.length}`);

                io.to(roomCode).emit("item-sold", revealData);
            } else {
                const revealData = {
                    winner: "KİMSE",
                    price: 0,
                    realValue: room.currentItem.realValue,
                    profit: 0
                };

                const soldData = {
                    item: room.currentItem,
                    winner: "KİMSE",
                    price: 0,
                    realValue: room.currentItem.realValue,
                    profit: 0,
                    success: false
                };
                room.soldHistory.push(soldData);
                room.revealData = revealData;

                io.to(roomCode).emit("item-sold", revealData);
            }

            room.readyPlayers.clear();
        }

        socket.on("player-ready", ({ roomCode }) => {
            const room = rooms[roomCode];
            if (room && room.state === "REVEAL") {
                const player = room.players.find(p => p.id === socket.id);
                if (player) {
                    room.readyPlayers.add(player.playerId);

                    io.to(roomCode).emit("ready-update", {
                        readyCount: room.readyPlayers.size,
                        totalCount: room.players.length,
                        readyPlayers: Array.from(room.readyPlayers)
                    });

                    if (room.readyPlayers.size >= room.players.length && room.players.length > 0) {
                        if (room.round < room.maxRounds) {
                            room.round++;
                            startNewRound(roomCode);
                        } else {
                            room.state = "GAME_OVER";
                            console.log(`[DEBUG] Emitting game-over with ${room.soldHistory.length} items in history`);
                            io.to(roomCode).emit("game-over", {
                                players: room.players,
                                soldHistory: room.soldHistory
                            });
                        }
                    }
                }
            }
        });

        // Handle bidding, power-ups, etc. will go here

        socket.on("send-reaction", ({ roomCode, emoji }) => {
            const room = rooms[roomCode];
            if (room) {
                const player = room.players.find(p => p.id === socket.id);
                io.to(roomCode).emit("new-reaction", {
                    emoji,
                    playerName: player ? player.name : "İzleyici",
                    id: Math.random() // Unique ID for key mapping in FE
                });
            }
        });

        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);

            // Find which room this socket belongs to
            // This is O(N) but fine for this scale. Optimized approach would be to map socket.id -> roomCode
            Object.keys(rooms).forEach(roomCode => {
                const room = rooms[roomCode];
                // Check if host or player
                const isHost = room.host === socket.id;
                const isPlayer = room.players.some(p => p.id === socket.id);

                if (isHost || isPlayer) {
                    // Check active connections in this room
                    // io.sockets.adapter.rooms.get(roomCode) returns a Set of socketIds in the room
                    const socketsInRoom = io.sockets.adapter.rooms.get(roomCode)?.size || 0;

                    if (socketsInRoom <= 0) {
                        console.log(`[CLEANUP] Room ${roomCode} is empty. Scheduling deletion in 60 minutes...`);

                        // Set 1 hour timeout
                        cleanupTimers[roomCode] = setTimeout(() => {
                            console.log(`[CLEANUP] Deleting room ${roomCode} due to inactivity.`);
                            delete rooms[roomCode];
                            delete cleanupTimers[roomCode];
                        }, 60 * 60 * 1000); // 1 hour
                    }
                }
            });
        });
    });

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, "0.0.0.0", (err) => {
        if (err) throw err;
        console.log(`> Server listening on port ${PORT}`);
        console.log(`> Local: http://localhost:${PORT}`);
        console.log(`> Network: http://192.168.1.100:${PORT}`);
    });
});
