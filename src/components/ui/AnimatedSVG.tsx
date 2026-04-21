"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface AnimatedSVGProps {
    children: React.ReactNode;
    className?: string;
    animationType?: "fade" | "scale" | "rotate" | "float" | "slideUp" | "slideDown";
    duration?: number;
    delay?: number;
    triggerOnScroll?: boolean;
}

export default function AnimatedSVG({
    children,
    className = "",
    animationType = "fade",
    duration = 1.5,
    delay = 0,
    triggerOnScroll = true,
}: AnimatedSVGProps) {
    const svgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!svgRef.current) return;

        const getAnimationProps = () => {
            switch (animationType) {
                case "scale":
                    return { from: { scale: 0 }, to: { scale: 1 } };
                case "rotate":
                    return { from: { rotation: -180, opacity: 0 }, to: { rotation: 0, opacity: 1 } };
                case "float":
                    return {
                        from: { y: 30, opacity: 0 },
                        to: { y: 0, opacity: 1, repeat: -1, yoyo: true },
                    };
                case "slideUp":
                    return { from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1 } };
                case "slideDown":
                    return { from: { y: -100, opacity: 0 }, to: { y: 0, opacity: 1 } };
                default:
                    return { from: { opacity: 0 }, to: { opacity: 1 } };
            }
        };

        const { from, to } = getAnimationProps();

        if (triggerOnScroll) {
            gsap.fromTo(svgRef.current, from, {
                ...to,
                duration,
                delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: svgRef.current,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 0.5,
                },
            });
        } else {
            gsap.fromTo(svgRef.current, from, {
                ...to,
                duration,
                delay,
                ease: "power3.out",
            });
        }
    }, [animationType, duration, delay, triggerOnScroll]);

    return (
        <div ref={svgRef} className={className}>
            {children}
        </div>
    );
}
