"use client";

import Link from "next/link";
import Image from "next/image";
import { useAudio } from "@/context/AudioContext";
import { Volume2, VolumeX, Menu, Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { isPlaying, toggleAudio } = useAudio();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative w-full z-40 flex flex-col">
      {/* Top Row - Contact & Social */}
      <div className="w-full bg-transparent text-white">
        <div className="w-full px-4 md:px-8">
          <div className="flex justify-between items-center h-10 text-xs md:text-sm tracking-wide font-medium">
            <div className="flex items-center gap-6">
              <a href="mailto:btaglobalx@gmail.com" className="flex items-center gap-2 hover:text-yellow-600 transition-colors">
                <Mail size={14} />
                <span className="hidden sm:inline">btaglobalx@gmail.com</span>
              </a>
              <a href="tel:+60143646786" className="flex items-center gap-2 hover:text-yellow-600 transition-colors">
                <Phone size={14} />
                <span className="hidden sm:inline">+60143646786</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline mr-2">Stay Social</span>
              <a href="#" className="hover:text-yellow-600 transition-colors"><Facebook size={16} /></a>
              <a href="#" className="hover:text-yellow-600 transition-colors"><Instagram size={16} /></a>
              <a href="#" className="hover:text-yellow-600 transition-colors"><Youtube size={16} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Row - Logo & Links */}
      <div className="w-full bg-transparent">
        <div className="w-full px-4 md:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <div className="flex-shrink-0 -ml-2 lg:-ml-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative h-20 w-64 logo-glitch">
                  <Image
                    src="/assets/BTA-Logo.gif"
                    alt="BTA Globalx 2026"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </Link>
            </div>

            {/* Audio Controls */}
            <div className="flex items-center">
              <button
                onClick={toggleAudio}
                className="text-black/80 hover:text-yellow-600 transition-colors p-2"
                title={isPlaying ? "Mute Background Music" : "Play Background Music"}
              >
                {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
              </button>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}