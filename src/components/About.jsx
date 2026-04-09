import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function About() {
  const controls = useAnimation();

  // loop through dynamic water-like shape changes

  return (
    <section
      id="about"
      className="py-32 bg-surface-container-lowest border-y border-outline-variant/10"
    >
      {/* Profile Image with Water Border */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-7xl mx-auto px-12 md:px-24"
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center"

        >
          <div>
            <h2 className="font-headline text-4xl md:text-6xl leading-tight mb-12">
              Engineering as an <span className="italic text-primary">Art Form</span>
            </h2>
            <div className="space-y-8">
              <div className="group border-b border-outline-variant/20 pb-6">
                <h4 className="font-headline text-2xl mb-2 group-hover:text-primary transition-colors">
                  01. Intentionality
                </h4>
                <p className="font-body text-on-surface-variant text-sm">Every line of code serves a purpose. No bloat, no excess, only pure performance.</p>
              </div>
              <div className="group border-b border-outline-variant/20 pb-6">
                <h4 className="font-headline text-2xl mb-2 group-hover:text-primary transition-colors">02. Longevity</h4>
                <p className="font-body text-on-surface-variant text-sm">Building systems that transcend trends and remain robust through shifts in the tech landscape.</p>
              </div>
              <div className="group border-b border-outline-variant/20 pb-6">
                <h4 className="font-headline text-2xl mb-2 group-hover:text-primary transition-colors">03. Clarity</h4>
                <p className="font-body text-on-surface-variant text-sm">Complex logic reduced to elegant, understandable architectural patterns.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-32 h-32 border-t border-l border-primary/30"></div>
            <img
              src="/profile.jpg"
              alt="Linus Mba"
              className="w-full grayscale brightness-75 hover:brightness-100 transition-all duration-1000"
            />
            <div className="absolute -bottom-8 -right-8 p-12 bg-primary text-on-primary">
              <p className="font-headline text-4xl italic">"Silent strength."</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
