"use client";

import React, { useState } from "react";

// ===== INLINED: VideoSliderUI =====
interface VideoData {
    title: string;
    description?: string;
    thumbnailUrl: string;
    videoUrl?: string;
}

interface VideoSliderUIProps {
    videos: VideoData[];
    sectionTheme?: "dark" | "light";
}

function VideoSliderUI({ videos, sectionTheme = "dark" }: VideoSliderUIProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % videos.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
    };

    const activeVideo = videos[activeIndex];
    const nextVideo = videos[(activeIndex + 1) % videos.length];

    const textColor = sectionTheme === "dark" ? "text-white" : "text-black";
    const bgBlur = sectionTheme === "dark" ? "bg-black/30" : "bg-white/30";

    return (
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24">
            {/* Slider UI Layer */}
            <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 md:px-12 flex flex-row items-center justify-center gap-4 md:gap-12 h-full">

                {/* Left Arrow */}
                <div className="flex z-30">
                    <button
                        onClick={handlePrev}
                        disabled={activeIndex === 0}
                        className={`p-4 rounded-full backdrop-blur-lg transition-all border ${activeIndex === 0 ? 'opacity-0 cursor-default' : 'bg-black/30 hover:bg-white/20 border-white/20 hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)]'} text-white`}
                        aria-label="Previous Video"
                    >
                        <svg className="w-8 h-8 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                </div>

                {/* Main 3D Video Box */}
                <div
                    className="w-full max-w-5xl aspect-video bg-black/60 rounded-3xl border border-white/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(255,255,255,0.1)] flex items-center justify-center relative overflow-hidden group transform hover:scale-[1.02] transition-transform duration-500"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {activeVideo.thumbnailUrl.endsWith('.mp4') ? (
                        <video
                            key={`vid-${activeIndex}`}
                            src={activeVideo.thumbnailUrl}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-500 animate-in fade-in"
                        />
                    ) : (
                        <img
                            key={`img-${activeIndex}`}
                            src={activeVideo.thumbnailUrl}
                            alt={activeVideo.title}
                            className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-500 animate-in fade-in"
                        />
                    )}
                    {/* Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                        <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">{activeVideo.title}</h3>
                        {activeVideo.description && <p className="text-gray-200 mt-3 text-lg drop-shadow-md">{activeVideo.description}</p>}
                    </div>
                </div>

                {/* Right Arrow */}
                <div className="flex z-30">
                    <button
                        onClick={handleNext}
                        disabled={activeIndex === videos.length - 1}
                        className={`p-4 rounded-full backdrop-blur-lg transition-all border ${activeIndex === videos.length - 1 ? 'opacity-0 cursor-default' : 'bg-black/30 hover:bg-white/20 border-white/20 hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)]'} text-white`}
                        aria-label="Next Video"
                    >
                        <svg className="w-8 h-8 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

// ===== END INLINED: VideoSliderUI =====

const v = [
    { title: "BTA Official Video", description: "Experience the grand vision.", thumbnailUrl: "/assets/videos/bg-dummy.mp4" },
    { title: "About Company", description: "Discover our journey and impact.", thumbnailUrl: "/assets/videos/bg-dummy2.mp4" },
    { title: "About Founder", description: "Meet the visionary behind it all.", thumbnailUrl: "/assets/videos/bg-dummy.mp4" }
];

export default function Section4_OfficialVideo() {
    return (
        <section id="section-4" className="relative w-full bg-transparent flex flex-col justify-center">
            <VideoSliderUI videos={v} />
        </section>
    );
}