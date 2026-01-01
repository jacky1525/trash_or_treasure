"use client";

import { useState, useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { getSocket } from "@/lib/socket";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Target, Info, Zap, DollarSign, Settings, AlertCircle, Clock, Trophy, RefreshCw } from "lucide-react";
import { soundManager } from "@/lib/soundManager";

export default function PlayerPage() {
  const params = useParams();
  const router = useRouter();
  const urlRoomCode = params.roomCode as string;

  const [roomCode, setRoomCode] = useState(urlRoomCode || "");
  const [playerName, setPlayerName] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const [playerId, setPlayerId] = useState("");
  const [error, setError] = useState("");
  const [gameState, setGameState] = useState("LOBBY");
  const [intel, setIntel] = useState<{ publicRumor: string; purchased: any[] }>({
    publicRumor: "",
    purchased: []
  });
  const [balance, setBalance] = useState(500000);
  const [currentBid, setCurrentBid] = useState(0);
  const [highestBidder, setHighestBidder] = useState("");
  const [feedback, setFeedback] = useState<"leading" | "outbid" | null>(null);
  const [readyPlayers, setReadyPlayers] = useState<string[]>([]);
  const [totalPlayers, setTotalPlayers] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [currentItem, setCurrentItem] = useState<any>(null);
  const [round, setRound] = useState(0);

  const socket = getSocket();

  useEffect(() => {
    // Session Initialization
    let stId = sessionStorage.getItem("trash_treasure_player_id");
    if (!stId) {
      stId = Math.random().toString(36).substring(2, 10);
      sessionStorage.setItem("trash_treasure_player_id", stId);
    }
    setPlayerId(stId);

    const savedName = sessionStorage.getItem("trash_treasure_player_name");
    if (savedName) setPlayerName(savedName);

    // Auto-join if roomCode in URL and we have a name
    if (urlRoomCode && savedName && !isJoined) {
       socket.emit("join-room", { 
         roomCode: urlRoomCode.toUpperCase(), 
         playerName: savedName,
         playerId: stId 
       });
    }

    // Load Sounds
    soundManager.loadSound("bid", "/sounds/bid.mp3");
    soundManager.loadSound("heartbeat", "/sounds/heartbeat.mp3");
    soundManager.loadSound("sold", "/sounds/sold.mp3");
    soundManager.loadSound("jackpot", "/sounds/jackpot.mp3");
    soundManager.loadSound("scam", "/sounds/scam.mp3");
    soundManager.loadSound("transition", "/sounds/transition.mp3");

    socket.on("room-joined", (data) => {
      setIsJoined(true);
      if (data.player) {
         setBalance(data.player.balance);
         if (data.player.intel) {
            // For initial join, we might only have purchased list if round already started
            setIntel(prev => ({ ...prev, purchased: Array.isArray(data.player.intel) ? data.player.intel : [] }));
         }
      }
      if (data.state) setGameState(data.state);
      if (data.currentItem) setCurrentItem(data.currentItem);
    });

    socket.on("room-synced", (data) => {
      setGameState(data.state);
      setCurrentItem(data.currentItem);
      setRound(data.round);
      setBalance(data.players.find((p: any) => p.playerId === stId)?.balance || 500000);
      setCurrentBid(data.currentBid || 0);
      setHighestBidder(data.highestBidder || "");
      setIsJoined(true);
      
      const myPlayer = data.players.find((p: any) => p.playerId === stId);
      if (myPlayer?.intel) {
          setIntel({
            publicRumor: data.currentItem?.publicRumor || "",
            purchased: Array.isArray(myPlayer.intel) ? myPlayer.intel : []
          });
       } else {
          setIntel({
            publicRumor: data.currentItem?.publicRumor || "",
            purchased: []
          });
       }
      setTotalPlayers(data.players.length);
    });

    socket.on("timer-update", (time) => {
      setTimeLeft(time);
    });

    socket.on("round-started", ({ item }) => {
      setCurrentItem(item);
      setGameState("INTEL_PHASE");
      setCurrentBid(0);
      setHighestBidder("");
      setFeedback(null);
      setIsReady(false);
      setReadyPlayers([]);
    });

    socket.on("receive-intel", (data) => {
      setIntel({
        publicRumor: data.publicRumor || "",
        purchased: Array.isArray(data.purchased) ? data.purchased : []
      });
      if (data.newBalance !== undefined) setBalance(data.newBalance);
    });

    socket.on("session-reset", () => {
      setGameState("LOBBY");
      setRound(1);
      setIntel({ publicRumor: "", purchased: [] });
      setCurrentBid(0);
      setHighestBidder("");
      setFeedback(null);
      setIsReady(false);
      setReadyPlayers([]);
      setCurrentItem(null);
    });

    socket.on("bidding-started", () => {
      setGameState("BIDDING");
    });

    socket.on("bid-updated", ({ currentBid, highestBidder }) => {
      setCurrentBid(currentBid);
      
      const wasHighest = highestBidder === playerName;
      const isOutbid = !wasHighest && highestBidder !== "";
      
      if (wasHighest) {
        setFeedback("leading");
        soundManager.play("bid", { volume: 0.15, pitch: 1.2 });
        setTimeout(() => setFeedback(null), 500);
      } else if (isOutbid) {
        setFeedback("outbid");
        soundManager.play("bid", { volume: 0.1, pitch: 0.8 });
        // Haptic Feedback
        if (typeof navigator !== "undefined" && navigator.vibrate) {
           navigator.vibrate([100, 50, 100]);
        }
        setTimeout(() => setFeedback(null), 1000);
      }
      
      setHighestBidder(highestBidder);
    });

    socket.on("item-sold", (data) => {
      setGameState("REVEAL");
      
      if (data.winner === playerName) {
        if (data.newBalance !== undefined) {
          setBalance(data.newBalance);
        } else {
          setBalance((prev) => prev - data.price);
        }
      } else if (highestBidder === playerName) {
         // I was the highest bidder but someone else won (wait, this shouldn't happen based on server logic)
      }

      setFeedback(null);
      setIsReady(false);
    });

    socket.on("ready-update", ({ readyPlayers, totalCount }) => {
      setReadyPlayers(readyPlayers);
      if (totalCount) setTotalPlayers(totalCount);
    });

    socket.on("game-over", (data) => {
      setGameState("GAME_OVER");
      const playersList = Array.isArray(data) ? data : data.players;
      const me = playersList.find((p: any) => p.name === playerName);
      if (me) setBalance(me.balance);
    });

    socket.on("error-msg", (msg) => {
      setError(msg);
    });

    return () => {
      socket.off("round-started");
      socket.off("receive-intel");
      socket.off("bidding-started");
      socket.off("bid-updated");
      socket.off("item-sold");
      socket.off("ready-update");
      socket.off("game-over");
      socket.off("error-msg");
    };
  }, [socket, playerName, highestBidder]);

  const joinRoom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!roomCode || !playerName) return;
    
    // Save to sessionStorage for refresh in this tab
    sessionStorage.setItem("trash_treasure_player_name", playerName);
    // Also save to localStorage for convenience in future sessions
    localStorage.setItem("trash_treasure_player_name", playerName);
    
    socket.emit("join-room", { 
      roomCode: roomCode.toUpperCase(), 
      playerName,
      playerId 
    });
    
    if (roomCode.toUpperCase() !== urlRoomCode) {
      router.push(`/play/${roomCode.toUpperCase()}`);
    }
  };

  const placeBid = (amount: number) => {
    if (gameState !== "BIDDING") return;
    
    const bidAmount = currentBid + amount;
    if (balance < bidAmount) return;
    
    socket.emit("place-bid", { roomCode: roomCode.toUpperCase(), amount });
  };

  const buyIntel = () => {
    socket.emit("buy-intel", { roomCode: roomCode.toUpperCase() });
  };

  const readyUp = () => {
    setIsReady(true);
    socket.emit("player-ready", { roomCode: roomCode.toUpperCase() });
  };

  if (!isJoined) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 grayscale-[0.5]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-sm space-y-8 text-center">
          <Smartphone className="w-16 h-16 mx-auto text-pink-500" />
          <h1 className="text-3xl font-black italic">OYUNCU GİRİŞİ</h1>
          <form onSubmit={joinRoom} className="space-y-4">
            <input
              type="text"
              placeholder="ODA KODU"
              maxLength={4}
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-2xl font-black tracking-widest text-center uppercase"
            />
            <input
              type="text"
              placeholder="ADINIZ"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-lg font-bold"
            />
            <button type="submit" className="w-full bg-white text-slate-950 py-5 rounded-2xl font-black text-xl active:bg-pink-500 active:text-white transition-all">
              KATIL
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-slate-950 text-white flex flex-col font-sans overflow-hidden">
      
      {/* 1. TOP HEADER (Player & Balance) */}
      <div className="p-4 sm:p-6 bg-slate-900/50 backdrop-blur-xl flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-pink-500/20">
            <span className="font-black text-lg sm:text-xl italic">{playerName[0]?.toUpperCase()}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] sm:text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">OYUNCU</span>
            <span className="text-lg sm:text-xl font-black italic text-white leading-none">
              ${balance.toLocaleString()}
            </span>
          </div>
        </div>
        <button className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 active:scale-95 transition-transform border border-white/10">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-4 sm:space-y-6 flex flex-col custom-scrollbar">
        
        <AnimatePresence mode="wait">
          {gameState === "LOBBY" && (
            <motion.div 
              key="lobby"
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="flex-1 flex flex-col items-center justify-center text-center space-y-4"
            >
              <Target className="w-12 h-12 sm:w-16 sm:h-16 text-slate-200" />
              <h2 className="text-base sm:text-lg font-black text-slate-300 uppercase tracking-[0.2em]">Müzayede Bekleniyor...</h2>
            </motion.div>
          )}

          {(gameState === "BIDDING" || gameState === "INTEL_PHASE") && (
            <div className="space-y-4 sm:space-y-6 flex flex-col">
              {/* 2. ITEM STATUS BANNER */}
              <div 
                className={`relative overflow-hidden p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] border-2 flex items-center justify-between shadow-xl transition-all duration-300 ${highestBidder === playerName ? 'bg-green-500/10 border-green-500/30' : highestBidder ? 'bg-red-500/10 border-red-500/30' : 'bg-white/5 border-white/10'}`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg sm:text-2xl font-black text-white italic leading-tight truncate">{currentItem?.name}</h3>
                  </div>
                  <p className="text-[9px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
                    {gameState === "INTEL_PHASE" ? "DOSYA ANALİZ EDİLİYOR..." : highestBidder === playerName ? "LİDERSİN!" : highestBidder ? `${highestBidder.toUpperCase()} GEÇTİ!` : "TEKLİF BEKLENİYOR"}
                  </p>
                </div>
              </div>

              {/* Current High Bid */}
              <div className="bg-white/5 border border-white/10 p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] flex justify-between items-center shadow-inner">
                <div className="flex flex-col">
                  <span className="text-[8px] sm:text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">MEVCUT TEKLİF</span>
                  <p className="text-2xl sm:text-3xl font-black italic text-white leading-none">${currentBid.toLocaleString()}</p>
                </div>
                {gameState === "INTEL_PHASE" ? (
                  <div className="flex items-center gap-2 text-pink-500/50 animate-pulse">
                     <Clock className="w-5 h-5" />
                     <span className="text-[10px] font-black uppercase tracking-widest">HAZIRLAN</span>
                  </div>
                ) : (
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-500/10 rounded-full flex items-center justify-center text-pink-500 border border-pink-500/20">
                     <Zap className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                  </div>
                )}
              </div>

              {/* 3. INTEL OVERHAUL (Purchasable Clues) */}
              <div className="flex flex-col gap-4">
                {/* Public Rumor Card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-sm">
                   <div className="flex items-center gap-2 mb-3 text-slate-500">
                      <div className="w-2 h-2 bg-slate-500 rounded-full" />
                      <span className="text-[10px] font-black uppercase tracking-widest leading-none">KAMUOYU FISILTISI</span>
                   </div>
                   <p className="text-sm font-medium text-slate-300 italic leading-relaxed">
                      "{intel.publicRumor || "Bilgi bekleniyor..."}"
                   </p>
                </div>

                {/* Secret Intel Container */}
                <div className="relative group min-h-[140px]">
                  <div className="h-full bg-gradient-to-br from-[#1E1C0A] to-[#121106] rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8 shadow-2xl border-2 border-yellow-900/30 relative overflow-hidden flex flex-col">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FFD700 0, #FFD700 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />
                    
                    <div className="flex justify-between items-center mb-4">
                       <div className="flex items-center gap-2 text-yellow-500/40">
                         <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse" />
                         <span className="text-[10px] font-black uppercase tracking-[0.4em]">GİZLİ BİLGİLER</span>
                       </div>
                       <div className="bg-yellow-500/10 px-2 py-1 rounded-md">
                          <span className="text-[8px] font-black text-yellow-500/60 uppercase tracking-widest">{intel.purchased.length} / 3</span>
                       </div>
                    </div>

                    <div className="flex flex-col gap-3 relative z-10 flex-1">
                      {intel.purchased.length === 0 && (
                         <div className="flex flex-col items-center justify-center py-4 opacity-30">
                            <Zap className="w-6 h-6 text-yellow-500 mb-2" />
                            <p className="text-[10px] font-black uppercase tracking-widest text-yellow-500">İSTİHBARAT YOK</p>
                         </div>
                      )}
                      
                      {intel.purchased.map((piece, idx) => (
                        <motion.div 
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          key={piece.id || idx} 
                          className="flex flex-col gap-1.5 bg-white/5 p-3 rounded-xl border border-yellow-500/10"
                        >
                           <div className="flex items-center gap-2">
                             <div className={`text-[8px] font-black uppercase px-2 py-0.5 rounded ${
                               piece.rarity === 'legendary' ? 'bg-yellow-500 text-black' :
                               piece.rarity === 'rare' ? 'bg-purple-500 text-white' :
                               'bg-slate-600 text-white'
                             }`}>
                                {piece.rarity === 'legendary' ? 'EFSANEVİ' : piece.rarity === 'rare' ? 'NADİR' : 'SIRADAN'}
                             </div>
                           </div>
                           <p className="text-[13px] font-medium text-yellow-50/80 leading-snug">"{piece.text}"</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Buy Button */}
                    {intel.purchased.length < 3 && (
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={buyIntel}
                        disabled={balance < [500, 2500, 5000][intel.purchased.length]}
                        className="mt-4 w-full py-4 bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl font-black text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 disabled:opacity-30 disabled:grayscale transition-all"
                      >
                         <Zap className="w-4 h-4 fill-current" />
                         İSTİHBARAT AL — ${[500, 2500, 5000][intel.purchased.length].toLocaleString()}
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>

              {/* 4. REACTIONS & QUICK BID ACTIONS */}
              <div className="mt-auto py-4 border-t border-white/5 space-y-4 sm:space-y-6">
                {/* Reactions */}
                <div className="flex justify-between items-center px-2">
                   {['🔥', '😂', '😮', '💸', '🤡'].map((emoji) => (
                      <motion.button
                         key={emoji}
                         whileTap={{ scale: 1.5 }}
                         onClick={() => socket.emit("send-reaction", { roomCode: roomCode.toUpperCase(), emoji })}
                         className="text-xl sm:text-2xl hover:scale-125 transition-transform"
                      >
                         {emoji}
                      </motion.button>
                   ))}
                </div>

                <div className="flex justify-between items-center px-1">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">HIZLI TEKLİF</span>
                  <div className="flex items-center gap-2 text-pink-500">
                    <Clock className="w-3 h-3" />
                    <span className="text-[10px] font-black uppercase tracking-widest">KALAN: {timeLeft}S</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 sm:gap-5">
                  <motion.button whileTap={{ scale: 0.95 }} onClick={() => placeBid(500)} disabled={gameState === "INTEL_PHASE" || balance < currentBid + 500} className="h-20 sm:h-28 bg-white/5 border border-white/10 rounded-2xl sm:rounded-[2rem] flex flex-col items-center justify-center gap-1 text-slate-300 disabled:opacity-20"><span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">GÜVENLİ</span><span className="text-xl sm:text-2xl font-black leading-none">+500</span></motion.button>
                  <motion.button whileTap={{ scale: 0.95 }} onClick={() => placeBid(2500)} disabled={gameState === "INTEL_PHASE" || balance < currentBid + 2500} className="h-20 sm:h-28 bg-blue-500/10 border-2 border-blue-500/30 rounded-2xl sm:rounded-[2rem] flex flex-col items-center justify-center gap-1 text-blue-400 disabled:opacity-20"><span className="text-[8px] font-bold uppercase tracking-widest opacity-60">ARTIR</span><span className="text-2xl sm:text-3xl font-black leading-none">+2.5k</span></motion.button>
                  <motion.button whileTap={{ scale: 0.95 }} onClick={() => placeBid(10000)} disabled={gameState === "INTEL_PHASE" || balance < currentBid + 10000} className="h-20 sm:h-28 bg-gradient-to-br from-pink-600 to-purple-700 rounded-2xl sm:rounded-[2rem] flex flex-col items-center justify-center gap-1 text-white disabled:opacity-20 relative overflow-hidden"><div className="absolute top-2 right-3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping" /><span className="text-[8px] font-bold text-white/40 uppercase tracking-widest">AGRESİF</span><span className="text-2xl sm:text-3xl font-black leading-none">+10k</span></motion.button>
                </div>
                <p className="text-center text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-2 leading-relaxed opacity-60">Teklifler anında cüzdanınızdan düşülür. İadesi yoktur.</p>
              </div>
            </div>
          )}

          {gameState === "REVEAL" && (
            <div className="flex-1 flex flex-col justify-center gap-4 sm:gap-8">
               <div className="bg-white/5 rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 border border-white/10 shadow-2xl text-center space-y-4 sm:space-y-6 backdrop-blur-md">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto text-pink-500 border border-pink-500/20">
                     <Clock className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <div>
                    <h3 className="text-[10px] sm:text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-2">Hazırlan</h3>
                    <p className="text-xl sm:text-2xl font-black italic text-white leading-tight uppercase">HERKES ONAYLAYINCA YENİ TUR BAŞLAR.</p>
                  </div>
                  
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={readyUp}
                    disabled={isReady}
                    className={`w-full py-4 sm:py-6 rounded-2xl sm:rounded-[2rem] font-black text-lg sm:text-xl transition-all shadow-xl ${isReady ? 'bg-green-500 text-white opacity-50' : 'bg-pink-600 text-white active:bg-pink-700 shadow-pink-500/20'}`}
                  >
                    {isReady ? "HAZIRSIN! ✓" : "SONRAKİ TUR"}
                  </motion.button>
               </div>
               
               <div className="text-center">
                  <div className="flex justify-center -space-x-2">
                     {readyPlayers.map((id, i) => (
                        <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500 border-2 border-slate-950 shadow-md animate-bounce" />
                     ))}
                  </div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mt-3">{readyPlayers.length} / {totalPlayers} HAZIR</p>
               </div>
            </div>
          )}

          {gameState === "GAME_OVER" && (
            <motion.div 
              key="over"
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col items-center justify-center text-center p-4 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent pointer-events-none" />
              
              {/* Background Glow based on performance */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[120px] opacity-20 pointer-events-none ${balance >= 500000 ? 'bg-green-500' : 'bg-red-500'}`} />

              <div className="z-10 space-y-8 w-full">
                <motion.div 
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  className="space-y-2"
                >
                  <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl relative group">
                    <Trophy className={`w-10 h-10 ${balance >= 500000 ? 'text-yellow-400' : 'text-slate-500'} group-hover:scale-110 transition-transform`} />
                    <div className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h2 className="text-[10px] font-black text-pink-500 tracking-[0.6em] uppercase leading-none mb-2">Görev Tamamlandı</h2>
                  <h1 className="text-5xl sm:text-6xl font-black italic text-white uppercase tracking-tighter leading-none">OYUN BİTTİ</h1>
                </motion.div>

                <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md shadow-2xl space-y-6 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-20">
                      <Zap className="w-8 h-8 text-white" />
                   </div>

                   <div className="space-y-1">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">FİNAL BAKİYE</span>
                      <p className={`text-4xl sm:text-5xl font-black italic leading-none ${balance >= 500000 ? 'text-green-400' : 'text-rose-500'}`}>
                        ${balance.toLocaleString()}
                      </p>
                   </div>

                   <div className="h-[1px] w-full bg-white/5" />

                   <div className="grid grid-cols-2 gap-4">
                      <div className="text-left">
                        <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest block mb-1">DURUM</span>
                        <span className={`text-xs font-black uppercase italic ${balance >= 500000 ? 'text-green-500' : 'text-rose-500'}`}>
                          {balance >= 1000000 ? "HIZLI ZENGİN" : balance >= 500000 ? "GİRİŞİMCİ" : "BATIK"}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest block mb-1">KÂR/ZARAR</span>
                        <span className={`text-xs font-black uppercase italic ${balance - 500000 >= 0 ? 'text-green-500' : 'text-rose-500'}`}>
                          {balance - 500000 >= 0 ? "+" : ""}${(balance - 500000).toLocaleString()}
                        </span>
                      </div>
                   </div>
                </div>

                <div className="flex flex-col gap-4 pt-4">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                        // Manually re-sync to check if lobby is ready
                        socket.emit("sync-room", { 
                            roomCode: roomCode.toUpperCase(), 
                            sessionId: playerId, 
                            isHost: false 
                        });
                        // If room state is already lobby, this will trigger room-synced and move them
                    }}
                    className="w-full bg-white text-slate-950 py-6 rounded-[2rem] font-black text-xl shadow-xl flex items-center justify-center gap-3 group"
                  >
                    <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                    ANA MENÜYE DÖN
                  </motion.button>
                  <p className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.3em] italic">Yeni bir odaya katılmak için sayfayı yenileyebilirsiniz.</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Removed redundant INTEL_PHASE block as it's now handled in the combined section */}
        </AnimatePresence>
      </div>

    </div>
  );
}
