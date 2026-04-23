"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// ===== INLINED: Premium Countdown (Same size as Section 1 MiniCountdown) =====
const CountdownFigure = ({ value, label }: { value: string | number; label?: string }) => {
    return (
        <div className="countdown-item">
            <div className="figure">
                <span className="digit">{value}</span>
            </div>
            {label && <span className="countdown-label">{label}</span>}
        </div>
    );
};

function PremiumCountdown() {
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
        <div className="premium-countdown-container">
            <CountdownFigure value={time.days > 99 ? String(time.days) : format(time.days)} label="Days" />
            <div className="separator">:</div>
            <CountdownFigure value={format(time.hours)} label="Hours" />
            <div className="separator">:</div>
            <CountdownFigure value={format(time.minutes)} label="Minutes" />
            <div className="separator">:</div>
            <CountdownFigure value={format(time.seconds)} label="Seconds" />
            <style dangerouslySetInnerHTML={{
                __html: `
                .premium-countdown-container {
                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                    gap: 0.25rem;
                    flex-wrap: wrap;
                }
                
                .countdown-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 0.25rem;
                }
                
                .figure {
                    position: relative;
                    height: 40px;
                    width: 32px;
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
                    backdrop-filter: blur(10px);
                }
                
                .figure .digit {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #ffffff;
                    font-family: 'var(--font-outfit), sans-serif';
                    letter-spacing: 1px;
                    text-shadow: 0px 1px 2px rgba(0,0,0,0.3);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                }
                
                .separator {
                    font-size: 1.5rem;
                    font-weight: 900;
                    color: #ffffff;
                    margin-bottom: 1rem;
                    opacity: 0.9;
                    text-shadow: 0px 1px 2px rgba(0,0,0,0.3);
                    font-family: 'var(--font-outfit), sans-serif';
                }
                
                .countdown-label {
                    font-size: 0.6rem;
                    font-weight: 700;
                    color: #ffffff;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    opacity: 0.9;
                    font-family: 'var(--font-outfit), sans-serif';
                    text-shadow: 0px 1px 2px rgba(0,0,0,0.2);
                }
                
                @media (max-width: 768px) {
                    .figure {
                        height: 32px;
                        width: 28px;
                    }
                    .figure .digit {
                        font-size: 1rem;
                    }
                    .separator {
                        font-size: 1.2rem;
                        margin-bottom: 0.8rem;
                    }
                    .countdown-label {
                        font-size: 0.5rem;
                    }
                }
                `
            }} />
        </div>
    );
}

// ===== END INLINED: Premium Countdown ====

export default function Section2_AboutEvent() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const blobRef = useRef<HTMLDivElement>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [venueImages, setVenueImages] = useState<string[]>([]);
    const [isLoadingImages, setIsLoadingImages] = useState(true);
    const [triggerBlobAnimation, setTriggerBlobAnimation] = useState(false);

    // Fetch venue images from API on mount
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch("/api/venue-images");
                const data = await response.json();
                setVenueImages(data.images || []);
            } catch (error) {
                console.error("Failed to fetch venue images:", error);
                setVenueImages([]);
            } finally {
                setIsLoadingImages(false);
            }
        };

        fetchImages();
    }, []);

    // === ENTRANCE ANIMATIONS ===
    useGSAP(() => {
        if (!sectionRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                once: true,
            }
        });

        // Title fade in
        tl.fromTo(".countdown-title", {
            opacity: 0,
            y: 20,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
        }, 0);

        // Countdown fade in
        tl.to(".premium-countdown-wrapper", {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
        }, 0.2);

        // Description fade in
        tl.to(".countdown-description", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
        }, 0.4);

    }, { scope: sectionRef, dependencies: [venueImages] });

    // === IMAGE CYCLING WITH SCROLL ===
    useGSAP(() => {
        if (!imageContainerRef.current || venueImages.length === 0) return;

        gsap.to({}, {
            scrollTrigger: {
                trigger: imageContainerRef.current,
                start: "top 60%",
                end: "bottom 20%",
                scrub: 0.5,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const imageIndex = Math.floor(progress * venueImages.length);
                    const clampedIndex = Math.min(imageIndex, venueImages.length - 1);
                    setCurrentImageIndex(clampedIndex);

                    // Blob animation disabled for now
                    // if (clampedIndex === venueImages.length - 1 && progress > 0.95) {
                    //     setTriggerBlobAnimation(true);
                    // }
                }
            }
        });

    }, { scope: sectionRef, dependencies: [venueImages] });

    // === BLOB ANIMATION ===
    useGSAP(() => {
        if (!triggerBlobAnimation || !blobRef.current) return;

        const blobTl = gsap.timeline();
        // Expand to black screen
        blobTl.to(blobRef.current, {
            scale: 100,
            width: "100vw",
            height: "100vh",
            opacity: 1,
            duration: 1.5,
            ease: "power2.inOut",
            borderRadius: "0%",
        }, 0);
        // Then fade out to reveal Section 3
        blobTl.to(blobRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            pointerEvents: "none",
        }, 1.2);

    }, { scope: sectionRef, dependencies: [triggerBlobAnimation] });

    return (
        <section
            ref={sectionRef}
            id="section-2"
            className="relative w-full py-16 md:py-20 flex flex-col justify-center items-center overflow-hidden min-h-screen"
        >
            {/* Main Content Container */}
            <div ref={containerRef} className="relative z-20 w-full px-4 md:px-8 max-w-6xl flex flex-col items-center justify-center text-center space-y-4">

                {/* Main Title */}
                <div className="countdown-title space-y-1 relative">
                    <h2 className="text-5xl md:text-6xl font-black text-white leading-none"
                        style={{
                            fontFamily: "'Georgia', 'Times New Roman', serif",
                            fontStyle: "italic",
                            fontWeight: "900",
                            textShadow: "0px 2px 4px rgba(0,0,0,0.4)",
                            letterSpacing: "-0.02em",
                            textTransform: "uppercase",
                        }}
                    >
                        Excellence<br />
                        <span style={{
                            fontStyle: "italic",
                            color: "#000000",
                            textShadow: "0px 2px 4px rgba(0,0,0,0.6)",
                            fontWeight: "900",
                            letterSpacing: "-0.02em",
                        }}>
                            Awaits
                        </span>
                    </h2>
                </div>

                {/* Premium Countdown - Directly below title */}
                <div className="premium-countdown-wrapper w-full py-4 px-6 md:px-8 rounded-lg backdrop-blur-md bg-white/10 border border-white/20"
                    style={{
                        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.25)",
                        maxWidth: "900px",
                        opacity: 0,
                        transform: "translateY(20px)",
                        marginTop: "0.5rem"
                    }}
                >
                    <PremiumCountdown />
                </div>

                {/* Description & Image Grid */}
                <div className="countdown-description w-full max-w-6xl py-4 relative" style={{ opacity: 0, transform: "translateY(20px)" }}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
                        {/* Left side - Details only */}
                        <div className="flex flex-col justify-center space-y-3">
                            {/* Main description */}
                            <p className="text-black/90 text-lg md:text-xl font-light leading-relaxed"
                                style={{
                                    letterSpacing: "0.3px",
                                    fontFamily: "'Courier New', monospace",
                                    lineHeight: "1.5",
                                }}
                            >
                                Join us for three days of transformative celebration where exceptional achievements are recognized.
                            </p>

                            {/* Location and Time */}
                            <div className="space-y-2">
                                <p className="text-black/85 text-base md:text-lg font-light"
                                    style={{ fontFamily: "'Georgia', serif" }}
                                >
                                    📍 Sheraton Johor Bahru
                                </p>
                                <p className="text-black/75 text-base md:text-lg font-light"
                                    style={{ fontFamily: "'Georgia', serif" }}
                                >
                                    🕐 2:30 PM - 10:00 PM
                                </p>
                            </div>
                        </div>

                        {/* Right side - Image */}
                        <div ref={imageContainerRef} className="flex items-center justify-center" style={{ perspective: "1200px" }}>
                            {isLoadingImages ? (
                                <div className="w-full max-w-sm h-72 flex items-center justify-center">
                                    <div className="text-white/50 text-sm font-light">Loading...</div>
                                </div>
                            ) : venueImages.length > 0 ? (
                                <img
                                    src={venueImages[currentImageIndex]}
                                    alt={`Venue photo ${currentImageIndex + 1}`}
                                    className="w-full max-w-sm h-72 object-cover rounded-lg transition-all duration-300"
                                    style={{
                                        transform: "rotateY(-15deg)",
                                        transformStyle: "preserve-3d",
                                    }}
                                />
                            ) : (
                                <div className="w-full max-w-sm h-72 flex items-center justify-center">
                                    <div className="text-white/50 text-sm font-light">No photos</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                    <button
                        className="group relative px-10 md:px-14 py-3 border-2 border-white text-white font-semibold uppercase tracking-[0.1em] text-sm hover:text-black transition-all duration-500 overflow-hidden rounded-sm backdrop-blur-md bg-white/10 hover:bg-white"
                        style={{
                            boxShadow: "0 4px 16px rgba(255, 255, 255, 0.15)",
                            fontFamily: "var(--font-outfit), sans-serif"
                        }}
                    >
                        <span className="relative z-10">Secure Your Spot</span>
                        <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </button>
                </div>

            </div>

            {/* Black Screen Transition - Blob - DISABLED */}
            <div
                ref={blobRef}
                className="fixed top-0 left-0 pointer-events-none z-50 hidden"
                style={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: "#000000",
                    scale: "0",
                    x: "50vw",
                    y: "50vh",
                    opacity: "0",
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            />

            {/* Floating Animation */}
            <style jsx>{`
                @keyframes float-orb {
                    0%, 100% { transform: translate(0, 0); }
                    25% { transform: translate(30px, -30px); }
                    50% { transform: translate(-20px, 20px); }
                    75% { transform: translate(40px, 10px); }
                }
            `}</style>
        </section>
    );
}
