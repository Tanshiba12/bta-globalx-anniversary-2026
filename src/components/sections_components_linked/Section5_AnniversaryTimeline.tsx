"use client";
import React, { useState } from "react";

const timelineData = [
    {
        time: "10:00 AM",
        title: "Opening Ceremony",
        icon: "🏁",
        details: [
            "Opening Ceremony | Bazaar & Wellness Fair Opening",
            "Workshop: Sustainable Leadership Empowering Entrepreneurs",
            "Panel Discussion: Empowering Next-Gen Entrepreneurs"
        ]
    },
    { time: "12:00 PM", title: "Buffet Lunch", icon: "🍽️", details: ["Buffet Lunch"] },
    {
        time: "2:00 PM",
        title: "Seminar",
        icon: "💡",
        details: [
            "Seminar",
            "Branding your Business with AI",
            "Accelerate Your Profits With AI"
        ]
    },
    { time: "5:00 PM", title: "KWC 2025 Final", icon: "🏅", details: ["KWC 2025 Malaysia Final Competition"] },
    { time: "6:30 PM", title: "Cake Cutting", icon: "🎂", details: ["Anniversary Cake Cutting"] },
    { time: "7:00 PM", title: "Buffet Dinner", icon: "🥂", details: ["Buffet Dinner"] },
    { time: "8:00 PM", title: "Anniversary Celebration", icon: "🏆", details: ["Anniversary Celebration", "Award Ceremony", "Lucky Draw"] },
    { time: "10:00 PM", title: "Photoshoot & Closing", icon: "📸", details: ["Photoshoot & Closing"] }
];

const KeyboardKey = ({ time, icon, isActive, onHover }: { time: string, icon: React.ReactNode, isActive: boolean, onHover: () => void }) => {
    return (
        <div
            onMouseEnter={onHover}
            className={`
                relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#f0f0f2] rounded-xl md:rounded-2xl flex flex-col items-end justify-between p-2 md:p-4 cursor-pointer select-none overflow-hidden transition-all duration-300 flex-shrink-0 z-10
                ${isActive ? "translate-y-2 bg-[#e8e8ea]" : "hover:-translate-y-1"}
            `}
            style={{
                boxShadow: isActive
                    ? "inset 0 1px 0 #fff, inset 0 -1px 0 #c0c0c4, inset 1px 0 0 #d8d8dc, inset -1px 0 0 #d8d8dc, 0 1px 0 #b2b2be, 0 2px 3px rgba(0,0,0,0.1)"
                    : "inset 0 1px 0 #fff, inset 0 -1px 0 #c8c8cc, inset 1px 0 0 #e0e0e4, inset -1px 0 0 #e0e0e4, 0 8px 0 #b2b2be, 0 9px 3px rgba(0,0,0,0.18), 0 14px 28px rgba(0,0,0,0.14)"
            }}
        >
            <div className="self-start text-[#a8a8b0] leading-none font-light truncate w-full text-center text-2xl sm:text-3xl md:text-5xl mt-1 md:mt-2">
                {icon}
            </div>
            <div className="text-[8px] sm:text-[10px] md:text-[13px] text-[#a8a8b0] tracking-wider text-right w-full font-bold uppercase overflow-hidden text-clip whitespace-nowrap">
                {time}
            </div>
        </div>
    );
};

export default function Section5_AnniversaryTimeline() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeItem = timelineData[activeIndex];

    return (
        <section id="section-5" className="relative min-h-screen w-full bg-transparent py-24 flex flex-col items-center justify-center overflow-hidden">
            <div className="w-full px-4 md:px-8 z-10 flex flex-col items-center">
                <div className="text-center mb-16 space-y-4 w-full">
                    <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-white">
                        Event <span className="text-white">Timeline</span>
                    </h2>
                </div>

                {/* Zig-Zag Horizontal Curved Timeline */}
                <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center pb-12 pt-12 px-2 sm:px-6 hide-scrollbars overflow-hidden">
                    {/* Connecting Wavy/Dashed Line */}
                    <div className="absolute top-1/2 left-4 right-4 h-1 border-t-[3px] border-dashed border-gray-500/30 -z-0"></div>

                    <div className="flex items-center justify-between w-full pb-8 relative z-10">
                        {timelineData.map((item, i) => (
                            <div key={i} className={`relative flex flex-col items-center ${i % 2 === 0 ? 'mb-20 md:mb-28' : 'mt-20 md:mt-28'} transform scale-90 sm:scale-100`}>
                                {/* Connector Stem vertically dropping to the dashed line */}
                                <div className={`absolute w-[3px] transition-colors duration-500 z-0 ${activeIndex === i ? 'bg-bta-red shadow-[0_0_10px_rgba(220,38,38,0.8)]' : 'bg-gray-500/30'} ${i % 2 === 0 ? 'h-10 md:h-[3.5rem] -bottom-10 md:-bottom-[3.5rem]' : 'h-10 md:h-[3.5rem] -top-10 md:-top-[3.5rem]'}`}></div>

                                {/* Active Thread Line connecting down to the Cloud Box */}
                                {activeIndex === i && i % 2 === 0 && (
                                    <div className="absolute w-[3px] bg-bta-red h-8 md:h-12 -bottom-20 md:-bottom-[6.5rem] opacity-70 animate-pulse hidden md:block" style={{ boxShadow: "0 0 10px rgba(220,38,38,0.8)" }}></div>
                                )}

                                <KeyboardKey
                                    time={item.time}
                                    icon={item.icon}
                                    isActive={activeIndex === i}
                                    onHover={() => setActiveIndex(i)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cloud Info Box Connected Below */}
                <div className="mt-8 md:mt-12 w-full max-w-4xl mx-auto relative px-4">
                    {/* Cloud arrow/thread receiver pointing up */}
                    <div className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[20px] md:border-x-[30px] border-x-transparent border-b-[24px] md:border-b-[32px] border-b-white/90 drop-shadow-2xl"></div>
                    {/* Glowing highlight receiver dot at the tip of the arrow */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-bta-red rounded-full shadow-[0_0_15px_rgba(220,38,38,1)] animate-pulse hidden md:block"></div>

                    <div className="w-full bg-white/90 backdrop-blur-2xl rounded-[3rem] px-6 py-12 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-white/50 flex flex-col items-center text-center transition-all duration-500">
                        <span className="text-5xl md:text-7xl mb-4 md:mb-6">{activeItem.icon}</span>
                        <h3 className="text-3xl md:text-5xl font-cinzel font-bold text-gray-900 mb-2">{activeItem.title}</h3>
                        <p className="text-bta-red font-bold tracking-widest text-sm md:text-base mb-8 uppercase">
                            {timelineData[activeIndex].time} - {timelineData[activeIndex + 1] ? timelineData[activeIndex + 1].time : '11:00 PM'}
                        </p>

                        <div className="space-y-4 w-full">
                            {activeItem.details.map((desc, i) => (
                                <p key={i} className="text-gray-700 font-playfair text-lg md:text-2xl font-medium tracking-wide">
                                    {desc}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}