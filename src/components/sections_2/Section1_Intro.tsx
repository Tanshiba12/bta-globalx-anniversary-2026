"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(useGSAP);

// ===== INLINED: AnimatedButton =====
interface AnimatedButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
}

function AnimatedButton({ text, onClick, className = "" }: AnimatedButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`cta-button group relative px-8 md:px-10 py-4 md:py-5 border-2 border-black/40 bg-gradient-to-r from-black/5 to-black/10 hover:from-black hover:to-black text-black hover:text-white font-cinzel tracking-[0.15em] uppercase text-sm md:text-base font-bold transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 rounded-sm ${className}`}
        >
            {/* Animated background shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700" />

            {/* Button content */}
            <div className="relative flex items-center justify-center gap-3">
                <span>{text}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-500" />
            </div>
        </button>
    );
}

// ===== INLINED: AccentElement =====
interface AccentElementProps {
    text: string;
    position: "left" | "right";
    className?: string;
}

function AccentElement({ text, position, className = "" }: AccentElementProps) {
    const getStyles = () => {
        switch (position) {
            case "left":
                return { left: "-60px", top: "50%", transform: "translateY(-50%) rotate(-90deg)", transformOrigin: "center center" };
            case "right":
                return { right: "-60px", top: "50%", transform: "translateY(-50%) rotate(90deg)", transformOrigin: "center center" };
            default:
                return {};
        }
    };

    return (
        <div
            className={`accent-element absolute hidden lg:block z-40 mix-blend-multiply ${className}`}
            style={getStyles()}
        >
            <span className="inline-block uppercase tracking-[0.25em] text-[10px] font-semibold text-black whitespace-nowrap">
                {text}
            </span>
        </div>
    );
}

export default function Section1_Intro() {
    const containerRef = useRef<HTMLElement>(null);
    const decorativeRef = useRef<HTMLDivElement>(null);

    // SVG decorative shapes
    const GeometricAccent = ({ delay = 0 }: { delay?: number }) => (
        <div
            className="absolute opacity-0 pointer-events-none"
            style={{
                animation: `float 6s ease-in-out infinite`,
                animationDelay: `${delay}s`
            }}
        >
            <svg width="120" height="120" viewBox="0 0 120 120" className="text-black/10">
                <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="60" cy="60" r="35" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
                <line x1="60" y1="10" x2="60" y2="30" stroke="currentColor" strokeWidth="2" opacity="0.4" />
                <line x1="60" y1="90" x2="60" y2="110" stroke="currentColor" strokeWidth="2" opacity="0.4" />
            </svg>
        </div>
    );

    useGSAP(() => {
        const tl = gsap.timeline({ delay: 0.3 });

        // === META TEXT ANIMATION ===
        // Slide in from left with rotation
        tl.fromTo(".meta-text", {
            x: -80,
            opacity: 0,
            rotateZ: -15,
        }, {
            x: 0,
            opacity: 1,
            rotateZ: 0,
            duration: 1.0,
            ease: "elastic.out(1, 0.8)",
        }, 0);

        // === MAIN TITLE ANIMATIONS - UNIFIED ELEMENT ANIMATIONS ===
        // Line 1: "3RD ANNIVERSARY" - Vertical slide with unified animation
        tl.fromTo(".title-line-1", {
            y: 100,
            opacity: 0,
            scale: 0.8,
            rotateX: -80,
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            duration: 1.2,
            ease: "back.out(1.3)",
        }, 0.2);

        // Line 2: "&" - Rotate and scale from center
        tl.fromTo(".title-line-2", {
            scale: 0,
            opacity: 0,
            rotateZ: 180,
        }, {
            scale: 1,
            opacity: 1,
            rotateZ: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.7)",
        }, 0.4);

        // Line 3: "EXCELLENCE AWARDS 2026" - Horizontal slide with unified animation
        tl.fromTo(".title-line-3", {
            x: 80,
            opacity: 0,
            rotateY: 70,
        }, {
            x: 0,
            opacity: 1,
            rotateY: 0,
            duration: 1.2,
            ease: "power2.out",
        }, 0.5);

        // === SUBTITLE ANIMATION ===
        // Fade with blur reduction and slight scale
        tl.fromTo(".subtitle-element", {
            y: 60,
            opacity: 0,
            filter: "blur(15px)",
            scale: 0.95,
        }, {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
        }, 1.2);

        // === CTA BUTTON ANIMATION ===
        // Bounce with shadow grow
        tl.fromTo(".cta-button", {
            y: 80,
            opacity: 0,
            scale: 0.6,
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.0,
            ease: "back.out(1.5)",
        }, 1.8);

        // === ACCENT ELEMENTS ===
        tl.fromTo(".accent-element", {
            opacity: 0,
            x: (i) => i === 0 ? -100 : 100,
        }, {
            opacity: 1,
            x: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "power2.out",
        }, 0.8);

        // === CONTINUOUS FLOATING ANIMATIONS ===
        // Accent elements subtle float
        gsap.to(".accent-element", {
            y: 12,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: (i) => i * 0.2,
        });

        // === META TEXT SHINY EFFECT ANIMATION ===
        // Shine effect from left to right every 3 seconds
        gsap.to(".meta-text", {
            backgroundPosition: "200% center",
            duration: 1.5,
            repeat: -1,
            repeatDelay: 1.5,
            ease: "power1.inOut",
        });

        // === TITLE SMOOTH GROWING/NORMALIZING ANIMATION ===
        // Smooth unified animation for whole title lines (not character-based)
        gsap.to(".title-line-1", {
            scale: 1.02,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 2.5,
        });

        gsap.to(".title-line-3", {
            scale: 1.02,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 2.5,
        });

        // === HOVER WOBBLE EFFECT ===
        // Add wobble animation on mouse hover for title lines
        const titleLine1 = containerRef.current?.querySelector(".title-line-1") || null;
        const titleLine3 = containerRef.current?.querySelector(".title-line-3") || null;

        const addWobble = (element: Element | null) => {
            if (!element) return;

            element.addEventListener("mouseenter", () => {
                // Wobble animation on each letter
                gsap.to(element.querySelectorAll(".char"), {
                    x: (i) => Math.sin(i * 0.5) * 6,
                    y: (i) => Math.cos(i * 0.3) * 4,
                    rotation: (i) => Math.sin(i) * 3,
                    duration: 0.5,
                    ease: "power2.out",
                    overwrite: "auto"
                });
            });

            element.addEventListener("mouseleave", () => {
                // Return to normal
                gsap.to(element.querySelectorAll(".char"), {
                    x: 0,
                    y: 0,
                    rotation: 0,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.5)",
                    overwrite: "auto"
                });
            });
        };

        addWobble(titleLine1);
        addWobble(titleLine3);

        return () => {
            // Cleanup is handled by GSAP useGSAP scope
        };

    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            id="section-1"
            className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-24"
            style={{ perspective: "1200px" }}
        >
            {/* Animated Background Decorative Elements */}
            <GeometricAccent delay={0} />
            <div className="absolute top-24 right-12 opacity-0 pointer-events-none" style={{ animation: "float 7s ease-in-out infinite" }}>
                <svg width="100" height="100" viewBox="0 0 100 100" className="text-black/5">
                    <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="2" fill="none" />
                    <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                    <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                </svg>
            </div>

            {/* Main Hero Content Container */}
            <div className="relative z-30 flex flex-col items-center justify-center text-center w-full max-w-6xl space-y-8">

                {/* Meta Text - Top Label */}
                <div className="flex items-center justify-center gap-3 w-full">
                    <span
                        className="meta-text uppercase tracking-[0.4em] text-sm md:text-base font-bold whitespace-nowrap text-black"
                        style={{
                            background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,1) 80%, rgba(0,0,0,1) 100%)",
                            backgroundSize: "200% center",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            fontFamily: "var(--font-outfit), sans-serif",
                        }}
                    >
                        BTA GlobalX Anniversary
                    </span>
                </div>

                {/* Main Title - Custom Animation per Line */}
                <div ref={decorativeRef} className="w-full space-y-3 md:space-y-6">
                    {/* Line 1: "3RD ANNIVERSARY" */}
                    <div className="title-line-1 overflow-hidden">
                        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-normal leading-none" style={{
                            fontFamily: 'var(--font-outfit), sans-serif',
                            textShadow: "2px 2px 4px rgba(0,0,0,0.08), 4px 4px 8px rgba(0,0,0,0.06)",
                            letterSpacing: "0.01em",
                            fontWeight: "900"
                        }}>
                            {Array.from("3RD ANNIVERSARY").map((char, i) => (
                                <span key={i} className="char inline-block">{char === " " ? "\u00A0" : char}</span>
                            ))}
                        </h1>
                    </div>

                    {/* Line 2: "&" */}
                    <div className="title-line-2 overflow-hidden py-1">
                        <div className="text-3xl md:text-4xl font-light text-black" style={{
                            fontFamily: 'var(--font-outfit), sans-serif',
                        }}>
                            <span className="char inline-block">&</span>
                        </div>
                    </div>

                    {/* Line 3: "EXCELLENCE AWARDS 2026" */}
                    <div className="title-line-3 overflow-hidden">
                        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide leading-none" style={{
                            fontFamily: 'var(--font-outfit), sans-serif',
                            textShadow: "2px 2px 4px rgba(0,0,0,0.08)",
                            letterSpacing: "0.03em",
                            fontWeight: "800"
                        }}>
                            {Array.from("EXCELLENCE AWARDS 2026").map((char, i) => (
                                <span key={i} className="char inline-block">{char === " " ? "\u00A0" : char}</span>
                            ))}
                        </h2>
                    </div>
                </div>

                {/* Subtitle */}
                <div className="w-full max-w-3xl px-4 md:px-0 pt-6">
                    <p className="subtitle-element text-lg md:text-xl lg:text-2xl font-playfair italic text-black tracking-wide font-light leading-relaxed">
                        Celebrating three years of transformative impact while honoring the most outstanding achievements across industries.
                    </p>
                </div>

                {/* CTA Button */}
                <div className="pt-10 md:pt-12">
                    <AnimatedButton text="Step Into the Spotlight" />
                </div>

            </div>

            {/* Side Accent Elements */}
            <AccentElement text="EST. 2026 – GLOBAL X" position="left" />
            <AccentElement text="HONORING EXCELLENCE" position="right" />

            {/* Floating CSS Animation */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(2deg); }
                }
            `}</style>
        </section>
    );

}

