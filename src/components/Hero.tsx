"use client";

import { motion } from "framer-motion";

const heroSkills = [
  {
    label: "UX Design",
    shape: (
      // wireframe layout blocks
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="4" y="7" width="32" height="7" rx="1.5" />
        <rect x="4" y="18" width="18" height="7" rx="1.5" />
        <rect x="4" y="29" width="24" height="5" rx="1.5" />
      </svg>
    ),
  },
  {
    label: "Security",
    shape: (
      // shield + checkmark
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4 L34 10 L34 22 C34 30 20 36 20 36 C20 36 6 30 6 22 L6 10 Z" />
        <path d="M14 20 L18 24 L26 16" />
      </svg>
    ),
  },
  {
    label: "Research",
    shape: (
      // magnifier
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="17" cy="17" r="11" />
        <line x1="25" y1="25" x2="35" y2="35" />
      </svg>
    ),
  },
  {
    label: "Frontend Dev",
    shape: (
      // </ > code brackets
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13,9 3,20 13,31" />
        <polyline points="27,9 37,20 27,31" />
        <line x1="24" y1="7" x2="16" y2="33" />
      </svg>
    ),
  },
  {
    label: "User Psychology",
    shape: (
      // two overlapping circles (Venn / mind)
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="15" cy="20" r="11" />
        <circle cx="25" cy="20" r="11" />
      </svg>
    ),
  },
  {
    label: "IT Support",
    shape: (
      // monitor + stand
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="4" y="5" width="32" height="22" rx="2" />
        <line x1="20" y1="27" x2="20" y2="34" />
        <line x1="13" y1="34" x2="27" y2="34" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-10 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-sm mx-auto md:max-w-none flex flex-col"
          >
            <div className="relative rounded-2xl overflow-hidden bg-bg-card border border-border flex-1 min-h-125">
              {/* Main image */}
              <img
                src="/images/pro.jpeg"
                alt="Neha Manandhar"
                className="absolute inset-0 w-full h-full object-cover background-position-top transition-transform duration-300 -scale-x-100"
              />
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:pt-4"
          >
            <p className="text-accent text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 md:mb-4">
              UX Designer & Security Specialist
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4 md:mb-6">
              Hi, I&apos;m{" "}
              <span className="text-accent">Neha</span>
              <br />
              Manandhar
            </h1>
            <p className="text-text-secondary text-base sm:text-lg md:text-xl leading-relaxed max-w-lg mb-6 md:mb-8">
              I craft intuitive digital experiences at the intersection of UX
              design and cybersecurity — making products that are both
              delightful and secure.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <a
                href="#work"
                className="inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-lg transition-colors duration-200"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 border border-border hover:border-text-muted text-text-secondary hover:text-text text-sm font-medium rounded-lg transition-colors duration-200"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>

        {/* Skill cards — full-width row below the grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 mt-6 md:mt-8">
          {heroSkills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover="hover"
              transition={{ duration: 0.5, delay: 0.5 + i * 0.07, ease: "easeOut" }}
              className="flex flex-col justify-between bg-bg-card border border-border rounded-xl p-3 sm:p-4 aspect-[5/3] overflow-hidden"
            >
              <motion.div
                variants={{ hover: { rotate: 8 } }}
                transition={{ type: "spring", stiffness: 180, damping: 14 }}
                className="w-7 h-7 sm:w-10 sm:h-10 text-text-muted"
              >
                {skill.shape}
              </motion.div>
              <span className="text-[10px] sm:text-xs font-medium text-text leading-tight">{skill.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
