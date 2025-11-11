import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  const strengths = [
    {
      title: "Communication",
      description:
        "Excellent communication skills enabling seamless collaboration with designers, backend teams, and clients. Skilled in translating project goals into functional, user-centered solutions.",
    },
    {
      title: "Leadership",
      description:
        "Mentored peers in frontend development and managed technical student projects. Coordinated academic and digital initiatives requiring cross-functional teamwork and creative problem-solving.",
    },
    {
      title: "Adaptability",
      description:
        "Thrives in dynamic environments. Continuously learning and integrating new tools, libraries, and frameworks to improve development efficiency and design execution.",
    },
  ];

  return (
    <motion.section
      id="resume"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 md:px-20 max-w-6xl mx-auto"
    >
      <h2 className="text-sm md:text-base text-purple-400 font-semibold tracking-[0.25em] mb-10 text-center">
        PROFESSIONAL STRENGTHS
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {strengths.map((strength, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03, rotate: 0.5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative bg-gradient-to-br from-[#1b1b1b]/80 to-[#262626]/70 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-[0_0_20px_rgba(100,0,255,0.15)] hover:shadow-[0_0_30px_rgba(120,0,255,0.35)]"
          >
            {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-700" /> */}
            <h3 className="text-lg md:text-xl font-semibold text-white mb-3 tracking-wide">
              {strength.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {strength.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
