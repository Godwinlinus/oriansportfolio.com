import React from "react";
import { motion } from "framer-motion";
import { PiDatabaseBold } from "react-icons/pi";
import { BsLayersFill } from "react-icons/bs";
import { MdOutlineSettingsInputComposite } from "react-icons/md";
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
  SiVercel,
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
  { name: "Appwrite", icon: <SiAppwrite className="text-pink-500" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> }
];

export default function TechnicalSkills() {
  return (
    <section id="experience" className="py-32 px-12 md:px-24 relative z-10 bg-surface border-t border-outline-variant/10">
          {/* Card wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-between items-end mb-24"
          >
            <h2 className="font-headline text-5xl md:text-7xl">
              Technical <br/>
              <span className="italic text-primary">Experience</span>
            </h2>
            <span className="font-label text-[10px] text-outline tracking-[0.5em] mb-4 uppercase">
              02 — Stacks
            </span>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid md:grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-primary text-xl"><BsLayersFill /></span>
                <h3 className="font-headline text-2xl uppercase tracking-tighter">
                  Frontend
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                  <span className="font-body text-sm">
                    React / Next.js
                  </span>
                  <span className="font-label text-[9px] text-outline uppercase">
                    Expert
                  </span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                  <span className="font-body text-sm">
                    TypeScript
                  </span>
                  <span className="font-label text-[9px] text-outline uppercase">
                    Master
                  </span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                  <span className="font-body text-sm">
                    Taiwind CSS
                  </span>
                  <span className="font-label text-[9px] text-outline uppercase">
                    Expert
                  </span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                  <span className="font-body text-sm">
                    Three.js / WebGL
                  </span>
                  <span className="font-label text-[9px] text-outline uppercase">
                    Advance
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-primary text-xl"><PiDatabaseBold /></span>
                <h3 className="font-headline text-2xl uppercase tracking-tighter">Backend</h3>
              </div>
              <div className="space-y-4">
                  <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                    <span className="font-body text-sm">Node.js / Express</span>
                    <span className="font-label text-[9px] text-outline uppercase">Expert</span>
                  </div>
                <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                  <span className="font-body text-sm">PostgreSQL / Redis</span>
                  <span className="font-label text-[9px] text-outline uppercase">Expert</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                  <span className="font-body text-sm">GraphQL</span>
                  <span className="font-label text-[9px] text-outline uppercase">Advanced</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                  <span className="font-body text-sm">Python / Django</span>
                  <span className="font-label text-[9px] text-outline uppercase">Advanced</span>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-primary text-xl"><MdOutlineSettingsInputComposite /></span>
                <h3 className="font-headline text-2xl uppercase tracking-tighter">Systems</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                  <span className="font-body text-sm">Docker / K8s</span>
                  <span className="font-label text-[9px] text-outline uppercase">Advanced</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                  <span className="font-body text-sm">AWS / GCP</span>
                  <span className="font-label text-[9px] text-outline uppercase">Advanced</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                  <span className="font-body text-sm">CI/CD Pipelines</span>
                  <span className="font-label text-[9px] text-outline uppercase">Master</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                  <span className="font-body text-sm">Rust</span>
                  <span className="font-label text-[9px] text-outline uppercase">Intermediate</span>
                </div>
              </div>
            </div>
          </motion.div>
    </section>
  );
}


