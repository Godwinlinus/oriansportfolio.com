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

  const socials = {
    GITHUB: "https://github.com/Godwinlinus",
    LINKEDIN: "https://linkedin.com/in/godwin-linus-md-4a5082196",
    INSTAGRAM: "https://www.instagram.com/godwinorian",
    TWITTER: "https://twitter.com/godwin_orian",
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      className="relative flex flex-col justify-center items-center px-6 md:px-20 pt-40 overflow-hidden"
    >
      {/* BACKGROUND GRID (upper-right half) */}
      <div className="pointer-events-none absolute w-full h-full md:absolute top-0 right-0 md:w-1/2 md:h-1/2 -z-10 overflow-hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-20"
        >
          <defs>
            <pattern
              id="gridPattern"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="w-full md:flex flex-row justify-between items-center text-left z-10">
        <div className="flex flex-col mb-20 md:mb-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-8xl font-bold leading-tight text-gray-100 mb-4"
          >
            <div className="flex gap-6 items-center font-light mb-6">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                className="w-[1px] h-14 bg-gray-700 mt-2"
              />
              <p className="text-sm tracking-widest text-gray-400">HELLO WORLD</p>
            </div>
            I am Godwin. 
            <br />
            A Software <br /> Engineer
          </motion.h1>
        </div>

        {/* Side Social Links */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xs font-light text-center md:flex flex-col items-center z-20"
        >
          {Object.entries(socials).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              className="py-10 px-1 md:px-0 rotate-270 text-gray-300 hover:text-cyan-400 transition"
            >
              {platform}
            </a>
          ))}
          <div className="w-[0px] h-0 md:w-[1px] h-28 bg-gray-700 mt-2" />
        </motion.div>
      </div>
    </section>
  );
}
