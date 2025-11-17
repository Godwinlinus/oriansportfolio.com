import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiNextdotjs,
  SiFlutter,
  SiMysql,
  SiGit,
  SiFigma,
  SiTypescript,
  SiGraphql,
  SiAppwrite,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-200" /> },
  { name: "Flutter", icon: <SiFlutter className="text-sky-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "Git & GitHub", icon: <SiGit className="text-orange-400" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "Graphql", icon: <SiGraphql className="text-pink-600" /> },
  { name: "Appwrite", icon: <SiAppwrite className="text--[#FD366E]" /> },
];

export default function TechnicalSkills() {
  return (
    <section id="skills" className="px-6 py-20 max-w-6xl mx-auto text-gray-200">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-lg ml-9 tracking-widest text-gray-900 dark:text-gray-100 mb-10 font-bold mb-12 text-center"
      >
        TECHNICAL SKILLS
      </motion.h2>

      <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.07 }}
          >
            <div className="bg-[#0a0a0a]/60 border border-white/10 hover:border-indigo-500 transition-all duration-300 rounded-2xl backdrop-blur-sm">
              <div className="flex justify-center mt-2 mb-2">
                <div className="text-5xl">{skill.icon}</div>
              </div>  
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


