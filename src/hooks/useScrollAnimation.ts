"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollAnimationConfig {
    trigger: string;
    start?: string;
    end?: string;
    markers?: boolean;
    scrub?: number | boolean;
    animation: (tl: gsap.core.Timeline) => void;
}

export function useScrollAnimation(config: ScrollAnimationConfig) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: config.trigger,
                start: config.start || "top center",
                end: config.end || "bottom center",
                markers: config.markers || false,
                scrub: config.scrub !== undefined ? config.scrub : 1,
            },
        });

        config.animation(tl);

        return () => {
            tl.kill();
        };
    }, [config]);

    return ref;
}

export function useParallax(offset = 0.5) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        gsap.to(ref.current, {
            y: `${offset * 100}px`,
            scrollTrigger: {
                trigger: ref.current,
                start: "top center",
                end: "bottom center",
                scrub: 1,
            },
        });
    }, [offset]);

    return ref;
}

export function useFadeInOnScroll() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        gsap.fromTo(
            ref.current,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 0.5,
                },
            }
        );
    }, []);

    return ref;
}
