"use client";

import { useState, useEffect } from "react";
import { getSocket } from "@/lib/socket";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Target, Info, Zap, DollarSign, Settings, AlertCircle, Clock } from "lucide-react";

export default function PlayerPage() {
  const [roomCode, setRoomCode] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const [error, setError] = useState("");
  const [gameState, setGameState] = useState("LOBBY");
  const [intel, setIntel] = useState("");
  const [balance, setBalance] = useState(5000);
  const [currentBid, setCurrentBid] = useState(0);
  const [highestBidder, setHighestBidder] = useState("");
  const [feedback, setFeedback] = useState<"leading" | "outbid" | null>(null);
  const [readyPlayers, setReadyPlayers] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const socket = getSocket();

  useEffect(() => {
    socket.on("room-joined", () => {
      setIsJoined(true);
    });

    socket.on("timer-update", (time) => {
      setTimeLeft(time);
    });

    socket.on("receive-intel", (data) => {
      setIntel(data);
      setGameState("INTEL_PHASE");
      setCurrentBid(0);
      setHighestBidder("");
      setFeedback(null);
      setIsReady(false);
      setReadyPlayers([]);
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
        setTimeout(() => setFeedback(null), 500);
      } else if (isOutbid) {
        setFeedback("outbid");
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
        setBalance((prev) => prev - data.price);
      }
      setFeedback(null);
      setIsReady(false);
    });

    socket.on("ready-update", ({ readyPlayers }) => {
      setReadyPlayers(readyPlayers);
    });

    socket.on("game-over", (players) => {
      setGameState("GAME_OVER");
      const me = players.find((p: any) => p.name === playerName);
      if (me) setBalance(me.balance);
    });

    socket.on("error-msg", (msg) => {
      setError(msg);
    });

    return () => {
      socket.off("receive-intel");
      socket.off("bidding-started");
      socket.off("bid-updated");
      socket.off("item-sold");
      socket.off("ready-update");
      socket.off("game-over");
      socket.off("error-msg");
    };
  }, [socket, playerName]);

  const joinRoom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!roomCode || !playerName) return;
    socket.emit("join-room", { roomCode: roomCode.toUpperCase(), playerName });
    setIsJoined(true); 
  };

  const placeBid = (amount: number) => {
    socket.emit("place-bid", { roomCode: roomCode.toUpperCase(), amount });
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
      <div className="p-6 bg-slate-900/50 backdrop-blur-xl flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-pink-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-pink-500/20">
            <span className="font-black text-xl italic">{playerName[0]?.toUpperCase()}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">OYUNCU</span>
            <span className="text-xl font-black italic text-white leading-none">
              ${balance.toLocaleString()}
            </span>
          </div>
        </div>
        <button className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 active:scale-95 transition-transform border border-white/10">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 flex flex-col">
        
        <AnimatePresence mode="wait">
          {gameState === "LOBBY" && (
            <motion.div 
              key="lobby"
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="flex-1 flex flex-col items-center justify-center text-center space-y-4"
            >
              <Target className="w-16 h-16 text-slate-200" />
              <h2 className="text-lg font-black text-slate-300 uppercase tracking-[0.2em]">Müzayede Bekleniyor...</h2>
            </motion.div>
          )}

          {gameState === "BIDDING" && (
             <div className="space-y-6 flex flex-col h-full">
                {/* 2. STATUS BANNER (Dynamic LED style) */}
                <motion.div
                   initial={{ scale: 0.9, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   className={`relative overflow-hidden p-6 rounded-[2rem] border-2 flex items-center justify-between shadow-xl transition-all duration-300 ${highestBidder === playerName ? 'bg-green-500/10 border-green-500/30' : highestBidder ? 'bg-red-500/10 border-red-500/30' : 'bg-white/5 border-white/10'}`}
                >
                   <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${highestBidder === playerName ? 'bg-green-500' : highestBidder ? 'bg-red-500' : 'bg-slate-700'}`}>
                         {highestBidder === playerName ? <Zap className="w-6 h-6 fill-current" /> : highestBidder ? <AlertCircle className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
                      </div>
                      <div className="flex flex-col">
                         <h3 className={`font-black italic text-2xl leading-none ${highestBidder === playerName ? 'text-green-400' : highestBidder ? 'text-red-400' : 'text-slate-200'}`}>
                            {highestBidder === playerName ? "LİDERSİN!" : highestBidder ? "GEÇİLDİN!" : "TEKLİF VER!"}
                         </h3>
                         <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                            {highestBidder === playerName ? "En yüksek teklif senin." : highestBidder ? "Biri daha fazla teklif verdi." : "Müzayede başladı."}
                         </span>
                      </div>
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 leading-none">TEKLİF</p>
                      <p className="text-3xl font-black italic text-white leading-none">${currentBid.toLocaleString()}</p>
                   </div>
                </motion.div>

                {/* 3. SECRET INTEL (Confidential Card) style adjusted for dark theme */}
                <div className="relative group flex-1 min-h-[250px]">
                   {/* Card Folder Tab */}
                   <div className="absolute top-[-12px] left-6 w-24 h-6 bg-[#2D2A10] rounded-t-xl border-x-2 border-t-2 border-yellow-900/40" />
                   
                   <div className="h-full bg-gradient-to-br from-[#1E1C0A] to-[#121106] rounded-[2.5rem] p-10 shadow-2xl border-2 border-yellow-900/30 relative overflow-hidden flex flex-col">
                      {/* Background Watermark/Stripe */}
                      <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FFD700 0, #FFD700 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />
                      
                      {/* Confidential Header */}
                      <div className="flex items-center gap-2 mb-6 text-yellow-500/40">
                         <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                         <span className="text-[10px] font-black uppercase tracking-[0.4em]">GİZLİ İSTİHBARAT</span>
                      </div>

                      {/* Confidential Text */}
                      <div className="relative flex-1">
                         {/* Slanted "CONFIDENTIAL" Stamp */}
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 pointer-events-none whitespace-nowrap">
                            <span className="text-[5rem] font-black text-yellow-500/5 border-8 border-yellow-500/5 px-8 rounded-3xl uppercase tracking-tighter select-none">
                               GİZLİDİR
                            </span>
                         </div>

                         <div className="flex flex-col gap-4 font-mono">
                            <p className="text-xs bg-white/5 self-start px-2 py-0.5 rounded text-yellow-500/50">ID: #SYS_{roomCode}</p>
                            <div className="h-[2px] w-12 bg-yellow-500/20" />
                            <p className="text-lg font-bold text-yellow-100 leading-relaxed italic opacity-80">
                               "{intel || "Müzayede hakkında kritik bir sızıntı bekleniyor..."}"
                            </p>
                         </div>
                      </div>

                      {/* Footer Info */}
                      <div className="mt-6 flex justify-between items-end border-t border-yellow-500/10 pt-4">
                         <div className="flex flex-col">
                            <span className="text-[8px] font-black text-yellow-500/20 uppercase tracking-widest">INTEL_REL_99X</span>
                            <span className="text-[8px] font-black text-yellow-500/20 uppercase tracking-widest">ENCRYPTED_SIG: OK</span>
                         </div>
                         <div className="text-right">
                            <span className="text-[9px] font-black text-yellow-500/40 uppercase tracking-widest">KAPALI DOSYA</span>
                         </div>
                      </div>
                   </div>
                </div>

                {/* 4. QUICK BID ACTIONS - Dark Style */}
                <div className="mt-auto pt-6 border-t border-white/5">
                   <div className="flex justify-between items-center mb-6 px-2">
                       <span className="text-xs font-black text-slate-500 uppercase tracking-widest">HIZLI TEKLİF</span>
                       <div className="flex items-center gap-2 text-pink-500">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="text-xs font-black uppercase tracking-widest">KALAN SÜRE: {timeLeft}S</span>
                       </div>
                   </div>

                   <div className="grid grid-cols-3 gap-5">
                      {/* SAFE Button */}
                      <motion.button
                         whileTap={{ scale: 0.95 }}
                         onClick={() => placeBid(10)}
                         disabled={balance < currentBid + 10}
                         className="h-28 bg-white/5 border border-white/10 rounded-[2rem] flex flex-col items-center justify-center gap-1 shadow-sm active:bg-white/10 transition-colors disabled:opacity-20 group text-slate-300"
                      >
                         <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">GÜVENLİ</span>
                         <span className="text-2xl font-black leading-none">+10</span>
                      </motion.button>

                      {/* RAISE Button */}
                      <motion.button
                         whileTap={{ scale: 0.95 }}
                         onClick={() => placeBid(50)}
                         disabled={balance < currentBid + 50}
                         className="h-28 bg-blue-500/10 border-2 border-blue-500/30 rounded-[2rem] flex flex-col items-center justify-center gap-1 shadow-lg shadow-blue-500/5 active:scale-105 transition-all disabled:opacity-20 text-blue-400"
                      >
                         <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">ARTIR</span>
                         <span className="text-3xl font-black leading-none">+50</span>
                      </motion.button>

                      {/* AGGRESSIVE Button */}
                      <motion.button
                         whileTap={{ scale: 0.95 }}
                         onClick={() => placeBid(100)}
                         disabled={balance < currentBid + 100}
                         className="h-28 bg-gradient-to-br from-pink-600 to-purple-700 rounded-[2rem] flex flex-col items-center justify-center gap-1 shadow-xl shadow-pink-500/20 active:scale-105 transition-all text-white disabled:opacity-20 relative overflow-hidden"
                      >
                         <div className="absolute top-2 right-3 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
                         <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">AGRESİF</span>
                         <span className="text-3xl font-black leading-none">+100</span>
                      </motion.button>
                   </div>

                   <p className="text-center text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-8 leading-relaxed opacity-60">
                      Teklifler anında cüzdanınızdan düşülür.<br/>İadesi yoktur.
                   </p>
                </div>
             </div>
          )}

          {gameState === "REVEAL" && (
            <div className="flex-1 flex flex-col justify-center gap-8">
               <div className="bg-white/5 rounded-[2.5rem] p-10 border border-white/10 shadow-2xl text-center space-y-6 backdrop-blur-md">
                  <div className="w-20 h-20 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto text-pink-500 border border-pink-500/20">
                     <Clock className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-2">Hazırlan</h3>
                    <p className="text-2xl font-black italic text-white leading-tight uppercase">HERKES ONAYLAYINCA YENİ TUR BAŞLAR.</p>
                  </div>
                  
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={readyUp}
                    disabled={isReady}
                    className={`w-full py-6 rounded-[2rem] font-black text-xl transition-all shadow-xl ${isReady ? 'bg-green-500 text-white opacity-50' : 'bg-pink-600 text-white active:bg-pink-700 shadow-pink-500/20'}`}
                  >
                    {isReady ? "HAZIRSIN! ✓" : "SONRAKİ TUR"}
                  </motion.button>
               </div>
               
               <div className="text-center">
                  <div className="flex justify-center -space-x-2">
                     {readyPlayers.map((id, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-green-500 border-2 border-slate-950 shadow-md animate-bounce" />
                     ))}
                  </div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mt-3">{readyPlayers.length} / {readyPlayers.length} HAZIR</p>
               </div>
            </div>
          )}

          {gameState === "GAME_OVER" && (
            <motion.div 
              key="over"
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }}
              className="flex-1 flex flex-col items-center justify-center text-center space-y-6"
            >
              <div className="text-8xl animate-bounce">🏆</div>
              <div className="space-y-2">
                <h2 className="text-4xl font-black italic text-white uppercase tracking-tighter">OYUN BİTTİ</h2>
                <div className="h-1 w-20 bg-pink-500 mx-auto" />
              </div>
              <p className="text-2xl font-black text-green-400 bg-green-500/10 px-8 py-3 rounded-2xl border border-green-500/20">FİNAL SKOR: ${balance.toLocaleString()}</p>
            </motion.div>
          )}

          {gameState === "INTEL_PHASE" && (
             <div className="flex-1 flex flex-col items-center justify-center p-12 text-center space-y-8 animate-pulse text-slate-500">
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center text-slate-700 border border-white/5">
                   <Target className="w-12 h-12" />
                </div>
                <div className="space-y-4">
                   <p className="text-[10px] font-black uppercase tracking-[0.5em]">OPERASYON BAŞLADI</p>
                   <p className="text-2xl font-black italic text-white">YENİ EŞYA GÖZETLENİYOR...</p>
                </div>
             </div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
