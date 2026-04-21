"use client";

import React from "react";

export default function TimelineMarker({ className = "" }: { className?: string }) {
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
