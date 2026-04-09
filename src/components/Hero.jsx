import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function Hero() {
  const containerRef = useRef(null);

  // normalized pointer values (-1 .. 1)
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  // smooth the motion (spring gives a pleasant lag)
  const springX = useSpring(pointerX, { stiffness: 120, damping: 20 });
  const springY = useSpring(pointerY, { stiffness: 120, damping: 20 });

  // pointer handler: compute relative cursor position inside the hero
  const handlePointerMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;

    const nx = (cx - rect.width / 2) / (rect.width / 2);
    const ny = (cy - rect.height / 2) / (rect.height / 2);

    const clamp = (v) => Math.max(-1, Math.min(1, v));
    pointerX.set(clamp(nx));
    pointerY.set(clamp(ny));
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };



  return (
    <hero
      ref={containerRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      className="relative flex overflow-hidden"
    >

      {/* Main content */}
      <div 
        className="min-h-[884px] flex flex-col justify-center px-12 md:px-24 relative z-10"
        data-stitch-vh="min-h-[884px]===min-h-screen"
      >
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-label text-primary uppercase tracking-[0.4em] text-sm mb-8"
          >
            Selected Portfolio {new Date().getFullYear()}
          </motion.p> 
          <h1 className="font-headline text-6xl md:text-[8rem] leading-[0.9] font-light text-on-background mb-12">
            I am Godwin. <br />
            <span className="italic text-primary-fixed-dim">
              A Software Engineer
            </span>
          </h1>
          <div className="flex flex-col md:flex-row gap-12 mt-16 items-start md:items-center">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-[1px] bg-primary group-hover:w-20 transition-all duration-500"></div>
              <span className="font-label uppercase tracking-widest text-xs">
                Explore My Works
              </span>
            </div>
            <p className="max-w-md font-body text-on-surface-variant text-lg leading-relaxed">
              Crafting digital excellence through architectural precision and
              minimalist aesthetics. Specialized in high-performance web systems.
            </p>
          </div>             
        </div>
      </div>
    </hero>
  );
}
