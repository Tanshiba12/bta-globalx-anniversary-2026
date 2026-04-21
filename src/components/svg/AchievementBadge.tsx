"use client";

import React from "react";

export default function AchievementBadge({ className = "" }: { className?: string }) {
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
