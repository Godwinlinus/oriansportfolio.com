import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        Hi, I’m <span className="text-blue-400">Linus</span> —
        <br /> Frontend Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-lg text-gray-300 max-w-xl mb-8"
      >
        I build sleek, fast, and creative web experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg font-semibold hover:bg-gray-700 transition"
        >
          Download Resume
        </a>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-10"
      >
        <img
          src="/profile.jpg"
          alt="Linus Mba"
          className="w-56 h-56 rounded-full border-4 border-blue-400 object-cover"
        />
      </motion.div>
    </section>
  );
}
