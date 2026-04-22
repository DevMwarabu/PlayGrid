"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TopPlayers from "@/components/home/TopPlayers";

export default function LeaderboardsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24">
        <TopPlayers />
      </div>
      <Footer />
    </main>
  );
}
