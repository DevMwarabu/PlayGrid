"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";


const winners = [
  {
    id: 1,
    name: "X-Phantom",
    tournament: "FIFA 26 Elite Pro Cup",
    prize: "$5,000",
    date: "April 2026",
    avatar: "P"
  },
  {
    id: 2,
    title: "SniperElite",
    tournament: "COD: Warzone Season 4",
    prize: "$10,000",
    date: "March 2026",
    avatar: "S"
  },
  {
    id: 3,
    title: "FistOfFury",
    tournament: "Tekken 8 Iron Fist",
    prize: "$2,500",
    date: "February 2026",
    avatar: "F"
  },
  {
    id: 4,
    title: "VortexGamer",
    tournament: "Rocket League Open",
    prize: "$1,500",
    date: "January 2026",
    avatar: "V"
  }
];

export default function HallOfFame() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-orbitron uppercase tracking-widest"><span className="text-highlight">HALL</span> OF FAME</h2>
        <p className="text-gray-500 mt-2">Celebrating the legends of GameForge Arena.</p>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-12 no-scrollbar -mx-6 px-6">
        {winners.map((winner, idx) => (
          <motion.div
            key={winner.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex-shrink-0 w-[240px] h-[260px] glass-morphism rounded-3xl p-6 flex flex-col items-center text-center border border-white/5 hover:border-highlight/40 transition-all group relative"
          >
            <div className="absolute top-4 right-4 text-highlight opacity-20 group-hover:opacity-100 transition-opacity">
              <Star size={20} fill="currentColor" />
            </div>
            
            <div className="w-20 h-20 bg-highlight/10 rounded-full flex items-center justify-center border-2 border-highlight/20 mb-4 group-hover:scale-110 transition-transform">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center font-bold text-2xl font-orbitron text-highlight">
                {winner.avatar}
              </div>
            </div>

            <h3 className="font-bold text-lg mb-1 font-orbitron">{winner.name || winner.title}</h3>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4 line-clamp-1">{winner.tournament}</p>
            
            <div className="mt-auto">
              <div className="text-lg font-bold text-highlight font-orbitron">{winner.prize}</div>
              <div className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">{winner.date}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
