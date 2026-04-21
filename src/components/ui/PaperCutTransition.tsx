import React from "react";

interface PaperCutTransitionProps {
    fill?: string;
    flip?: boolean;
    className?: string; // Add this so you can control it directly from page.tsx!
}

export default function PaperCutTransition({ fill = "#000000", flip = false, className = "h-[60px] lg:h-[100px]" }: PaperCutTransitionProps) {
    return (
        <div className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''}`} style={{ backgroundColor: 'transparent', transform: 'translateY(-1px)' }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className={`relative block w-full ${className}`}
            >
                <path
                    d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                    fill={fill}
                />
            </svg>
        </div>
    );
}