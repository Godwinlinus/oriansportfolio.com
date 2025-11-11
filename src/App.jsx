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

  // Animate gradient motion
  useEffect(() => {
    const loopAnimation = async () => {
      while (true) {
        await controls.start({
          background: [
            "radial-gradient(circle at 20% 30%, rgba(69,34,255,0.15), transparent 70%), radial-gradient(circle at 80% 70%, rgba(0,255,255,0.15), transparent 70%), #0a0a0a",
            "radial-gradient(circle at 70% 40%, rgba(255,0,150,0.15), transparent 70%), radial-gradient(circle at 30% 60%, rgba(0,255,255,0.15), transparent 70%), #0a0a0a",
            "radial-gradient(circle at 50% 20%, rgba(69,34,255,0.15), transparent 70%), radial-gradient(circle at 60% 80%, rgba(255,255,0,0.15), transparent 70%), #0a0a0a",
          ],
          transition: {
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          },
        });
      }
    };
    loopAnimation();
  }, [controls]);

  return (
    <div className="relative font-['Inter'] text-white scroll-smooth overflow-hidden">
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
