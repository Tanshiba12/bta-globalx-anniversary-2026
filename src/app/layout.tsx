import type { Metadata } from "next";
import { Inter, Cinzel, Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import { GsapProvider } from "@/context/GsapContext";
import { AudioProvider } from "@/context/AudioContext";
import Header from "@/components/layout/Header";
import ScrollProgress from "@/components/ui/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  display: "swap"
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "BTA GlobalX Anniversary 2026",
  description: "BTA GlobalX Anniversary and Awards Celebration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} ${playfair.variable} ${outfit.variable}`}>
      <body className={`text-white relative min-h-screen flex flex-col festive-bg`}>
        <GsapProvider>
          <AudioProvider>
            <Header />
            <main className="flex-grow relative">
              {children}
            </main>
            <ScrollProgress />
          </AudioProvider>
        </GsapProvider>
      </body>
    </html>
  );
}
