import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HELLO", href: "#hero" },
    { name: "ABOUT", href: "#about" },
    { name: "WORK", href: "#work" },
    { name: "AWARD", href: "#" },
    { name: "ARTICLES", href: "#" },
    { name: "RESUME", href: "resume.pdf" },
    { name: "SAY HELLO", href: "#contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Shared transition
  const transition = { duration: 0.5, ease: "easeOut" };

  // Desktop stagger
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 h-20 bg-surface-dim flex justify-between items-center px-12 shadow-md border-b border-outline-variant/10">
      {/* Logo */}
      <motion.a
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={transition}
        href="#hero"
        className="text-xl font-serif text-on-background tracking-tighter uppercase font-headline"
      >
        Orian
      </motion.a>

      {/* Desktop Menu */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="hidden lg:flex items-center"
      >
        {navLinks.map((link) => (
          <motion.a
            key={link.name}
            variants={item}
            href={link.href}
            className="hover:bg-surface-container-high text-primary font-bold px-6 py-2 font-serif text-[12px] uppercase tracking-[0.1em]"
          >
            {link.name}
          </motion.a>
        ))}
      </motion.div>

      {/* Mobile Button with Animated Icon */}
      <motion.button
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={transition}
        onClick={() => setIsOpen((v) => !v)}
        className="text-primary lg:hidden p-2"
        aria-label="Toggle menu"
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? "close" : "menu"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Mobile Menu + Overlay */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sliding Panel */}
            <motion.div
              className="fixed top-0 left-0 z-50 h-screen w-2/3 p-6 flex flex-col space-y-6 bg-surface-dim border-r border-outline-variant/10 lg:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="text-xl font-serif text-on-background tracking-tighter uppercase font-headline mb-8 pb-6 border-b border-outline-variant/10">
                Orian
              </div>

              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-primary text-lg font-semibold py-2 hover:bg-surface-container-high"
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}