"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TrophyIllustration from "@/components/svg/TrophyIllustration";

gsap.registerPlugin(ScrollTrigger);

export interface ScrollSectionProps {
    children: React.ReactNode;
    className?: string;
    animateOnScroll?: boolean;
}

export default function ScrollSection({ children, className = "", animateOnScroll = true }: ScrollSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!animateOnScroll || !sectionRef.current) return;

        // Fade in and slide up animation
        gsap.fromTo(
            sectionRef.current,
            {
                opacity: 0,
                y: 60,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: 0.5,
                },
            }
        );
    }, [animateOnScroll]);

    return (
        <div ref={sectionRef} className={`scroll-section ${className}`}>
            {children}
        </div>
    );
}
