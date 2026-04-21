"use client";

import React from "react";

export default function TrophyIllustration({ className = "" }: { className?: string }) {
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
