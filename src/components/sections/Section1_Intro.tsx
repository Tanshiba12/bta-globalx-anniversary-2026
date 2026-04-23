"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, Draggable, ScrollTrigger);

// ===== MINI COUNTDOWN =====
const MiniCountdownFigure = ({ value, label }: { value: string | number; label?: string }) => {
    return (
        <div className="mini-countdown-item">
            <div className="mini-figure">
                <span className="mini-digit">{value}</span>
            </div>
            {label && <span className="mini-countdown-label">{label}</span>}
        </div>
    );
};

function MiniCountdown() {
    const [time, setTime] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    React.useEffect(() => {
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
        <div className="mini-countdown-container">
            <MiniCountdownFigure value={time.days > 99 ? String(time.days) : format(time.days)} label="Days" />
            <div className="mini-separator">:</div>
            <MiniCountdownFigure value={format(time.hours)} label="Hours" />
            <div className="mini-separator">:</div>
            <MiniCountdownFigure value={format(time.minutes)} label="Minutes" />
            <div className="mini-separator">:</div>
            <MiniCountdownFigure value={format(time.seconds)} label="Seconds" />
            <style dangerouslySetInnerHTML={{
                __html: `
                .mini-countdown-container {
                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                    gap: 0.25rem;
                    flex-wrap: wrap;
                }
                
                .mini-countdown-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 0.25rem;
                }
                
                .mini-figure {
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
                
                .mini-figure .mini-digit {
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
                
                .mini-separator {
                    font-size: 1rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin-bottom: 0.5rem;
                    opacity: 0.8;
                    text-shadow: 0px 1px 2px rgba(0,0,0,0.3);
                    font-family: 'var(--font-outfit), sans-serif';
                }
                
                .mini-countdown-label {
                    font-size: 0.5rem;
                    font-weight: 600;
                    color: #ffffff;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    opacity: 0.7;
                    font-family: 'var(--font-outfit), sans-serif';
                    text-shadow: 0px 1px 2px rgba(0,0,0,0.3);
                }
                `
            }} />
        </div>
    );
}

// ===== END MINI COUNTDOWN =====

export default function Section1_Intro() {
    const containerRef = useRef<HTMLElement>(null);
    const [bottomLeftImages, setBottomLeftImages] = useState<string[]>([]);
    const [bottomRightImages, setBottomRightImages] = useState<string[]>([]);
    const [loadingLeftImages, setLoadingLeftImages] = useState(true);
    const [loadingRightImages, setLoadingRightImages] = useState(true);
    const [currentLeftIndex, setCurrentLeftIndex] = useState(0);
    const [currentRightIndex, setCurrentRightIndex] = useState(0);

    // New deck spread state
    const [leftDeckSpread, setLeftDeckSpread] = useState(false);
    const [rightDeckSpread, setRightDeckSpread] = useState(false);
    const leftCardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const rightCardsRef = useRef<(HTMLDivElement | null)[]>([]);

    // ===== IMAGE BOX CUSTOMIZATION =====
    // Adjust these values to change size and position
    const imageConfig = {
        width: 256,  // Change this to adjust width (was 128, now 256 = 2x)
        height: 256, // Change this to adjust height (was 128, now 256 = 2x)
        leftImagePaddingRight: 'pr-4',  // Padding for left image
        rightImagePaddingLeft: 'pl-4',  // Padding for right image
        topPadding: 'pt-1',  // Padding above bottom-left image
        bottomPadding: 'pb-1', // Padding below top-right image
    };

    // ===== SCATTERED DECK FUNCTIONS =====
    // Calculate random scattered positions in a zigzag pattern
    const getScatteredPositions = (imageCount: number, isBottom: boolean) => {
        const positions: { x: number; y: number; rotation: number }[] = [];
        const containerRect = containerRef.current?.getBoundingClientRect();

        if (!containerRect) return positions;

        const padding = 40;
        const maxX = containerRect.width - imageConfig.width - padding;
        const maxY = containerRect.height - imageConfig.height - padding;

        for (let i = 0; i < imageCount; i++) {
            // Spread horizontally across the width
            const xSpread = (Math.random() - 0.5) * (maxX * 1.2);

            // Vertical spread direction:
            // isBottom = true: spread DOWNWARD (positive y)
            // isBottom = false: spread UPWARD (negative y, towards top)
            let yOffset: number;
            if (isBottom) {
                // Spread downward for bottom-left
                yOffset = Math.random() * (maxY * 0.8) + maxY * 0.15;
            } else {
                // Spread upward for right-column (negative values = up)
                yOffset = (Math.random() - 1) * (maxY * 0.8);
            }

            positions.push({
                x: Math.max(-maxX * 0.3, Math.min(maxX * 1.3, xSpread)),
                y: yOffset,
                rotation: Math.random() * 25 - 12.5, // Random rotation -12.5 to +12.5
            });
        }

        return positions;
    };

    // Handle left deck spread/collapse
    const toggleLeftDeck = () => {
        if (leftDeckSpread) {
            // Collapse back to stack
            const tl = gsap.timeline();
            leftCardsRef.current.forEach((card, idx) => {
                if (card) {
                    tl.to(card, {
                        x: idx * 4,
                        y: idx * 4,
                        rotation: 0,
                        scale: 1,
                        zIndex: bottomLeftImages.length - idx,
                        duration: 0.5,
                        ease: "back.inOut(1.2)",
                    }, idx * 0.03); // Stagger
                }
            });
            // Disable dragging on all cards
            leftCardsRef.current.forEach((card) => {
                if (card && (card as any)._gsapDraggable) {
                    (card as any)._gsapDraggable.kill();
                }
            });
            setLeftDeckSpread(false);
        } else {
            // Spread cards with staggered animation
            const positions = getScatteredPositions(bottomLeftImages.length, true);
            const tl = gsap.timeline();

            leftCardsRef.current.forEach((card, idx) => {
                if (card && positions[idx]) {
                    const pos = positions[idx];
                    tl.to(card, {
                        x: pos.x,
                        y: pos.y,
                        rotation: pos.rotation,
                        scale: 0.95,
                        zIndex: 5000 + idx,
                        duration: 0.6,
                        ease: "elastic.out(1, 0.6)",
                    }, idx * 0.08); // Stagger each card

                    // Make draggable with throw effect
                    gsap.set(card, { cursor: "grab" });
                    Draggable.create(card, {
                        type: "x,y",
                        edgeResistance: 0.65,
                        onDragStart() {
                            gsap.to(card, { scale: 1.05, duration: 0.2, overwrite: "auto" });
                            gsap.set(card, { cursor: "grabbing", zIndex: 9999 });
                        },
                        onDragEnd() {
                            gsap.to(card, { scale: 0.95, duration: 0.2, overwrite: "auto" });
                            gsap.set(card, { cursor: "grab", zIndex: 5000 + idx });
                        },
                        throwProps: true,
                        throwResistance: 4000,
                    });
                }
            });
            setLeftDeckSpread(true);
        }
    };

    // Handle right deck spread/collapse
    const toggleRightDeck = () => {
        if (rightDeckSpread) {
            // Collapse back to stack
            const tl = gsap.timeline();
            rightCardsRef.current.forEach((card, idx) => {
                if (card) {
                    tl.to(card, {
                        x: idx * 4,
                        y: -(idx * 4),
                        rotation: 0,
                        scale: 1,
                        zIndex: bottomRightImages.length - idx,
                        duration: 0.5,
                        ease: "back.inOut(1.2)",
                    }, idx * 0.03); // Stagger
                }
            });
            // Disable dragging
            rightCardsRef.current.forEach((card) => {
                if (card && (card as any)._gsapDraggable) {
                    (card as any)._gsapDraggable.kill();
                }
            });
            setRightDeckSpread(false);
        } else {
            // Spread cards with staggered animation
            const positions = getScatteredPositions(bottomRightImages.length, false);
            const tl = gsap.timeline();

            rightCardsRef.current.forEach((card, idx) => {
                if (card && positions[idx]) {
                    const pos = positions[idx];
                    tl.to(card, {
                        x: pos.x,
                        y: pos.y,
                        rotation: pos.rotation,
                        scale: 0.95,
                        zIndex: 5000 + idx,
                        duration: 0.6,
                        ease: "elastic.out(1, 0.6)",
                    }, idx * 0.08); // Stagger each card

                    // Make draggable with throw effect
                    gsap.set(card, { cursor: "grab" });
                    Draggable.create(card, {
                        type: "x,y",
                        edgeResistance: 0.65,
                        onDragStart() {
                            gsap.to(card, { scale: 1.05, duration: 0.2, overwrite: "auto" });
                            gsap.set(card, { cursor: "grabbing", zIndex: 9999 });
                        },
                        onDragEnd() {
                            gsap.to(card, { scale: 0.95, duration: 0.2, overwrite: "auto" });
                            gsap.set(card, { cursor: "grab", zIndex: 5000 + idx });
                        },
                        throwProps: true,
                        throwResistance: 4000,
                    });
                }
            });
            setRightDeckSpread(true);
        }
    };

    // Fetch bottom left images
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch("/api/section1-bottom-left");
                const data = await response.json();
                setBottomLeftImages(data.images || []);
            } catch (error) {
                console.error("Failed to fetch bottom left images:", error);
                setBottomLeftImages([]);
            } finally {
                setLoadingLeftImages(false);
            }
        };
        fetchImages();
    }, []);

    // Fetch bottom right images
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch("/api/section1-bottom-right");
                const data = await response.json();
                setBottomRightImages(data.images || []);
            } catch (error) {
                console.error("Failed to fetch bottom right images:", error);
                setBottomRightImages([]);
            } finally {
                setLoadingRightImages(false);
            }
        };
        fetchImages();
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({ delay: 0.3 });

        // === MAIN TITLE ANIMATIONS ===
        // Line 1: "3RD ANNIVERSARY" - Vertical slide
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
        }, 0);

        // Line 2: "&" - Rotate and scale
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
        }, 0.3);

        // Line 3: "EXCELLENCE AWARDS 2026" - Horizontal slide
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
        }, 0.6);

        // === CARD DECK ENTRANCE ANIMATIONS ===
        // Left deck cards entrance - slide up with fade
        leftCardsRef.current.forEach((card, idx) => {
            if (card) {
                tl.fromTo(card, {
                    y: 80,
                    opacity: 0,
                    scale: 0.8,
                    rotateY: -60,
                }, {
                    y: idx * 4,
                    opacity: 1,
                    scale: 1,
                    rotateY: -15,
                    duration: 0.7,
                    ease: "back.out(1.1)",
                }, 0.4 + idx * 0.08);
            }
        });

        // Right deck cards entrance - slide down with fade
        rightCardsRef.current.forEach((card, idx) => {
            if (card) {
                tl.fromTo(card, {
                    y: -80,
                    opacity: 0,
                    scale: 0.8,
                    rotateY: 60,
                }, {
                    y: -(idx * 4),
                    opacity: 1,
                    scale: 1,
                    rotateY: -15,
                    duration: 0.7,
                    ease: "back.out(1.1)",
                }, 0.4 + idx * 0.08);
            }
        });

    }, { scope: containerRef });

    // === SCROLL TRANSITION: Section 1 → Section 2 (DIRECTIONAL EXIT) ===
    useGSAP(() => {
        if (!containerRef.current) return;

        gsap.to({}, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "60% center",
                end: "bottom center",
                scrub: 1,
                markers: false,
                onUpdate: (self) => {
                    const progress = self.progress;

                    // === LEFT COLUMN: Slides LEFT and fades out ===
                    gsap.set([".title-line-1"], {
                        x: gsap.utils.mapRange(0, 1, 0, -500, progress),
                        opacity: gsap.utils.mapRange(0, 1, 1, 0, progress),
                    });

                    // === RIGHT COLUMN: Slides RIGHT and fades out ===
                    gsap.set([".title-line-3"], {
                        x: gsap.utils.mapRange(0, 1, 0, 500, progress),
                        opacity: gsap.utils.mapRange(0, 1, 1, 0, progress),
                    });

                    // === & TEXT: Circles in and disappears ===
                    gsap.set(".title-line-2", {
                        scale: gsap.utils.mapRange(0, 1, 1, 0, progress),
                        opacity: gsap.utils.mapRange(0, 1, 1, 0, progress),
                        rotateZ: gsap.utils.mapRange(0, 1, 0, 360, progress), // Full circle rotation
                    });

                    // === COUNTDOWN: Stays visible and grows/elevates ===
                    gsap.set(".mini-countdown-container", {
                        scale: gsap.utils.mapRange(0, 1, 1, 1.8, progress),
                        y: gsap.utils.mapRange(0, 1, 0, -80, progress),
                        opacity: gsap.utils.mapRange(0, 1, 1, 1, progress),
                    });

                    // === CARD DECKS: Also exit left/right ===
                    leftCardsRef.current.forEach((card) => {
                        if (card) {
                            gsap.set(card, {
                                x: gsap.utils.mapRange(0, 1, 0, -400, progress),
                                opacity: gsap.utils.mapRange(0, 1, 1, 0, progress),
                            });
                        }
                    });

                    rightCardsRef.current.forEach((card) => {
                        if (card) {
                            gsap.set(card, {
                                x: gsap.utils.mapRange(0, 1, 0, 400, progress),
                                opacity: gsap.utils.mapRange(0, 1, 1, 0, progress),
                            });
                        }
                    });
                },
            }
        });

    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            id="section-1"
            className="relative w-full flex flex-col items-center justify-center py-12"
            style={{ perspective: "1200px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", overflow: leftDeckSpread || rightDeckSpread ? "visible" : "hidden" }}
        >
            {/* Mini Countdown - 1/3 width, centered at top */}
            <div className="w-full max-w-xs mb-8 px-4">
                <div className="w-full rounded-xl backdrop-blur-md bg-white/10 border border-white/20 p-4"
                    style={{
                        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                    }}
                >
                    <MiniCountdown />
                </div>
            </div>

            {/* Main Hero Content Container - Flex Layout */}
            <div className="relative z-30 w-full max-w-7xl flex items-center justify-center px-4">
                <div className="flex gap-8 w-full" style={{ maxWidth: "1200px" }}>
                    {/* Left Column - 3RD, ANNIVERSARY (Right Aligned) */}
                    <div style={{ flex: "5", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end" }}>
                        {/* "BTA" */}
                        <div className="flex justify-end pr-4 pl-4">
                            <p
                                style={{
                                    fontFamily: 'var(--font-outfit), sans-serif',
                                    fontWeight: "700",
                                    fontStyle: "italic",
                                    fontSize: "45px",
                                    lineHeight: "0.9",
                                    color: "black",
                                    margin: "0",
                                    textShadow: "3px 3px 0px rgba(0,0,0,0.3), 6px 6px 0px rgba(0,0,0,0.2), 9px 9px 15px rgba(0,0,0,0.4)"
                                }}
                            >
                                BTA
                            </p>
                        </div>

                        {/* "3RD" */}
                        <div className="title-line-1 flex justify-end pr-4">
                            <h1
                                className="font-black tracking-normal"
                                style={{
                                    fontFamily: 'var(--font-outfit), sans-serif',
                                    fontWeight: "900",
                                    fontSize: "141px",
                                    lineHeight: "0.9",
                                    textShadow: "3px 3px 0px rgba(0,0,0,0.3), 6px 6px 0px rgba(0,0,0,0.2), 9px 9px 15px rgba(0,0,0,0.4)"
                                }}
                            >
                                3RD
                            </h1>
                        </div>

                        {/* "ANNIVERSARY" */}
                        <div className="title-line-1 flex justify-end pr-4">
                            <h1
                                className="font-black tracking-normal"
                                style={{
                                    fontFamily: 'var(--font-outfit), sans-serif',
                                    fontWeight: "900",
                                    fontSize: "56px",
                                    lineHeight: "0.9",
                                    textShadow: "3px 3px 0px rgba(0,0,0,0.3), 6px 6px 0px rgba(0,0,0,0.2), 9px 9px 15px rgba(0,0,0,0.4)"
                                }}
                            >
                                ANNIVERSARY
                            </h1>
                        </div>

                        {/* Bottom Left Image Deck */}
                        <div className={`flex justify-end ${imageConfig.leftImagePaddingRight} ${imageConfig.topPadding} relative`} style={{ perspective: "1200px" }}>
                            {loadingLeftImages ? (
                                <div className="flex items-center justify-center text-black/30 text-xs" style={{ width: imageConfig.width, height: imageConfig.height }}>Loading...</div>
                            ) : bottomLeftImages.length > 0 ? (
                                <div className="relative" style={{ width: imageConfig.width, height: imageConfig.height }}>
                                    {bottomLeftImages.map((img, idx) => (
                                        <div
                                            key={idx}
                                            ref={(el) => {
                                                if (el) leftCardsRef.current[idx] = el;
                                            }}
                                            className="absolute rounded-lg cursor-pointer transition-all"
                                            onClick={toggleLeftDeck}
                                            onMouseEnter={(e) => {
                                                if (!leftDeckSpread) {
                                                    gsap.to(e.currentTarget, { y: idx * 4 - 8, duration: 0.3, ease: "power2.out" });
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (!leftDeckSpread) {
                                                    gsap.to(e.currentTarget, { y: idx * 4, duration: 0.3, ease: "power2.out" });
                                                }
                                            }}
                                            style={{
                                                width: imageConfig.width,
                                                height: imageConfig.height,
                                                backfaceVisibility: "hidden",
                                                willChange: "transform",
                                                x: leftDeckSpread ? 0 : idx * 4,
                                                y: leftDeckSpread ? 0 : idx * 4,
                                                zIndex: leftDeckSpread ? 5000 + idx : bottomLeftImages.length - idx,
                                                transform: leftDeckSpread ? undefined : `rotateY(-15deg)`,
                                                transformStyle: "preserve-3d",
                                            }}
                                        >
                                            <img
                                                src={img}
                                                alt={`Bottom left card ${idx + 1}`}
                                                className="w-full h-full object-cover rounded-lg"
                                                style={{
                                                    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex items-center justify-center text-black/30 text-xs" style={{ width: imageConfig.width, height: imageConfig.height }}>No images</div>
                            )}
                        </div>
                    </div>

                    {/* Center Column - & (Centered) */}
                    <div style={{ flex: "3", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        {/* "&" */}
                        <div className="title-line-2 flex justify-center">
                            <div
                                className="font-light text-black italic"
                                style={{
                                    fontFamily: 'var(--font-outfit), sans-serif',
                                    fontWeight: "700",
                                    fontStyle: "italic",
                                    fontSize: "337px",
                                    lineHeight: "0.9",
                                    textShadow: "4px 4px 0px rgba(0,0,0,0.3), 8px 8px 0px rgba(0,0,0,0.2), 12px 12px 20px rgba(0,0,0,0.4)"
                                }}
                            >
                                &
                            </div>
                        </div>
                    </div>

                    {/* Right Column - EXCELLENCE, AWARDS, 2026 (Left Aligned, Bottom) */}
                    <div style={{ flex: "4", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                        {/* Top Right Image Deck */}
                        <div className={`flex justify-start ${imageConfig.rightImagePaddingLeft} ${imageConfig.bottomPadding} relative`} style={{ perspective: "1200px" }}>
                            {loadingRightImages ? (
                                <div className="flex items-center justify-center text-black/30 text-xs" style={{ width: imageConfig.width, height: imageConfig.height }}>Loading...</div>
                            ) : bottomRightImages.length > 0 ? (
                                <div className="relative" style={{ width: imageConfig.width, height: imageConfig.height }}>
                                    {bottomRightImages.map((img, idx) => (
                                        <div
                                            key={idx}
                                            ref={(el) => {
                                                if (el) rightCardsRef.current[idx] = el;
                                            }}
                                            className="absolute rounded-lg cursor-pointer transition-all"
                                            onClick={toggleRightDeck}
                                            onMouseEnter={(e) => {
                                                if (!rightDeckSpread) {
                                                    gsap.to(e.currentTarget, { y: -(idx * 4) + 8, duration: 0.3, ease: "power2.out" });
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (!rightDeckSpread) {
                                                    gsap.to(e.currentTarget, { y: -(idx * 4), duration: 0.3, ease: "power2.out" });
                                                }
                                            }}
                                            style={{
                                                width: imageConfig.width,
                                                height: imageConfig.height,
                                                backfaceVisibility: "hidden",
                                                willChange: "transform",
                                                x: rightDeckSpread ? 0 : idx * 4,
                                                y: rightDeckSpread ? 0 : -(idx * 4),
                                                zIndex: rightDeckSpread ? 5000 + idx : bottomRightImages.length - idx,
                                                transform: rightDeckSpread ? undefined : `rotateY(-15deg)`,
                                                transformStyle: "preserve-3d",
                                            }}
                                        >
                                            <img
                                                src={img}
                                                alt={`Right column card ${idx + 1}`}
                                                className="w-full h-full object-cover rounded-lg"
                                                style={{
                                                    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex items-center justify-center text-black/30 text-xs" style={{ width: imageConfig.width, height: imageConfig.height }}>No images</div>
                            )}
                        </div>

                        {/* "EXCELLENCE" */}
                        <div className="title-line-3 flex justify-start pl-4">
                            <h2
                                className="font-bold tracking-wide"
                                style={{
                                    fontFamily: 'var(--font-outfit), sans-serif',
                                    fontWeight: "800",
                                    fontSize: "50px",
                                    lineHeight: "0.9",
                                    textShadow: "3px 3px 0px rgba(0,0,0,0.3), 6px 6px 0px rgba(0,0,0,0.2), 9px 9px 15px rgba(0,0,0,0.4)"
                                }}
                            >
                                EXCELLENCE
                            </h2>
                        </div>

                        {/* "AWARDS" */}
                        <div className="title-line-3 flex justify-start pl-4">
                            <h2
                                className="font-bold tracking-wide"
                                style={{
                                    fontFamily: 'var(--font-outfit), sans-serif',
                                    fontWeight: "800",
                                    fontSize: "90px",
                                    lineHeight: "0.9",
                                    textShadow: "3px 3px 0px rgba(0,0,0,0.3), 6px 6px 0px rgba(0,0,0,0.2), 9px 9px 15px rgba(0,0,0,0.4)"
                                }}
                            >
                                AWARDS
                            </h2>
                        </div>

                        {/* "2026" */}
                        <div className="title-line-3 flex justify-start pl-4">
                            <h2
                                className="font-light text-black italic"
                                style={{
                                    fontFamily: 'var(--font-outfit), sans-serif',
                                    fontWeight: "700",
                                    fontStyle: "italic",
                                    fontSize: "40px",
                                    lineHeight: "0.9",
                                    textShadow: "3px 3px 0px rgba(0,0,0,0.3), 6px 6px 0px rgba(0,0,0,0.2), 9px 9px 15px rgba(0,0,0,0.4)"
                                }}
                            >
                                2026
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Styles */}
            <style jsx>{``}</style>
        </section>
    );
}

