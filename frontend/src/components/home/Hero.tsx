"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

import { useTournamentStore } from "@/store/useTournamentStore";
import Link from "next/link";

export default function Hero() {
  const { tournaments, fetchTournaments } = useTournamentStore();

  useEffect(() => {
    fetchTournaments();
  }, [fetchTournaments]);

  useEffect(() => {
    fetchTournaments();
  }, [fetchTournaments]);

  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/videos/hero_bg.mp4" type="video/mp4" />
        </video>
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
      </div>

      {/* Background with Ambient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/20 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/20 blur-[150px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-20 w-full">
        {/* Centered CTA */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full mb-8">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-ping" />
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Live: Arena Season 4</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold font-orbitron leading-[1] mb-8 tracking-tighter uppercase">
              COMPETE. WIN. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">DOMINATE</span> THE ARENA.
            </h1>
            <p className="text-gray-200 text-xl mb-12 max-w-2xl leading-relaxed font-medium">
              Join the world&apos;s most elite gaming ecosystem. Climb the leaderboard, win cash prizes, and build your legacy.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link 
                href="/tournaments"
                className="px-12 py-5 bg-accent text-background font-bold rounded-2xl font-orbitron text-sm hover:scale-105 active:scale-95 transition-all neon-glow-green"
              >
                JOIN TOURNAMENT
              </Link>
              <Link 
                href="/media"
                className="px-12 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl font-orbitron text-sm hover:bg-white/10 transition-all flex items-center gap-3 group backdrop-blur-md"
              >
                WATCH HIGHLIGHTS <Play size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


