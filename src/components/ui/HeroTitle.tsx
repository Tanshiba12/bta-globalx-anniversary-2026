"use client";

import React from "react";

export interface HeroTitleProps {
    lines: string[];
    className?: string;
}

export default function HeroTitle({ lines, className = "" }: HeroTitleProps) {
    const SplitText = ({ children }: { children: string }) => {
        return (
            <span className="inline-block" style={{ perspective: "1000px" }}>
                {children.split(" ").map((word, wordIndex, array) => (
                    <span key={wordIndex} className="inline-block whitespace-nowrap">
                        {word.split("").map((char, index) => (
                            <span key={index} className="char inline-block">
                                {char}
                            </span>
                        ))}
                        {wordIndex !== array.length - 1 && (
                            <span className="char inline-block" style={{ whiteSpace: "pre" }}>{" "}</span>
                        )}
                    </span>
                ))}
            </span>
        );
    };

    return (
        <h1 className={`main-title font-black text-black uppercase leading-[1.1] w-full font-cinzel tracking-tight flex flex-col items-center ${className}`}>
            {lines.map((line, index) => (
                <div key={index} className="overflow-hidden pb-3 md:pb-4 relative">
                    <SplitText>{line}</SplitText>
                </div>
            ))}
        </h1>
    );
}
