import React from "react";

export interface VideoBoxProps {
    children?: React.ReactNode;
    className?: string;
}

export default function VideoBox({ children, className = "" }: VideoBoxProps) {
    return (
        <div
            className={`relative w-full aspect-video rounded-[2.5rem] overflow-hidden bg-black/40 backdrop-blur-md border border-white/20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center transition-all duration-500 ${className}`}
            style={{ transformStyle: "preserve-3d" }}
        >
            {children ? (
                children
            ) : (
                <div className="flex flex-col items-center justify-center text-white/40 pointer-events-none">
                    <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-cinzel tracking-[0.2em] text-sm uppercase">Embedded Video Area</span>
                </div>
            )}
        </div>
    );
}
