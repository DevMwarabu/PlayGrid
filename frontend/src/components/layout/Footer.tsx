import React from "react";
import Link from "next/link";
import { X, Youtube, Disc as Discord, Github } from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-primary/40 border-t border-white/5 pt-20 pb-10 mt-24">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Column 1: Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-6 group">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold font-orbitron text-background">G</div>
            <span className="text-xl font-bold font-orbitron tracking-tighter">GAMEFORGE <span className="text-accent">ARENA</span></span>
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            The world&apos;s premier ecosystem for competitive gaming. Discover, compete, and climb the ranks in the ultimate arena.
          </p>

          <div className="flex gap-4">
            {[X, Youtube, Discord, Github].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:bg-accent/10 hover:text-accent transition-all border border-white/5">

                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h4 className="font-orbitron font-bold text-sm mb-6 uppercase tracking-widest text-white">Navigation</h4>
          <ul className="space-y-4">
            {["Home", "Tournaments", "Leaderboards", "Media", "Account"].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-gray-500 hover:text-accent text-sm transition-colors uppercase font-medium tracking-wider">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h4 className="font-orbitron font-bold text-sm mb-6 uppercase tracking-widest text-white">Support</h4>
          <ul className="space-y-4">
            {["Help Center", "Terms of Service", "Privacy Policy", "Cookie Policy", "Contact Us"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-gray-500 hover:text-accent text-sm transition-colors uppercase font-medium tracking-wider">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="font-orbitron font-bold text-sm mb-6 uppercase tracking-widest text-white">Stay Updated</h4>
          <p className="text-gray-500 text-xs mb-4 uppercase tracking-widest leading-relaxed">Subscribe to get the latest tournament news and rewards.</p>
          <form className="relative">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-accent/40 transition-colors uppercase font-orbitron"
            />
            <button className="absolute right-1 top-1 bottom-1 px-4 bg-accent text-background font-bold text-[10px] rounded-lg font-orbitron hover:scale-105 transition-transform">
              GO
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em] font-bold">
          &copy; 2026 GAMEFORGE ARENA. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-8">
          <span className="text-[10px] text-gray-600 uppercase font-bold tracking-widest">DESIGNED BY OUK</span>
          <span className="text-[10px] text-gray-600 uppercase font-bold tracking-widest">POWERED BY LARAVEL</span>
        </div>
      </div>
    </footer>
  );
}
