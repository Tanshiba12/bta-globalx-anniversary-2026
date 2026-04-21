"use client";

import React, { useRef, useState } from "react";

const awardsData = [
    {
        title: "BTA Globalx Lifetime Visionary Excellence Award 2026",
        description: "Honors individuals whose lifelong dedication, perseverance, and visionary leadership have left an indelible mark on their field and society at large. Reserved for those who, even beyond conventional retirement, continue to contribute meaningfully, demonstrating that true impact transcends age and time.",
    },
    {
        title: "BTA Globalx Entrepreneur Achiever Award 2026",
        description: "Recognizes exceptional entrepreneurs who have achieved significant success through bold innovation, strategic excellence, and resilient leadership. These individuals have built sustainable ventures that not only thrive in a competitive landscape but also set new standards for ethical and purpose-driven enterprise.",
    },
    {
        title: "BTA Globalx Inspiring Social Transformation 2026",
        description: "Celebrates the commitment of individuals in social work who profoundly impact lives, fostering a sense of community and encouraging collective efforts toward a more compassionate world. Their dedication demonstrates that meaningful leadership extends far beyond traditional realms.",
    }
];

export default function AwardsCarousel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % awardsData.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + awardsData.length) % awardsData.length);
    };

    return (
        <div ref={containerRef} className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden pointer-events-auto">
            <div className="relative w-[320px] md:w-[480px] h-[350px] perspective-1000">
                {awardsData.map((award, index) => {
                    // Calculate offset relative to active card
                    let offset = index - activeIndex;

                    // Adjust offset to ensure wrapping behaves correctly for a chain
                    if (offset < -1) offset += awardsData.length;
                    if (offset > 1) offset -= awardsData.length;

                    // Compute style transforms based on position
                    let x = 0;
                    let z = 0;
                    let scale = 1;
                    let opacity = 0;
                    let rotateY = 0;
                    let zIndex = 0;

                    if (offset === 0) {
                        x = 0; z = 0; scale = 1; opacity = 1; rotateY = 0; zIndex = 10;
                    } else if (offset === 1) {
                        x = 100; z = -100; scale = 0.8; opacity = 0.6; rotateY = -15; zIndex = 5;
                    } else if (offset === -1) {
                        x = -100; z = -100; scale = 0.8; opacity = 0.6; rotateY = 15; zIndex = 5;
                    }

                    return (
                        <div
                            key={index}
                            className="absolute inset-0 p-8 rounded-2xl bg-[#050A30]/80 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl border border-[#D4AF37]/30 transition-all duration-500 ease-out flex flex-col justify-center"
                            style={{
                                transform: `translateX(${x}px) translateZ(${z}px) scale(${scale}) rotateY(${rotateY}deg)`,
                                opacity: opacity,
                                zIndex: zIndex,
                            }}
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-[#FFD700] mb-4 uppercase tracking-wide font-cinzel">
                                {award.title}
                            </h3>
                            <p className="text-sm md:text-base text-gray-300 leading-relaxed font-light">
                                {award.description}
                            </p>
                        </div>
                    );
                })}
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-4 z-20">
                <button onClick={prevSlide} className="px-6 py-2 border border-[#1E2761] bg-[#020210]/50 rounded-full hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-gray-300 hover:text-white transition-all uppercase tracking-widest text-xs shadow-[0_0_10px_rgba(30,39,97,0.5)]">
                    Prev
                </button>
                <button onClick={nextSlide} className="px-6 py-2 border border-[#1E2761] bg-[#020210]/50 rounded-full hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-gray-300 hover:text-white transition-all uppercase tracking-widest text-xs shadow-[0_0_10px_rgba(30,39,97,0.5)]">
                    Next
                </button>
            </div>

        </div>
    );
}
