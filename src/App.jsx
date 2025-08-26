import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-['Inter'] bg-[#0f172a] text-white scroll-smooth">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}
