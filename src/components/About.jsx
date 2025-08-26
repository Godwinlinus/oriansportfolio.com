import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-20 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img
          src="/about.jpg"
          alt="About Me"
          className="rounded-full border-4 border-blue-400 w-48 h-48 object-cover mx-auto"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300 mb-4">
          I’m a frontend developer specialized in building beautiful,
          scalable, and user-friendly web applications.
        </p>
        <div className="flex gap-3 flex-wrap">
          {["Frontend", "React", "UI Design"].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gray-800 rounded-full text-sm text-blue-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
