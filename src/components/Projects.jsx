 import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Budget App",
      desc: "A web app to track & manage income and expenditure.",
      tags: ["React", "Tailwind"],
      img: "/budgetapp.jpg",
    },
    {
      title: "Symptom Diary",
      desc: "Track health symptoms with a clean UI.",
      tags: ["Next.js", "MongoDB"],
      img: "/symptomdiary.jpg",
    },
    {
      title: "Online resturant",
      desc: "A responsive online resturant for convinience shopping.",
      tags: ["React", "JavaScript", "CSS"],
      img: "/resturant.ipg",
    },
  ];

  return (
    <section id="projects" className="px-6 py-20 bg-[#1e293b]">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#0f172a] rounded-2xl shadow-md p-6 hover:shadow-xl transition border border-gray-700"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="h-32 w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-400 mb-4">{proj.desc}</p>
            <div className="flex gap-2 flex-wrap">
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
