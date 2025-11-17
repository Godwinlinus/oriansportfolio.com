import React from "react";
import { Mail, Github, Linkedin, Phone } from "lucide-react"; // import Phone icon
import { motion } from "framer-motion";

export default function Contact() {
  const contactLinks = [
    {
      title: "Email",
      icon: <Mail size={28} />,
      href: "mailto:linusgodwin2@gmail.com",
    },
    {
      title: "GitHub",
      icon: <Github size={28} />,
      href: "https://github.com/Godwinlinus",
    },
    {
      title: "LinkedIn",
      icon: <Linkedin size={28} />,
      href: "https://linkedin.com/in/godwin-linus-md-4a5082196",
    },
  ];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative py-24 px-6 md:px-20 max-w-6xl mx-auto text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-cyan-400/10 blur-3xl animate-pulse opacity-40" />

      <h2 className="text-sm md:text-base text-purple-400 font-semibold tracking-[0.25em] mb-6">
        GET IN TOUCH
      </h2>

      <p className="text-2xl md:text-4xl font-bold text-gray-100 leading-snug mb-16 max-w-3xl mx-auto">
        I’d love to hear from you — whether it’s a collaboration, idea, or
        just to say hello.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
        {contactLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group relative border border-white/10 rounded-2xl p-8 backdrop-blur-md bg-[#1a1a1a]/70 shadow-[0_0_15px_rgba(120,0,255,0.2)] hover:shadow-[0_0_25px_rgba(120,0,255,0.4)] transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex flex-col items-center gap-4 relative z-10">
              <span className="text-purple-300 group-hover:text-cyan-400 transition-colors">
                {link.icon}
              </span>
              <h3 className="text-lg font-semibold tracking-widest text-white">
                {link.title}
              </h3>
            </div>
          </motion.a>
        ))}
      </div>
      <motion.a
        href="tel:+2349025372960"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 250 }}
        className="
          mt-16 inline-flex items-center gap-3 px-8 py-4 rounded-full
          bg-gradient-to-r from-purple-500 to-fuchsia-500
          text-white font-semibold tracking-widest shadow-lg
          hover:from-fuchsia-500 hover:to-purple-500
          transition-all transform will-change-transform
        "
      >
        <Phone size={24} />
        SAY HELLO
      </motion.a>
    </motion.section>
  );
}
