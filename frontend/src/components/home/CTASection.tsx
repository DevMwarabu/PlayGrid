"use client";

import React from "react";
// import { motion } from "framer-motion";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="max-w-[1280px] mx-auto px-6">
      <div className="relative h-[260px] rounded-3xl overflow-hidden flex flex-col items-center justify-center text-center p-8">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-secondary/20 to-accent/20 blur-[80px]" />
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-3xl border border-white/10 rounded-3xl" />
        
        <div className="relative z-10">
          <h2 className="text-4xl font-bold font-orbitron mb-4 tracking-tight">READY TO PROVE <span className="text-accent">YOUR SKILLS?</span></h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto uppercase text-sm tracking-widest font-medium">Join thousands of players competing for glory and prizes every day.</p>
          
          <Link 
            href="/account"
            className="px-10 py-4 bg-accent text-background font-bold rounded-xl font-orbitron text-sm hover:scale-105 active:scale-95 transition-all neon-glow-green"
          >
            CREATE FREE ACCOUNT
          </Link>
        </div>
      </div>
    </section>
  );
}
