"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useMediaStore } from "@/store/useMediaStore";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Play, Heart, Eye, Share2, Filter, Upload, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function MediaPage() {
  const { clips, fetchClips, isLoading } = useMediaStore();
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    fetchClips();
  }, [fetchClips]);

  const categories = ["all", "fifa", "cod", "tekken", "others"];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-6 tracking-tighter uppercase leading-[0.9]">
                COMMUNITY <br />
                <span className="text-accent">HIGHLIGHTS</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-xl leading-relaxed font-medium">
                The most legendary moments, captured by you. Watch, like, and share the best plays from the GameForge ecosystem.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-4"
            >
              <Button variant="outline" className="gap-2">
                <Upload size={18} /> SUBMIT CLIP
              </Button>
              <Button variant="accent" className="gap-2 neon-glow-green">
                <Zap size={18} /> GO LIVE
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-[1280px] mx-auto px-6 mb-12">
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-4">
          <Filter size={18} className="text-gray-500 flex-shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-2xl text-[10px] font-bold font-orbitron uppercase tracking-[0.2em] transition-all whitespace-nowrap border ${
                activeCategory === cat 
                  ? "bg-white text-background border-white" 
                  : "bg-white/5 text-gray-500 border-white/5 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Media Grid */}
      <section className="max-w-[1280px] mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            [1, 2, 3, 4, 5, 6].map(n => <div key={n} className="aspect-video bg-white/5 rounded-3xl animate-pulse" />)
          ) : clips.length > 0 ? (
            clips.map((clip, idx) => (
              <motion.div
                key={clip.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Card className="group overflow-hidden bg-white/[0.02] border-white/5 hover:border-accent/40 transition-all duration-500">
                  <CardContent className="p-0">
                    <div className="relative aspect-video bg-gray-900 cursor-pointer overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[1px]">
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center neon-glow-green text-background transform group-hover:scale-110 transition-transform">
                          <Play size={24} className="fill-background ml-1" />
                        </div>
                      </div>

                      {/* Stats Overlay */}
                      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                        <div className="px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-bold text-white flex items-center gap-1.5 border border-white/10">
                          <Eye size={12} /> {clip.views}
                        </div>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 z-20">
                        <Badge variant="accent" size="xs" className="mb-2 uppercase tracking-widest">{clip.game}</Badge>
                        <h3 className="text-sm font-bold text-white line-clamp-1 group-hover:text-accent transition-colors font-orbitron uppercase tracking-tight">
                          {clip.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center font-bold text-[10px] text-gray-300">
                          {clip.user.name[0]}
                        </div>
                        <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors">@{clip.user.name}</span>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1.5 text-gray-500 hover:text-accent transition-colors">
                          <Heart size={16} />
                          <span className="text-[10px] font-bold">{clip.likes}</span>
                        </button>
                        <button className="text-gray-500 hover:text-white transition-colors">
                          <Share2 size={16} />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-32 text-center border border-dashed border-white/10 rounded-3xl">
              <Play size={48} className="text-gray-700 mx-auto mb-6 opacity-20" />
              <h3 className="text-xl font-bold font-orbitron mb-2">NO CLIPS DISCOVERED</h3>
              <p className="text-gray-500 uppercase text-[10px] font-bold tracking-widest">Be the first to upload a legendary play.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
