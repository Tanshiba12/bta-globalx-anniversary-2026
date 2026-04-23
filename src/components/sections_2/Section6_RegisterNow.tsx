"use client";
import React from "react";
import Link from "next/link";

export default function Section6_RegisterNow() {
    return (
        <section id="section-6" className="relative min-h-screen w-full bg-transparent py-24 overflow-hidden flex flex-col justify-start items-center text-black">

            {/* Row 1: Partners & Sponsors - Premium Ribbon */}
            <div className="w-full mt-8 mb-20 flex flex-col items-center px-4 relative z-10">
                <div className="w-full flex flex-col items-center relative">
                    {/* Notch Label */}
                    <div className="relative w-fit mx-auto -mb-px z-20">
                        <p className="px-6 py-2 text-xs md:text-sm text-gray-900 font-semibold font-outfit tracking-widest uppercase bg-white border-t-2 border-l-2 border-r-2 border-black/20 rounded-t-lg">
                            Our Sponsors & Partners
                        </p>
                    </div>

                    {/* Minimal Sponsors Ribbon */}
                    <div className="relative w-full bg-white rounded-xl shadow-lg border border-black/20 overflow-hidden">
                        {/* Scrolling Sponsors Section */}
                        <div className="relative px-4 py-6">
                            {/* Fade edges effect */}
                            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                            {/* Scrolling Container */}
                            <div className="w-full overflow-hidden">
                                <div className="whitespace-nowrap flex items-center justify-center w-max animate-[scrollMarquee_30s_linear_infinite] gap-6 px-4">
                                    {/* Loop 3 times for seamless scroll */}
                                    {[...Array(3)].map((_, index) => (
                                        <React.Fragment key={index}>
                                            <img src="/assets/sponsors/dummy1.svg" alt="Sponsor" className="h-12 md:h-14 w-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 filter drop-shadow-md cursor-pointer" />
                                            <img src="/assets/sponsors/dummy2.svg" alt="Sponsor" className="h-12 md:h-14 w-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 filter drop-shadow-md cursor-pointer" />
                                            <img src="/assets/sponsors/dummy3.png" alt="Sponsor" className="h-12 md:h-14 w-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 filter drop-shadow-md cursor-pointer" />
                                            <img src="/assets/sponsors/dummy3 copy.png" alt="Sponsor" className="h-12 md:h-14 w-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 filter drop-shadow-md cursor-pointer" />
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ticket Packages CTA */}
            <div className="w-full flex flex-col items-center px-4 md:px-8 z-10">
                <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-center mb-4 text-white tracking-wide">
                    Register <span className="text-white">Now</span>
                </h2>
                <p className="text-black font-playfair text-lg md:text-xl text-center mb-16 max-w-2xl px-4">
                    Choose the package that best fits your experience at the BTA GlobalX Excellence Awards 2026.
                </p>

                <div className="grid lg:grid-cols-3 gap-8 w-full max-w-[1400px] mb-10">
                    {/* Package 1 */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                            <span className="text-2xl">🎫</span>
                        </div>
                        <h3 className="text-2xl font-cinzel font-bold text-gray-800 mb-2">General Admission</h3>
                        <p className="text-gray-500 font-playfair mb-8 flex-grow">Standard access to the event and wellness fair.</p>
                        <ul className="space-y-4 mb-10 text-gray-800 font-medium text-left w-full pl-4 md:pl-8">
                            <li className="flex items-center gap-3"><span className="text-green-500 font-bold">✔</span> Full Day Access Passes</li>
                            <li className="flex items-center gap-3"><span className="text-green-500 font-bold">✔</span> Seminar & Wellness Fair</li>
                            <li className="flex items-center gap-3 text-gray-400"><span className="text-gray-300 font-bold">✖</span> Gala Dinner</li>
                        </ul>
                        <Link href="/register" className="mt-auto w-full py-4 rounded-full bg-gray-800 text-white font-bold font-cinzel tracking-wider hover:bg-black transition-colors duration-300 shadow-lg">
                            Select Package
                        </Link>
                    </div>

                    {/* Package 2 */}
                    <div className="bg-gradient-to-b from-gray-900 to-black text-white rounded-3xl p-8 border-2 border-bta-gold shadow-[0_20px_50px_rgba(234,179,8,0.2)] transform lg:scale-105 hover:scale-110 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden z-10">
                        <div className="absolute top-4 right-4 bg-bta-gold text-black text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase shadow-md">Most Popular</div>
                        <div className="w-16 h-16 bg-gradient-to-br from-bta-gold to-yellow-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                            <span className="text-2xl text-black">🌟</span>
                        </div>
                        <h3 className="text-3xl font-cinzel font-bold text-bta-gold mb-2">VIP Admission</h3>
                        <p className="text-gray-300 font-playfair mb-8 flex-grow">Premium experience including the gala dinner.</p>
                        <ul className="space-y-4 mb-10 text-gray-200 font-medium text-left w-full pl-4 md:pl-8">
                            <li className="flex items-center gap-3"><span className="text-bta-gold font-bold">✔</span> Full Day Access Passes</li>
                            <li className="flex items-center gap-3"><span className="text-bta-gold font-bold">✔</span> Seminar & Wellness Fair</li>
                            <li className="flex items-center gap-3"><span className="text-bta-gold font-bold">✔</span> Gala Dinner & Entertainment</li>
                        </ul>
                        <Link href="/register" className="mt-auto w-full py-4 rounded-full bg-bta-gold text-black font-bold font-cinzel tracking-wider hover:bg-yellow-500 transition-colors duration-300 shadow-[0_0_15px_rgba(234,179,8,0.4)]">
                            Reserve VIP Seat
                        </Link>
                    </div>

                    {/* Package 3 */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                            <span className="text-2xl">👑</span>
                        </div>
                        <h3 className="text-2xl font-cinzel font-bold text-bta-red mb-2">Elite Admission</h3>
                        <p className="text-gray-500 font-playfair mb-8 flex-grow">Exclusive all-access pass with backstage and founder meet.</p>
                        <ul className="space-y-4 mb-10 text-gray-800 font-medium text-left w-full pl-4 md:pl-8">
                            <li className="flex items-center gap-3"><span className="text-bta-red font-bold">✔</span> All VIP Features Included</li>
                            <li className="flex items-center gap-3"><span className="text-bta-red font-bold">✔</span> Exclusive Red Carpet Entry</li>
                            <li className="flex items-center gap-3"><span className="text-bta-red font-bold">✔</span> Backstage & Founder Meet</li>
                        </ul>
                        <Link href="/register" className="mt-auto w-full py-4 rounded-full bg-bta-red text-white font-bold font-cinzel tracking-wider hover:bg-red-700 transition-colors duration-300 shadow-lg">
                            Get Elite Pass
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .mask-image-linear {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
                @keyframes scrollMarquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); } /* Translating exactly a third since we use 3 blocks */
                }
            `}</style>
        </section>
    );
}
