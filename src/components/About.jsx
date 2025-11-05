import React from "react";
import { motion } from "framer-motion";

const skillSections = [
  {
    title: "Core Frontend Engineering",
    skills: [
      "JavaScript (ES6+), TypeScript",
      "React, Next.js, Vite, Redux Toolkit, Zustand",
      "React Query / TanStack Query, SWR",
      "SPA & SSR application architecture",
      "Component composition, state lifting, prop-drilling alternatives",
      "Virtual DOM concepts, reconciliation, memoization strategies",
      "Web performance tuning (lazy loading, code splitting, caching)",
      "Progressive enhancement, semantic HTML, accessibility (A11y WCAG)",
    ],
  },
  {
    title: "UI Engineering & Animations",
    skills: [
      "Tailwind CSS, SCSS, CSS Modules, Styled Components",
      "shadcn/ui, Radix UI primitives, Headless UI",
      "Framer Motion (advanced transitions, gestures, layout animations)",
      "Custom animation curves, staggered sequences, viewport triggers",
      "Responsive & adaptive UI systems, fluid grids, clamp-based typography",
    ],
  },
  {
    title: "Design & UX Collaboration",
    skills: [
      "Figma (auto-layout, tokens, component libraries, prototyping)",
      "Design system architecture & atomic component design",
      "UX flows, heuristics, micro-interactions, layout hierarchy",
      "Color theory, whitespace strategy, visual rhythm & affordance design",
    ],
  },
  {
    title: "API & Data Layer",
    skills: [
      "REST APIs, GraphQL basics",
      "Axios, Fetch API, WebSockets (real-time foundations)",
      "JSON transformation, schema validation, error handling patterns",
    ],
  },
  {
    title: "Cloud & Backend-as-a-Service",
    skills: [
      "Supabase Auth, DB & Storage",
      "Firebase (Auth, Firestore, Realtime DB)",
      "Serverless functions basics",
    ],
  },
  {
    title: "Tooling & Dev Workflow",
    skills: [
      "Git & GitHub (branches, pull requests, code reviews)",
      "ESLint, Prettier, Husky hooks, lint-staged",
      "Webpack, Rollup, Babel fundamentals",
      "CI/CD pipelines basics (GitHub Actions)",
      "Environment config & build pipelines",
    ],
  },
  {
    title: "Performance & Quality",
    skills: [
      "Lighthouse audits, Core Web Vitals",
      "Bundle analysis & optimization via dynamic imports",
      "Error boundaries, fallback UI, graceful degradation",
      "Testing fundamentals — Jest, React Testing Library, Vitest basics",
    ],
  },
  {
    title: "Product Mindset",
    skills: [
      "Agile / Scrum delivery",
      "MVP mindset, iterative development cycles",
      "Documentation culture (project readmes, component stories)",
      "Cross-functional teamwork with design & backend engineering",
      "User-centric problem solving & feedback loops",
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center md:items-start"
      >
        <img
          src="/about.jpg"
          alt="About Me"
          className="rounded-full border-4 border-blue-400 w-48 h-48 object-cover"
        />
        <h2 className="mt-6 text-2xl font-bold">About Me</h2>
        <p className="text-gray-300 mt-3 max-w-md">
          I build beautiful, scalable, and user-friendly web applications.
          Focused on clean architecture, performance, and delightful UI/UX — from
          animation micro-interactions to production-grade infrastructure.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>

        <div className="grid gap-4">
          {skillSections.map((section, idx) => (
            <motion.details
              key={section.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="group bg-gray-900/60 border border-gray-800 rounded-lg p-4"
            >
              <summary className="cursor-pointer flex items-center justify-between">
                <span className="text-sm font-medium">{section.title}</span>
                <svg
                  className="w-5 h-5 transform transition-transform duration-200 group-open:rotate-180"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M6 8l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>

              <ul className="mt-3 ml-4 list-disc text-sm space-y-1 text-gray-300">
                {section.skills.map((skill) => (
                  <li key={skill} className="leading-tight">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.details>
          ))}
        </div>

        <p className="text-sm text-gray-400 mt-2">
          Tip: expand any category to reveal more detail. Keep this component on
          your CV site or convert sections to a PDF-friendly format for printing.
        </p>
      </motion.div>
    </section>
  );
}
