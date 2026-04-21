import React, { forwardRef } from 'react';

type Props = {
    blurOverlayRef?: React.RefObject<HTMLDivElement>;
};

const InteractiveBackground = forwardRef<HTMLDivElement, Props>(({ blurOverlayRef }, ref) => {
    return (
        <div
            ref={ref}
            className="absolute inset-0 w-full h-full pointer-events-none z-0 transform-gpu"
            style={{ transformOrigin: "bottom center" }}
        >
            {/* <img
                src="/assets/bta-bg-ezgif-1.gif"
                alt="Background animation"
                className="w-full h-full object-cover"
            /> */}

            {/* Dark blur overlay with mouse hover cutout mask */}
            <div
                ref={blurOverlayRef}
                className="absolute inset-0 w-full h-full pointer-events-none bg-black/40 backdrop-blur-md"
                style={{
                    maskImage: "radial-gradient(circle 350px at center, transparent 10%, black 100%)",
                    WebkitMaskImage: "radial-gradient(circle 350px at center, transparent 10%, black 100%)",
                    transition: "mask-image 0.1s ease-out, -webkit-mask-image 0.1s ease-out"
                }}
            ></div>

            {/* Bottom gradient fade for seamless section transitions */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-black pointer-events-none"></div>
        </div>
    );
});

InteractiveBackground.displayName = 'InteractiveBackground';
export default InteractiveBackground;