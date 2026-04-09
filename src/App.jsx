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
import Aside from "./components/Aside";

export default function App() {
  const controls = useAnimation();
  return (
    <div className="relative scroll-smooth overflow-hidden">
      <Navbar />
      <Aside />
      <main className="relative pt-20">
        <section id="hero">
          <Hero />
        </section>
        <FeaturedPorjects />
        <About />
        <TechnicalSkills />
        <Experience />
        
        <Resume />
        <Contact />
        <Footer />
      </main>
      
    </div>
  );
}
