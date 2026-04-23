"use client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

// ===== INLINED: AwardsCarousel =====
const awardsData = [
    {
        title: "BTA Globalx Lifetime Visionary Excellence Award 2026",
        description: "Honors individuals whose lifelong dedication, perseverance, and visionary leadership have left an indelible mark on their field and society at large. Reserved for those who, even beyond conventional retirement, continue to contribute meaningfully, demonstrating that true impact transcends age and time.",
    },
    {
        title: "BTA Globalx Entrepreneur Achiever Award 2026",
        description: "Recognizes exceptional entrepreneurs who have achieved significant success through bold innovation, strategic excellence, and resilient leadership. These individuals have built sustainable ventures that not only thrive in a competitive landscape but also set new standards for ethical and purpose-driven enterprise.",
    },
    {
        title: "BTA Globalx Inspiring Social Transformation 2026",
        description: "Celebrates the commitment of individuals in social work who profoundly impact lives, fostering a sense of community and encouraging collective efforts toward a more compassionate world. Their dedication demonstrates that meaningful leadership extends far beyond traditional realms.",
    }
];

function AwardsCarousel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % awardsData.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + awardsData.length) % awardsData.length);
    };

    return (
        <div ref={containerRef} className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden pointer-events-auto">
            <div className="relative w-[320px] md:w-[480px] h-[350px] perspective-1000">
                {awardsData.map((award, index) => {
                    let offset = index - activeIndex;
                    if (offset < -1) offset += awardsData.length;
                    if (offset > 1) offset -= awardsData.length;

                    let x = 0;
                    let z = 0;
                    let scale = 1;
                    let opacity = 0;
                    let rotateY = 0;
                    let zIndex = 0;

                    if (offset === 0) {
                        x = 0; z = 0; scale = 1; opacity = 1; rotateY = 0; zIndex = 10;
                    } else if (offset === 1) {
                        x = 100; z = -100; scale = 0.8; opacity = 0.6; rotateY = -15; zIndex = 5;
                    } else if (offset === -1) {
                        x = -100; z = -100; scale = 0.8; opacity = 0.6; rotateY = 15; zIndex = 5;
                    }

                    return (
                        <div
                            key={index}
                            className="absolute inset-0 p-8 rounded-2xl bg-[#050A30]/80 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl border border-[#D4AF37]/30 transition-all duration-500 ease-out flex flex-col justify-center"
                            style={{
                                transform: `translateX(${x}px) translateZ(${z}px) scale(${scale}) rotateY(${rotateY}deg)`,
                                opacity: opacity,
                                zIndex: zIndex,
                            }}
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-[#FFD700] mb-4 uppercase tracking-wide font-cinzel">
                                {award.title}
                            </h3>
                            <p className="text-sm md:text-base text-gray-300 leading-relaxed font-light">
                                {award.description}
                            </p>
                        </div>
                    );
                })}
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-4 z-20">
                <button onClick={prevSlide} className="px-6 py-2 border border-[#1E2761] bg-[#020210]/50 rounded-full hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-gray-300 hover:text-white transition-all uppercase tracking-widest text-xs shadow-[0_0_10px_rgba(30,39,97,0.5)]">
                    Prev
                </button>
                <button onClick={nextSlide} className="px-6 py-2 border border-[#1E2761] bg-[#020210]/50 rounded-full hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-gray-300 hover:text-white transition-all uppercase tracking-widest text-xs shadow-[0_0_10px_rgba(30,39,97,0.5)]">
                    Next
                </button>
            </div>
        </div>
    );
}

// ===== END INLINED: AwardsCarousel =====

// ===== INLINED: TrophyModel =====
function GlitchingTrophy() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.8;
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={2} rotationIntensity={0} floatIntensity={0.5}>
                <mesh position={[0, 1, 0]}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <meshStandardMaterial color="#FFD41D" metalness={1} roughness={0.1} />
                </mesh>
                <mesh position={[0, -0.5, 0]}>
                    <cylinderGeometry args={[0.5, 0.8, 1.5, 32]} />
                    <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
                </mesh>
            </Float>
        </group>
    );
}

function TrophyModel() {
    const containerRef = useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!containerRef.current) return;

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 4 });

        tl.to(containerRef.current, {
            x: () => Math.random() * 10 - 5,
            y: () => Math.random() * 10 - 5,
            rotation: () => Math.random() * 2 - 1,
            duration: 0.05,
            yoyo: true,
            repeat: 5,
        });

        return () => {
            tl.kill();
        }
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full min-h-[400px] flex items-center justify-center pointer-events-auto">
            <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#FFD41D" />
                <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={1} color="#FFA240" />

                <GlitchingTrophy />

                <Environment preset="city" />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
            </Canvas>
        </div>
    );
}

// ===== END INLINED: TrophyModel =====

export default function Section9_ExcellenceAwards() {
    return (
        <section id="section-9" className="relative min-h-screen w-full py-24 bg-transparent text-black flex flex-col items-center justify-center overflow-hidden z-10">
            {/* 4 Trophies in 4 Corners moving in a loop way */}
            <div className="absolute top-10 left-10 w-24 h-24 animate-[bounce_4s_infinite] opacity-50">
                <div className="w-full h-full bg-bta-gold/20 rounded-full blur-xl absolute"></div>
                <span className="text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">🏆</span>
            </div>
            <div className="absolute top-10 right-10 w-24 h-24 animate-[bounce_4s_infinite_0.5s] opacity-50">
                <div className="w-full h-full bg-bta-gold/20 rounded-full blur-xl absolute"></div>
                <span className="text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">🏆</span>
            </div>
            <div className="absolute bottom-10 left-10 w-24 h-24 animate-[bounce_4s_infinite_1s] opacity-50">
                <div className="w-full h-full bg-bta-gold/20 rounded-full blur-xl absolute"></div>
                <span className="text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">🏆</span>
            </div>
            <div className="absolute bottom-10 right-10 w-24 h-24 animate-[bounce_4s_infinite_1.5s] opacity-50">
                <div className="w-full h-full bg-bta-gold/20 rounded-full blur-xl absolute"></div>
                <span className="text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">🏆</span>
            </div>

            <div className="w-full px-4 flex flex-col items-center relative z-20">

                {/* Row 1 */}
                <div className="text-center mt-10 mb-6">
                    <h2 className="text-5xl md:text-7xl font-cinzel font-bold text-white leading-tight">
                        BTA Globalx <br />
                        Excellence Awards 2026
                    </h2>
                </div>

                <div className="text-center mb-12">
                    <span className="inline-block px-6 py-2 border border-bta-red text-black font-cinzel font-bold text-xl tracking-[0.2em] uppercase bg-bta-red/5 rounded-sm shadow-sm">
                        Nominations Open
                    </span>
                </div>

                {/* Cracked simple border */}
                <div className="w-full max-w-4xl mx-auto h-12 relative flex items-center justify-center mb-12 opacity-40">
                    <svg width="100%" height="20" viewBox="0 0 1000 20" preserveAspectRatio="none">
                        <path d="M0,10 L200,10 L220,2 L240,18 L260,10 L500,10 L520,3 L540,15 L560,10 L1000,10" fill="none" stroke="black" strokeWidth="2" />
                    </svg>
                </div>

                {/* Row 2: Nomination Categories */}
                <div className="w-full max-w-[1400px] flex flex-col items-center">
                    <h3 className="text-3xl md:text-4xl font-cinzel font-bold text-center mb-10 text-black uppercase tracking-widest">
                        Nomination Categories
                    </h3>

                    {/* Scrollable Horizontal List of Cards */}
                    <div className="w-full overflow-x-auto pb-12 pt-4 px-4 flex gap-6 snap-x snap-mandatory hide-scrollbars">
                        {[
                            { title: "Lifetime Visionary", icon: "🌟", desc: "Honoring lifelong dedication and impact." },
                            { title: "Entrepreneur Achiever", icon: "📈", desc: "Recognizing rapid growth and innovation." },
                            { title: "Social Transformation", icon: "🤝", desc: "Awarded for outstanding community impact." },
                            { title: "Tech Innovator", icon: "💻", desc: "Pioneering technological advancements." },
                            { title: "Green Energy Leader", icon: "🌱", desc: "Leading the charge in sustainability." }
                        ].map((cat, idx) => (
                            <div key={idx} className="flex-none w-[80vw] md:w-[300px] bg-white rounded-xl shadow-lg border border-gray-200 p-8 snap-center hover:-translate-y-2 transition-transform duration-300">
                                <div className="text-4xl mb-4 text-center">{cat.icon}</div>
                                <h4 className="text-xl font-cinzel font-bold text-gray-900 text-center mb-3">{cat.title}</h4>
                                <p className="text-gray-600 font-playfair text-center">{cat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <style jsx>{`
                .hide-scrollbars::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbars {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                }
            `}</style>
        </section>
    );
}