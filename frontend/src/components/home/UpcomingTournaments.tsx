"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";


const upcomingTournaments = [
  {
    id: 1,
    title: "Street Fighter 6 Duel",
    game: "Street Fighter 6",
    date: "May 10",
    time: "18:00 UTC",
    entry: "Free",
    slots: "12/64",
  },
  {
    id: 2,
    title: "Valorant Spike Rush",
    game: "Valorant",
    date: "May 12",
    time: "15:00 UTC",
    entry: "$5.00",
    slots: "50/128",
  },
  {
    id: 3,
    title: "Rocket League Cup",
    game: "Rocket League",
    date: "May 15",
    time: "20:00 UTC",
    entry: "Free",
    slots: "5/32",
  }
];

export default function UpcomingTournaments() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl font-bold font-orbitron uppercase tracking-widest">
            UPCOMING <span className="text-accent">EVENTS</span>
          </h2>
          <p className="text-gray-500 text-sm mt-1 uppercase tracking-tighter">Reserve your slot in the next big battle</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-accent/50 hidden md:block" />
          <button className="text-[10px] font-bold text-accent hover:underline uppercase tracking-widest font-orbitron">View All Events →</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {upcomingTournaments.map((tournament, idx) => (
          <motion.div
            key={tournament.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="glass-morphism rounded-3xl p-8 border border-white/5 hover:border-accent/40 transition-all group relative overflow-hidden h-[340px] flex flex-col"
          >
            {/* Ambient background effect */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/5 blur-[50px] rounded-full group-hover:bg-accent/10 transition-all" />
            
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-accent/40 transition-all group-hover:neon-glow-green">
                <Zap size={28} className="text-accent" />
              </div>
              <div className="text-right">
                <div className="text-[10px] text-accent uppercase font-bold tracking-[0.2em] mb-1">{tournament.date}</div>
                <div className="text-sm font-bold text-white font-orbitron">{tournament.time}</div>
              </div>
            </div>

            <div className="flex-grow relative z-10">
              <h3 className="font-bold text-xl mb-2 font-orbitron uppercase tracking-tight group-hover:text-accent transition-colors">
                {tournament.title}
              </h3>
              <div className="text-[10px] text-gray-500 font-bold mb-8 uppercase tracking-[0.3em]">{tournament.game}</div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500 uppercase font-bold tracking-widest">Entry Fee</span>
                  <span className="font-bold text-white font-orbitron">{tournament.entry}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500 uppercase font-bold tracking-widest">Slots Available</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-accent" />
                    </div>
                    <span className="font-bold text-white font-orbitron">{tournament.slots}</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs font-orbitron hover:bg-accent hover:text-background hover:border-accent transition-all relative z-10">
              REGISTER NOW
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

