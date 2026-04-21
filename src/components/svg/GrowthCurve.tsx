"use client";

import React from "react";

export default function GrowthCurve({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 240 180"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Grid lines */}
            <g stroke="currentColor" strokeWidth="1" opacity="0.2">
                <line x1="30" y1="30" x2="30" y2="150" />
                <line x1="30" y1="150" x2="220" y2="150" />
                {[...Array(4)].map((_, i) => (
                    <line key={`h-${i}`} x1="30" y1={150 - i * 30} x2="220" y2={150 - i * 30} />
                ))}
                {[...Array(6)].map((_, i) => (
                    <line key={`v-${i}`} x1={30 + i * 32} y1="30" x2={30 + i * 32} y2="150" />
                ))}
            </g>

            {/* Axis lines */}
            <line x1="30" y1="150" x2="220" y2="150" stroke="currentColor" strokeWidth="2.5" />
            <line x1="30" y1="30" x2="30" y2="150" stroke="currentColor" strokeWidth="2.5" />

            {/* Main growth curve */}
            <path
                d="M 40 140 Q 80 130 110 100 T 180 40"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                opacity="0.8"
            />

            {/* Gradient fill under curve */}
            <path
                d="M 40 140 Q 80 130 110 100 T 180 40 L 180 150 Q 120 150 40 150 Z"
                fill="currentColor"
                opacity="0.1"
            />

            {/* Data points */}
            {[40, 80, 120, 160].map((x, i) => {
                const points = [140, 120, 80, 50];
                return (
                    <g key={`point-${i}`}>
                        <circle cx={x} cy={points[i]} r="4" fill="currentColor" opacity="0.7" />
                        <circle cx={x} cy={points[i]} r="6" stroke="currentColor" strokeWidth="1.5" />
                    </g>
                );
            })}

            {/* Arrow pointing up */}
            <g transform="translate(200, 60)" opacity="0.6">
                <line x1="0" y1="20" x2="0" y2="0" stroke="currentColor" strokeWidth="2" />
                <path
                    d="M -5 5 L 0 0 L 5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}
