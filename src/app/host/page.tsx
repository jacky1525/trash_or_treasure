"use client";

import { useEffect, useState } from "react";
import { getSocket } from "@/lib/socket";
import { motion, AnimatePresence } from "framer-motion";
import { QrCode, Users, Play, Timer, TrendingUp, Trophy, DollarSign, History, User } from "lucide-react";

export default function HostPage() {
  const [roomCode, setRoomCode] = useState("");
  const [players, setPlayers] = useState<any[]>([]);
  const [gameState, setGameState] = useState("LOBBY");
  const [currentItem, setCurrentItem] = useState<any>(null);
  const [currentBid, setCurrentBid] = useState(0);
  const [highestBidder, setHighestBidder] = useState("");
  const [bidHistory, setBidHistory] = useState<any[]>([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [round, setRound] = useState(0);
  const [revealData, setRevealData] = useState<any>(null);
  const [readyPlayers, setReadyPlayers] = useState<string[]>([]);
  const [readyTotal, setReadyTotal] = useState({ ready: 0, total: 0 });

  const socket = getSocket();

  useEffect(() => {
    const code = Math.random().toString(36).substring(2, 6).toUpperCase();
    setRoomCode(code);
    socket.emit("create-room", code);

    socket.on("player-joined", ({ players }) => {
      setPlayers(players);
    });

    socket.on("round-started", ({ item, round }) => {
      setGameState("INTEL_PHASE");
      setCurrentItem(item);
      setRound(round);
      setRevealData(null);
      setCurrentBid(0);
      setHighestBidder("");
      setBidHistory([]);
      setReadyPlayers([]);
      setReadyTotal({ ready: 0, total: 0 });
    });

    socket.on("bidding-started", () => {
      setGameState("BIDDING");
    });

    socket.on("timer-update", (time) => {
      setTimeLeft(time);
    });

    socket.on("bid-updated", ({ currentBid, highestBidder, bidHistory, players: updatedPlayers }) => {
      setCurrentBid(currentBid);
      setHighestBidder(highestBidder);
      setBidHistory(bidHistory || []);
      if (updatedPlayers) setPlayers(updatedPlayers);
    });

    socket.on("item-sold", (data) => {
      setGameState("REVEAL");
      setRevealData(data);
    });

    socket.on("game-over", (finalPlayers) => {
      setGameState("GAME_OVER");
      setPlayers(finalPlayers);
    });

    socket.on("ready-update", ({ readyCount, totalCount, readyPlayers }) => {
      setReadyTotal({ ready: readyCount, total: totalCount });
      setReadyPlayers(readyPlayers);
    });

    socket.on("ready-update", ({ readyCount, totalCount, readyPlayers }) => {
      setReadyTotal({ ready: readyCount, total: totalCount });
      setReadyPlayers(readyPlayers);
    });

    return () => {
      socket.off("player-joined");
      socket.off("round-started");
      socket.off("bidding-started");
      socket.off("timer-update");
      socket.off("bid-updated");
      socket.off("item-sold");
      socket.off("game-over");
      socket.off("ready-update");
    };
  }, [socket]);

  const startGame = () => {
    socket.emit("start-game", roomCode);
  };

  // Common Header for Game Phases
  const GameHeader = ({ showTitle = true }) => (
    <div className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
      <div className="flex items-center gap-4">
        <div className="bg-white/5 backdrop-blur-md px-6 py-2 rounded-2xl border border-white/10">
          <span className="text-slate-500 font-black text-xs uppercase tracking-[0.2em]">Oda Kodu</span>
          <p className="text-xl font-black font-mono tracking-widest">{roomCode}</p>
        </div>
      </div>
      {showTitle && (
        <h1 className="text-2xl font-black italic tracking-tighter bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          TRASH or TREASURE
        </h1>
      )}
      <div className="flex items-center gap-4">
        <div className="bg-pink-600/20 backdrop-blur-md px-6 py-2 rounded-2xl border border-pink-500/30">
          <span className="text-pink-500 font-black text-xs uppercase tracking-[0.2em]">Tur</span>
          <p className="text-xl font-black text-center">{round}</p>
        </div>
      </div>
    </div>
  );

  if (gameState === "LOBBY") {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-8 overflow-hidden relative">
        <div className="absolute top-0 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[150px] animate-pulse" />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="z-10 text-center space-y-8">
          <h1 className="text-8xl font-black tracking-tighter bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent italic drop-shadow-2xl">
            TRASH or TREASURE
          </h1>

          <div className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-xl shadow-2xl relative">
            <p className="text-slate-500 text-sm mb-4 uppercase tracking-[0.4em] font-black opacity-50">Giriş Kodu</p>
            <div className="text-9xl font-black font-mono tracking-widest text-white mb-8 select-all">{roomCode}</div>
            <div className="flex items-center justify-center gap-3 text-slate-400 bg-white/5 py-4 px-8 rounded-2xl border border-white/5">
              <QrCode className="w-6 h-6 text-pink-500" />
              <span className="font-bold text-sm">Telefonunuzdan bu kodu girin</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <Users className="w-8 h-8 text-pink-500" />
              <span className="text-2xl font-bold whitespace-nowrap">{players.length} Oyuncu Hazır</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
              <AnimatePresence>
                {players.map((player) => (
                  <motion.div 
                    key={player.id} 
                    initial={{ scale: 0, opacity: 0, x: -20 }} 
                    animate={{ scale: 1, opacity: 1, x: 0 }} 
                    className="bg-white text-slate-950 px-8 py-3 rounded-2xl font-black shadow-xl flex items-center gap-2"
                  >
                    <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-[10px] text-white">
                        {player.name[0].toUpperCase()}
                    </div>
                    {player.name}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {players.length >= 1 && (
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(236, 72, 153, 0.4)" }} 
                whileTap={{ scale: 0.95 }} 
                onClick={startGame} 
                className="mt-12 bg-gradient-to-br from-pink-500 to-purple-600 text-white px-16 py-6 rounded-full font-black text-2xl shadow-2xl transition-all"
              >
                OYUNU BAŞLAT
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  if (gameState === "INTEL_PHASE" || gameState === "BIDDING") {
    return (
      <div className="h-screen bg-slate-950 text-white flex flex-col p-8 pt-24 relative overflow-hidden">
        <GameHeader />
        
        <div className="grid grid-cols-12 gap-8 h-full flex-1">
          {/* LEFT SIDEBAR: PLAYERS */}
          <div className="col-span-3 flex flex-col gap-4 overflow-hidden h-full">
            <div className="flex items-center gap-2 mb-2 px-4 shrink-0">
              <Users className="w-5 h-5 text-slate-500" />
              <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Oyuncular ({players.length})</span>
            </div>
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-3 min-h-0">
              <AnimatePresence mode="popLayout">
                {players.sort((a,b) => b.balance - a.balance).map((player, idx) => {
                  const isLeading = player.name === highestBidder;
                  const isReady = readyPlayers.includes(player.id);
                  return (
                    <motion.div 
                      key={player.id}
                      layout
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className={`p-5 rounded-[2rem] border transition-all duration-300 relative ${isLeading ? 'bg-pink-500 border-pink-400 shadow-[0_0_25px_rgba(236,72,153,0.3)]' : 'bg-white/5 border-white/10'}`}
                    >
                      {isReady && !isLeading && (
                        <div className="absolute -top-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-slate-950 flex items-center justify-center">
                           <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        </div>
                      )}
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black italic text-xl ${isLeading ? 'bg-white text-pink-500' : 'bg-white/10'}`}>
                           {player.name[0].toUpperCase()}
                        </div>
                        <div className="flex-1">
                          <p className={`font-black text-lg ${isLeading ? 'text-white' : 'text-slate-200'}`}>{player.name}</p>
                          <div className={`flex items-center gap-1 font-bold ${isLeading ? 'text-white/80' : 'text-green-400'}`}>
                             <DollarSign className="w-3 h-3" />
                             {player.balance.toLocaleString()}
                          </div>
                        </div>
                        {isLeading && (
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-white text-pink-500 px-3 py-1 rounded-full text-[10px] font-black tracking-widest">
                             TEKLİFTE
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* CENTER: REDESIGNED ITEM CARD */}
          <div className="col-span-6 flex items-center justify-center">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              className="w-full max-w-xl bg-slate-900/80 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)] flex flex-col"
            >
              {/* IMAGE SECTION WITH SPOTLIGHT */}
              <div className="aspect-[4/3] relative flex items-center justify-center bg-gradient-to-b from-slate-800 to-slate-950 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />
                <motion.img
                  layoutId="item-image"
                  src={currentItem?.imageUrl}
                  alt={currentItem?.name}
                  className="relative z-10 w-4/5 h-4/5 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                />
                
                {/* Tur Overlay */}
                <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 z-20">
                   <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Açık Artırma #{round}</p>
                </div>
              </div>

              {/* INFORMATION SECTION */}
              <div className="p-10 space-y-8 bg-slate-900/50">
                 <div className="space-y-2">
                    <h2 className="text-4xl font-black italic tracking-tighter uppercase text-white drop-shadow-sm">{currentItem?.name}</h2>
                    <p className="text-slate-400 font-medium text-lg leading-relaxed">{currentItem?.description}</p>
                 </div>

                 <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />

                 <div className="flex justify-between items-end">
                    <div className="space-y-1">
                       <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Tahmini Değer</p>
                       <div className="text-4xl font-black text-white flex items-center gap-1 leading-none">
                          <span className="text-slate-500 font-normal">?</span>
                          ${currentItem?.displayedValue.toLocaleString()}
                          <span className="text-slate-500 font-normal">?</span>
                       </div>
                    </div>

                    <div className="text-right space-y-1">
                       <p className="text-[10px] font-black text-pink-500 uppercase tracking-[0.3em]">Kalan Süre</p>
                       <div className={`text-4xl font-black font-mono leading-none ${timeLeft <= 5 ? 'text-red-500 animate-pulse' : 'text-white'}`}>
                          {timeLeft}s
                       </div>
                    </div>
                 </div>
              </div>

              {gameState === "INTEL_PHASE" && (
                <div className="absolute inset-0 backdrop-blur-xl bg-slate-950/60 flex flex-col items-center justify-center text-center p-12 z-30">
                   <div className="w-24 h-24 rounded-full border-4 border-white/5 border-t-pink-500 animate-spin mb-8" />
                   <h3 className="text-3xl font-black italic text-pink-500 animate-pulse tracking-tight uppercase">İstihbarat Toplanıyor</h3>
                   <p className="text-white/40 text-sm mt-2 font-bold tracking-[0.4em] uppercase">Hazırlanın</p>
                </div>
              )}
            </motion.div>
          </div>

          {/* RIGHT PANEL: BID HISTORY */}
          <div className="col-span-3 flex flex-col gap-6 overflow-hidden h-full">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col items-center text-center space-y-2 relative overflow-hidden group shrink-0">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform">
                  <TrendingUp className="w-16 h-16 text-slate-950" />
               </div>
               <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.2em]">En Yüksek Teklif</p>
               <div className="text-6xl font-black text-slate-950 italic tracking-tighter">${currentBid.toLocaleString()}</div>
               <div className="flex items-center gap-2 text-pink-600 font-black text-base">
                  {highestBidder || "BEKLENİYOR..."}
               </div>
            </div>

            <div className="flex-1 bg-white/5 border border-white/10 rounded-[3rem] flex flex-col overflow-hidden min-h-0">
               <div className="p-6 border-b border-white/5 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2">
                    <History className="w-5 h-5 text-slate-500" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Teklif Geçmişi</span>
                  </div>
                  <span className="text-[10px] font-black text-pink-500 bg-pink-500/10 px-2 py-1 rounded-full">{bidHistory.length} Kayıt</span>
               </div>
               <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
                  <AnimatePresence mode="popLayout">
                    {bidHistory.length > 0 ? (
                      bidHistory.map((bid, idx) => (
                        <motion.div 
                          key={`${bid.playerName}-${bid.totalBid}`}
                          initial={{ y: -20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          className={`p-4 rounded-2xl flex justify-between items-center ${idx === 0 ? 'bg-white/10 border border-white/10' : 'bg-transparent border border-transparent opacity-40'}`}
                        >
                          <div className="flex flex-col">
                            <span className="font-black text-sm uppercase">{bid.playerName}</span>
                            <span className="text-[10px] font-bold text-slate-500 tracking-tighter">{bid.timestamp}</span>
                          </div>
                          <div className="flex flex-col items-end">
                             <span className="text-xs font-bold text-pink-500">+{bid.amount}</span>
                             <span className="font-black">${bid.totalBid}</span>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-slate-700 opacity-30 text-center p-8">
                         <TrendingUp className="w-12 h-12 mb-2" />
                         <p className="text-sm font-black uppercase tracking-widest italic">İlk teklifi bekliyor...</p>
                      </div>
                    )}
                  </AnimatePresence>
               </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.2);
          }
        `}</style>
      </div>
    );
  }

  if (gameState === "REVEAL") {
    const isWin = revealData?.profit > 0;
    const item = currentItem;

    return (
      <div className="h-screen bg-slate-950 text-white flex flex-col p-8 relative overflow-hidden">
        <GameHeader showTitle={false} />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className={`absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full blur-[200px] opacity-10 ${isWin ? 'bg-green-500' : 'bg-red-500'}`} />
           <div className={`absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full blur-[200px] opacity-10 ${isWin ? 'bg-green-500' : 'bg-red-500'}`} />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-8 max-w-7xl mx-auto w-full">
          
          {/* Header Status */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-slate-500 font-black text-sm uppercase tracking-[0.4em]">Müzayede Sonucu</span>
            <h2 className="text-6xl font-black italic uppercase tracking-tighter">
              {revealData.winner === "KİMSE" ? "PAS GEÇİLDİ" : "EŞYA SATILDI!"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-12 gap-10 w-full items-stretch">
            {/* Left: Item Details */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="col-span-5 bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10 p-10 flex flex-col items-center text-center gap-6"
            >
              <div className="relative w-full aspect-square max-w-[300px] group">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-50 rounded-3xl" />
                <img 
                  src={item?.imageUrl} 
                  alt={item?.name} 
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </div>
              <div>
                <h3 className="text-3xl font-black italic mb-2 uppercase tracking-tight">{item?.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">{item?.description}</p>
              </div>
            </motion.div>

            {/* Right: Financial Detail & Result */}
            <div className="col-span-7 flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-6 h-full">
                {/* Winner Card */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="col-span-2 bg-white text-slate-950 rounded-[2.5rem] p-8 flex flex-col justify-center items-center relative overflow-hidden"
                >
                  <Users className="absolute top-6 right-8 w-12 h-12 text-slate-100" />
                  <span className="text-slate-500 font-black text-xs uppercase tracking-widest mb-1">Yeni Sahibi</span>
                  <p className="text-5xl font-black italic uppercase tracking-tighter">
                    {revealData.winner}
                  </p>
                </motion.div>

                {/* Price Card */}
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/10 flex flex-col justify-center items-center"
                >
                   <span className="text-slate-500 font-black text-xs uppercase tracking-widest mb-2">Satılan Fiyat</span>
                   <p className="text-6xl font-black italic text-white">${revealData?.price?.toLocaleString() || "0"}</p>
                </motion.div>

                {/* Real Value Card */}
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className={`rounded-[2.5rem] p-8 border-2 flex flex-col justify-center items-center ${isWin ? "bg-green-500/10 border-green-500/50" : "bg-red-500/10 border-red-500/50"}`}
                >
                   <span className="text-slate-500 font-black text-xs uppercase tracking-widest mb-2">Gerçek Değer</span>
                   <p className={`text-6xl font-black italic ${isWin ? "text-green-400" : "text-red-400"}`}>
                    ${revealData?.realValue?.toLocaleString() || "0"}
                   </p>
                </motion.div>
              </div>

              {/* Status Badge */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                className={`py-6 rounded-[2rem] border-4 flex items-center justify-center gap-4 ${isWin ? "bg-green-500 text-white border-green-400 shadow-[0_0_30px_rgba(34,197,94,0.3)]" : "bg-red-500 text-white border-red-400 shadow-[0_0_30px_rgba(239,68,68,0.3)]"}`}
              >
                <div className="text-4xl font-black italic uppercase tracking-tighter">
                  {isWin ? "BÜYÜK VURGUN! 💰" : "KAZIKLANDI! 🤡"}
                </div>
                <div className="text-2xl font-black bg-black/20 px-4 py-1 rounded-xl">
                  {isWin ? "+" : "-"}${Math.abs(revealData.profit).toLocaleString()}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Voting Tracker */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full max-w-4xl bg-white/5 backdrop-blur-2xl px-10 py-5 rounded-[2.5rem] border border-white/10 flex items-center justify-between shadow-3xl"
          >
             <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Hazinelenme Durumu</span>
                <p className="text-xl font-black italic">
                  {readyTotal.ready === readyTotal.total && readyTotal.total > 0 ? "HAZIRLAR!" : "OYUNCULAR BEKLENİYOR..."}
                </p>
             </div>

             <div className="flex items-center gap-8">
                <div className="flex -space-x-3">
                   {players.map((p, i) => (
                      <div 
                         key={p.id} 
                         className={`w-10 h-10 rounded-full border-2 border-slate-900 flex items-center justify-center font-black text-xs transition-all duration-300 ${readyPlayers.includes(p.id) ? 'bg-green-500 text-white scale-110' : 'bg-slate-800 text-slate-500'}`}
                      >
                         {p.name[0].toUpperCase()}
                      </div>
                   ))}
                </div>
                <div className="h-8 w-[1px] bg-white/10" />
                <div className="text-3xl font-black text-white/10 italic">
                   <span className="text-white">{readyTotal.ready}</span> / {readyTotal.total}
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (gameState === "GAME_OVER") {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-8 text-center space-y-12">
        <motion.div initial={{ y: -50 }} animate={{ y: 0 }} className="space-y-4">
           <Trophy className="w-32 h-32 text-yellow-500 mx-auto drop-shadow-[0_0_30px_rgba(234,179,8,0.6)] animate-bounce" />
           <p className="text-yellow-500 font-black text-xl tracking-[0.5em] uppercase">Oyun Bitti</p>
           <h2 className="text-9xl font-black italic tracking-tighter uppercase underline decoration-pink-500 decoration-8">LİDERLİK TABLOSU</h2>
        </motion.div>

        <div className="w-full max-w-3xl space-y-4 relative">
           <div className="absolute -inset-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-[100px] z-0" />
           {players.sort((a,b) => b.balance - a.balance).map((player, idx) => (
             <motion.div 
               key={player.id}
               initial={{ x: -100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: idx * 0.1 }}
               className={`relative z-10 flex justify-between items-center p-8 rounded-[2.5rem] border backdrop-blur-xl ${idx === 0 ? "bg-yellow-500 text-slate-950 border-yellow-400 scale-110 shadow-3xl z-20" : "bg-white/5 border-white/10"}`}
             >
                <div className="flex items-center gap-6">
                   <span className={`text-4xl font-black italic ${idx === 0 ? 'text-slate-950/40' : 'text-slate-600'}`}>0{idx + 1}</span>
                   <div className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-2xl ${idx === 0 ? 'bg-slate-950 text-yellow-500' : 'bg-white/10'}`}>
                      {player.name[0].toUpperCase()}
                   </div>
                   <span className="text-3xl font-black tracking-tight">{player.name}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${idx === 0 ? 'text-slate-950/60' : 'text-slate-500'}`}>Toplam Bakiye</span>
                  <span className={`text-4xl font-black ${idx === 0 ? 'text-slate-950' : 'text-green-400'}`}>${player.balance.toLocaleString()}</span>
                </div>
             </motion.div>
           ))}
        </div>

        <button 
          onClick={() => window.location.reload()} 
          className="bg-white text-slate-950 px-12 py-5 rounded-full font-black text-xl hover:bg-pink-500 hover:text-white transition-all shadow-2xl relative z-10"
        >
          ANA MENÜYE DÖN
        </button>
      </div>
    );
  }

  return null;
}
