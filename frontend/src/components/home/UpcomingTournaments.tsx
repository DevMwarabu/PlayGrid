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
    color: "accent"
  },
  {
    id: 2,
    title: "Valorant Spike Rush",
    game: "Valorant",
    date: "May 12",
    time: "15:00 UTC",
    entry: "$5.00",
    slots: "50/128",
    color: "secondary"
  },
  {
    id: 3,
    title: "Rocket League Cup",
    game: "Rocket League",
    date: "May 15",
    time: "20:00 UTC",
    entry: "Free",
    slots: "5/32",
    color: "highlight"
  },
  {
    id: 4,
    title: "CS2 Global Elite",
    game: "CS2",
    date: "May 18",
    time: "19:00 UTC",
    entry: "$10.00",
    slots: "80/100",
    color: "accent"
  },
  {
    id: 5,
    title: "League of Legends 5v5",
    game: "LoL",
    date: "May 20",
    time: "14:00 UTC",
    entry: "Free",
    slots: "2/16 Teams",
    color: "secondary"
  }
];

export default function UpcomingTournaments() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold font-orbitron uppercase tracking-wider">UPCOMING <span className="text-accent">EVENTS</span></h2>
        <div className="flex gap-2">
          <div className="w-8 h-1 bg-accent/20 rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-accent" />
          </div>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar -mx-6 px-6">
        {upcomingTournaments.map((tournament, idx) => (
          <motion.div
            key={tournament.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="flex-shrink-0 w-[260px] h-[280px] glass-morphism rounded-2xl p-6 border border-white/5 hover:border-accent/20 transition-all group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-primary border border-white/10 group-hover:bg-accent/10 transition-colors`}>
                <Zap size={20} className="text-accent" />
              </div>
              <div className="text-right">
                <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{tournament.date}</div>
                <div className="text-xs font-bold text-white">{tournament.time}</div>
              </div>
            </div>

            <h3 className="font-bold text-sm mb-1 line-clamp-1 font-orbitron uppercase">{tournament.title}</h3>
            <div className="text-[10px] text-accent font-medium mb-6 uppercase tracking-wider">{tournament.game}</div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-[10px]">
                <span className="text-gray-500 uppercase">Entry Fee</span>
                <span className="font-bold text-white">{tournament.entry}</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-gray-500 uppercase">Slots</span>
                <span className="font-bold text-white">{tournament.slots}</span>
              </div>
            </div>

            <button className="w-full py-2 rounded-lg border border-accent/20 text-accent font-bold text-[10px] font-orbitron hover:bg-accent hover:text-background transition-all">
              REGISTER
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
