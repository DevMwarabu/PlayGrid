"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLeaderboardStore } from "@/store/useLeaderboardStore";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Trophy, TrendingUp, Medal, Search, Globe, Swords } from "lucide-react";
import { motion } from "framer-motion";

export default function LeaderboardsPage() {
  const { players, fetchLeaderboard, isLoading } = useLeaderboardStore();

  useEffect(() => {
    fetchLeaderboard();
  }, [fetchLeaderboard]);

  const top3 = players.slice(0, 3);
  const theRest = players.slice(3);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-12 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(34,197,94,0.1),transparent_70%)]" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-6 tracking-tighter uppercase">
              HALL OF <span className="text-accent">LEGENDS</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              The world&apos;s most elite warriors, ranked by skill, precision, and dominance. Do you have what it takes to reach the top?
            </p>

          </motion.div>
        </div>
      </section>

      {/* Top 3 Podium */}
      <section className="max-w-[1280px] mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {isLoading ? (
            [1, 2, 3].map(n => <div key={n} className="h-64 bg-white/5 rounded-3xl animate-pulse" />)
          ) : (
            <>
              {/* Silver - Rank 2 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="order-2 md:order-1"
              >
                {top3[1] && (
                  <Card className="border-gray-400/20 bg-gradient-to-t from-gray-400/5 to-transparent">
                    <CardContent className="p-8 text-center">
                      <div className="relative inline-block mb-6">
                        <div className="w-24 h-24 bg-gray-400/20 rounded-full flex items-center justify-center border-2 border-gray-400/40">
                          <span className="text-3xl font-bold font-orbitron text-white">{top3[1].name[0]}</span>
                        </div>
                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-background font-bold text-lg shadow-lg">2</div>
                      </div>
                      <h3 className="text-xl font-bold font-orbitron mb-2 uppercase">@{top3[1].name}</h3>
                      <div className="text-accent font-bold font-orbitron text-lg mb-4">{top3[1].xp} XP</div>
                      <Badge variant="outline">SEASON SILVER</Badge>
                    </CardContent>
                  </Card>
                )}
              </motion.div>

              {/* Gold - Rank 1 */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="order-1 md:order-2"
              >
                {top3[0] && (
                  <Card className="border-highlight/40 bg-gradient-to-t from-highlight/10 to-transparent scale-110 shadow-[0_0_50px_rgba(245,158,11,0.1)]">
                    <CardContent className="p-10 text-center relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-highlight neon-glow-highlight" />
                      <div className="relative inline-block mb-6">
                        <div className="w-32 h-32 bg-highlight/20 rounded-full flex items-center justify-center border-4 border-highlight/40 neon-glow-highlight">
                          <span className="text-5xl font-bold font-orbitron text-white">{top3[0].name[0]}</span>
                        </div>
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-highlight rounded-full flex items-center justify-center text-background font-bold text-2xl shadow-xl">1</div>
                      </div>
                      <h3 className="text-3xl font-bold font-orbitron mb-2 uppercase tracking-tighter">@{top3[0].name}</h3>
                      <div className="text-highlight font-bold font-orbitron text-2xl mb-6">{top3[0].xp} XP</div>
                      <Badge variant="highlight" pulse>REIGNING CHAMPION</Badge>
                    </CardContent>
                  </Card>
                )}
              </motion.div>

              {/* Bronze - Rank 3 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="order-3"
              >
                {top3[2] && (
                  <Card className="border-orange-800/20 bg-gradient-to-t from-orange-800/5 to-transparent">
                    <CardContent className="p-8 text-center">
                      <div className="relative inline-block mb-6">
                        <div className="w-24 h-24 bg-orange-800/20 rounded-full flex items-center justify-center border-2 border-orange-800/40">
                          <span className="text-3xl font-bold font-orbitron text-white">{top3[2].name[0]}</span>
                        </div>
                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-orange-800 rounded-full flex items-center justify-center text-background font-bold text-lg shadow-lg">3</div>
                      </div>
                      <h3 className="text-xl font-bold font-orbitron mb-2 uppercase">@{top3[2].name}</h3>
                      <div className="text-accent font-bold font-orbitron text-lg mb-4">{top3[2].xp} XP</div>
                      <Badge variant="outline">SEASON BRONZE</Badge>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </>
          )}
        </div>
      </section>

      {/* Leaderboard Table */}
      <section className="max-w-[1280px] mx-auto px-6 pb-32">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold font-orbitron uppercase tracking-tight">Global <span className="text-accent">Rankings</span></h2>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/5">
              <Globe size={14} className="text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">All Regions</span>
            </div>
          </div>
          <div className="relative w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
            <input 
              type="text" 
              placeholder="FIND WARRIOR..." 
              className="w-full bg-white/5 border border-white/5 rounded-xl pl-10 pr-4 py-2 text-[10px] font-bold font-orbitron focus:outline-none focus:border-accent/40"
            />
          </div>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/[0.02] border-b border-white/5">
                  <th className="px-8 py-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Rank</th>
                  <th className="px-8 py-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Player</th>
                  <th className="px-8 py-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Status</th>
                  <th className="px-8 py-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-right">Win Rate</th>
                  <th className="px-8 py-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-right">Total XP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {isLoading ? (
                  [1, 2, 3, 4, 5].map(n => (
                    <tr key={n} className="animate-pulse">
                      <td colSpan={5} className="px-8 py-6"><div className="h-6 bg-white/5 rounded w-full" /></td>
                    </tr>
                  ))
                ) : theRest.map((player, idx) => (
                  <tr key={player.id} className="hover:bg-white/[0.01] transition-colors group">
                    <td className="px-8 py-6 font-orbitron font-bold text-gray-500 group-hover:text-accent transition-colors">#{idx + 4}</td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center font-bold text-sm">
                          {player.name[0]}
                        </div>
                        <span className="font-bold font-orbitron text-sm uppercase">@{player.name}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <Badge variant="outline" size="xs">ELITE</Badge>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex items-center justify-end gap-2 text-accent font-bold">
                        <TrendingUp size={14} />
                        {player.win_rate}%
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right font-orbitron font-bold text-white">
                      {player.xp.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </main>
  );
}
