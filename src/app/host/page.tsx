"use client";

import { useEffect, useState } from "react";
import { getSocket } from "@/lib/socket";
import { motion, AnimatePresence } from "framer-motion";
import { QrCode, Users, Play, Timer, TrendingUp, Trophy, DollarSign, History, User } from "lucide-react";

interface Reaction {
  id: number;
  emoji: string;
  playerName: string;
}

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
  const [reactions, setReactions] = useState<Reaction[]>([]);
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

    socket.on("new-reaction", (reaction: Reaction) => {
      setReactions(prev => [...prev, reaction]);
      setTimeout(() => {
        setReactions(prev => prev.filter(r => r.id !== reaction.id));
      }, 4000); // Remove after animation ends
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
      socket.off("new-reaction");
    };
  }, [socket]);

  const startGame = () => {
    socket.emit("start-game", roomCode);
  };

  // Technical Header for Auction
  const TechnicalHeader = ({ roundNumber }: { roundNumber: number }) => (
    <>
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
        <div className="flex items-center gap-6">
          <h1 className="text-3xl font-black italic tracking-tighter flex items-center gap-2 text-white">
            TRASH<span className="text-rose-500">/</span>TREASURE
          </h1>
          <div className="h-6 w-[1px] bg-white/10" />
          <div className="flex items-center gap-3">
            <div className="bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.5)] px-3 py-1 rounded text-[10px] font-black tracking-[0.2em] text-white flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              CANLI MÜZAYEDE
            </div>
            <div className="bg-white/5 border border-white/10 px-3 py-1 rounded text-[10px] font-black tracking-[0.2em] text-slate-400">
              TUR {roundNumber}_5
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-end">
            <span className="text-[9px] font-black text-slate-500 tracking-[0.3em] uppercase mb-1">Durum</span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-green-500 tracking-widest">BAĞLI</span>
              <div className="w-1 h-1 bg-green-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .shiny-aura {
          animation: shiny-pulse 3s infinite ease-in-out;
        }
        @keyframes shiny-pulse {
          0% { box-shadow: 0 0 20px 0px rgba(236, 72, 153, 0.2); }
          50% { box-shadow: 0 0 60px 20px rgba(236, 72, 153, 0.4); }
          100% { box-shadow: 0 0 20px 0px rgba(236, 72, 153, 0.2); }
        }
      `}</style>

      {/* REACTION LAYER */}
      <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
        <AnimatePresence>
          {reactions.map((r) => (
            <motion.div
              key={r.id}
              initial={{ y: "110vh", x: `${Math.random() * 100}vw`, opacity: 0, scale: 0.5, rotate: Math.random() * 40 - 20 }}
              animate={{ y: "-10vh", opacity: [0, 1, 1, 0], scale: [0.5, 1.5, 1.5, 1], rotate: Math.random() * 360 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 4, ease: "easeOut" }}
              className="absolute flex flex-col items-center"
            >
              <span className="text-6xl filter drop-shadow-2xl">{r.emoji}</span>
              <span className="text-[10px] font-black bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-white uppercase tracking-tighter mt-2">{r.playerName}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
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
      <div className="h-screen bg-[#05060f] text-white flex flex-col p-6 pt-20 relative overflow-hidden font-mono">
        <TechnicalHeader roundNumber={round} />
        
        {/* Background Grid Ornament */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="grid grid-cols-12 gap-6 h-full flex-1 z-10">
          {/* LEFT SIDEBAR: SECURE CHANNEL */}
          <div className="col-span-3 flex flex-col gap-6">
            {/* Room Code Digital Box */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-1 h-full bg-rose-500 opacity-50" />
               <span className="text-[9px] font-black text-slate-500 tracking-[0.4em] uppercase mb-4 block">Güvenli Kanal</span>
               <div className="text-6xl font-black tracking-widest text-white leading-none mb-1">{roomCode}</div>
               <div className="flex items-center gap-2 mt-4 text-green-500/70">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Şifreli Bağlantı</span>
               </div>
            </div>

            {/* Players List */}
            <div className="flex-1 flex flex-col min-h-0">
               <div className="flex items-center justify-between mb-4 px-2">
                  <span className="text-[10px] font-black text-slate-400 tracking-[0.3em] uppercase">Aktif Teklifçiler ({players.length})</span>
               </div>
               <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-2">
                  <AnimatePresence mode="popLayout">
                    {players.sort((a,b) => b.balance - a.balance).map((player) => {
                      const isLeading = player.name === highestBidder;
                      return (
                        <motion.div 
                          key={player.id}
                          layout
                          className={`p-3 rounded-lg border flex items-center gap-4 transition-all ${isLeading ? 'bg-rose-500/10 border-rose-500/50 shadow-[0_0_20px_rgba(244,63,94,0.1)]' : 'bg-white/5 border-white/5'}`}
                        >
                          <div className={`w-10 h-10 rounded flex items-center justify-center font-black text-lg ${isLeading ? 'bg-rose-500 text-white' : 'bg-white/10 text-slate-400'}`}>
                             {player.name[0].toUpperCase()}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                               <p className="font-black text-sm truncate uppercase tracking-tighter">{player.name}</p>
                               {isLeading && (
                                 <div className="flex gap-0.5 items-end h-3">
                                   {[...Array(3)].map((_, i) => (
                                     <motion.div 
                                       key={i} 
                                       animate={{ height: [2, 10, 2] }} 
                                       transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.15 }}
                                       className="w-1 bg-rose-500 rounded-full" 
                                     />
                                   ))}
                                 </div>
                               )}
                            </div>
                            <p className={`text-[11px] font-bold ${isLeading ? 'text-rose-400' : 'text-green-500'}`}>${player.balance.toLocaleString()}</p>
                          </div>
                        </motion.div>
                      )
                    })}
                  </AnimatePresence>
               </div>
            </div>
          </div>

          {/* CENTER: TECHNICAL AUCTION HUB */}
          <div className="col-span-6 flex flex-col items-center justify-center relative">
            {/* Visual Echo Rings */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 overflow-hidden pointer-events-none">
               {[...Array(3)].map((_, i) => (
                 <motion.div
                   key={i}
                   initial={{ scale: 0.5, opacity: 0 }}
                   animate={{ scale: [0.5, 2], opacity: [0, 0.1, 0] }}
                   transition={{ repeat: Infinity, duration: 4, delay: i * 1.3 }}
                   className="absolute w-[600px] h-[600px] border border-white/5 rounded-full"
                 />
               ))}
               <div className="w-[80%] h-[80%] bg-[radial-gradient(circle,_rgba(244,63,94,0.05)_0%,_transparent_70%)]" />
            </div>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              className="w-full flex flex-col items-center gap-6"
            >
              {/* Voltage Meter (Gerilim Sayacı) */}
              {gameState === "BIDDING" && (
                <div className="w-full max-w-lg h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                   <motion.div 
                     initial={{ width: "100%" }}
                     animate={{ 
                       width: `${(timeLeft / 30) * 100}%`,
                       backgroundColor: timeLeft <= 5 ? "#f43f5e" : timeLeft <= 15 ? "#f59e0b" : "#10b981",
                       boxShadow: timeLeft <= 5 ? "0 0 20px #f43f5e" : "none"
                     }}
                     transition={{ duration: 1, ease: "linear" }}
                     className={`h-full ${timeLeft <= 5 ? 'animate-pulse' : ''}`}
                   />
                </div>
              )}

              {/* Item Card Container */}
              <div className="relative pt-20">
                 {/* Item ID Tag */}
                 <div className="absolute top-0 right-0 text-right">
                    <span className="text-[8px] font-black text-slate-500 tracking-[0.4em] uppercase mb-1 block">Ürün_Kimliği</span>
                    <span className="text-2xl font-black tracking-widest text-white italic leading-none">{currentItem?.name.replace(/\s+/g, '_').toUpperCase()}</span>
                    <span className="text-[8px] font-bold text-slate-600 tracking-wider block mt-1 uppercase">Sürüm // Holo</span>
                 </div>
                 
                 {/* Central Image with Enhanced Spotlight */}
                 <div className="relative group">
                    {/* Multi-layer Spotlight Effect */}
                    <div className="absolute inset-0 bg-rose-600/25 blur-[100px] rounded-full scale-150 animate-pulse pointer-events-none" />
                    <div className="absolute inset-0 bg-white/5 blur-[40px] rounded-full scale-110 pointer-events-none" />
                    
                    <div className="relative w-64 h-64 flex items-center justify-center p-4">
                       {/* Technical Corner Frame */}
                       <div className="absolute -inset-1 border border-white/10 rounded-lg pointer-events-none" />
                       <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-rose-500 rounded-tl-sm" />
                       <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-rose-500 rounded-br-sm" />
                       
                       <motion.img
                         layoutId="item-image"
                         src={currentItem?.imageUrl}
                         className="w-full h-full object-contain filter drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)] relative z-10"
                       />
                    </div>
                 </div>
              </div>

              {/* ITEM DESCRIPTION TECHNICAL BOX */}
              <div className="max-w-md w-full bg-white/5 border border-white/10 px-4 py-2 rounded-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-2">
                    <div className="flex gap-0.5">
                       <div className="w-1 h-1 bg-rose-500 rounded-full" />
                       <div className="w-1 h-1 bg-rose-500/30 rounded-full" />
                    </div>
                 </div>
                 <span className="text-[8px] font-black text-slate-500 tracking-[0.3em] uppercase mb-1 block italic">Bilgi_Akışı // Description</span>
                 <p className="text-slate-300 text-[13px] font-medium leading-tight tracking-tight">
                    {currentItem?.description}
                 </p>
              </div>

              {/* MASSIVE BID DISPLAY */}
              <div className="flex flex-col items-center relative py-2">
                 <div className="flex flex-col items-center gap-2 mb-4">
                    <div className="flex items-center gap-3">
                       <div className="h-[1px] w-8 bg-rose-500" />
                       <span className="text-[10px] font-black text-rose-500 tracking-[0.5em] uppercase px-4">Güncel en yüksek teklif</span>
                       <div className="h-[1px] w-8 bg-rose-500" />
                    </div>
                 </div>

                 <div className="flex items-baseline gap-4 relative">
                    <span className="text-6xl font-black text-rose-500 italic">$</span>
                    <motion.span 
                      key={currentBid}
                      initial={{ scale: 0.9, opacity: 0.8 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-[10rem] font-black tracking-[-0.05em] leading-none text-white drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
                    >
                      {currentBid.toLocaleString()}
                    </motion.span>
                    
                    {/* Scanline overlay for bid */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-1/2 pointer-events-none animate-scan opacity-20" />
                 </div>

                 <div className="mt-8 flex items-center gap-4">
                    <div className="w-3 h-3 bg-rose-500" />
                    <span className="text-[10px] font-black text-slate-500 tracking-[0.4em] uppercase">En Yüksek Teklifçi:</span>
                    <span className="text-xl font-black tracking-widest text-white uppercase italic">{highestBidder || "VERİ_YOK"}</span>
                 </div>
              </div>
            </motion.div>

            {gameState === "INTEL_PHASE" && (
              <div className="absolute inset-0 backdrop-blur-3xl bg-[#05060f]/80 flex flex-col items-center justify-center text-center p-12 z-50">
                 <div className="relative mb-12">
                   <div className="w-32 h-32 rounded-full border border-rose-500/20" />
                   <motion.div 
                     animate={{ rotate: 360 }} 
                     transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                     className="absolute inset-0 border-t-2 border-rose-500 rounded-full" 
                   />
                 </div>
                 <h3 className="text-5xl font-black italic text-rose-500 tracking-tighter uppercase mb-4">İstihbarat Toplanıyor</h3>
                 <div className="flex flex-col gap-2">
                    <span className="text-white/40 text-xs font-black tracking-[0.8em] uppercase">Hazırlanın</span>
                    <div className="flex gap-1 justify-center">
                       {[...Array(24)].map((_, i) => (
                         <div key={i} className="w-1 h-3 bg-rose-500/20" />
                       ))}
                    </div>
                 </div>
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR: LIVE FEED */}
          <div className="col-span-3 flex flex-col gap-6 overflow-hidden">
            <div className="flex-1 bg-white/5 border border-white/5 rounded-xl flex flex-col overflow-hidden">
               <div className="p-4 border-b border-white/5 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-3">
                     <div className="flex flex-col gap-0.5">
                        <div className="h-0.5 w-4 bg-green-500" />
                        <div className="h-0.5 w-3 bg-green-500" />
                     </div>
                     <span className="text-[10px] font-black text-slate-400 tracking-[0.3em] uppercase">CANLI AKIŞ</span>
                  </div>
                  <span className="text-[8px] font-black text-slate-600 tracking-widest uppercase">ŞİFRELEME: AES-255</span>
               </div>
               
               <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                  <AnimatePresence mode="popLayout">
                    {bidHistory.length > 0 ? (
                      bidHistory.map((bid, idx) => (
                        <motion.div 
                          key={`${bid.playerName}-${bid.totalBid}`}
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          className={`flex flex-col gap-2 ${idx === 0 ? 'opacity-100' : 'opacity-40'}`}
                        >
                          <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                             <div className="flex items-center gap-2">
                                <span className={`w-1 h-1 rounded-full ${idx === 0 ? 'bg-rose-500 animate-pulse' : 'bg-slate-700'}`} />
                                {bid.playerName}
                             </div>
                             <span>{bid.timestamp}</span>
                          </div>
                          <div className={`p-4 rounded border ${idx === 0 ? 'bg-rose-500 border-rose-400 text-white' : 'bg-white/5 border-white/5 text-slate-300'}`}>
                             <div className="flex justify-between items-end">
                                <span className={`text-[10px] font-black ${idx === 0 ? 'text-white' : 'text-slate-500'} uppercase tracking-widest`}>TEKLİF_DEĞERİ</span>
                                <span className="text-[10px] font-black uppercase text-green-400">+{bid.amount} Artırış</span>
                             </div>
                             <div className="text-3xl font-black italic tracking-tighter leading-none mt-1">
                                ${bid.totalBid.toLocaleString()}
                             </div>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center opacity-20 text-center gap-4">
                         <div className="w-12 h-[1px] bg-slate-500" />
                         <p className="text-[10px] font-black uppercase tracking-[0.5em] italic">Hareket Tespit Edilmedi</p>
                         <div className="w-12 h-[1px] bg-slate-500" />
                      </div>
                    )}
                  </AnimatePresence>
               </div>
            </div>

            {/* Price Estimator Compact */}
            <div className="bg-white/5 border border-white/5 p-6 rounded-xl shrink-0 space-y-4">
               <div className="flex justify-between items-center text-[9px] font-black text-slate-500 tracking-[0.3em] uppercase">
                  <span>PİYASA_TAHMİNLERİ</span>
                  <div className="flex gap-1">
                     <div className="w-1 h-1 bg-blue-500/30 rounded-full" />
                     <div className="w-1 h-1 bg-blue-500/10 rounded-full" />
                  </div>
               </div>
               <div className="flex flex-col gap-1">
                  <span className="text-xl font-black italic tracking-tight leading-none text-slate-500/70">
                    <span className="text-slate-700 font-normal mr-2">?</span>
                    ${currentItem?.estimateRange?.[0]?.toLocaleString()} - ${currentItem?.estimateRange?.[1]?.toLocaleString()}
                  </span>
                  <p className="text-[7px] font-black text-slate-700 tracking-wider flex items-center gap-2">
                     <span className="text-rose-500/50">SİSTEM_NOTU:</span> PİYASA OYNAKLIĞI BEKLENİYOR
                  </p>
               </div>
            </div>

            {/* Timer Strip */}
            <div className="bg-rose-500/10 border border-rose-500/20 p-4 rounded-xl flex items-center justify-between shrink-0">
               <span className="text-[10px] font-black text-rose-500 tracking-[0.4em] uppercase italic">SİSTEM_SÜRESİ</span>
               <div className={`text-3xl font-black font-mono leading-none ${timeLeft <= 5 ? 'text-rose-500 animate-pulse' : 'text-white'}`}>
                  {timeLeft}s
               </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes scan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(400%); }
          }
          .animate-scan {
            animation: scan 3s linear infinite;
          }
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.1);
          }
        `}</style>
      </div>
    );
  }

  if (gameState === "REVEAL") {
    const isWin = revealData?.profit > 0;
    const item = currentItem;

    // Calculate dynamic badges based on profit margin
    const profitRatio = revealData.realValue > 0 ? (revealData.profit / revealData.price) : 0;
    let successBadge = "TEBRİKLER!";
    let badgeColor = "bg-green-500/20 text-green-400 border-green-500/30";
    
    if (profitRatio > 1) { successBadge = "EFSANEVİ VURGUN! 🔥"; badgeColor = "bg-orange-500/20 text-orange-400 border-orange-500/30"; }
    else if (profitRatio > 0.5) { successBadge = "MÜKEMMEL KAZANÇ! ✨"; badgeColor = "bg-yellow-500/20 text-yellow-500 border-yellow-500/30"; }
    else if (profitRatio < -0.5) { successBadge = "BÜYÜK KAYIP! 💀"; badgeColor = "bg-red-500/20 text-red-400 border-red-500/30"; }
    else if (profitRatio < 0) { successBadge = "KAZIKLANDI! 🤡"; badgeColor = "bg-rose-500/20 text-rose-400 border-rose-500/30"; }

    return (
      <div className="h-screen bg-[#05060f] text-white flex flex-col p-8 relative overflow-hidden font-sans">
        {/* CINEMATIC EFFECTS LAYER */}
        
        {/* 1. Particle System (Profit) */}
        {isWin && (
           <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: "70%", 
                    y: "70%", 
                    scale: 0,
                    opacity: 1
                  }}
                  animate={{ 
                    x: `${60 + (Math.random() - 0.5) * 60}%`, 
                    y: `${60 + (Math.random() - 0.5) * 60}%`,
                    scale: [0, 1.5, 0],
                    opacity: [1, 1, 0]
                  }}
                  transition={{ 
                    duration: 2 + Math.random() * 2,
                    delay: 1 + Math.random() * 0.5,
                    ease: "easeOut"
                  }}
                  className="absolute w-2 h-2 rounded-full bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.8)]"
                />
              ))}
           </div>
        )}

        {/* 2. Cracked Screen Overlay (Loss) */}
        {!isWin && (
           <motion.div 
             initial={{ opacity: 0, scale: 1.2 }}
             animate={{ opacity: [0, 1, 0.4, 0] }}
             transition={{ duration: 0.8, delay: 1, times: [0, 0.1, 0.5, 1] }}
             className="absolute inset-0 z-[60] pointer-events-none mix-blend-screen opacity-50"
           >
              <svg viewBox="0 0 1000 1000" className="w-full h-full text-red-500/50">
                <path d="M500 500 L800 200 M500 500 L200 800 M500 500 L900 600 M500 500 L100 300 M500 500 L600 900" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M400 450 L450 400 L550 420 L580 500 L500 580 L420 550 Z" stroke="currentColor" strokeWidth="3" fill="none" />
                {[...Array(5)].map((_, i) => (
                   <circle key={i} cx={500 + (Math.random()-0.5)*100} cy={500 + (Math.random()-0.5)*100} r={Math.random()*40} stroke="currentColor" strokeWidth="1" fill="none" />
                ))}
              </svg>
           </motion.div>
        )}

        {/* 3. Scanline Effect (Profit) */}
        {isWin && (
           <motion.div 
             initial={{ top: "-100%" }}
             animate={{ top: "200%" }}
             transition={{ duration: 1.5, delay: 1.2, ease: "linear" }}
             className="absolute left-0 right-0 h-[30vh] z-50 pointer-events-none bg-gradient-to-b from-transparent via-green-400/10 to-transparent"
           />
        )}

        {/* Mockup Header Style */}
        <div className="flex justify-between items-center w-full px-4 mb-4 z-20">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center font-black italic text-xs">T/T</div>
             <span className="font-black italic tracking-tighter text-sm uppercase">Trash <span className="text-pink-500">or</span> Treasure</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
             <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">Canlı Sonuçlar</span>
          </div>
        </div>

        {/* Dynamic Background Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <motion.div 
             animate={{ 
               scale: [1, 1.2, 1],
               opacity: isWin ? [0.2, 0.4, 0.2] : [0.1, 0.2, 0.1]
             }}
             transition={{ repeat: Infinity, duration: 3 }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[180px] transition-all duration-1000"
             style={{ backgroundColor: isWin ? (item?.rarityColor || '#22c55e') : '#ef4444' }}
           />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-start gap-4 w-full max-w-4xl mx-auto pt-4">
          
          {/* Item Card Section */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative group shrink-0"
          >
            {/* Ambient Rarity Glow */}
            <div 
              className="absolute -inset-10 blur-[100px] opacity-10 animate-pulse pointer-events-none"
              style={{ backgroundColor: item?.rarityColor || '#64748b' }}
            />
            
            <div className="relative overflow-visible">
               {/* SOLD! Sticker */}
               <motion.div 
                 initial={{ rotate: 15, x: 20, opacity: 0 }}
                 animate={{ rotate: -15, x: 0, opacity: 1 }}
                 transition={{ delay: 0.5, type: 'spring' }}
                 className="absolute -top-4 -right-8 z-30 bg-[#22c55e] text-[#05060f] px-6 py-2 rounded-lg font-black italic text-2xl shadow-2xl skew-x-[-10deg] border-2 border-white/20"
               >
                 SATILDI!
               </motion.div>

               {/* Item Image Container */}
               <div className={`w-72 h-72 rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-3xl bg-slate-900 relative`}>
                  <img src={item?.imageUrl} alt={item?.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05060f]/90 via-transparent to-transparent" />
                  
                  {/* Shiny Label */}
                  {item?.isShiny && (
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1], rotate: [-15, -10, -15] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute top-4 left-4 z-30 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full font-black text-[10px] tracking-widest italic shadow-lg border border-white/20"
                    >
                      IŞILTILI ✨
                    </motion.div>
                  )}

                  {/* Item Name & Description Overlay */}
                  <div className="absolute bottom-5 left-0 right-0 text-center px-6">
                     <h2 className="text-xl font-black italic tracking-tighter uppercase leading-tight drop-shadow-lg">{item?.name}</h2>
                     <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wide line-clamp-1 mt-0.5 opacity-80">{item?.description}</p>
                     
                     {/* Rarity Label & Stars */}
                     <div className="flex flex-col items-center gap-0.5 mt-1.5">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: item?.rarityColor || '#fff' }}>
                           {item?.rarity === 'LEGENDARY' ? 'EFSANEVİ' : item?.rarity === 'RARE' ? 'NADİR' : item?.rarity === 'COMMON' ? 'YAYGIN' : 'ÇÖP'}
                        </span>
                        <div className="flex justify-center gap-1">
                           {[...Array(item?.rarity === 'LEGENDARY' ? 3 : item?.rarity === 'RARE' ? 2 : 1)].map((_, i) => (
                              <span key={i} className="text-yellow-500 text-[10px] shadow-sm">★</span>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Winner Section */}
          <div className="flex flex-col items-center gap-2 w-full shrink-0">
             <span className="text-[10px] font-black text-green-500 bg-green-500/10 px-4 py-1 rounded-full uppercase tracking-[0.2em] leading-none">Müzayede Sahibi</span>
             
             <motion.div 
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.8 }}
               className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full pl-2 pr-12 py-2 flex items-center gap-4 shadow-2xl min-w-[280px]"
             >
                <div className="w-10 h-10 rounded-full border-2 border-green-500 p-0.5 overflow-hidden flex-shrink-0">
                   <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center font-black text-lg italic text-green-400">
                      {revealData.winner[0]}
                   </div>
                </div>
                <div className="flex flex-col">
                   <h3 className="text-3xl font-black italic tracking-tighter uppercase leading-none text-white drop-shadow-md">
                     {revealData.winner}
                   </h3>
                </div>
             </motion.div>
          </div>

          {/* Financial Stats Panel - Overhauled for Space */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={!isWin ? { 
              y: 0, 
              opacity: 1,
              x: [0, -5, 5, -5, 5, 0] 
            } : { y: 0, opacity: 1 }}
            transition={!isWin ? {
               delay: 1,
               x: { duration: 0.4, delay: 1.1 }
            } : { delay: 1 }}
            className="w-full bg-[#0d0e1b] rounded-[2.5rem] border border-white/5 relative overflow-hidden shadow-3xl shrink-0"
            style={{ 
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          >
             <div className="p-8 grid grid-cols-2 gap-8 items-center">
                {/* Left Side: Detail Column */}
                <div className="flex flex-col gap-4 border-r border-white/5 pr-8">
                   <div className="flex flex-col">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Ödenen Fiyat</span>
                      <span className="text-2xl font-black italic tracking-tighter leading-none">${revealData.price.toLocaleString()}</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 text-pink-500">Tahmini Aralık</span>
                      <span className="text-xl font-black italic tracking-tighter text-pink-500/80 leading-none">
                        ${item?.estimateRange?.[0]?.toLocaleString()}-${item?.estimateRange?.[1]?.toLocaleString()}
                      </span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 text-blue-400">Gerçek Değer</span>
                      <span className="text-3xl font-black italic tracking-tighter text-blue-400 opacity-80 leading-none">${revealData.realValue.toLocaleString()}</span>
                   </div>
                </div>

                {/* Right Side: Big Result */}
                <div className="flex flex-col items-center justify-center relative pl-4">
                   <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 leading-none">Toplam Kar/Zarar</span>
                   
                   <div className="flex items-center gap-3 relative justify-center w-full">
                      {/* Localized Particle System Anchor */}
                      {isWin && (
                         <div className="absolute inset-0 pointer-events-none z-0">
                            {[...Array(15)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ x: "50%", y: "50%", scale: 0, opacity: 1 }}
                                animate={{ 
                                  x: `${50 + (Math.random() - 0.5) * 300}%`, 
                                  y: `${50 + (Math.random() - 0.5) * 300}%`,
                                  scale: [0, 1.2, 0],
                                  opacity: [1, 1, 0]
                                }}
                                transition={{ 
                                  duration: 1.5 + Math.random(),
                                  delay: 1.1 + Math.random() * 0.2,
                                  ease: "easeOut"
                                }}
                                className="absolute w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]"
                              />
                            ))}
                         </div>
                      )}

                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={isWin ? {
                           type: "spring",
                           stiffness: 400,
                           damping: 12,
                           delay: 1.1
                        } : {
                           type: "tween",
                           duration: 0.15,
                           delay: 1.05
                        }}
                        className={`font-black italic tracking-tighter tabular-nums leading-none z-10 text-center ${isWin ? 'text-[#22c55e]' : 'text-rose-500'} ${Math.abs(revealData.profit) > 99999 ? 'text-6xl' : 'text-7xl'}`}
                        style={{ textShadow: isWin ? '0 0 30px rgba(34,197,94,0.3)' : '0 0 30px rgba(244,63,94,0.3)' }}
                      >
                        ${Math.abs(revealData.profit).toLocaleString()}
                        {!isWin && (
                           <motion.div 
                             initial={{ opacity: 0 }}
                             animate={{ opacity: [0, 1, 0] }}
                             transition={{ duration: 0.3, delay: 1.1 }}
                             className="absolute inset-0 bg-red-500/10 blur-2xl rounded-full"
                           />
                        )}
                      </motion.div>
                      {isWin && (
                        <div className="flex flex-col gap-1">
                           <motion.span animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="text-green-500 font-bold text-2xl">✦</motion.span>
                           <motion.span animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.5 }} className="text-green-400 font-bold text-xl">✦</motion.span>
                        </div>
                      )}
                      {!isWin && (
                         <div className="flex flex-col gap-1 items-center">
                            <motion.span 
                              animate={{ opacity: [1, 0, 1] }} 
                              transition={{ repeat: Infinity, duration: 0.1 }}
                              className="text-red-500 text-2xl font-black"
                            >
                              !
                            </motion.span>
                         </div>
                      )}
                   </div>
                   
                   {/* Dynamic Success Badge */}
                   <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 1.4 }}
                     className={`mt-4 px-6 py-2 rounded-full font-black italic text-xs tracking-widest uppercase border ${badgeColor} shadow-lg`}
                   >
                      {successBadge}
                   </motion.div>
                </div>
             </div>
          </motion.div>

          {/* Footer Navigation Tracker */}
          <div className="w-full flex justify-center mt-2">
             <div className="flex items-center gap-6 bg-[#0d0e1b] px-8 py-3 rounded-full border border-white/5">
                <div className="flex flex-col">
                   <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest">Oylama Durumu</span>
                   <span className="text-sm font-black italic uppercase leading-none">
                      {readyTotal.ready === readyTotal.total && readyTotal.total > 0 ? "HAZIRLAR!" : "OYUNCULAR BEKLENİYOR"}
                   </span>
                </div>
                <div className="flex -space-x-2">
                   {players.map((p) => (
                      <div 
                         key={p.id} 
                         className={`w-8 h-8 rounded-full border-2 border-[#05060f] flex items-center justify-center font-black text-[10px] transition-all duration-500 ${readyPlayers.includes(p.id) ? 'bg-green-500 scale-110 shadow-[0_0_10px_rgba(34,197,94,0.4)]' : 'bg-slate-800 text-slate-600'}`}
                      >
                         {p.name[0]}
                      </div>
                   ))}
                </div>
                <div className="h-6 w-[1px] bg-white/5" />
                <div className="text-xl font-black italic tabular-nums">
                   <span className="text-green-500">{readyTotal.ready}</span><span className="text-white/20">/</span><span className="text-slate-500">{readyTotal.total}</span>
                </div>
             </div>
          </div>

        </div>

        {/* Global UI Styles for v3 */}
        <style jsx global>{`
          .shadow-3xl {
            box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.8);
          }
          @keyframes glow-pulse {
            0% { opacity: 0.1; }
            50% { opacity: 0.3; }
            100% { opacity: 0.1; }
          }
          .animate-pulse {
            animation: glow-pulse 2s infinite ease-in-out;
          }
        `}</style>
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
