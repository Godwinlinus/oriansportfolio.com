import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="px-6 py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Grab My Resume</h2>
      <a
        href="/resume.pdf"
        download
        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-lg font-semibold hover:opacity-90"
      >
        Grab My Resume
      </a>
    </section>
  );
}
