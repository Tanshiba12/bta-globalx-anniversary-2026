import React from "react";
import VideoSliderUI from "@/components/ui/VideoSliderUI";

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