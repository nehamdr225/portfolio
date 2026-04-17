"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProjectDetail {
  title: string;
  track: "design" | "security";
  role: string;
  timeline: string;
  overview: string;
  highlights: string[];
  image: string;
}

const projectDetails: ProjectDetail[] = [
  {
    title: "Cyber Billikens",
    track: "security",
    role: "Security Researcher & Developer",
    timeline: "2023 – 2024",
    overview:
      "A cybersecurity awareness and training platform developed for the Saint Louis University community. The project focused on educating students and staff about common cyber threats through interactive modules and real-world simulations.",
    highlights: [
      "Developed phishing simulation exercises",
      "Created interactive security training modules",
      "Implemented threat awareness dashboard",
      "Conducted user testing with 50+ participants",
    ],
    image: "/images/cyber-billikens/Picture3.png",
  },
  {
    title: "Delight Solutions",
    track: "design",
    role: "UX/UI Designer",
    timeline: "2022 – 2023",
    overview:
      "End-to-end UX design for a SaaS platform that helps businesses improve customer satisfaction workflows. Led the redesign of the core service delivery experience from research through implementation.",
    highlights: [
      "Conducted stakeholder interviews and user research",
      "Created user personas and journey maps",
      "Designed high-fidelity prototypes in Figma",
      "Improved task completion rate by 35%",
    ],
    image: "/images/delight-solutions/Picture6.png",
  },
  {
    title: "KAHA",
    track: "design",
    role: "Product Designer",
    timeline: "2022",
    overview:
      "Designed a mobile-first experience for KAHA, a travel and adventure booking platform. Focused on rich visual storytelling and intuitive navigation to drive booking conversions.",
    highlights: [
      "Designed end-to-end mobile booking flow",
      "Created visual design system and component library",
      "Conducted competitive analysis of travel apps",
      "Prototyped and tested with target users",
    ],
    image: "https://via.placeholder.com/800x600",
  },
  {
    title: "Aqore",
    track: "design",
    role: "UX Designer",
    timeline: "2021 – 2022",
    overview:
      "Designed multiple product surfaces for Aqore including an analytics dashboard, Jobs Schedule Management, and native mobile application for field service operations.",
    highlights: [
      "Dashboard: Data visualization and workflow optimization",
      "JSM: Streamlined Jobs Schedule Management interface",
      "Mobile: Offline-capable field service experience",
      "Established design patterns across platforms",
    ],
    image: "/images/aqore/Picture11.png",
  },
  {
    title: "PeopleFirst",
    track: "design",
    role: "UX/UI Designer",
    timeline: "2021",
    overview:
      "Designed an HR technology platform focused on employee engagement, onboarding, and self-service tools. Simplified complex HR workflows into intuitive user experiences.",
    highlights: [
      "Redesigned employee onboarding flow",
      "Built self-service portal for common HR tasks",
      "Created design system for consistent UI",
      "Improved employee satisfaction scores",
    ],
    image: "https://via.placeholder.com/800x600",
  },
  {
    title: "Security Capstone",
    track: "security",
    role: "Security Analyst",
    timeline: "2024",
    overview:
      "Comprehensive security assessment and vulnerability analysis project completed as part of the MS Cybersecurity program at Saint Louis University. Applied industry-standard frameworks to evaluate and improve system security posture.",
    highlights: [
      "Performed full vulnerability assessment using NIST framework",
      "Conducted penetration testing on web applications",
      "Developed risk mitigation strategies",
      "Presented findings to faculty review board",
    ],
    image: "https://via.placeholder.com/800x600",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            Case Studies
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Project deep dives
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl">
            Detailed breakdowns of selected projects across design and security.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projectDetails.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              inView={inView}
              reverse={i % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  inView,
  reverse,
}: {
  project: ProjectDetail;
  index: number;
  inView: boolean;
  reverse: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}
      className={`grid md:grid-cols-2 gap-8 items-center ${
        reverse ? "md:direction-rtl" : ""
      }`}
    >
      <div className={`${reverse ? "md:order-2" : ""}`}>
        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-bg-card border border-border">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className={`${reverse ? "md:order-1" : ""}`}>
        <div className="flex items-center gap-3 mb-3">
          <span
            className={`w-2 h-2 rounded-full ${
              project.track === "design" ? "bg-accent" : "bg-emerald-500"
            }`}
          />
          <span className="text-xs uppercase tracking-wider text-text-muted">
            {project.track} · {project.timeline}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
        <p className="text-accent text-sm mb-4">{project.role}</p>
        <p className="text-text-secondary leading-relaxed mb-5">
          {project.overview}
        </p>
        <ul className="space-y-2">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-sm text-text-secondary"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
