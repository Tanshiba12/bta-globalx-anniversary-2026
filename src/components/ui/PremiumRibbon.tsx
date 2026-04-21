"use client";
import React from "react";
import Link from "next/link";

export default function PremiumRibbon() {
    return (
        <div className="relative w-full overflow-hidden bg-zinc-900/80 backdrop-blur-md border-y border-white/5 py-4 flex items-center group shadow-2xl">
            {/* The scrolling container. It pauses when the user hovers over it so they can easily click the links. */}
            <div className="flex animate-[ribbonScroll_30s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap w-max">
                {/* We repeat the block multiple times to create a seamless infinite loop */}
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex items-center space-x-12 px-6">
                        <Link href="#nomination" className="text-xs md:text-sm font-cinzel font-semibold tracking-widest text-white/90 hover:text-bta-gold transition-colors">
                            REGISTER NOW FOR NOMINATION
                        </Link>
                        <span className="text-bta-gold/40 text-[10px]">◆</span>
                        <Link href="#reserve" className="text-xs md:text-sm font-cinzel font-semibold tracking-widest text-white/90 hover:text-bta-gold transition-colors">
                            RESERVE YOUR SEAT
                        </Link>
                        <span className="text-bta-gold/40 text-[10px]">◆</span>
                        <Link href="#elite" className="text-xs md:text-sm font-cinzel font-semibold tracking-widest text-white/90 hover:text-bta-gold transition-colors">
                            UNLOCK ELITE MEMBERSHIP ACCESS
                        </Link>
                        <span className="text-bta-gold/40 text-[10px]">◆</span>
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes ribbonScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
}