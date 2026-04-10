import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function Hero() {


  return (
    <hero
      id="hero"
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
            <a 
              href="#work"
              className="flex items-center gap-4 group cursor-pointer"
              >
              <div className="w-12 h-[1px] bg-primary group-hover:w-20 transition-all duration-500"></div>
              <span className="font-label uppercase tracking-widest text-xs">
                Explore My Works
              </span>
            </a>
            <p className="max-w-md font-body text-on-surface-variant text-lg leading-relaxed">
              Fueled by  deep curiosity for technology and an obsession with solving real problems, i've led and collaborated 
              on initiatives that reshaped the fintech, healthcare and eCommerce space.
            </p>
          </div>             
        </div>
      </div>
    </hero>
  );
}
