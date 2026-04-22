"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  User, 
  Trophy, 
  Play, 
  Settings, 
  LogOut, 
  Shield, 
  Zap, 
  CreditCard, 
  ChevronRight,
  Bell,
  Heart
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: User },
    { id: "tournaments", label: "My Tournaments", icon: Trophy },
    { id: "clips", label: "My Clips", icon: Play },
    { id: "wallet", label: "Wallet & Winnings", icon: CreditCard },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "settings", label: "Account Settings", icon: Settings },
  ];

  return (
    <main className="min-h-screen bg-[#020617]">
      <Navbar />
      
      <div className="max-w-[1280px] mx-auto px-6 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <Card className="overflow-hidden border-accent/20 bg-accent/[0.02]">
              <CardContent className="p-8 text-center relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-accent neon-glow-green" />
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center border-4 border-accent/40 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                    <span className="text-4xl font-bold font-orbitron text-white">SA</span>
                  </div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-4 border-[#020617] text-background">
                    <Shield size={14} />
                  </div>
                </div>
                <h2 className="text-xl font-bold font-orbitron mb-1 tracking-tight">Super Admin</h2>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Badge variant="accent" size="xs">PRO PLAYER</Badge>
                  <Badge variant="highlight" size="xs">LVL 42</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full text-[10px]">EDIT PROFILE</Button>
              </CardContent>
            </Card>

            <nav className="space-y-1">
              {sidebarItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-[10px] font-bold font-orbitron uppercase tracking-[0.2em] transition-all group ${
                    activeTab === item.id 
                      ? "bg-accent text-background shadow-[0_10px_20px_rgba(34,197,94,0.2)]" 
                      : "text-gray-500 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <item.icon size={18} className={activeTab === item.id ? "text-background" : "text-accent group-hover:scale-110 transition-transform"} />
                  {item.label}
                </button>
              ))}
              <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-[10px] font-bold font-orbitron uppercase tracking-[0.2em] text-red-500 hover:bg-red-500/10 transition-all mt-4">
                <LogOut size={18} />
                DISCONNECT
              </button>
            </nav>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-9 space-y-8">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl font-bold font-orbitron uppercase tracking-tighter">
                  WARRIOR <span className="text-accent">DASHBOARD</span>
                </h1>
                <p className="text-gray-500 font-medium mt-1">Welcome back, Commander. Your next battle awaits.</p>
              </div>
              <div className="flex gap-3">
                <Button variant="accent" className="neon-glow-green gap-2">
                  <Zap size={16} fill="currentColor" /> UPGRADE TO ELITE
                </Button>
              </div>
            </header>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Total XP", value: "12,450", color: "text-accent", icon: Zap },
                { label: "Winnings", value: "$1,200", color: "text-highlight", icon: Trophy },
                { label: "Win Rate", value: "72.4%", color: "text-secondary", icon: Shield },
                { label: "Matches", value: "156", color: "text-white", icon: User },
              ].map((stat, idx) => (
                <Card key={idx} className="bg-white/[0.01] hover:bg-white/[0.03] transition-colors border-white/5">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                        <stat.icon size={20} className={stat.color} />
                      </div>
                      <Badge variant="outline" size="xs">TOP 5%</Badge>
                    </div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{stat.label}</div>
                    <div className={`text-2xl font-bold font-orbitron ${stat.color}`}>{stat.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main Column */}
              <div className="lg:col-span-8 space-y-8">
                <Card className="bg-white/[0.02]">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-xl font-bold font-orbitron uppercase tracking-tight">Active Tournaments</h3>
                      <button className="text-[10px] font-bold text-accent uppercase tracking-widest hover:underline">View All</button>
                    </div>
                    
                    <div className="space-y-4">
                      {[1, 2].map((i) => (
                        <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent/20 transition-all group">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                              <Trophy size={24} />
                            </div>
                            <div>
                              <div className="font-bold font-orbitron text-sm uppercase group-hover:text-accent transition-colors">FIFA 26 Elite Pro Cup</div>
                              <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Status: Round of 16</div>
                            </div>
                          </div>
                          <Badge variant="accent" pulse>LIVE</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/[0.02]">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-xl font-bold font-orbitron uppercase tracking-tight">Recent Clips</h3>
                      <button className="text-[10px] font-bold text-accent uppercase tracking-widest hover:underline">Manage Clips</button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {[1, 2].map((i) => (
                        <div key={i} className="aspect-video bg-gray-900 rounded-2xl relative group overflow-hidden cursor-pointer">
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play size={32} className="text-accent fill-accent" />
                          </div>
                          <div className="absolute bottom-3 left-3 flex items-center gap-2">
                            <Badge variant="accent" size="xs" className="scale-75 origin-left">TEKKEN 8</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Side Column */}
              <div className="lg:col-span-4 space-y-8">
                <Card className="bg-gradient-to-br from-secondary/10 to-transparent border-secondary/20">
                  <CardContent className="p-8">
                    <h3 className="text-lg font-bold font-orbitron mb-6 uppercase tracking-tight">Achievements</h3>
                    <div className="space-y-6">
                      {[
                        { title: "First Blood", desc: "Win your first match", progress: 100 },
                        { title: "High Roller", desc: "Win $1000 in prizes", progress: 65 },
                        { title: "Clip Master", desc: "Reach 1k views on a clip", progress: 30 },
                      ].map((ach, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between items-end mb-2">
                            <div className="text-[10px] font-bold uppercase tracking-widest text-white">{ach.title}</div>
                            <div className="text-[10px] font-bold text-accent">{ach.progress}%</div>
                          </div>
                          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${ach.progress}%` }}
                              className="h-full bg-accent neon-glow-green"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/[0.01] border-dashed border-white/10">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CreditCard size={24} className="text-gray-500" />
                    </div>
                    <h4 className="font-bold font-orbitron text-sm mb-2 uppercase">Connect Wallet</h4>
                    <p className="text-[10px] text-gray-500 uppercase font-bold leading-relaxed mb-6">Secure your earnings and withdraw rewards instantly.</p>
                    <Button variant="outline" size="sm" className="w-full">CONNECT NOW</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
