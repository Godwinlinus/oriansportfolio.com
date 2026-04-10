import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const socials = {
    GITHUB: "https://github.com/Godwinlinus",
    LINKEDIN: "https://linkedin.com/in/godwin-linus-md-4a5082196",
    INSTAGRAM: "https://www.instagram.com/godwinorian",
    TWITTER: "https://twitter.com/godwin_orian",
};

const Aside = () => {
  return (
    <div>
        {/* Side Social Links */}
        <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.4 }}
            className="fixed right-0 top-0 h-full w-16 bg-transparent flex flex-col justify-center items-center gap-20 z-40 hidden md:flex"
        >
            {Object.entries(socials).map(([platform, url]) => (
            <a
                key={platform}
                href={url}
                target="_blank"
                className="text-on-background -rotate-90 font-sans text-[10px] uppercase tracking-widest hover:text-primary transition-all"
            >
                {platform}
            </a>
            ))}
        </motion.div>
    </div>
  )
}

export default Aside
