import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 bg-[#1e293b] text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <div className="flex justify-center space-x-6 text-2xl">
        <a
          href="mailto:linusgodwin2@gmail.com"
          className="hover:text-blue-400"
        >
          <Mail />
        </a>
        <a
          href="https://github.com/Godwinlinus?tab=overview&from=2025-07-01&to=2025-07-31"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <Github />
        </a>
        <a
          href="https://linkedin.com/in/godwin-linus-md-4a5082196"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <Linkedin />
        </a>
      </div>
    </section>
  );
}
