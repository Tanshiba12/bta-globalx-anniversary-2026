"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export interface AnimatedButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
}

export default function AnimatedButton({ text, onClick, className = "" }: AnimatedButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`cta-button group relative px-8 md:px-10 py-4 md:py-5 border-2 border-black/40 bg-gradient-to-r from-black/5 to-black/10 hover:from-black hover:to-black text-black hover:text-white font-cinzel tracking-[0.15em] uppercase text-sm md:text-base font-bold transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 rounded-sm ${className}`}
        >
            {/* Animated background shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700" />

            {/* Button content */}
            <div className="relative flex items-center justify-center gap-3">
                <span>{text}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-500" />
            </div>
        </button>
    );
}
