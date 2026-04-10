import React from "react";
import { motion } from "framer-motion";
import { MdArrowForward } from "react-icons/md";

export default function Contact() {
  const contactLinks = [
    {
      title: "Email",
      href: "mailto:linusgodwin2@gmail.com",
    },
    {
      title: "GitHub",
      href: "https://github.com/Godwinlinus",
    },
    {
      title: "LinkedIn",
      href: "https://linkedin.com/in/godwin-linus-md-4a5082196",
    },
    {
      title: "twitter",
      href: "https://x.com/godwin_orian",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="py-32 px-12 md:px-24 bg-surface-container-lowest relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <h2 className="font-headline text-6xl md:text-8xl leading-tight font-light">
              Ready to start? <br/>
                <span className="italic text-primary">Say Hello.</span>
            </h2>
            <div className="space-y-2">
              <p className="font-label text-[10px] text-outline tracking-[0.5em] uppercase">Project Inquiries</p>
              <a className="font-headline text-3xl md:text-4xl text-on-background hover:text-primary transition-colors border-b border-primary/20 pb-2 inline-block" href="mailto:linusgodwin2@gmail.com">linusgodwin2@gmail.com</a>
            </div>
          </div>
          <div className="md:pt-24 space-y-16">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="font-label text-[10px] text-outline tracking-[0.5em] uppercase">connect</p>
                {contactLinks.map((link, index) => (
                  <div
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="space-y-2"
                  >
                    <span className="font-body text-sm hover:text-primary transition-colors uppercase tracking-widest cursor-pointer">{link.title}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <p className="font-label text-[10px] text-outline tracking-[0.5em] uppercase">Location</p>
                <p className="font-body text-sm uppercase tracking-widest text-on-surface-variant">Remote / Worldwide</p>
              </div>
            </div>
            <div className="pt-8">
              <a className="inline-flex items-center gap-6 group cursor-pointer" href="mailto:linusgodwin2@gmail.com">
                <span className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <span className="text-primary group-hover:text-on-primary transition-colors">
                    <MdArrowForward size={24} />
                  </span> 
                </span>
                <span className="font-label uppercase tracking-[0.3em] text-xs">
                  Start a conversation
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
