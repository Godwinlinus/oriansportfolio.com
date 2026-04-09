import React from "react";
import { motion } from "framer-motion";
import { PiDatabaseBold } from "react-icons/pi";
import { BsLayersFill } from "react-icons/bs";
import { MdOutlineSettingsInputComposite } from "react-icons/md";

const educationData = [
  {
    company: "University of Jos, Nigeria",
    role: "Bachelor of Medicine, Bachelor of Surgery",
    period: "2025",
    description:
      "Clinical training and academic leadership. Coordinated projects, led student initiatives, and supported digital health interventions.",
  },
  {
    company: "Harvard University (edX)",
    role: "CS50’s Web Programming with Python and JavaScript",
    period: "2024",
    description:
      "Completed CS50 Web Programming program covering Python, JavaScript, SQL, and modern web development practices.",
  },
  {
    company: "Data Analysis Bootcamp with Alexandra Freberg",
    role: "Data Analysis with Python, Pandas, MySQL, Excel, and Power BI",
    period: "2024",
    description:
      "Completed a comprehensive data analysis bootcamp covering Python, Pandas, MySQL, Excel, and Power BI, gaining hands-on experience with data cleaning, visualization, and reporting.",
  },
];

const experienceData = [
  {
    company: "Front-End Engineer (Movie Discovery App)",
    role: "Personal Project — Remote",
    period: "June 2025 - Present",
    description:
      "Designed and developed a movie discovery platform using React, Tailwind CSS and TMDB API. Built reusable components, implemented efficient state management, and deployed via Vercel with CI/CD using GitHub Actions.",
  },
  {
    company: "Frontend Developer (Political Campaign Website)",
    role: "Freelance — Remote",
    period: "July 2025 – Aug 2025",
    description:
      "Built an interactive campaign site with React and Framer Motion. Integrated Paystack for donations and Mailchimp for subscriptions, optimized for performance and accessibility.",
  },
  {
    company: "Frontend Developer (Study Tracker Web App)",
    role: "Personal Project — Remote",
    period: "July 2025 – Present",
    description:
      "Built a study tracking app using React, Firebase and Recharts. Implemented auth, timer analytics, and offline-capable features for reliable tracking.",
  },
  {
    company: "Academic Secretary / Technical Coordinator",
    role: "University of Jos — Jos, Nigeria",
    period: "2023 – 2024",
    description:
      "Coordinated digital initiatives, managed academic tracking systems, led data collection and visualization for research, and directed fundraising campaigns for pediatric patients.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-12 md:px-24 bg-surface border-b border-outline-variant/10">
      {/* Card wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-20">
          <span className="font-label text-[10px] text-outline tracking-[0.5em] uppercase block mb-8" >
            Professional Path
          </span>
          <div className="space-y-0">
            <div className="flex flex-col md:flex-row justify-between items-center py-10 border-b border-outline-variant/20 hover:bg-surface-container-high px-8 transition-colors group">
              <span className="font-body text-outline group-hover:text-primary">
                2021 - Present
              </span>
              <h3 className="font-headline text-3xl">Lead Architect at Obsidian Labs</h3>
              <span className="font-label text-[10px] tracking-widest uppercase">Senior Engineer</span>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center py-10 border-b border-outline-variant/20 hover:bg-surface-container-high px-8 transition-colors group">
              <span className="font-body text-outline group-hover:text-primary">2018 — 2021</span>
              <h3 className="font-headline text-3xl">Full Stack Developer at Neural Core</h3>
              <span className="font-label text-[10px] tracking-widest uppercase">Mid-Level</span>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center py-10 border-b border-outline-variant/20 hover:bg-surface-container-high px-8 transition-colors group">
              <span className="font-body text-outline group-hover:text-primary">2016 — 2018</span>
              <h3 className="font-headline text-3xl">Junior Frontend dev at Prism Agency</h3>
              <span className="font-label text-[10px] tracking-widest uppercase">Creative Tech</span>
            </div>
          </div>
        </div>
        <div>
          <span className="font-label text-[10px] text-outline tracking-[0.5em] uppercase block mb-8" >
            Academic Background
          </span>
          <div className="space-y-0">
            <div className="flex flex-col md:flex-row justify-between items-center py-10 border-b border-outline-variant/20 hover:bg-surface-container-high px-8 transition-colors group">
              <span className="font-body text-outline group-hover:text-primary">2016 — 2025</span>
              <h3 className="font-headline text-3xl">MBBS</h3>
              <span className="font-label textsm tracking-widest uppercase">University of Jos</span>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center py-10 border-b border-outline-variant/20 hover:bg-surface-container-high px-8 transition-colors group">
              <span className="font-body text-outline group-hover:text-primary">2023-2024</span>
              <h3 className="font-headline text-3xl"> CS50</h3>
              <span className="font-label text-sm tracking-widest uppercase">Harvard University (edX)</span>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center py-10 border-b border-outline-variant/20 hover:bg-surface-container-high px-8 transition-colors group">
              <span className="font-body text-outline group-hover:text-primary">2023-2024</span>
              <h3 className="font-headline text-3xl">Data Analysis Bootcamp</h3>
              <span className="font-label text-sm tracking-widest uppercase">with alexandra Freberg</span>
            </div>
          </div>
        </div>
      </motion.div>  
    </section>
  );
};

export default Experience;
