"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ===== INLINED: AnimatedSVG =====
interface AnimatedSVGProps {
    children: React.ReactNode;
    className?: string;
    animationType?: "fade" | "scale" | "rotate" | "float" | "slideUp" | "slideDown";
    duration?: number;
    delay?: number;
    triggerOnScroll?: boolean;
}

function AnimatedSVG({
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

// ===== END INLINED: AnimatedSVG =====

// ===== INLINED: ScrollSection =====
interface ScrollSectionProps {
    children: React.ReactNode;
    className?: string;
    animateOnScroll?: boolean;
}

function ScrollSection({ children, className = "", animateOnScroll = true }: ScrollSectionProps) {
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

// ===== END INLINED: ScrollSection =====

// ===== INLINED: TrophyIllustration =====
function TrophyIllustration({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 200 280"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Base */}
            <rect x="60" y="220" width="80" height="12" fill="currentColor" />
            <rect x="50" y="210" width="100" height="10" fill="currentColor" opacity="0.6" />

            {/* Pedestal */}
            <path
                d="M 80 220 L 75 180 L 125 180 L 120 220"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
            />

            {/* Cup Bowl */}
            <path
                d="M 80 180 Q 70 160 70 140 Q 70 120 85 115 L 115 115 Q 130 120 130 140 Q 130 160 120 180"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="currentColor"
                opacity="0.1"
            />

            {/* Cup Highlight */}
            <path
                d="M 80 170 Q 75 160 75 150"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                opacity="0.7"
            />

            {/* Left Handle */}
            <path
                d="M 75 155 Q 55 155 55 140 Q 55 125 70 125"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
            />

            {/* Right Handle */}
            <path
                d="M 125 155 Q 145 155 145 140 Q 145 125 130 125"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
            />

            {/* Star on Cup */}
            <g transform="translate(100, 140)">
                <path
                    d="M 0,-8 L 2.4,-2.4 L 8.8,-0.8 L 4,-3.2 L 5.6,-9.6 L 0,-6.4 L -5.6,-9.6 L -4,-3.2 L -8.8,-0.8 L -2.4,-2.4 Z"
                    fill="currentColor"
                    opacity="0.8"
                />
            </g>

            {/* Decorative Lines */}
            <line x1="100" y1="115" x2="100" y2="105" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
            <circle cx="100" cy="100" r="4" fill="currentColor" opacity="0.3" />
        </svg>
    );
}

// ===== END INLINED: TrophyIllustration =====

// ===== INLINED: StarburstIllustration =====
function StarburstIllustration({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 200 200"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Outer rays */}
            <g stroke="currentColor" strokeWidth="2" opacity="0.6">
                {[...Array(12)].map((_, i) => {
                    const angle = (i * 360) / 12;
                    const rad = (angle * Math.PI) / 180;
                    const x1 = 100 + 70 * Math.cos(rad);
                    const y1 = 100 + 70 * Math.sin(rad);
                    const x2 = 100 + 90 * Math.cos(rad);
                    const y2 = 100 + 90 * Math.sin(rad);
                    return (
                        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
                    );
                })}
            </g>

            {/* Middle circle */}
            <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="2" opacity="0.5" />

            {/* Inner rays */}
            <g stroke="currentColor" strokeWidth="1.5" opacity="0.4">
                {[...Array(24)].map((_, i) => {
                    const angle = (i * 360) / 24;
                    const rad = (angle * Math.PI) / 180;
                    const x1 = 100 + 40 * Math.cos(rad);
                    const y1 = 100 + 40 * Math.sin(rad);
                    const x2 = 100 + 50 * Math.cos(rad);
                    const y2 = 100 + 50 * Math.sin(rad);
                    return (
                        <line key={`inner-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} />
                    );
                })}
            </g>

            {/* Center circle */}
            <circle cx="100" cy="100" r="15" fill="currentColor" opacity="0.3" />
        </svg>
    );
}

// ===== END INLINED: StarburstIllustration =====

// ===== INLINED: AchievementBadge =====
function AchievementBadge({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 200 240"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Ribbon - Left */}
            <path
                d="M 70 40 L 50 80 L 50 140 Q 50 150 60 150 L 70 120 Z"
                fill="currentColor"
                opacity="0.2"
            />

            {/* Ribbon - Right */}
            <path
                d="M 130 40 L 150 80 L 150 140 Q 150 150 140 150 L 130 120 Z"
                fill="currentColor"
                opacity="0.2"
            />

            {/* Main Badge Circle */}
            <circle cx="100" cy="90" r="60" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="100" cy="90" r="55" stroke="currentColor" strokeWidth="1" opacity="0.5" />

            {/* Inner Badge Circle */}
            <circle cx="100" cy="90" r="45" fill="currentColor" opacity="0.05" />

            {/* Star Center */}
            <g transform="translate(100, 90)">
                {/* Outer Star Points */}
                {[...Array(5)].map((_, i) => {
                    const angle = (i * 144 - 90) * (Math.PI / 180);
                    const x = 30 * Math.cos(angle);
                    const y = 30 * Math.sin(angle);
                    return (
                        <line
                            key={`outer-${i}`}
                            x1="0"
                            y1="0"
                            x2={x}
                            y2={y}
                            stroke="currentColor"
                            strokeWidth="2"
                            opacity="0.7"
                        />
                    );
                })}

                {/* Inner star shape */}
                <path
                    d="M 0,-20 L 6,-6 L 20,-2 L 8,8 L 12,22 L 0,16 L -12,22 L -8,8 L -20,-2 L -6,-6 Z"
                    fill="currentColor"
                    opacity="0.6"
                />
            </g>

            {/* Bottom text area */}
            <line x1="70" y1="165" x2="130" y2="165" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
            <text x="100" y="185" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.6">
                EXCELLENCE
            </text>
        </svg>
    );
}

// ===== END INLINED: AchievementBadge =====

// ===== INLINED: GrowthCurve =====
function GrowthCurve({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 240 180"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Grid lines */}
            <g stroke="currentColor" strokeWidth="1" opacity="0.2">
                <line x1="30" y1="30" x2="30" y2="150" />
                <line x1="30" y1="150" x2="220" y2="150" />
                {[...Array(4)].map((_, i) => (
                    <line key={`h-${i}`} x1="30" y1={150 - i * 30} x2="220" y2={150 - i * 30} />
                ))}
                {[...Array(6)].map((_, i) => (
                    <line key={`v-${i}`} x1={30 + i * 32} y1="30" x2={30 + i * 32} y2="150" />
                ))}
            </g>

            {/* Axis lines */}
            <line x1="30" y1="150" x2="220" y2="150" stroke="currentColor" strokeWidth="2.5" />
            <line x1="30" y1="30" x2="30" y2="150" stroke="currentColor" strokeWidth="2.5" />

            {/* Main growth curve */}
            <path
                d="M 40 140 Q 80 130 110 100 T 180 40"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                opacity="0.8"
            />

            {/* Gradient fill under curve */}
            <path
                d="M 40 140 Q 80 130 110 100 T 180 40 L 180 150 Q 120 150 40 150 Z"
                fill="currentColor"
                opacity="0.1"
            />

            {/* Data points */}
            {[40, 80, 120, 160].map((x, i) => {
                const points = [140, 120, 80, 50];
                return (
                    <g key={`point-${i}`}>
                        <circle cx={x} cy={points[i]} r="4" fill="currentColor" opacity="0.7" />
                        <circle cx={x} cy={points[i]} r="6" stroke="currentColor" strokeWidth="1.5" />
                    </g>
                );
            })}

            {/* Arrow pointing up */}
            <g transform="translate(200, 60)" opacity="0.6">
                <line x1="0" y1="20" x2="0" y2="0" stroke="currentColor" strokeWidth="2" />
                <path
                    d="M -5 5 L 0 0 L 5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}

// ===== END INLINED: GrowthCurve =====

// ===== INLINED: TimelineMarker =====
function TimelineMarker({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 200 200"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Central circle - large */}
            <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="100" cy="100" r="45" stroke="currentColor" strokeWidth="1" opacity="0.4" />

            {/* Inner circle */}
            <circle cx="100" cy="100" r="30" fill="currentColor" opacity="0.08" />

            {/* Timeline connection points */}
            {[...Array(6)].map((_, i) => {
                const angle = (i * 360) / 6;
                const rad = (angle * Math.PI) / 180;
                const x = 100 + 55 * Math.cos(rad);
                const y = 100 + 55 * Math.sin(rad);
                return (
                    <g key={`point-${i}`}>
                        <circle cx={x} cy={y} r="3" fill="currentColor" opacity="0.6" />
                        <circle cx={x} cy={y} r="5" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                    </g>
                );
            })}

            {/* Connecting lines from center */}
            {[...Array(6)].map((_, i) => {
                const angle = (i * 360) / 6;
                const rad = (angle * Math.PI) / 180;
                const x = 100 + 50 * Math.cos(rad);
                const y = 100 + 50 * Math.sin(rad);
                return (
                    <line
                        key={`line-${i}`}
                        x1="100"
                        y1="100"
                        x2={x}
                        y2={y}
                        stroke="currentColor"
                        strokeWidth="1.5"
                        opacity="0.3"
                    />
                );
            })}

            {/* Center number/text placeholder */}
            <circle cx="100" cy="100" r="15" fill="currentColor" opacity="0.12" />
            <text
                x="100"
                y="105"
                textAnchor="middle"
                fontSize="20"
                fontWeight="bold"
                fill="currentColor"
                opacity="0.6"
            >
                3
            </text>
        </svg>
    );
}

// ===== END INLINED: TimelineMarker =====

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
