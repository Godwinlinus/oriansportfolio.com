import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const container = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full py-12 bg-[#131313]"
    >
      <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center border-t border-[#e5e2e1]/10 gap-8">
        
        <motion.div
          variants={item}
          className="pt-12 font-sans text-[10px] tracking-widest text-[#e5e2e1]/50 uppercase"
        >
          © {new Date().getFullYear()} Godwin Linus. ALL RIGHTS RESERVED.
        </motion.div>

        <motion.div
          variants={item}
          className="pt-0 md:pt-12 flex gap-8"
        >
          <motion.a
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-sans text-[10px] tracking-widest text-[#e5e2e1]/50 hover:text-[#e5e2e1] uppercase"
            href=""
          >
            Privacy Policy
          </motion.a>

          <motion.a
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-sans text-[10px] tracking-widest text-[#e5e2e1]/50 hover:text-[#e5e2e1] uppercase"
            href="https://linusgodwin.medium.com/terms-of-service-cf5c17fe9f44"
          >
            Terms of Service
          </motion.a>
        </motion.div>

      </div>
    </motion.footer>
  );
}