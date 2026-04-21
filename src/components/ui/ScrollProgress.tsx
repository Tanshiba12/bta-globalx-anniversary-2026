"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        /// Calculate overall scroll percentage //
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight;
            const winHeight = window.innerHeight;

            if (docHeight === winHeight) {
                setProgress(0);
                return;
            }

            const scrollPercent = scrollTop / (docHeight - winHeight);
            setProgress(Math.min(100, Math.max(0, scrollPercent * 100)));
        };

        window.addEventListener("scroll", handleScroll);
        /// Trigger once on mount //
        handleScroll();

        /// Set up section tracking //
        /// Identify which section is currently on screen //
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        /// Retrieve the section name from data attribute or id //
                        const name = entry.target.getAttribute("data-section") || entry.target.id;
                        if (name) {
                            /// Format the section name into title case //
                            const formattedName = name
                                .replace(/-/g, " ")
                                .replace(/\b\w/g, (char) => char.toUpperCase());
                            setActiveSection(formattedName);
                        }
                    }
                });
            },
            {
                rootMargin: "-40% 0px -40% 0px", /// Trigger when section hits middle of screen //
            }
        );

        const sections = document.querySelectorAll("section, [data-section]");
        sections.forEach((section) => observer.observe(section));

        return () => {
            window.removeEventListener("scroll", handleScroll);
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-white shadow-xl transition-all duration-300 pointer-events-none">
            <span className="text-xs uppercase tracking-widest font-semibold w-24 text-right truncate text-white/70">
                {activeSection || "Start"}
            </span>
            <div className="h-[2px] w-24 sm:w-32 bg-white/20 rounded-full overflow-hidden">
                <div
                    className="h-full bg-yellow-500 rounded-full transition-all duration-150 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <span className="text-xs font-mono w-8 text-white/70">
                {Math.round(progress)}%
            </span>
        </div>
    );
}
