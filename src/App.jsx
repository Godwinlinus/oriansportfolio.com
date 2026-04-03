import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import TechnicalSkills from "./components/TechnicalSkills";
import FeaturedPorjects from "./components/FeaturedProject";

export default function App() {
  const controls = useAnimation();
  return (
    <div className="relative font-['Inter'] text-white scroll-smooth overflow-hidden bg-[#0a0a0a]">
      {/* Animated Worm Gradient Background */}
      <motion.div
        animate={controls}
        className="absolute inset-0 -z-10 transition-all duration-1000"
      ></motion.div>

      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <About />
      <TechnicalSkills />
      <Experience />
      <FeaturedPorjects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}
