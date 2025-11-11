import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "INTRO", href: "#hero" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "PROJECTS", href: "#projects" },
    { name: "STRENGTHS", href: "#resume" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md border-b border-gray-800 tracking-widest">
      <div className="mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <motion.a
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          href="#hero"
          className="text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400"
        >
          ORIAN.
        </motion.a>

        {/* Desktop Menu */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex text-sm space-x-6 tracking-widest font-light border-l-2 border-gray-700 px-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-blue-400 transition"
            >
              {link.name}
            </a>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="text-3xl md:hidden text-gray-300 hover:text-blue-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-gray-800 flex flex-col px-6 py-4 gap-4 tracking-widest font-bold space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 text-xl hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
