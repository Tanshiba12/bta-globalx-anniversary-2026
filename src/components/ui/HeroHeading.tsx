"use client";

import React, { forwardRef } from "react";

const HeroHeading = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div
            ref={ref}
            ///  //
            className="hero-heading opacity-0 translate-y-24 flex flex-col items-center justify-center text-center absolute inset-0 z-30 pointer-events-none"
            style={{ transformStyle: "preserve-3d" }}
        >
            <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-bta-gold drop-shadow-[0_0_20px_rgba(255,212,29,0.3)] leading-tight max-w-5xl tracking-wide pointer-events-auto cursor-text selection:bg-bta-red selection:text-white">
                BTA Globalx 2026: <br />
                <span className="text-white pointer-events-auto cursor-text">3rd Anniversary & EXcellence Awards</span>
            </h2>

            <div className="mt-8 w-px h-16 bg-bta-gold pointer-events-none"></div>

            <h3 className="mt-8 text-xl md:text-3xl font-playfair text-bta-orange tracking-widest font-light pointer-events-auto cursor-text selection:bg-bta-red selection:text-white">
                Featuring BTA Globalx Excellence Award 2026
            </h3>
        </div>
    );
});

HeroHeading.displayName = "HeroHeading";
export default HeroHeading;
