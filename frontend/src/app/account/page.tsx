"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { User, Trophy, Play, Settings, LogOut } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";


export default function AccountPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="max-w-[1280px] mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3 space-y-4">
            <Card className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center border-4 border-accent/40 mb-4 font-bold text-3xl font-orbitron">
                  SA
                </div>
                <h2 className="text-xl font-bold font-orbitron">Super Admin</h2>
                <p className="text-gray-500 text-sm mb-6">admin@admin.com</p>
                <Button variant="accent" size="sm" className="w-full">EDIT PROFILE</Button>
              </div>
            </Card>

            <nav className="space-y-1">
              {[
                { icon: User, label: "Overview", active: true },
                { icon: Trophy, label: "My Tournaments" },
                { icon: Play, label: "My Clips" },
                { icon: Settings, label: "Settings" },
              ].map((item) => (
                <button 
                  key={item.label}
                  className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl text-sm font-bold font-orbitron transition-all ${item.active ? 'bg-accent text-background' : 'text-gray-400 hover:bg-white/5'}`}
                >
                  <item.icon size={18} />
                  {item.label.toUpperCase()}
                </button>
              ))}
              <button className="w-full flex items-center gap-3 px-6 py-4 rounded-xl text-sm font-bold font-orbitron text-red-500 hover:bg-red-500/10 transition-all">
                <LogOut size={18} />
                LOGOUT
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-8">
            <h1 className="text-4xl font-bold font-orbitron">ACCOUNT <span className="text-accent">OVERVIEW</span></h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "Total XP", value: "12,500", icon: Trophy },
                { label: "Win Rate", value: "68.5%", icon: User },
                { label: "Tournaments", value: "12", icon: Trophy },
              ].map((stat) => (
                <Card key={stat.label}>
                  <CardContent className="p-8">
                    <stat.icon className="text-accent mb-4" size={24} />
                    <div className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">{stat.label}</div>
                    <div className="text-3xl font-bold font-orbitron">{stat.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold font-orbitron mb-6 uppercase tracking-tight">Recent Activity</h3>
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                          <Trophy size={20} className="text-accent" />
                        </div>
                        <div>
                          <div className="font-bold text-sm font-orbitron">FIFA 26 Elite Pro Cup</div>
                          <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Joined 2 days ago</div>
                        </div>
                      </div>
                      <Badge variant="accent">ACTIVE</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
