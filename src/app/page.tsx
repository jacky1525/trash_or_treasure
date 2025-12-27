"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Monitor, Smartphone, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-indigo-500/10 to-transparent blur-3xl" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-600/10 rounded-full blur-[100px]" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 text-center space-y-12 max-w-4xl"
      >
        <div className="space-y-4">
      
          
          <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter leading-none">
            TRASH <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">OR</span> TREASURE
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Arkadaşlarını topla, gizli bilgileri kullan ve en zengin sen ol. Ama dikkat et, o paha biçilemez vazo sadece plastik bir kopya olabilir!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl mx-auto">
          <Link href="/host">
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-slate-900/50 border border-white/10 hover:border-purple-500/50 p-8 rounded-[2rem] transition-all cursor-pointer backdrop-blur-sm shadow-2xl"
            >
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20 group-hover:bg-purple-500 transition-colors">
                <Monitor className="w-8 h-8 text-purple-400 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black mb-2 text-left">Oda Kur (Host)</h3>
              <p className="text-slate-500 text-left text-sm font-medium">Bu ekranı TV veya bilgisayarda açın. Herkesin göreceği ana ekrandır.</p>
            </motion.div>
          </Link>

          <Link href="/play">
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-slate-900/50 border border-white/10 hover:border-pink-500/50 p-8 rounded-[2rem] transition-all cursor-pointer backdrop-blur-sm shadow-2xl"
            >
              <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 border border-pink-500/20 group-hover:bg-pink-500 transition-colors">
                <Smartphone className="w-8 h-8 text-pink-400 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black mb-2 text-left">Oyuna Katıl</h3>
              <p className="text-slate-500 text-left text-sm font-medium">Telefonunuzdan katılın. Teklifler verin ve özel güçlerinizi kullanın.</p>
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
