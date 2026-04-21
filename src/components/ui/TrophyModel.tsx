"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

function GlitchingTrophy() {
    const groupRef = useRef<THREE.Group>(null);

    // Simulated Trophy Mesh (A golden sphere/cube combo for now)
    // You would replace this with the actual GLTF loading logic later, e.g. using `useGLTF('/models/trophy.glb')`

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Pure rotation around its own Y axis (spinning, not orbiting/wobbling)
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

export default function TrophyModel() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Add the glitch/shake GSAP effect every 4 seconds
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
