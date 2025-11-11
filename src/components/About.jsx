import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function About() {
  const controls = useAnimation();

  // loop through dynamic water-like shape changes
  useEffect(() => {
    const animateShape = async () => {
      while (true) {
        await controls.start({
          borderRadius: [
            "40% 60% 60% 40%",
            "50% 50% 40% 60%",
            "60% 40% 50% 50%",
            "50% 60% 40% 50%",
            "40% 60% 60% 40%",
          ],
          scale: [1, 1.05, 1, 1.05, 1],
          transition: {
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          },
        });
      }
    };
    animateShape();
  }, [controls]);

  return (
    <section
      id="about"
      className="px-6 md:px-20 py-20 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center"
    >
      {/* Profile Image with Water Border */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative flex justify-center items-center mt-12 md:mt-0"
      >
        <motion.div
          animate={controls}
          className="absolute -inset-3 blur-xl"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(69, 34, 255, 0.3), transparent 70%), radial-gradient(circle at bottom left, rgba(0, 255, 255, 0.3), transparent 70%)",
          }}
        ></motion.div>

        <motion.div
          animate={controls}
          className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-500/30 to-fuchsia-400/30"
        ></motion.div>

        <img
          src="/profile.jpg"
          alt="Linus Mba"
          className="relative rounded-full border-4 border-transparent w-60 h-60 object-cover shadow-lg shadow-fuchsia-400/20"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-lg font-bold mb-4 tracking-widest text-fuchsia-400">ABOUT ME</h2>
        <p className="text-xl text-gray-300 mb-6 font-light leading-relaxed">
          I’m Dr. Linus Godwin — a medical doctor who writes front-end code for
          fun and impact. I turn complex ideas into smooth, interactive
          experiences you can see, click, and love. Blending precision from
          medicine with creativity in design, I build interfaces that feel
          effortless and alive.
        </p>
        <div className="flex gap-4 flex-wrap tracking-widest font-semibold">
          <a
            href="mailto:linusgodwin2@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-2 bg-cyan-400 hover:bg-fuchsia-400 rounded-full text-black transition-transform duration-300 hover:scale-105"
          >
            HIRE ME
          </a>
          <a
            href="./resume.pdf"
            className="px-8 py-2 bg-cyan-400 hover:bg-fuchsia-400 rounded-full text-black transition-transform duration-300 hover:scale-105"
          >
            DOWNLOAD CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}
