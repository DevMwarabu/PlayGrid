"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Full Width Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/videos/promo_video.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Gradients - Bleeding into the page */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center text-center py-20"
        >
          <div className="w-20 h-1 bg-accent mb-12 neon-glow-green" />
          
          <h2 className="text-5xl md:text-7xl font-bold font-orbitron mb-6 tracking-tighter leading-tight uppercase">
            READY TO PROVE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">YOUR SKILLS?</span>
          </h2>
          
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto uppercase text-sm tracking-[0.3em] font-bold">
            Join the most elite gaming ecosystem. Build your legacy today.
          </p>
          
          <Link 
            href="/account"
            className="px-16 py-6 bg-accent text-background font-bold rounded-2xl font-orbitron text-sm hover:scale-110 active:scale-95 transition-all neon-glow-green uppercase tracking-widest shadow-[0_0_40px_rgba(34,197,94,0.3)]"
          >
            CREATE FREE ACCOUNT
          </Link>
        </motion.div>
      </div>
    </section>


  );
}
