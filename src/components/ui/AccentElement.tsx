"use client";

import React from "react";

export interface AccentElementProps {
    text: string;
    position: "left" | "right";
    className?: string;
}

export default function AccentElement({ text, position, className = "" }: AccentElementProps) {
    const getStyles = () => {
        switch (position) {
            case "left":
                return { left: "-60px", top: "50%", transform: "translateY(-50%) rotate(-90deg)", transformOrigin: "center center" };
            case "right":
                return { right: "-60px", top: "50%", transform: "translateY(-50%) rotate(90deg)", transformOrigin: "center center" };
            default:
                return {};
        }
    };

    return (
        <div
            className={`accent-element absolute hidden lg:block z-40 mix-blend-multiply ${className}`}
            style={getStyles()}
        >
            <span className="inline-block uppercase tracking-[0.25em] text-[10px] font-semibold text-black whitespace-nowrap">
                {text}
            </span>
        </div>
    );
}
