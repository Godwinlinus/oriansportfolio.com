import React from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Skreenly",
      desc: "A sleek and responsive movie discovery web app featuring real-time data from TMDB. Built for smooth performance and delightful UI transitions.",
      tags: ["React", "Tailwind", "Framer Motion", "TMDB", "Appwrite"],
      href: "https://streamr-gules.vercel.app/"
    },
    {
      title: "Nexus",
      desc: "This project delivers top-tier animation, seamless scalability and a refined UI experience, powered by GSAP. It features a dynamic video background with audio, rotating hero sections and fluid motion architecture.",
      tags: ["React", "Tailwind", "GSAP", "JavaScript"],
      href: "https://nexus-gamma-sand.vercel.app/"
    },
  ];

  return (
    <motion.section
      id="work"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-32 px-12 md:px-24 relative z-10 bg-surface"
    >
      <div className="flex justify-between items-end mb-24">
        <h2 className="font-headline text-5xl md:text-7xl">
          Featured 
          <br/>
          <span className="italic">Creations</span>
        </h2>
        <span className="font-label text-[10px] text-outline tracking-[0.5em] mb-4 uppercase">01 — Projects</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Large Project Card */}
        <div className="md:col-span-8 group">
          <div className="aspect-[16/9] bg-surface-container-low overflow-hidden relative">

            {/* image here */}
            <img 
              className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              src="\images\ai_assistant.png" 
              alt="" />
            <div className="absolute bottom-0 left-0 p-8 bg-surface/80 backdrop-blur-md">
              <span className="text-primary font-label text-[10px] tracking-widest uppercase">System Design</span>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-headline text-3xl mb-4">
              Neural Architecture v2 
            </h3>
            <p className="font-body text-on-surface-variant max-w-lg">A decentralized infrastructure focusing on low-latency data processing and real-time visualization for financial clusters.</p>
          </div>
        </div>

        {/* vertical offset card */}
        <div className="md:col-span-4 md:mt-32 group">
          <div className="aspect-[3/4] bg-surface-container-low overflow-hidden relative">

          {/* imag here */}
          <img 
            className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
            src=" " 
            alt="" />
            <div className="text-primary absolute top-0 right-0 p-8">
              <MdArrowOutward size={30} />
            </div>
          </div>
          <div className="8">
            <h3 className="font-headline text-2xl mb-4 italic">
              Gsap Core
            </h3>
            <p className="font-body text-sm text-on-surface-variant uppercase tracking-widest">Interactive UI / 2024</p>
          </div>
        </div>

        {/* small grid items  */}
        <div className="md:col-span-4 group">
          <div className="aspect-square bg-surface-container-low overflow-hidden relative">
            <img 
              className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-all duration-700"
              src="" 
              alt="" />
          </div>
          <div className="mt-6">
            <h3 className="font-headline text-xl">
              The Obsidian API
            </h3>
            <div className="w-8 h-[1px] bg-outline-variant my-4">
              <span className="font-label text-[10px] text-outline uppercase tracking-widest">
                Backend Engineering
              </span>
            </div>
          </div>
        </div> 
          

        <div className="md:col-span-4 md:mt-24 group">
          <div className="aspect-square bg-surface-container-low overflow-hidden relative">
            <img 
              className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-all duration-700"
              src="" 
              alt="" />
          </div>
          <div className="mt-6">
            <h3 className="font-headline text-xl">
              Brutalist Framework
            </h3>
            <div className="w-8 h-[1px] bg-outline-variant my-4"></div>
            <span className="font-label text-[10px] text-outline uppercase tracking-widest">Library Design</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
