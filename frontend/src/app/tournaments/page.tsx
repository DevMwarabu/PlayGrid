"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FeaturedTournaments from "@/components/home/FeaturedTournaments";
import UpcomingTournaments from "@/components/home/UpcomingTournaments";

export default function TournamentsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 space-y-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <h1 className="text-5xl font-bold font-orbitron mb-4">EXPLORE <span className="text-accent">TOURNAMENTS</span></h1>
          <p className="text-gray-400 max-w-2xl font-medium">From weekly opens to grand finals, find your next challenge here.</p>
        </div>
        <FeaturedTournaments />
        <UpcomingTournaments />
      </div>
      <Footer />
    </main>
  );
}
