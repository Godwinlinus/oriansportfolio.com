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
  return (
    <div className="relative scroll-smooth overflow-hidden">
      <Navbar />
      <Aside />
      <main className="relative pt-20">
        <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-primary/5 rounded-full"></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-primary/5 rounded-full"></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full"></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-primary/5 rounded-full"></div>
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
