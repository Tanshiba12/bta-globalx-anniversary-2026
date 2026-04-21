"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register ALL plugins once at app load
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

export const GsapProvider = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        // Optional: Perform one-time GSAP configuration
        gsap.config({ force3D: true, nullTargetAction: "revert" });
    }, []);

    return <>{children}</>;
};
