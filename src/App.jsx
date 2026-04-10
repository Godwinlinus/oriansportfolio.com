import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import TechnicalSkills from "./components/TechnicalSkills";
import FeaturedPorjects from "./components/FeaturedProject";
import Aside from "./components/Aside";

export default function App() {
  const controls = useAnimation();
  const rings = [300, 600, 900, 1200];

  return (
    <div className="relative scroll-smooth overflow-hidden">
      <Navbar />
      <Aside />
      <main className="relative pt-20">
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {rings.map((size, index) => (
            <div
              key={size}
              className="absolute top-1/2 left-1/2 
                        -translate-x-1/2 -translate-y-1/2 
                        border border-primary/15 rounded-full 
                        ring-animate"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                opacity: 0.5,
                animationDelay: `${index * 0.4}s`,
              }}
            />
          ))}
        </div>
        <section id="hero">
          <Hero />
        </section>
        <FeaturedPorjects />
        <TechnicalSkills />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </main>
      
    </div>
  );
}
