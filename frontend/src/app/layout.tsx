import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import MobileBottomNav from "@/components/layout/MobileBottomNav";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GameForge Arena | The Ultimate Gaming Ecosystem",
  description: "Discover tournaments, watch highlights, and track rankings on GameForge Arena.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${inter.variable} antialiased scroll-smooth`}
    >
      <body className="bg-background text-foreground selection:bg-accent selection:text-background">
        {children}
        <MobileBottomNav />
      </body>
    </html>
  );
}


