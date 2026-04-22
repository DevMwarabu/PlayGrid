import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedTournaments from "@/components/home/FeaturedTournaments";
import UpcomingTournaments from "@/components/home/UpcomingTournaments";
import TopPlayers from "@/components/home/TopPlayers";
import TrendingClips from "@/components/home/TrendingClips";
import CTASection from "@/components/home/CTASection";

import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent selection:text-background">
      <Navbar />
      
      {/* 1. Hero Section */}
      <Hero />

      <div className="relative z-10 space-y-32 pb-32">
        {/* 2. Live Tournaments */}
        <FeaturedTournaments />

        {/* 3. Upcoming Tournaments - Now optimized to 3 items */}
        <UpcomingTournaments />

        {/* 4. Leaderboard Preview */}
        <TopPlayers />

        {/* 5. Trending Clips */}
        <TrendingClips />

        {/* 6. CTA Section - Now with background video */}
        <CTASection />
      </div>


      {/* 9. Footer */}
      <Footer />
    </main>
  );
}

