"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  Trophy, 
  BarChart3, 
  PlaySquare, 
  UserCircle, 
  Menu, 
  X,
  Search,
  Bell
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Tournaments", href: "/tournaments", icon: Trophy },
  { name: "Leaderboards", href: "/leaderboards", icon: BarChart3 },
  { name: "Media", href: "/media", icon: PlaySquare },
  { name: "Account", href: "/account", icon: UserCircle },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 neon-glow-green">
            <span className="text-background font-bold text-xl font-orbitron">G</span>
          </div>
          <span className="text-xl font-bold font-orbitron tracking-tighter hidden sm:block">
            GAMEFORGE <span className="text-accent">ARENA</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-primary/40 p-1 rounded-full border border-white/5 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2",
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 bg-accent/20 rounded-full border border-accent/30"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <item.icon size={16} className={cn(isActive && "text-accent")} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Search size={20} />
          </button>
          <button className="p-2 text-gray-400 hover:text-white transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full neon-glow-green" />
          </button>
          
          <button 
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link 
            href="/tournaments" 
            className="hidden lg:flex px-5 py-2 bg-accent text-background font-bold rounded-lg hover:scale-105 transition-transform font-orbitron text-xs items-center gap-2"
          >
            JOIN TOURNAMENT
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-xl transition-colors",
                      isActive ? "bg-accent/10 text-white border border-accent/20" : "text-gray-400 hover:bg-white/5"
                    )}
                  >
                    <item.icon size={20} className={cn(isActive && "text-accent")} />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
              <Link 
                href="/tournaments"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full py-4 bg-accent text-background font-bold rounded-xl flex items-center justify-center gap-2 font-orbitron"
              >
                JOIN TOURNAMENT
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
