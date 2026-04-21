"use client";

import React from "react";

export default function StarburstIllustration({ className = "" }: { className?: string }) {
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
