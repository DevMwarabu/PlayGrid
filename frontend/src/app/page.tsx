import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedTournaments from "@/components/home/FeaturedTournaments";
import UpcomingTournaments from "@/components/home/UpcomingTournaments";
import TopPlayers from "@/components/home/TopPlayers";
import TrendingClips from "@/components/home/TrendingClips";
import HallOfFame from "@/components/home/HallOfFame";
import AdBanner from "@/components/home/AdBanner";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent selection:text-background">
      <Navbar />
      
      {/* 1. Hero Section */}
      <Hero />

      <div className="relative z-10 space-y-24 py-24">
        {/* 2. Live Tournaments */}
        <FeaturedTournaments />

        {/* 3. Upcoming Tournaments */}
        <UpcomingTournaments />

        {/* 4. Leaderboard Preview */}
        <TopPlayers />

        {/* 5. Trending Clips */}
        <TrendingClips />

        {/* 6. Hall of Fame */}
        <HallOfFame />

        {/* 7. Ad Banner */}
        <AdBanner />

        {/* 8. CTA Section */}
        <CTASection />
      </div>

      {/* 9. Footer */}
      <Footer />
    </main>
  );
}

