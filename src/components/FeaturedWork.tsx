"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

type Track = "all" | "design" | "security";

interface CaseStudy {
  client: string;
  goal: { intro?: string; bullets: string[] };
  role: string;
  solution: { intro?: string; bullets: string[] };
  impact: string;
}

interface Project {
  title: string;
  description: string;
  track: "design" | "security";
  tags: string[];
  images: string[];
  caseStudy?: CaseStudy;
}

const projects: Project[] = [
  {
    title: "Delight Solutions",
    description:
      "End-to-end UX/UI design for a Nepal-based digital agency — covering services, careers, and client lead generation across a cohesive multi-page website.",
    track: "design",
    tags: ["UX Research", "UI Design", "End-to-End", "Web Design"],
    images: [
      "/images/delight-solutions/Picture10.png",
      "/images/delight-solutions/Picture5.png",
      "/images/delight-solutions/Picture6.png",
      "/images/delight-solutions/Picture7.png",
      "/images/delight-solutions/Picture8.png",
      "/images/delight-solutions/Picture9.png",
    ],
    caseStudy: {
      client:
        "Delight Solutions, a Nepal-based digital agency offering marketing, web, and mobile services.",
      goal: {
        intro: "Create a clean, trustworthy website that:",
        bullets: [
          "Explains their services clearly",
          "Builds credibility through values, team, and testimonials",
          "Handles careers gracefully (whether or not roles are open)",
          "Makes it easy for potential clients to request a quote",
        ],
      },
      role: "End-to-end UX/UI: structure, flows, visual design, and states (empty, error, and success).",
      solution: {
        intro:
          "I designed a light, friendly interface with consistent illustration style and clear hierarchy:",
        bullets: [
          "Home page: positions Delight Solutions as a \"one-stop solution\" for digital needs, with a primary Contact Us CTA and a services overview that lets visitors scan what they offer at a glance.",
          "Services pages: break complex offerings into simple cards and pricing/scheme blocks, with a clear \"Request Quote\" path for each service.",
          "About page: focuses on mission, values, and team to build trust, supported by social links for each member.",
          "Careers flow: includes both a \"no open positions\" state, a vacancies view, and a simple \"Let us contact you\" form so interested candidates can still reach out.",
          "Contact & 404 pages: friendly owl illustration and minimal forms turn error and support states into moments that still feel on-brand.",
        ],
      },
      impact:
        "The new design gives Delight Solutions a cohesive, professional presence that supports lead generation, talent outreach, and long-term brand trust.",
    },
  },
  {
    title: "KAHA",
    description:
      "Product/UX–UI design for a Nepali smart location-sharing app — helping people, businesses, and homes create and share precise digital addresses across Nepal.",
    track: "design",
    tags: ["Mobile Design", "Product Design", "UX/UI", "Maps"],
    images: ["https://via.placeholder.com/600x400"],
    caseStudy: {
      client:
        "KAHA, a Nepali smart location-sharing and community app by Masovison Technology Pvt. Ltd., built to fix Nepal's unclear address and \"where exactly is this?\" problem.",
      goal: {
        intro: "Design a mobile experience that:",
        bullets: [
          "Makes creating and sharing precise locations (KAHA Tags) effortless",
          "Helps businesses and homes build a verified digital address",
          "Supports everyday use cases like delivery, meet-ups, tourism, and emergency help",
        ],
      },
      role: "Product/UX–UI design: user flows, information architecture, interaction patterns, visual system, and key screens for onboarding, tag creation, map views, and business profiles.",
      solution: {
        intro:
          "I designed a clean, map-centric interface where users can:",
        bullets: [
          "Generate and share KAHA Tags for homes, offices, and shops in a few taps",
          "Discover nearby entities and tourist spots, and chat with people or businesses directly in-app",
          "Use QR and tag-based navigation instead of vague landmark directions",
          "The UI balances local feel + modern app patterns, using simple icons, clear typography, and strong primary actions for \"Create Tag,\" \"Share,\" and \"Navigate.\"",
        ],
      },
      impact:
        "KAHA gives people and businesses in Nepal a reliable digital address, reducing back-and-forth calls for directions and supporting smoother deliveries, visits, and local discovery—essentially becoming an everyday \"where exactly is this?\" tool for Nepali users.",
    },
  },
  {
    title: "Aqore",
    description:
      "UX/UI design across Aqore's staffing platform — employee dashboard, SMS/email messaging, and campaign management — built for high data density and recruiter efficiency.",
    track: "design",
    tags: ["Dashboard", "Enterprise UX", "Messaging", "UI Design"],
    images: [
      "/images/aqore/Picture11.png",
      "/images/aqore/Picture14.png",
      "/images/aqore/Picture15.png",
      "/images/aqore/Picture12.png",
      "/images/aqore/Picture13.png",
    ],
    caseStudy: {
      client:
        "Aqore Software – a staffing and recruiting platform used by agencies to manage jobs, employees, and communications.",
      goal: {
        intro: "Modernize key parts of the product to:",
        bullets: [
          "Give new recruits/employees a clear view of their jobs, payments, and documents",
          "Help recruiters send SMS, email, and bulk campaigns efficiently",
          "Keep everything consistent with Aqore's design language and high data density needs",
        ],
      },
      role: "UX/UI Designer over 2 years – worked on employee dashboard, messaging flows, campaign creation, and visual refinements across the product.",
      solution: {
        intro: undefined,
        bullets: [
          "Employee Dashboard (new recruits): Single view of total assignments, hours, and pay; next scheduled jobs with shift countdowns; quick access to remaining onboarding tasks, recently viewed documents, and payment history; \"Explore jobs around you\" section to surface relevant new opportunities.",
          "SMS & Email Messaging: Inbox-style Text view with conversation history, call logs, audio notes, and templates; clear separation between \"Assigned to you,\" scheduled, and closed texts so recruiters always know what needs attention; message composer optimized for frequent, short updates with attachments and templates.",
          "Campaign Creation & Management: Guided Create Campaign flow (choose template → select phone profile → add internal notes → preview message); flexible recipient selection (search, checkboxes, bulk upload via CSV/Excel) for large lists; campaign dashboard with status, recipients, delivery, reply, and failure rates to quickly see performance; scheduling options so teams can set up campaigns in advance.",
        ],
      },
      impact:
        "These designs made Aqore's staffing platform more actionable and user-friendly for both sides: employees get transparency on their work and pay, while recruiters gain a streamlined workspace for high-volume texting and campaigns—all within a consistent, clean interface.",
    },
  },
  {
    title: "PeopleFirst",
    description:
      "Solo UX/UI design for an HR consulting and training practice — a warm, story-driven website clearly presenting Consulting, Training, and Enablement offerings.",
    track: "design",
    tags: ["Web Design", "UX/UI", "HR Tech"],
    images: [
      "/images/pf/1.png",
      "/images/pf/2.png",
      "/images/pf/3.png",
      "/images/pf/4.png",
    ],
    caseStudy: {
      client:
        "PeopleFirst – an HR consulting and training practice focused on leadership development, seminars, and career enablement.",
      goal: {
        intro: "Create a simple, story-driven website that:",
        bullets: [
          "Clearly explains three core offerings: Consulting, Training, Enablement",
          "Feels warm and people-focused, not \"corporate cold\"",
          "Lets visitors quickly understand what PeopleFirst does and how to work with them",
        ],
      },
      role: "Solo UX/UI designer – structure, page flows, visual direction, and content layout.",
      solution: {
        intro: undefined,
        bullets: [
          "Service Tabs (Consulting / Training / Enablement): Each pillar gets its own full-width hero image with strong, emotional photography — open road for Consulting (direction and strategy), interactive workshop photo for Training (energy and participation), landscape with raised arms for Enablement (growth and career elevation). Simple top navigation lets users switch between services without getting lost.",
          "Consulting Page: Long-form copy on continuous learning and organisational goals arranged in a clean, two-column layout. Supporting imagery reinforces partnership and collaboration.",
          "Training Page: Hero section \"Generating AHA! Moments for you\" sets an experiential tone. Below, content explains single seminars vs training programs, helping HR leaders choose the right format.",
          "Enablement Page: Focused message on job and career enhancement, supported by inspirational imagery to appeal to individuals as well as organisations.",
          "Across all pages I kept typography light, margins generous, and interactions minimal so the emphasis stays on clarity of services and emotional connection.",
        ],
      },
      impact:
        "The new site presents PeopleFirst as a cohesive, professional brand with three clearly differentiated offerings, making it easier for potential clients to understand where they fit—whether they need targeted consulting, hands-on training, or longer-term career enablement support.",
    },
  },
  {
    title: "Cyber Billikens",
    description:
      "End-to-end UX/UI for Saint Louis University's cybersecurity club — a dark, competitive site promoting their flagship CTF and connecting players, sponsors, and students.",
    track: "security",
    tags: ["UX/UI Design", "Cybersecurity", "Web Design", "End-to-End"],
    images: [
      "/images/cyber-billikens/Picture3.png",
      "/images/cyber-billikens/Picture2.png",
      "/images/cyber-billikens/Picture4.png",
      "/images/cyber-billikens/cyberb.png",
    ],
    caseStudy: {
      client: "Cyber Billikens, Saint Louis University's cybersecurity club.",
      goal: {
        intro: "Give the team a national-facing presence that:",
        bullets: [
          "Looks credible and competitive",
          "Promotes their flagship CTF",
          "Makes it easy for players, sponsors, and students to connect",
        ],
      },
      role: "End-to-end UX/UI: discovery, personas, flows, wireframes, visual design, and handoff.",
      solution: {
        intro:
          "I mapped three key audiences: competitive players, sponsors/mentors, and new SLU students and designed a dark, mysterious and enigmatic, cyber-themed but readable interface around their needs.",
        bullets: [
          "Home page: one-scroll story with strong branding, CTF countdown, dual CTAs (Register / Contact), and an advisory board section to build trust.",
          "Contact page: simple form plus LinkedIn, GitHub, and email options for quick outreach.",
          "Scoreboard & CTF screens: clear leaderboard, join/create team flow, and minimal UI so users focus on competing.",
        ],
      },
      impact:
        "The site became the club's main link for CTF promotion, outreach to other universities, and sponsor conversations, helping Cyber Billikens present as a serious, competitive team beyond SLU.",
    },
  },
  {
    title: "Security Capstone",
    description:
      "End-to-end Red vs Blue enterprise security simulation — moving across reconnaissance, exploitation, SIEM monitoring, post-exploitation investigation, and technical write-up.",
    track: "security",
    tags: ["Red Team", "Blue Team", "Wazuh", "SIEM", "Pen Testing", "OSINT"],
    images: ["https://via.placeholder.com/600x400"],
    caseStudy: {
      client:
        "For my cybersecurity capstone, I worked through a full-spectrum Red vs Blue security simulation in a prebuilt enterprise-style lab environment. Rather than focusing on only one role, I moved across the entire workflow: understanding the network, validating defensive visibility, performing offensive reconnaissance and exploitation, investigating post-compromise opportunities, and documenting the full attack path from both attacker and defender perspectives.\n\nThe capstone took place in a Proxmox-hosted lab that simulated a small enterprise network. The instructor provided the core infrastructure, which included a VyOS router facing a simulated external network, a pfSense firewall protecting the internal segment, an Ubuntu server running Wazuh, and a Windows 10 endpoint used for host monitoring and security testing.",
      goal: {
        intro: undefined,
        bullets: [],
      },
      role: "I approached this project as an end-to-end security exercise rather than a single-task lab. I worked across the full path: environment understanding, monitoring validation, attacker reconnaissance, exploitation, post-access investigation, and technical write-up.\n\nOn the defensive side, I worked with Wazuh, Sysmon, and pfSense log visibility to confirm that the environment could capture meaningful host and network activity. On the offensive side, I performed reconnaissance against the assigned target, identified an exposed service, pivoted through anonymous FTP access, used OSINT and logical analysis to derive credentials, gained interactive access to the target, and then investigated the system for further opportunities. I also carried the project through to the final proof-of-compromise stage by continuing targeted exploration until I located the hidden flag.",
      solution: {
        intro: undefined,
        bullets: [
          "Blue Team — Building Visibility First: Before attempting offensive work, I validated the monitoring pipeline. I worked with Wazuh Manager and dashboard on Ubuntu as the central SIEM, confirmed the Wazuh agent and Sysmon setup on Windows 10, and enabled pfSense log forwarding. I generated controlled activity (logons, command execution, system changes) and verified those actions appeared in Wazuh — shifting the environment from a passive attack target to a monitored, enterprise-like system.",
          "Red Team — Reconnaissance and Initial Access: The assigned target was 192.168.51.2. Nmap reconnaissance initially showed little, which forced troubleshooting and critical thinking about host hardening vs. lab connectivity. After validating the environment, FTP on port 40442 became visible. Anonymous login was enabled. Inside I found password.txt containing a real-world address and an obfuscated string. OSINT on the address surfaced the username amina; analysis of the encoded string derived the password Hackerone@9989. I then authenticated over SSH and gained an interactive shell as a valid local user.",
          "In Between Red and Blue: Once inside as amina, I shifted into investigation mode — running whoami, hostname, net user, net localgroup, and systeminfo to map privileges and host context, then exploring post-exploitation paths: stored credentials, PowerShell history, services via sc and wmic. Many actions returned \"Access is denied\" — from an offensive perspective, no easy escalation; from a defensive perspective, proof that least privilege and hardening were working. This middle layer is where red-team behavior becomes blue-team evidence.",
          "Flag Discovery: With additional instructor hints, I continued focused exploration until locating the hidden flag — confirming the full attack chain: reconnaissance → service abuse → clue extraction → credential derivation → authenticated access → system exploration → objective.",
          "Skills Demonstrated: Enterprise network flow and segmentation, SIEM visibility (Wazuh + Sysmon), firewall and endpoint telemetry analysis, Nmap reconnaissance, FTP abuse, OSINT-driven credential derivation, obfuscated password decoding, SSH authentication to a Windows target, privilege escalation investigation, and full technical narrative write-up.",
        ],
      },
      impact:
        "This capstone represents the kind of security work I want to keep doing: hands-on, investigative, and cross-functional. It shows that I am comfortable stepping into an environment I did not build, understanding how it works, validating visibility, thinking like an attacker, analyzing like a defender, and documenting the result like a security professional. I was not working on only one side of security. I was working across the whole story.",
    },
  },
];

// ── Case Study Content ────────────────────────────────────────────
function CaseStudyContent({
  caseStudy,
  tags,
}: {
  caseStudy: CaseStudy;
  tags: string[];
}) {
  return (
    <div className="space-y-10">
      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-md bg-bg-card border border-border text-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Client */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
          Client
        </h3>
        <div className="space-y-3">
          {caseStudy.client.split("\n\n").map((para, i) => (
            <p key={i} className="text-text-secondary leading-relaxed">{para}</p>
          ))}
        </div>
      </div>

      {/* Goal — only rendered when there are bullets */}
      {caseStudy.goal.bullets.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
            Goal
          </h3>
          {caseStudy.goal.intro && (
            <p className="text-text-secondary leading-relaxed mb-3">
              {caseStudy.goal.intro}
            </p>
          )}
          <ul className="space-y-2">
            {caseStudy.goal.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-text-secondary leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* My Role */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
          My Role
        </h3>
        <div className="space-y-3">
          {caseStudy.role.split("\n\n").map((para, i) => (
            <p key={i} className="text-text-secondary leading-relaxed">{para}</p>
          ))}
        </div>
      </div>

      {/* Solution */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
          Solution
        </h3>
        {caseStudy.solution.intro && (
          <p className="text-text-secondary leading-relaxed mb-3">
            {caseStudy.solution.intro}
          </p>
        )}
        <ul className="space-y-3">
          {caseStudy.solution.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-text-secondary leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* Impact */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
          Impact
        </h3>
        <p className="text-text-secondary leading-relaxed">{caseStudy.impact}</p>
      </div>
    </div>
  );
}

// ── Project Dialog ────────────────────────────────────────────────
function ProjectDialog({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [imgIndex, setImgIndex] = useState(0);
  const total = project.images.length;

  // Pause Lenis while panel is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.dispatchEvent(new Event("lenis:stop"));
    return () => {
      document.body.style.overflow = "";
      window.dispatchEvent(new Event("lenis:start"));
    };
  }, []);

  // ESC + arrow-key navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setImgIndex((i) => (i - 1 + total) % total);
      if (e.key === "ArrowRight") setImgIndex((i) => (i + 1) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, total]);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Side panel — slides in from the right, wider */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 260 }}
        className="fixed right-0 top-0 h-screen w-[80vw] bg-bg z-50 shadow-2xl flex flex-col md:flex-row overflow-hidden"
        role="dialog"
        aria-label={project.title}
        aria-modal="true"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-bg-card border border-border text-text-muted hover:text-text hover:bg-bg-card-hover transition-colors duration-200"
        >
          <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="3" x2="13" y2="13" />
            <line x1="13" y1="3" x2="3" y2="13" />
          </svg>
        </button>

        {/* Left — carousel + thumbnail strip */}
        <div className="md:w-[60%] md:shrink-0 md:h-full flex flex-col border-b md:border-b-0 md:border-r border-border">
          {/* Main image */}
          <div className="flex-1 relative overflow-hidden bg-bg-card">
            <AnimatePresence mode="wait">
              <motion.img
                key={imgIndex}
                src={project.images[imgIndex]}
                alt={`${project.title} image ${imgIndex + 1}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full object-contain"
              />
            </AnimatePresence>

            {/* Prev / Next arrows */}
            {total > 1 && (
              <>
                <button
                  onClick={() => setImgIndex((i) => (i - 1 + total) % total)}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-bg/80 border border-border text-text-muted hover:text-text hover:bg-bg transition-all duration-200 shadow-sm"
                >
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="10 3 5 8 10 13" />
                  </svg>
                </button>
                <button
                  onClick={() => setImgIndex((i) => (i + 1) % total)}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-bg/80 border border-border text-text-muted hover:text-text hover:bg-bg transition-all duration-200 shadow-sm"
                >
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 3 11 8 6 13" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Thumbnail strip */}
          {total > 1 && (
            <div className="shrink-0 flex gap-2 px-4 py-3 overflow-x-auto border-t border-border bg-bg">
              {project.images.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => setImgIndex(idx)}
                  aria-label={`View image ${idx + 1}`}
                  className={`shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    idx === imgIndex
                      ? "border-accent opacity-100"
                      : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <img
                    src={src}
                    alt={`${project.title} thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right — case study content */}
        <div className="flex-1 overflow-y-auto px-6 py-8 md:px-10 md:pt-16 md:pb-16">
          {/* Track badge */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className={`w-2 h-2 rounded-full ${
                project.track === "design" ? "bg-accent" : "bg-emerald-500"
              }`}
            />
            <span className="text-xs text-text-muted uppercase tracking-wider">
              {project.track}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {project.title}
          </h2>

          {project.caseStudy ? (
            <CaseStudyContent caseStudy={project.caseStudy} tags={project.tags} />
          ) : (
            <>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-bg-card border border-border text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </motion.div>
    </>
  );
}

// ── Main component ────────────────────────────────────────────────
export default function FeaturedWork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTrack, setActiveTrack] = useState<Track>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    activeTrack === "all"
      ? projects
      : projects.filter((p) => p.track === activeTrack);

  const tracks: { label: string; value: Track }[] = [
    { label: "All", value: "all" },
    { label: "Design", value: "design" },
    { label: "Security", value: "security" },
  ];

  return (
    <section id="work" className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            Portfolio / Case studies
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Featured work
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mb-8">
            A selection of projects spanning UX design and cybersecurity — each
            reflecting my commitment to building user-centered, secure products.
          </p>

          {/* Track filter */}
          <div className="flex gap-2">
            {tracks.map((t) => (
              <button
                key={t.value}
                onClick={() => setActiveTrack(t.value)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTrack === t.value
                    ? "bg-accent text-white"
                    : "bg-bg-card border border-border text-text-secondary hover:text-text hover:border-accent/30"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <motion.button
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i, ease: "easeOut" }}
              onClick={() => setSelected(project)}
              className="group rounded-xl cursor-pointer bg-bg-card border border-border overflow-hidden hover:border-accent/30 hover:bg-bg-card-hover transition-all duration-300 text-left w-full"
            >
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      project.track === "design"
                        ? "bg-accent"
                        : "bg-emerald-500"
                    }`}
                  />
                  <span className="text-xs text-text-muted uppercase tracking-wider">
                    {project.track}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-bg-card-hover border border-border text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Side panel */}
      <AnimatePresence>
        {selected && (
          <ProjectDialog project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
