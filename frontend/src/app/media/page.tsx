"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrendingClips from "@/components/home/TrendingClips";

export default function MediaPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="max-w-[1280px] mx-auto px-6 mb-12">
          <h1 className="text-5xl font-bold font-orbitron mb-4">COMMUNITY <span className="text-accent">HIGHLIGHTS</span></h1>
          <p className="text-gray-400 max-w-2xl font-medium">Watch the most insane plays submitted by our members.</p>
        </div>
        <TrendingClips />
      </div>
      <Footer />
    </main>
  );
}
