"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HostRedirect() {
    const router = useRouter();

    useEffect(() => {
        // Generate a random room code
        const code = Math.random().toString(36).substring(2, 6).toUpperCase();
        router.replace(`/host/${code}`);
    }, [router]);

    return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
    );
}
