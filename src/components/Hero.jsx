import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemLeft = {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemRight = {
    hidden: { opacity: 0, x: 40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex overflow-hidden"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="min-h-[884px] flex flex-col justify-center px-12 md:px-24 relative z-10"
      >
        <div className="max-w-5xl">
          <motion.p
            variants={itemUp}
            className="font-label text-primary uppercase tracking-[0.4em] text-sm mb-8"
          >
            Selected Portfolio {new Date().getFullYear()}
          </motion.p>

          <motion.h1
            variants={itemUp}
            className="font-headline text-6xl md:text-[8rem] leading-[0.9] font-light text-on-background mb-12"
          >
            I am Godwin. <br />
            <span className="italic text-primary-fixed-dim">
              A Software Engineer
            </span>
          </motion.h1>

          <div className="flex flex-col md:flex-row gap-12 mt-16 items-start md:items-center">
            <motion.a
              variants={itemLeft}
              href="#work"
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-[1px] bg-primary group-hover:w-20 transition-all duration-500"></div>
              <span className="font-label uppercase tracking-widest text-xs">
                Explore My Works
              </span>
            </motion.a>

            <motion.p
              variants={itemRight}
              className="max-w-md font-body text-on-surface-variant text-lg leading-relaxed"
            >
              Fueled by deep curiosity for technology and an obsession with solving real problems, I have led and collaborated
              on initiatives that reshaped the fintech, healthcare and eCommerce space.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}