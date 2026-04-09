import React from "react";
import { motion } from "framer-motion";

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
      id="projects"
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

          </div>

        </div>


      </div>

      

      <p className="text-3xl md:text-4xl font-bold text-gray-100 max-w-3xl leading-snug">
        Some of my favourite projects — where creativity, code, and caffeine
        collided perfectly.
      </p>

      <div className="grid md:grid-cols-1 gap-10 mt-12">
        {projects.map((proj, index) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative border border-white/10 rounded-2xl p-8 bg-[#0f0f0f]/70 backdrop-blur-sm overflow-hidden hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-500"
          >
            {/* Gradient hover overlay */}
            {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-purple-600/10 to-cyan-400/10" /> */}

            <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
              {proj.title}
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">{proj.desc}</p>

            <div className="flex flex-wrap gap-2">
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gradient-to-r from-purple-700/30 to-cyan-700/30 text-gray-300 px-3 py-1 rounded-full border border-gray-700/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            <motion.a
              href={proj.href}
              target="_blank"
              whileHover={{ x: 4 }}
              className="mt-6 text-sm text-purple-400 font-semibold cursor-pointer hover:text-cyan-300 transition-colors"
            >
              View Project →
            </motion.a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
