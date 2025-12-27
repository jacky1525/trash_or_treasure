"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, ShieldAlert } from "lucide-react";
import { login } from "./actions";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await login(password);
    if (result.success) {
      window.location.reload();
    } else {
      setError(result.error || "Giriş başarısız.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-sm space-y-8"
      >
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-pink-500/10 border border-pink-500/30 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-pink-500/20">
            <Lock className="w-10 h-10 text-pink-500" />
          </div>
          <h1 className="text-4xl font-black italic tracking-tighter uppercase underline decoration-pink-500/50">Yönetici Girişi</h1>
          <p className="text-slate-500 font-medium">Bu alana erişim kısıtlıdır.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <input
              type="password"
              placeholder="ADMİN ŞİFRESİ"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-center text-xl font-bold focus:border-pink-500 outline-none transition-all placeholder:text-slate-700"
            />
          </div>

          {error && (
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="bg-red-500/10 border border-red-500/30 p-4 rounded-2xl flex items-center gap-3 text-red-400 text-sm font-bold"
            >
              <ShieldAlert className="w-5 h-5 flex-shrink-0" />
              {error}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-slate-950 py-5 rounded-2xl font-black text-xl active:bg-pink-500 active:text-white transition-all disabled:opacity-50"
          >
            {loading ? "GİRİLİYOR..." : "GİRİŞ YAP"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
