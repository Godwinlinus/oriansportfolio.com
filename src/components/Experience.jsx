import React from "react";
import { motion } from "framer-motion";

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
    <section id="experience" className="px-6 py-20">
      {/* Card wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white/95 rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10"
      >
        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm tracking-widest text-gray-900 mb-8"
            >
              EXPERIENCE
            </motion.h2>

            <div className="relative pl-6">
              {/* vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-400" />
              {experienceData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * idx, duration: 0.6 }}
                  className="mb-10 relative pl-6"
                >
                  <span className="absolute -left-7 top-1 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 ring-4 ring-white" />
                  <h3 className="text-lg font-semibold text-gray-800">{item.company}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.role}</p>
                  <p className="text-xs text-gray-400 mt-1 mb-3">{item.period}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-sm tracking-widest text-gray-800 mb-8">EDUCATION</h2>

            <div className="relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-400" />
              {educationData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * idx + 0.2, duration: 0.6 }}
                  className="mb-10 relative pl-6"
                >
                  <span className="absolute -left-7 top-1 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 ring-4 ring-white" />
                  <h3 className="text-lg font-semibold text-gray-800">{item.company}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.role}</p>
                  <p className="text-xs text-gray-400 mt-1 mb-3">{item.period}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
