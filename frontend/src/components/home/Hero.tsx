"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Trophy, Users, Clock, ChevronRight } from "lucide-react";
import { useTournamentStore } from "@/store/useTournamentStore";
import Link from "next/link";

export default function Hero() {
  const { tournaments, fetchTournaments } = useTournamentStore();

  useEffect(() => {
    fetchTournaments();
  }, [fetchTournaments]);

  const featured = tournaments.length > 0 ? tournaments[0] : {
    title: "FIFA 26 GLOBAL OPEN",
    prize_pool: "$5,000",
    game: "FIFA 26",
    status: "open",
    max_players: 128
  };

  return (
    <section className="relative w-full h-[600px] flex items-center overflow-hidden">
      {/* Background with Ambient Glow */}
      <div className="absolute inset-0 bg-[#020617]">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/20 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 w-full">
        {/* Left Column: CTA */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-ping" />
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Live: Arena Season 4</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold font-orbitron leading-[1.1] mb-6 tracking-tighter uppercase">
              COMPETE. WIN. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">DOMINATE</span> THE ARENA.
            </h1>
            <p className="text-gray-400 text-lg mb-10 max-w-xl leading-relaxed font-medium">
              Join the world&apos;s most elite gaming ecosystem. Climb the leaderboard, win cash prizes, and build your legacy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/tournaments"
                className="px-10 py-4 bg-accent text-background font-bold rounded-xl font-orbitron text-sm hover:scale-105 active:scale-95 transition-all neon-glow-green"
              >
                JOIN TOURNAMENT
              </Link>
              <Link 
                href="/media"
                className="px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl font-orbitron text-sm hover:bg-white/10 transition-all flex items-center gap-2 group"
              >
                WATCH HIGHLIGHTS <Play size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Featured Tournament Card */}
        <div className="lg:col-span-4 lg:offset-1 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[420px] aspect-[4/5] glass-morphism rounded-3xl p-8 relative border border-white/10 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div className="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-md text-[10px] font-bold text-red-500 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                  Live Now
                </div>
                <div className="text-2xl font-bold font-orbitron text-accent">{featured.prize_pool}</div>
              </div>

              <div className="flex-grow">
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">{featured.game}</div>
                <h3 className="text-2xl font-bold font-orbitron mb-6 group-hover:text-accent transition-colors leading-tight uppercase">
                  {featured.title}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Clock size={18} className="text-accent" />
                    <span className="text-sm font-bold uppercase tracking-tight">Ends in: 04h 22m 15s</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Users size={18} className="text-accent" />
                    <span className="text-sm font-bold uppercase tracking-tight">Participants: 42/{featured.max_players}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Trophy size={18} className="text-accent" />
                    <span className="text-sm font-bold uppercase tracking-tight">Type: Single Elimination</span>
                  </div>
                </div>
              </div>

              <button className="w-full py-4 bg-white text-background font-bold rounded-xl font-orbitron text-xs hover:bg-accent transition-colors mt-8 uppercase tracking-widest flex items-center justify-center gap-2">
                VIEW BRACKETS <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
