"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Trophy, TrendingUp, Medal } from "lucide-react";
import { useLeaderboardStore } from "@/store/useLeaderboardStore";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

export default function TopPlayers() {
  const { players, fetchLeaderboard, isLoading } = useLeaderboardStore();

  useEffect(() => {
    fetchLeaderboard();
  }, [fetchLeaderboard]);

  const top3 = players.slice(0, 3);
  const others = players.slice(3, 10);

  return (
    <section className="max-w-[1280px] mx-auto px-6">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2 font-orbitron uppercase tracking-tight">GLOBAL <span className="text-accent">LEADERBOARD</span></h2>
          <p className="text-gray-400">The most elite warriors in the GameForge ecosystem.</p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="highlight" size="md">SEASON 4</Badge>
          <Link href="/leaderboards" className="text-[10px] font-bold text-accent hover:underline uppercase tracking-widest font-orbitron">Full Rankings →</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Top 3 Spotlight */}
        <div className="lg:col-span-5 space-y-4">
          {isLoading ? (
            [1, 2, 3].map((n) => (
              <div key={n} className="h-24 bg-white/5 rounded-2xl animate-pulse" />
            ))
          ) : top3.map((player, idx) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="relative group">
                <CardContent className="flex items-center gap-6 p-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border-2 border-white/5 group-hover:border-accent/40 transition-colors">
                      <span className="text-xl font-bold font-orbitron text-white">{player.name[0]}</span>
                    </div>
                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-highlight rounded-full flex items-center justify-center text-background font-bold text-sm shadow-lg">
                      {idx + 1}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold font-orbitron mb-1 group-hover:text-accent transition-colors">@{player.name}</h3>
                    <div className="flex items-center gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      <span className="flex items-center gap-1"><Trophy size={12} className="text-highlight" /> {player.xp} XP</span>
                      <span className="flex items-center gap-1"><TrendingUp size={12} className="text-accent" /> {player.win_rate}% WR</span>
                    </div>
                  </div>

                  <Medal size={32} className={idx === 0 ? "text-highlight" : "text-gray-600"} opacity={idx === 0 ? 1 : 0.2} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Top 10 Table */}
        <div className="lg:col-span-7">
          <Card className="h-full">
            <CardContent className="p-0">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/5 bg-white/[0.02]">
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Rank</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Player</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-right">XP</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-right">Win Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {isLoading ? (
                    [1, 2, 3, 4, 5, 6, 7].map((n) => (
                      <tr key={n} className="animate-pulse">
                        <td colSpan={4} className="px-6 py-4"><div className="h-4 bg-white/5 rounded w-full" /></td>
                      </tr>
                    ))
                  ) : others.length > 0 ? (
                    others.map((player, idx) => (
                      <tr key={player.id} className="hover:bg-white/[0.02] transition-colors group">
                        <td className="px-6 py-4 font-orbitron font-bold text-gray-500 text-sm">#{idx + 4}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-[10px] font-bold">
                              {player.name[0]}
                            </div>
                            <span className="font-bold text-sm group-hover:text-accent transition-colors">@{player.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right font-orbitron font-bold text-sm">{player.xp}</td>
                        <td className="px-6 py-4 text-right text-accent font-bold text-sm">{player.win_rate}%</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-6 py-10 text-center text-gray-500 uppercase text-[10px] font-bold tracking-widest">
                        Waiting for players to join the battle.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
