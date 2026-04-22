"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useTournamentStore } from "@/store/useTournamentStore";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Trophy, Users, Clock, Search, Filter } from "lucide-react";
import { motion } from "framer-motion";

export default function TournamentsPage() {
  const { tournaments, fetchTournaments, isLoading } = useTournamentStore();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchTournaments();
  }, [fetchTournaments]);

  const filteredTournaments = tournaments.filter(t => {
    if (filter === "all") return true;
    return t.status === filter;
  });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-accent/5 blur-[120px] rounded-full" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-orbitron mb-6 tracking-tight">
              ARENA <span className="text-accent">TOURNAMENTS</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed font-medium">
              Join the most competitive brackets in the industry. From weekly community opens to high-stakes professional grand finals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="max-w-[1280px] mx-auto px-6 mb-12 sticky top-20 z-30">
        <div className="glass-morphism rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 border border-white/10 shadow-2xl">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto">
            {["all", "ongoing", "open", "upcoming", "finished"].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-6 py-2 rounded-xl text-xs font-bold font-orbitron transition-all uppercase tracking-widest whitespace-nowrap ${
                  filter === status 
                    ? "bg-accent text-background shadow-[0_0_20px_rgba(34,197,94,0.3)]" 
                    : "text-gray-400 hover:bg-white/5"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input 
              type="text" 
              placeholder="SEARCH EVENTS..." 
              className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-2 text-xs font-orbitron focus:outline-none focus:border-accent/40"
            />
          </div>
        </div>
      </section>

      {/* Tournaments Grid */}
      <section className="max-w-[1280px] mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            [1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="h-[400px] bg-white/5 rounded-3xl animate-pulse" />
            ))
          ) : filteredTournaments.length > 0 ? (
            filteredTournaments.map((tournament, idx) => (
              <motion.div
                key={tournament.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Card className="h-full group hover:border-accent/30 transition-all duration-500 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-video bg-gray-800">
                      <div className="absolute top-4 left-4 z-20">
                        <Badge 
                          variant={tournament.status === 'ongoing' ? 'danger' : 'accent'} 
                          pulse={tournament.status === 'ongoing'}
                        >
                          {tournament.status.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 backdrop-blur-[2px]">
                        <Button variant="accent" size="sm">VIEW DETAILS</Button>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-2">{tournament.game}</div>
                      <h3 className="text-xl font-bold font-orbitron mb-6 group-hover:text-accent transition-colors line-clamp-1 uppercase tracking-tight">
                        {tournament.title}
                      </h3>
                      
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500 flex items-center gap-2"><Trophy size={14} /> Prize Pool</span>
                          <span className="font-bold text-highlight font-orbitron">{tournament.prize_pool}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500 flex items-center gap-2"><Users size={14} /> Participants</span>
                          <span className="font-bold text-white uppercase tracking-tighter">0 / {tournament.max_players}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500 flex items-center gap-2"><Clock size={14} /> Start Date</span>
                          <span className="font-bold text-white uppercase tracking-tighter">
                            {new Date(tournament.start_date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full">REGISTER NOW</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-32 text-center">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy size={32} className="text-gray-600" />
              </div>
              <h3 className="text-xl font-bold font-orbitron mb-2">NO TOURNAMENTS FOUND</h3>
              <p className="text-gray-500 uppercase text-[10px] font-bold tracking-widest">Try adjusting your filters to find active events.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
