"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Trophy, ChevronRight } from "lucide-react";
import { useTournamentStore } from "@/store/useTournamentStore";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function FeaturedTournaments() {
  const { tournaments, fetchTournaments, isLoading } = useTournamentStore();

  useEffect(() => {
    fetchTournaments();
  }, [fetchTournaments]);

  const liveTournaments = tournaments.filter(t => t.status === 'ongoing' || t.status === 'open');

  return (
    <section className="max-w-[1280px] mx-auto px-6">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2 font-orbitron uppercase tracking-tight">LIVE <span className="text-accent">TOURNAMENTS</span></h2>
          <p className="text-gray-400">Jump into the action right now. Real-time competition.</p>
        </div>
        <Button variant="outline" size="sm">
          VIEW ALL →
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {isLoading ? (
          [1, 2, 3, 4].map((n) => (
            <div key={n} className="h-[320px] bg-white/5 rounded-2xl animate-pulse border border-white/5" />
          ))
        ) : liveTournaments.length > 0 ? (
          liveTournaments.map((tournament, idx) => (
            <motion.div
              key={tournament.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full group">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gray-800">
                    <div className="absolute top-4 left-4 z-10">
                      <Badge variant="danger" pulse>LIVE NOW</Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Trophy size={40} className="text-accent" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold font-orbitron mb-1 line-clamp-1 group-hover:text-accent transition-colors uppercase tracking-tight">
                      {tournament.title}
                    </h3>
                    <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mb-4">{tournament.game}</div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-white/5">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Prize Pool</span>
                        <span className="text-sm font-bold text-highlight font-orbitron">{tournament.prize_pool}</span>
                      </div>
                      <div className="flex flex-col gap-1 text-right">
                        <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Players</span>
                        <span className="text-sm font-bold text-white flex items-center justify-end gap-1">
                          <Users size={14} className="text-accent" /> 
                          {tournament.max_players}
                        </span>
                      </div>
                    </div>

                    <Button variant="accent" size="sm" className="w-full">
                      VIEW TOURNAMENT <ChevronRight size={14} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-gray-500 font-orbitron uppercase text-sm tracking-widest bg-white/5 rounded-3xl border border-dashed border-white/10">
            No live tournaments at the moment.
          </div>
        )}
      </div>
    </section>
  );
}
