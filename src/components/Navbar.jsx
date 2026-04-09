import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTty } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HELLO", href: "" },
    { name: "ABOUT", href: "" },
    { name: "WORK", href: "" },
    { name: "AWARD", href: "#" }, 
    { name: "ARTICLES", href: "" }, 
    { name: "SAY HELLO", href: "" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-20 bg-surface-dim flex justify-between items-center px-12">
      {/* Logo / Name */}
      <motion.a
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        href="#hero"
        className="text-xl font-serif text-on-background tracking-tighter uppercase font-headline"
      >
        Orian
      </motion.a>

      {/* Desktop Menu */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex items-center"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:bg-surface-container-high text-primary font-bold px-6 py-2 font-serif text-[12px] uppercase tracking-[0.1em]"
          >
            {link.name}
          </a>
        ))}
      </motion.div>

      {/* Mobile Menu Button */}
        <motion.button
            onClick={() => setIsOpen((v) => !v)}
            className="text-primary lg:hidden p-2 transition hover:scale-110"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </motion.button>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="text-white fixed top-0 left-0 z-50 h-screen w-2/3 p-6 flex flex-col justify-start space-y-6 bg-surface-dim lg:hidden"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.25 }}
          >
            <div className="text-xl font-serif text-on-background tracking-tighter uppercase font-headline mb-8 pb-4">Orian</div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:bg-surface-container-high text-primary"
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
