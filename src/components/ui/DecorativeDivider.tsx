"use client";

import React from "react";

export interface DecorativeDividerProps {
    orientation?: "horizontal" | "vertical";
    className?: string;
}

export default function DecorativeDivider({ orientation = "horizontal", className = "" }: DecorativeDividerProps) {
    if (orientation === "vertical") {
        return (
            <div className={`divider-element w-[1px] h-12 bg-gradient-to-b from-transparent via-black/40 to-transparent ${className}`} />
        );
    }

    return (
        <div className={`divider-element h-[1px] bg-gradient-to-r from-transparent via-black/40 to-transparent ${className}`} />
    );
}
