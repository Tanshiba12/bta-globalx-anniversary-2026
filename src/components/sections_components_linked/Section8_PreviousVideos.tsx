import React from "react";
import VideoSliderUI from "@/components/ui/VideoSliderUI";

const oldVideos = [
    { title: "2024 Highlight", description: "The dawn of a new era in excellence.", thumbnailUrl: "/assets/videos/bg-dummy.mp4" },
    { title: "2025 Gala Dinner", description: "A night to remember.", thumbnailUrl: "/assets/videos/bg-dummy2.mp4" },
    { title: "Previous Award Ceremony", description: "Recognizing outstanding achievements.", thumbnailUrl: "/assets/videos/bg-dummy.mp4" }
];

export default function Section8_PreviousVideos() {
    return (
        <section id="section-8" className="relative w-full bg-transparent flex flex-col justify-center">
            <div className="absolute top-10 left-0 w-full z-20 pointer-events-none flex justify-center">
                <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-white tracking-[0.2em] uppercase">
                    Previous Years
                </h2>
            </div>
            <VideoSliderUI videos={oldVideos} />
        </section>
    );
}