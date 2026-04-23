"use client";

import React from "react";
import AnimatedSVG from "@/components/ui/AnimatedSVG";
import ScrollSection from "@/components/ui/ScrollSection";
import TrophyIllustration from "@/components/svg/TrophyIllustration";
import StarburstIllustration from "@/components/svg/StarburstIllustration";
import AchievementBadge from "@/components/svg/AchievementBadge";
import GrowthCurve from "@/components/svg/GrowthCurve";
import TimelineMarker from "@/components/svg/TimelineMarker";

export default function CustomSVGShowcase() {
    return (
        <div className="w-full space-y-32">
            {/* Trophy Section */}
            <ScrollSection className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 py-24">
                <AnimatedSVG
                    animationType="scale"
                    className="w-40 h-40 md:w-56 md:h-56 text-black"
                >
                    <TrophyIllustration className="w-full h-full" />
                </AnimatedSVG>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-cinzel font-bold text-black mb-4">
                        Excellence Recognized
                    </h3>
                    <p className="text-lg text-black/70 font-playfair italic">
                        Celebrating the outstanding achievements and innovations that have shaped our journey.
                    </p>
                </div>
            </ScrollSection>

            {/* Starburst Section */}
            <ScrollSection className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 md:gap-20 py-24">
                <AnimatedSVG
                    animationType="rotate"
                    className="w-48 h-48 md:w-64 md:h-64 text-black"
                >
                    <StarburstIllustration className="w-full h-full" />
                </AnimatedSVG>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-cinzel font-bold text-black mb-4">
                        Celebrating Impact
                    </h3>
                    <p className="text-lg text-black/70 font-playfair italic">
                        Three years of transformative moments and game-changing breakthroughs.
                    </p>
                </div>
            </ScrollSection>

            {/* Achievement Badge Section */}
            <ScrollSection className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 py-24">
                <AnimatedSVG
                    animationType="fade"
                    className="w-48 h-64 md:w-56 md:h-72 text-black"
                >
                    <AchievementBadge className="w-full h-full" />
                </AnimatedSVG>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-cinzel font-bold text-black mb-4">
                        Proven Excellence
                    </h3>
                    <p className="text-lg text-black/70 font-playfair italic">
                        Recognition of continuous improvement and sustained performance across all domains.
                    </p>
                </div>
            </ScrollSection>

            {/* Growth Curve Section */}
            <ScrollSection className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 md:gap-20 py-24">
                <AnimatedSVG
                    animationType="slideUp"
                    className="w-full md:w-96 h-48 text-black"
                >
                    <GrowthCurve className="w-full h-full" />
                </AnimatedSVG>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-cinzel font-bold text-black mb-4">
                        Growth & Success
                    </h3>
                    <p className="text-lg text-black/70 font-playfair italic">
                        Consistent upward trajectory with measurable impact and meaningful milestones.
                    </p>
                </div>
            </ScrollSection>

            {/* Timeline Section */}
            <ScrollSection className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 py-24">
                <AnimatedSVG
                    animationType="float"
                    className="w-48 h-48 md:w-64 md:h-64 text-black"
                >
                    <TimelineMarker className="w-full h-full" />
                </AnimatedSVG>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-cinzel font-bold text-black mb-4">
                        Three Years Strong
                    </h3>
                    <p className="text-lg text-black/70 font-playfair italic">
                        From launch to leadership, we&apos;ve built something remarkable together.
                    </p>
                </div>
            </ScrollSection>
        </div>
    );
}
