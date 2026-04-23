"use client";
import React from "react";
import AwardsCarousel from "../ui/AwardsCarousel";
import TrophyModel from "../ui/TrophyModel"; // Optional: could be used in the corner or kept if needed

export default function Section9_ExcellenceAwards() {
    return (
        <section id="section-9" className="relative min-h-screen w-full py-24 bg-transparent text-black flex flex-col items-center justify-center overflow-hidden z-10">
            {/* 4 Trophies in 4 Corners moving in a loop way */}
            <div className="absolute top-10 left-10 w-24 h-24 animate-[bounce_4s_infinite] opacity-50">
                <div className="w-full h-full bg-bta-gold/20 rounded-full blur-xl absolute"></div>
                <span className="text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">🏆</span>
            </div>
            <div className="absolute top-10 right-10 w-24 h-24 animate-[bounce_4s_infinite_0.5s] opacity-50">
                <div className="w-full h-full bg-bta-gold/20 rounded-full blur-xl absolute"></div>
                <span className="text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">🏆</span>
            </div>
            <div className="absolute bottom-10 left-10 w-24 h-24 animate-[bounce_4s_infinite_1s] opacity-50">
                <div className="w-full h-full bg-bta-gold/20 rounded-full blur-xl absolute"></div>
                <span className="text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">🏆</span>
            </div>
            <div className="absolute bottom-10 right-10 w-24 h-24 animate-[bounce_4s_infinite_1.5s] opacity-50">
                <div className="w-full h-full bg-bta-gold/20 rounded-full blur-xl absolute"></div>
                <span className="text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">🏆</span>
            </div>

            <div className="w-full px-4 flex flex-col items-center relative z-20">

                {/* Row 1 */}
                <div className="text-center mt-10 mb-6">
                    <h2 className="text-5xl md:text-7xl font-cinzel font-bold text-white leading-tight">
                        BTA Globalx <br />
                        Excellence Awards 2026
                    </h2>
                </div>

                <div className="text-center mb-12">
                    <span className="inline-block px-6 py-2 border border-bta-red text-black font-cinzel font-bold text-xl tracking-[0.2em] uppercase bg-bta-red/5 rounded-sm shadow-sm">
                        Nominations Open
                    </span>
                </div>

                {/* Cracked simple border */}
                <div className="w-full max-w-4xl mx-auto h-12 relative flex items-center justify-center mb-12 opacity-40">
                    <svg width="100%" height="20" viewBox="0 0 1000 20" preserveAspectRatio="none">
                        <path d="M0,10 L200,10 L220,2 L240,18 L260,10 L500,10 L520,3 L540,15 L560,10 L1000,10" fill="none" stroke="black" strokeWidth="2" />
                    </svg>
                </div>

                {/* Row 2: Nomination Categories */}
                <div className="w-full max-w-[1400px] flex flex-col items-center">
                    <h3 className="text-3xl md:text-4xl font-cinzel font-bold text-center mb-10 text-black uppercase tracking-widest">
                        Nomination Categories
                    </h3>

                    {/* Scrollable Horizontal List of Cards */}
                    <div className="w-full overflow-x-auto pb-12 pt-4 px-4 flex gap-6 snap-x snap-mandatory hide-scrollbars">
                        {[
                            { title: "Lifetime Visionary", icon: "🌟", desc: "Honoring lifelong dedication and impact." },
                            { title: "Entrepreneur Achiever", icon: "📈", desc: "Recognizing rapid growth and innovation." },
                            { title: "Social Transformation", icon: "🤝", desc: "Awarded for outstanding community impact." },
                            { title: "Tech Innovator", icon: "💻", desc: "Pioneering technological advancements." },
                            { title: "Green Energy Leader", icon: "🌱", desc: "Leading the charge in sustainability." }
                        ].map((cat, idx) => (
                            <div key={idx} className="flex-none w-[80vw] md:w-[300px] bg-white rounded-xl shadow-lg border border-gray-200 p-8 snap-center hover:-translate-y-2 transition-transform duration-300">
                                <div className="text-4xl mb-4 text-center">{cat.icon}</div>
                                <h4 className="text-xl font-cinzel font-bold text-gray-900 text-center mb-3">{cat.title}</h4>
                                <p className="text-gray-600 font-playfair text-center">{cat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <style jsx>{`
                .hide-scrollbars::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbars {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                }
            `}</style>
        </section>
    );
}