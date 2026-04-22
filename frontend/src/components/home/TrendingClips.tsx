"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Heart, Eye } from "lucide-react";
import { useMediaStore } from "@/store/useMediaStore";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function TrendingClips() {
  const { clips, fetchClips, isLoading } = useMediaStore();

  useEffect(() => {
    fetchClips();
  }, [fetchClips]);

  const mainClip = clips[0];
  const sideClips = clips.slice(1, 3);

  return (
    <section className="max-w-[1280px] mx-auto px-6">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2 font-orbitron uppercase tracking-tight">TRENDING <span className="text-accent">CLIPS</span></h2>
          <p className="text-gray-400">The most legendary plays from our community.</p>
        </div>
        <Button variant="outline" size="sm">
          VIEW ALL →
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[360px]">
        {isLoading ? (
          <div className="col-span-full h-full bg-white/5 animate-pulse rounded-2xl" />
        ) : mainClip ? (
          <>
            {/* Main Video */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 group relative rounded-2xl overflow-hidden bg-gray-800"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center neon-glow-green text-background">
                  <Play size={40} className="fill-background ml-1" />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-[10px] font-bold">
                    {mainClip.user.name[0]}
                  </div>
                  <span className="text-sm font-bold text-white">@{mainClip.user.name}</span>
                  <Badge variant="accent" size="xs">{mainClip.game}</Badge>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors font-orbitron uppercase tracking-tighter">
                  {mainClip.title}
                </h3>
                <div className="flex items-center gap-6 text-gray-400 text-sm">
                  <span className="flex items-center gap-1.5 font-bold"><Heart size={18} className="text-accent" /> {mainClip.likes}</span>
                  <span className="flex items-center gap-1.5 font-bold"><Eye size={18} /> {mainClip.views}</span>
                  <span className="ml-auto px-3 py-1 bg-black/60 rounded text-xs font-bold text-white">0:45</span>
                </div>
              </div>
            </motion.div>

            {/* Side Videos */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {sideClips.length > 0 ? sideClips.map((clip, idx) => (
                <motion.div
                  key={clip.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex-grow group relative rounded-2xl overflow-hidden bg-gray-800"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center neon-glow-green text-background">
                      <Play size={24} className="fill-background ml-1" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h4 className="text-sm font-bold text-white mb-2 group-hover:text-accent transition-colors line-clamp-1 font-orbitron uppercase tracking-tighter">
                      {clip.title}
                    </h4>
                    <div className="flex items-center justify-between text-[10px] text-gray-400">
                      <span className="font-bold">@{clip.user.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 font-bold"><Heart size={12} className="text-accent" /> {clip.likes}</span>
                        <span className="font-bold">1:20</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )) : (
                <div className="flex-grow bg-white/5 rounded-2xl border border-dashed border-white/10 flex items-center justify-center text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                  More clips coming soon
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="col-span-full py-20 text-center text-gray-500 font-orbitron uppercase text-sm tracking-widest bg-white/5 rounded-3xl border border-dashed border-white/10">
            No trending clips yet. Upload yours today!
          </div>
        )}
      </div>
    </section>
  );
}
