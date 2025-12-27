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
const MAX_ROUNDS = 5;

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

    io.on("connection", (socket) => {
        console.log("User connected:", socket.id);

        socket.on("create-room", (roomCode) => {
            rooms[roomCode] = {
                host: socket.id,
                players: [],
                state: "LOBBY",
                items: [], // Session specific unique items
                currentItem: null,
                round: 0,
                bidHistory: [],
                readyPlayers: new Set()
            };
            socket.join(roomCode);
            socket.emit("room-created", roomCode);
            console.log(`Room created: ${roomCode}`);
        });

        socket.on("join-room", ({ roomCode, playerName }) => {
            if (rooms[roomCode]) {
                const player = {
                    id: socket.id,
                    name: playerName,
                    balance: 5000,
                    inventory: [],
                    intel: null
                };
                rooms[roomCode].players.push(player);
                socket.join(roomCode);
                io.to(roomCode).emit("player-joined", {
                    players: rooms[roomCode].players,
                    playerName
                });
                console.log(`${playerName} joined room ${roomCode}`);
            } else {
                socket.emit("error-msg", "Room not found");
            }
        });

        socket.on("start-game", async (roomCode) => {
            if (rooms[roomCode] && rooms[roomCode].host === socket.id) {
                // Fetch and shuffle all items for this session
                const allItems = await prisma.item.findMany();
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
            const randomItem = room.items[currentItemIndex % room.items.length];
            room.currentItem = randomItem;
            room.currentBid = 0;
            room.highestBidder = null;
            room.state = "INTEL_PHASE";
            room.bidHistory = [];
            room.readyPlayers.clear();

            // Distribute intel
            const players = room.players;
            players.forEach((player, index) => {
                let intel = "Hiçbir bilgin yok.";
                const type = index % 4;
                if (type === 0) intel = randomItem.intelGood;
                if (type === 1) intel = randomItem.intelBad;
                if (type === 2) intel = randomItem.intelSecret;
                if (type === 3) intel = "Gördüğün her şey yalan olabilir!";

                player.intel = intel;
                io.to(player.id).emit("receive-intel", intel);
            });

            io.to(roomCode).emit("round-started", {
                item: {
                    name: randomItem.name,
                    description: randomItem.description,
                    displayedValue: randomItem.displayedValue,
                    imageUrl: randomItem.imageUrl
                },
                round: room.round,
                totalRounds: MAX_ROUNDS
            });

            // After 10 seconds of intel, start bidding
            setTimeout(() => {
                room.state = "BIDDING";
                room.timeLeft = 30;
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

        function finishBidding(roomCode) {
            const room = rooms[roomCode];
            room.state = "REVEAL";
            const winner = room.highestBidder;

            if (winner) {
                winner.balance -= room.currentBid;
                winner.inventory.push(room.currentItem);
                const profit = room.currentItem.realValue - room.currentBid;

                io.to(roomCode).emit("item-sold", {
                    winner: winner.name,
                    price: room.currentBid,
                    realValue: room.currentItem.realValue,
                    profit: profit
                });
            } else {
                io.to(roomCode).emit("item-sold", {
                    winner: "KİMSE",
                    price: 0,
                    realValue: room.currentItem.realValue,
                    profit: 0
                });
            }

            room.readyPlayers.clear();
        }

        socket.on("player-ready", ({ roomCode }) => {
            const room = rooms[roomCode];
            if (room && room.state === "REVEAL") {
                room.readyPlayers.add(socket.id);

                io.to(roomCode).emit("ready-update", {
                    readyCount: room.readyPlayers.size,
                    totalCount: room.players.length,
                    readyPlayers: Array.from(room.readyPlayers)
                });

                if (room.readyPlayers.size >= room.players.length && room.players.length > 0) {
                    if (room.round < MAX_ROUNDS) {
                        room.round++;
                        startNewRound(roomCode);
                    } else {
                        room.state = "GAME_OVER";
                        io.to(roomCode).emit("game-over", room.players);
                    }
                }
            }
        });

        // Handle bidding, power-ups, etc. will go here

        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
            // Optional: Cleanup empty rooms or notify host
        });
    });

    const PORT = process.env.PORT || 3001;
    server.listen(PORT, "0.0.0.0", (err) => {
        if (err) throw err;
        console.log(`> Server listening on port ${PORT}`);
        console.log(`> Local: http://localhost:${PORT}`);
        console.log(`> Network: http://192.168.1.100:${PORT}`);
    });
});
