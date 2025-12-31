"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export default function JoinPage() {
    const [roomCode, setRoomCode] = useState("");
    const [playerName, setPlayerName] = useState("");
    const router = useRouter();

    useEffect(() => {
        // Optional: Auto-redirect if already in a room
        const savedRoom = localStorage.getItem("trash_treasure_room");
        const savedName = localStorage.getItem("trash_treasure_player_name");
        if (savedRoom && savedName) {
            // router.push(`/play/${savedRoom}`);
        }
    }, [router]);

    const handleJoin = (e: React.FormEvent) => {
        e.preventDefault();
        if (roomCode && playerName) {
            sessionStorage.setItem("trash_treasure_player_name", playerName);
            localStorage.setItem("trash_treasure_player_name", playerName);
            router.push(`/play/${roomCode.toUpperCase()}`);
        }
    };

    return (
        <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center p-6 grayscale-[0.5]">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-sm space-y-8 text-center">
                <Smartphone className="w-16 h-16 mx-auto text-pink-500" />
                <h1 className="text-3xl font-black italic">OYUNA KATIL</h1>
                <form onSubmit={handleJoin} className="space-y-4">
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
