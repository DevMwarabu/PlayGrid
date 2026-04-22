"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AdBanner() {
  return (
    <section className="max-w-[1280px] mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative h-[140px] rounded-3xl overflow-hidden group cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-accent/20 to-secondary/40 animate-pulse" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm border border-white/5 group-hover:border-accent/20 transition-all" />
        
        <div className="absolute inset-0 flex items-center justify-between px-12">
          <div className="flex items-center gap-8">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center font-bold font-orbitron text-accent text-2xl border border-white/5 group-hover:scale-110 transition-transform">
              XP
            </div>
            <div>
              <h3 className="text-xl font-bold font-orbitron text-white mb-1 tracking-tight">LEVEL UP WITH <span className="text-accent">PRIME MEMBERSHIP</span></h3>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-medium">Get exclusive access to high-stakes tournaments & double XP.</p>
            </div>
          </div>
          <button className="px-8 py-3 bg-white text-background font-bold rounded-xl font-orbitron text-[10px] hover:bg-accent hover:scale-105 transition-all uppercase tracking-wider">
            GET PRIME NOW
          </button>
        </div>
      </motion.div>
    </section>
  );
}
