"use client";

import React, { useState, useEffect } from "react";

const Figure = ({ value }: { value: string | number; label?: string }) => {
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

export default function Countdown() {
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
                        <Figure value={time.days > 99 ? String(time.days) : format(time.days)} />
                    </div>
                    <span className="count-title-side">Days</span>
                </div>

                <div className="bloc-time-row">
                    <div className="figures-row">
                        <Figure value={format(time.hours)} />
                    </div>
                    <span className="count-title-side">Hours</span>
                </div>

                <div className="bloc-time-row">
                    <div className="figures-row">
                        <Figure value={format(time.minutes)} />
                    </div>
                    <span className="count-title-side">Minutes</span>
                </div>

                <div className="bloc-time-row">
                    <div className="figures-row">
                        <Figure value={format(time.seconds)} />
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
