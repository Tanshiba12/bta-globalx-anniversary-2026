"use client";
import React, { useState } from "react";
import Image from "next/image";

const dummyJourneyImages = [
    { src: "/assets/gallery/dummy1.svg", year: "2023", label: "The Beginning" },
    { src: "/assets/gallery/dummy2.svg", year: "2024", label: "Expansion & Growth" },
    { src: "/assets/gallery/dummy3.svg", year: "2025", label: "Global Reach" },
    { src: "/assets/gallery/dummy1.svg", year: "2025 (Late)", label: "First Awards Ceremony" },
    { src: "/assets/gallery/dummy2.svg", year: "2026", label: "The 3rd Anniversary" },
];

export default function Section7_OurJourney() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="section-7" className="relative min-h-screen w-full py-24 bg-transparent text-black flex flex-col items-center justify-center overflow-hidden">

            {/* Row 1 */}
            <div className="w-full px-4 text-center mt-10 mb-20 relative z-20">
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-cinzel font-bold text-white leading-tight">
                    A visionary idea <br />
                    that started 3 years <br />
                    ago now its ignited <br />
                    into a global <br />
                    transformation.
                </h2>
            </div>

            {/* Network threads bg between Row 1 and Row 2 */}
            <div className="absolute top-1/3 left-0 w-full h-[60vh] pointer-events-none opacity-30 z-0 flex items-center justify-center overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="none">
                    {/* Abstract network threads connecting points */}
                    <path d="M-100,250 Q250,50 500,250 T1100,250" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="1" strokeDasharray="4,4" />
                    <path d="M0,350 Q250,450 500,250 T1000,100" fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="2" />
                    <path d="M0,150 Q300,100 600,300 T1000,400" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5" />
                    <path d="M200,500 L500,250 L800,0" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
                    {/* Nodes */}
                    <circle cx="250" cy="150" r="5" fill="black" />
                    <circle cx="500" cy="250" r="8" fill="black" className="animate-pulse" />
                    <circle cx="750" cy="175" r="5" fill="black" />
                    <circle cx="600" cy="300" r="4" fill="black" />
                    <circle cx="300" cy="320" r="3" fill="black" />
                </svg>
            </div>

            {/* Row 2: 3D Curved Gallery */}
            <div className="relative w-full overflow-x-auto pb-20 pt-10 px-8 flex gap-4 md:gap-8 snap-x snap-mandatory hide-scrollbars justify-start md:justify-center items-center z-10" style={{ perspective: "2000px" }}>
                {dummyJourneyImages.map((item, idx) => {
                    const isActive = activeIndex === idx;
                    // create a horizontal curve effect based on index 
                    const centerIdx = Math.floor(dummyJourneyImages.length / 2);
                    const diff = idx - centerIdx;
                    const rotateY = isActive ? 0 : diff * -15; // cards face center
                    const translateZ = isActive ? 100 : Math.abs(diff) * -80; // bow out towards user

                    return (
                        <div
                            key={idx}
                            onClick={() => setActiveIndex(isActive ? null : idx)}
                            className="relative flex-none w-[70vw] md:w-[25vw] max-w-[350px] h-[45vh] md:h-[55vh] cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] z-10 snap-center group"
                            style={{
                                transformStyle: "preserve-3d",
                                transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px) ${isActive ? 'scale(1.05)' : 'scale(1)'}`,
                                zIndex: isActive ? 50 : 10,
                            }}
                        >
                            <div className={`absolute inset-0 transition-all duration-700 overflow-hidden
                                ${isActive
                                    ? 'clip-path-active shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl bg-white/40 ring-1 ring-white/50'
                                    : 'clip-path-idle shadow-[0_10px_30px_rgba(0,0,0,0.1)] opacity-80 hover:opacity-100 bg-gray-200'
                                }`}
                            >
                                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 absolute inset-0 -z-10"></div>

                                <Image
                                    src={item.src}
                                    alt={item.label}
                                    fill
                                    className={`object-cover transition-opacity duration-700 mix-blend-multiply ${isActive ? 'opacity-100' : 'opacity-70'}`}
                                />

                                {/* Card Text Content */}
                                <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 transition-all duration-500 flex flex-col justify-end
                                    ${isActive ? 'h-full opacity-100' : 'h-1/2 opacity-0 group-hover:opacity-100'}`}>
                                    <h3 className="text-white font-cinzel text-3xl font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.year}</h3>
                                    <p className="text-gray-200 font-playfair text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.label}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Row 3 */}
            <div className="w-full text-center mt-8 relative z-20">
                <h2 className="text-2xl md:text-4xl font-cinzel font-bold text-gray-800/20 uppercase tracking-[0.4em]">
                    Our Journey
                </h2>
            </div>

            <style jsx>{`
                .hide-scrollbars::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbars {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                }
                /* Diamond/clipped shape for idle */
                .clip-path-idle {
                    clip-path: polygon(10% 0, 100% 5%, 90% 100%, 0 95%);
                }
                /* Full rectangle for active */
                .clip-path-active {
                    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                    border-radius: 1.5rem;
                }
            `}</style>
        </section>
    );
}