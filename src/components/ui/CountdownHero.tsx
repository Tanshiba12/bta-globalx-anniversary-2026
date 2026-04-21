"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HeroHeading from "./HeroHeading";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Figure = ({ value }: { value: string | number }) => {
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

export default function CountdownHero() {
    const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const containerRef = useRef<HTMLElement>(null);
    const countdownRef = useRef<HTMLDivElement>(null);
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=200%", /// Scroll duration //
                scrub: 1,
                pin: true,
            }
        });

        /// Animate the Video background //
        tl.to(videoContainerRef.current, {
            rotateX: 60,
            y: "35vh",   /// Move down //
            scale: 0.66, /// Scale out //
            opacity: 0.8,
            transformOrigin: "bottom center",
            ease: "power2.inOut",
        }, 0);

        /// Title fade out //
        tl.to(".countdown-title", {
            opacity: 0,
            scale: 0.5,
        }, 0);

        /// Countdown moves up //
        tl.to(countdownRef.current, {
            scale: 0.3,
            y: () => - (window.innerHeight / 2 - 100),
            ease: "power2.inOut",
        }, 0);

        /// Heading appears //
        tl.to(headingRef.current, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            ease: "back.out(1.2)",
        }, 0.2);

    }, { scope: containerRef }); /// Scope to container ref //

    useEffect(() => {
        /// Calculate mock target date for countdown preview //
        const targetDate = new Date().getTime() + (58 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000) + (30 * 60 * 1000); /// Set future target //

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

    const blurOverlayRef = useRef<HTMLDivElement>(null);
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!blurOverlayRef.current) return;
        const rect = blurOverlayRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        blurOverlayRef.current.style.maskImage = `radial-gradient(circle 350px at ${x}px ${y}px, transparent 10%, black 100%)`;
        blurOverlayRef.current.style.webkitMaskImage = `radial-gradient(circle 350px at ${x}px ${y}px, transparent 10%, black 100%)`;
    };

    return (
        <section
            ref={containerRef}
            id="hero"
            ///  //
            className="relative h-screen w-full flex flex-col items-center justify-center font-sans overflow-hidden bg-black"
            style={{ perspective: "1500px" }}
            onMouseMove={handleMouseMove}
        >
            <HeroHeading ref={headingRef} />

            {/*  */}
            <div
                ref={videoContainerRef}
                className="absolute inset-0 w-full h-full pointer-events-none z-0 transform-gpu"
            >
                {/*  */}
                <video
                    src="/assets/bta-bg-1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />

                {/*  */}
                <div
                    ref={blurOverlayRef}
                    className="absolute inset-0 backdrop-blur-[12px] bg-black/50"
                    style={{
                        maskImage: "radial-gradient(circle 350px at 50% 50%, transparent 10%, black 100%)",
                        WebkitMaskImage: "radial-gradient(circle 350px at 50% 50%, transparent 10%, black 100%)",
                        transition: "mask-image 0.2s ease-out, -webkit-mask-image 0.2s ease-out"
                    }}
                />
            </div>

            <style>{`
                .countdown-wrap {
                    position: relative;
                    z-index: 10;
                    height: 310px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .countdown-wrap h1 {
                    margin-bottom: 60px;
                    text-align: center;
                    font-size: 2.25em;
                    font-weight: 300;
                    text-transform: uppercase;
                    color: #e0e0e0;
                }
                .countdown-wrap h1 strong {
                    font-weight: 700;
                    color: #ff5252;
                    text-shadow: 0 0 10px rgba(255,82,82,0.4);
                }
                .countdown {
                    display: flex;
                    justify-content: center;
                    margin: 0 auto;
                    width: 100%;
                    max-width: 1100px;
                }
                .bloc-time {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-right: 45px;
                }
                .bloc-time:last-child {
                    margin-right: 0;
                }
                .count-title {
                    display: block;
                    width: 100%;
                    text-align: center;
                    margin-bottom: 15px;
                    font-size: 0.94em;
                    color: #a0a0a0;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }
                .figures-row {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .figure {
                    position: relative;
                    height: 110px;
                    width: 100px;
                    margin-right: 10px;
                    background-color: #1e1e24;
                    border-radius: 12px;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8), inset 0 2px 4px rgba(255, 255, 255, 0.15), 0 -2px 4px rgba(0,0,0,0.5);
                    border: 1px solid rgba(255,255,255,0.05);
                }
                .figure:last-child {
                    margin-right: 0;
                }
                .figure > span {
                    position: absolute;
                    left: 0;
                    right: 0;
                    margin: auto;
                    text-align: center;
                    font-size: 5.94em;
                    line-height: 107px;
                    font-weight: 700;
                    color: #ff5252;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
                }
                .figure .top, .figure .bottom-back {
                    height: 50%;
                }
                .figure .top:after, .figure .bottom-back:after {
                    content: "";
                    position: absolute;
                    z-index: -1;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 100%;
                    border-bottom: 1px solid rgba(0, 0, 0, .1);
                }
                .figure .top {
                    z-index: 3;
                    background-color: #26262d;
                    transform-origin: 50% 100%;
                    border-top-left-radius: 12px;
                    border-top-right-radius: 12px;
                    transform: perspective(300px);
                }
                .figure .bottom {
                    z-index: 1;
                    background-color: #1e1e24;
                    border-bottom-left-radius: 12px;
                    border-bottom-right-radius: 12px;
                }
                .figure .bottom:before {
                    content: "";
                    position: absolute;
                    display: block;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 50%;
                    background-color: rgba(0, 0, 0, .4);
                }
                .figure .bottom-back {
                    z-index: 2;
                    top: 0;
                    height: 50%;
                    overflow: hidden;
                    background-color: #26262d;
                    border-top-left-radius: 12px;
                    border-top-right-radius: 12px;
                }
                .figure .bottom-back span {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                    text-align: center;
                }
                .figure .top, .figure .top-back {
                    height: 50%;
                    overflow: hidden;
                    backface-visibility: hidden;
                }
                .figure .top-back {
                    z-index: 4;
                    bottom: 0;
                    background-color: #1e1e24;
                    transform-origin: 50% 0;
                    transform: perspective(300px) rotateX(180deg);
                    border-bottom-left-radius: 12px;
                    border-bottom-right-radius: 12px;
                }
                .figure .top-back span {
                    position: absolute;
                    top: -100%;
                    left: 0;
                    right: 0;
                    margin: auto;
                    text-align: center;
                }
                /* Animations matching original TweenMax */
                .figure .top.flip {
                    transform: perspective(300px) rotateX(-180deg);
                    transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
                .figure .top-back.flip {
                    transform: perspective(300px) rotateX(0deg);
                    transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
            `}</style>

            <div className="countdown-wrap" ref={countdownRef}>
                <h1 className="countdown-title"><strong>Countdown</strong></h1>

                <div className="countdown">
                    <div className="bloc-time">
                        <span className="count-title">Days</span>
                        <div className="figures-row">
                            {time.days > 99 ? (
                                <>
                                    <Figure value={String(time.days)[0]} />
                                    <Figure value={String(time.days)[1]} />
                                    <Figure value={String(time.days)[2]} />
                                </>
                            ) : (
                                <>
                                    <Figure value={format(time.days)[0]} />
                                    <Figure value={format(time.days)[1]} />
                                </>
                            )}
                        </div>
                    </div>

                    <div className="bloc-time">
                        <span className="count-title">Hours</span>
                        <div className="figures-row">
                            <Figure value={format(time.hours)[0]} />
                            <Figure value={format(time.hours)[1]} />
                        </div>
                    </div>

                    <div className="bloc-time">
                        <span className="count-title">Minutes</span>
                        <div className="figures-row">
                            <Figure value={format(time.minutes)[0]} />
                            <Figure value={format(time.minutes)[1]} />
                        </div>
                    </div>

                    <div className="bloc-time">
                        <span className="count-title">Seconds</span>
                        <div className="figures-row">
                            <Figure value={format(time.seconds)[0]} />
                            <Figure value={format(time.seconds)[1]} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
