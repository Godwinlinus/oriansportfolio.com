import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTty } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "PROJECTS", href: "#projects" },  
  ];

  return (
    <nav className="fixed w-full top-0 z-50 shadow-lg tracking-widest">
      <div className="mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <motion.a
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          href="#hero"
          className="text-lg lg:text-3xl font-bold tracking-widest "
        >
          Godwin
        </motion.a>

        {/* Desktop Menu */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex items-center gap-10 text-sm tracking-widest font-light"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-yellow"
            >
              {link.name}
            </a>
          ))}
        </motion.div>

        {/* LET'S CONNECT (desktop) */}
          <motion.button
            // onClick={toggleTheme}
            className="hidden lg:flex items-center gap-3 px-3 py-2 transition rounded"
            aria-label="Let's connect"
            title="Let's connect"
          >
            <p className="text-sm font-medium tracking-tight text-white">LET'S CONNECT</p>

            {/* Motion-wrapped FaTty: rings while hovering the button */}
            <motion.span
              // set transform origin so rotate looks like a phone wiggle
              style={{ originX: 0.5, originY: 0.5 }}
              initial={{ rotate: 0 }}
              whileHover={{
                rotate: [0, -22, 18, -12, 8, -6, 0],
                y: [0, -1, 0, -1, 0, -0.5, 0],
                transition: { duration: 0.9, repeat: Infinity, ease: "easeInOut" },
              }}
              className="inline-flex border p-2 rounded-full bg-yellow-400"
              aria-hidden="true"
            >
              <FaTty size={30}/>
            </motion.span>
          </motion.button>

        {/* Mobile Menu Button */}
          <motion.button
              onClick={() => setIsOpen((v) => !v)}
              className="text-white lg:hidden p-2 transition border rounded hover:scale-110"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <FiX className="w-8 h-8" /> : <FiMenu className="w-8 h-8" />}
          </motion.button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="text-white fixed top-0 left-0 z-50 h-screen w-2/3 p-6 flex flex-col justify-start space-y-6 bg-black lg:hidden"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.25 }}
          >
            <div className="text-3xl font-bold mb-8 border-b pb-4">Orian</div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="px-2 mt-4" />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
