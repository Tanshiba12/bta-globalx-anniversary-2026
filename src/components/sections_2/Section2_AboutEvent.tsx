"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// ===== INLINED: Countdown =====
const CountdownFigure = ({ value }: { value: string | number; label?: string }) => {
    const [currentValue, setCurrentValue] = useState(value);
    const [nextValue, setNextValue] = useState(value);
    const [isFlipping, setIsFlipping] = useState(false);

    useEffect(() => {
        if (value !== currentValue) {
            setNextValue(value);
            setIsFlipping(true);
            const timeout = setTimeout(() => {
                setCurrentValue(value);
                setIsFlipping(false);
            }, 800);
            return () => clearTimeout(timeout);
        }
    }, [value, currentValue]);

    return (
        <div className="figure">
            <span className={`top ${isFlipping ? "flip" : ""}`}>{currentValue}</span>
            <span className={`top-back ${isFlipping ? "flip" : ""}`}>
                <span>{nextValue}</span>
            </span>
            <span className="bottom">{currentValue}</span>
            <span className="bottom-back">
                <span>{nextValue}</span>
            </span>
        </div>
    );
};

function Countdown() {
    const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date().getTime() + (58 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000) + (30 * 60 * 1000);

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setTime({ days, hours, minutes, seconds });
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const format = (val: number) => String(val).padStart(2, "0");

    return (
        <>
            <div className="countdown-vertical">
                <div className="bloc-time-row">
                    <div className="figures-row">
                        <CountdownFigure value={time.days > 99 ? String(time.days) : format(time.days)} />
                    </div>
                    <span className="count-title-side">Days</span>
                </div>

                <div className="bloc-time-row">
                    <div className="figures-row">
                        <CountdownFigure value={format(time.hours)} />
                    </div>
                    <span className="count-title-side">Hours</span>
                </div>

                <div className="bloc-time-row">
                    <div className="figures-row">
                        <CountdownFigure value={format(time.minutes)} />
                    </div>
                    <span className="count-title-side">Minutes</span>
                </div>

                <div className="bloc-time-row">
                    <div className="figures-row">
                        <CountdownFigure value={format(time.seconds)} />
                    </div>
                    <span className="count-title-side">Seconds</span>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .countdown-vertical {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
                    gap: 15px 35px;
                }
                .bloc-time-row {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .count-title-side {
                    margin-top: 15px;
                    margin-left: 0;
                    font-size: 1.1rem;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.5);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }
                .figures-row {
                    display: flex;
                    align-items: center;
                }
                .figure {
                    position: relative;
                    height: 80px;
                    width: 90px;
                    margin-right: 5px;
                    background-color: #020210;
                    border-radius: 8px;
                    box-shadow: 0 4px 20px rgba(139, 30, 139, 0.2);
                    border: 1px solid rgba(255,215,0,0.15);
                    color: #FFD700;
                    font-size: 2.5rem;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }
                .figure .top, .figure .top-back, .figure .bottom, .figure .bottom-back {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                    background: #020210;
                }
                .figure .top-back, .figure .bottom-back {
                    opacity: 0;
                }
                `
            }}>
            </style>
        </>
    );
}

// ===== END INLINED: Countdown =====

export default function Section2_AboutEvent() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center+=100px",
                once: true,
            }
        });

        // === TITLE ANIMATION ===
        tl.fromTo(".event-title", {
            opacity: 0,
            y: 30,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
        }, 0);

        // === LEFT CARD - Date ===
        tl.fromTo(".date-card", {
            x: -60,
            opacity: 0,
        }, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.2)",
        }, 0.2);

        // === CENTER CARD - Time ===
        tl.fromTo(".time-card", {
            y: 40,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.2)",
        }, 0.3);

        // === RIGHT CARD - Location ===
        tl.fromTo(".location-card", {
            x: 60,
            opacity: 0,
        }, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.2)",
        }, 0.4);

        // === COUNTDOWN CARD ===
        tl.fromTo(".countdown-card-section", {
            scale: 0.9,
            opacity: 0,
            y: 20,
        }, {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.3)",
        }, 0.5);

        // === Card hover effects ===
        const cards = containerRef.current?.querySelectorAll(".info-card") || [];
        cards.forEach((card) => {
            card.addEventListener("mouseenter", () => {
                gsap.to(card, {
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                    duration: 0.3,
                    overwrite: "auto"
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    y: 0,
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    duration: 0.3,
                    overwrite: "auto"
                });
            });
        });

    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            id="section-2"
            className="relative w-full min-h-screen flex flex-col justify-center items-center py-20 md:py-28 bg-transparent"
        >
            {/* Main container */}
            <div ref={containerRef} className="relative z-20 w-full px-4 md:px-8 max-w-7xl">

                {/* Title */}
                <div className="event-title text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                        Event Details
                    </h2>
                    <p className="text-black text-lg font-normal">
                        1st August 2026 • Sheraton Johor Bahru, Malaysia
                    </p>
                </div>

                {/* 3 Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">

                    {/* Date Card */}
                    <div className="date-card info-card p-8 md:p-10 rounded-lg bg-white/8 border border-white/30 hover:bg-white/12 transition-all duration-300"
                        style={{
                            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                        }}
                    >
                        <p className="text-black text-sm font-semibold uppercase tracking-wide mb-4">Date</p>
                        <h3 className="text-white text-4xl font-bold mb-2">August 1st</h3>
                        <p className="text-black text-base">Friday, 2026</p>
                    </div>

                    {/* Time Card */}
                    <div className="time-card info-card p-8 md:p-10 rounded-lg bg-white/8 border border-white/30 hover:bg-white/12 transition-all duration-300"
                        style={{
                            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                        }}
                    >
                        <p className="text-black text-sm font-semibold uppercase tracking-wide mb-4">Time</p>
                        <h3 className="text-white text-4xl font-bold mb-2">2:30 PM</h3>
                        <p className="text-black text-base">Onwards till 10 PM</p>
                    </div>

                    {/* Location Card */}
                    <div className="location-card info-card p-8 md:p-10 rounded-lg bg-white/8 border border-white/30 hover:bg-white/12 transition-all duration-300"
                        style={{
                            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                        }}
                    >
                        <p className="text-black text-sm font-semibold uppercase tracking-wide mb-4">Location</p>
                        <h3 className="text-white text-2xl font-bold mb-2">Sheraton</h3>
                        <p className="text-black text-base">Johor Bahru, Malaysia</p>
                    </div>

                </div>

                {/* Countdown Card - Full Width */}
                <div className="countdown-card-section info-card p-8 md:p-12 rounded-lg bg-white/8 border border-white/30"
                    style={{
                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    }}
                >
                    <div className="text-center mb-8">
                        <p className="text-black text-sm font-semibold uppercase tracking-wide mb-2">Time Remaining</p>
                        <h3 className="text-white text-3xl font-bold">Countdown to Event</h3>
                    </div>

                    <div className="flex justify-center">
                        <Countdown />
                    </div>
                </div>

            </div>

            <style jsx>{`
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
}
