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
    title: "Aqore Mobile App",
    description:
      "Product design for Aqore's first mobile app — a comprehensive staffing solution for employees, office staff, and customers to manage work, timesheets, and hiring on the go.",
    track: "design",
    tags: ["Mobile Design", "Product Design", "Multi-User UX", "Enterprise App"],
    images: [
      "/images/aqore-mobile/1.png",
      "/images/aqore-mobile/2.png",
      "/images/aqore-mobile/3.png",
      "/images/aqore-mobile/4.png",
      "/images/aqore-mobile/5.png",
      "/images/aqore-mobile/6.png",
      "/images/aqore-mobile/7.png",
      "/images/aqore-mobile/8.png",
      "/images/aqore-mobile/9.png",
    ],
    caseStudy: {
      client:
        "Aqore is a staffing and recruiting platform used by agencies to manage workers, clients, and jobs. The web product already existed, but there was no mobile experience for employees in the field, office staff on the go, or customers checking talent and timesheets.",
      goal: {
        intro: "Design a net-new mobile app that works for three groups at once:",
        bullets: [
          "Employees / contractors – see assignments, locations, tasks, and pay",
          "Office staff / recruiters – manage candidates, timesheets, notes, and tasks",
          "Customers / HR contacts – view workers, contact details, and basic analytics",
        ],
      },
      role: "Product Design Lead – Defined the mobile IA, flows, and interaction patterns from the ground up. Led a small team of designers and worked closely with developers through delivery. Pitched the vision and design proposals directly to the CEO and leadership, getting buy-in on scope, priorities, and rollout. Built a reusable mobile design system aligned with the existing web brand.",
      solution: {
        intro: undefined,
        bullets: [
          "Role-based home: focused employee home showing tasks, timesheet approvals, upcoming jobs, and invoices; map-based assignment details with pay and schedule.",
          "Customer & contact views: snapshot screens with key contact info, comments, and HR people, optimized for quick actions (call, email) on the go.",
          "Candidate & notes: \"Interested / Not interested\" decisions with a chat-like notes history so recruiters can collaborate around each candidate.",
          "Timesheet & bulk actions: simple day-chips pattern to apply time changes across multiple workers and days in a few taps.",
          "Tasks & metrics: internal task lists by stage (New Hire, Paperwork, Review, Orientation) and a compact dashboard with weekly hiring trends.",
        ],
      },
      impact:
        "The mobile app turned Aqore from a desk-only system into a full staffing workflow on mobile: Workers know where to be, when to work, and what they're being paid. Recruiters can review, message, and update timesheets away from their desks. Customers get lightweight visibility into people and performance, improving transparency.",
    },
  },
  {
    title: "Aqore – Staffing & Recruiting Employee Dashboard + Messaging Suite",
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
    title: "Aqore – Job Schedule Manager (JSM)",
    description:
      "Product/UX design for a new scheduling tool inside Aqore's staffing platform — transforming complex shift planning from spreadsheets to a visual, unified planner for agencies.",
    track: "design",
    tags: ["Product Design", "Scheduling", "Enterprise UX", "Workflow Design"],
    images: [
      "/images/jsm/1.png",
      "/images/jsm/2.png",
      "/images/jsm/3.png"
    ],
    caseStudy: {
      client:
        "Aqore Software – a staffing and recruiting platform used by agencies to manage large, mixed workforces (hourly, temp, full-time). They needed a way to plan and manage complex shift schedules directly inside the product instead of relying on spreadsheets.",
      goal: {
        intro: "Create a new Job Schedule Manager (JSM) that lets schedulers:",
        bullets: [
          "Plan shifts across multiple clients, roles, and locations",
          "See open vs filled shifts at a glance",
          "Quickly create, copy, and adjust schedules for any level of worker",
        ],
      },
      role: "Product/UX Design Lead – Took the JSM from zero to full concept, including workflows, IA, and interaction model. Pitched the vision and proposed solutions directly to the CEO and leadership, aligning on problems, scope, and success metrics. Designed the full experience (list/grid views, filters, job creation wizard) and collaborated with devs through implementation.",
      solution: {
        intro: undefined,
        bullets: [
          "Schedule Overview: Calendar-like view grouped by customer and job role (e.g., \"Coca Cola – Quality Assurance\"). Color-coded shift cards (day, swing, overnight) showing time, headcount, and open/filled status. Left-side filters (customer, department, job title, address, status, office) so schedulers can instantly narrow thousands of shifts.",
          "New Job & Shift Creation (3-Step Flow): 1) Create New Job: select customer, department, worksite, job title, pay/bill rates, skills, and base shifts. 2) Manage Schedules: pick PPE period, days, and shifts, then apply them across the week in one action instead of editing each day. 3) Assign: allocate workers into remaining slots (open vs filled clearly indicated).",
          "Designed for a wide demographic: The UI uses clear typography, spacing, and simple controls so both front-line coordinators and senior managers can understand the schedule at a glance.",
        ],
      },
      impact:
        "JSM turned a spreadsheet-heavy, error-prone process into a visual planner inside Aqore: Schedulers can see capacity and gaps instantly and fill shifts faster. Agencies manage thousands of shifts across brands and locations in one unified tool. This project is one of my favourite pieces of work: I owned the concept, sold it to the CEO, and designed the end-to-end experience that now supports scheduling for a very broad workforce.",
    },
  },
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
    images: [
      "/images/kaha/1.webp",
      "/images/kaha/2.webp",
      "/images/kaha/3.webp",
      "/images/kaha/4.webp",
      "/images/kaha/5.webp",
      "/images/kaha/6.webp",
    ],
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
    images: [
      "/images/capstone/1.png",
      "/images/capstone/2.png",
      "/images/capstone/3.png",
      "/images/capstone/4.png",
    ],
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

  // Pause Lenis while dialog is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Stop Lenis and disable its wheel events
    window.dispatchEvent(new Event("lenis:stop"));

    // Disable Lenis wheel events on the document
    const preventLenisWheel = (e: WheelEvent) => {
      const target = e.target as Element;
      if (target?.closest('[data-lenis-prevent]') || target?.closest('[data-dialog-content]')) {
        e.stopImmediatePropagation();
      }
    };

    document.addEventListener('wheel', preventLenisWheel, { capture: true, passive: false });

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('wheel', preventLenisWheel, { capture: true });
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

      {/* Centered dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 28, stiffness: 260 }}
        className="fixed inset-0 lg:inset-4 bg-bg z-50 lg:rounded-2xl shadow-2xl flex flex-col overflow-hidden lg:w-[70vw] lg:max-h-[90vh] lg:mx-auto lg:my-auto"
        role="dialog"
        aria-label={project.title}
        aria-modal="true"
        data-dialog-content
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

        <div className="flex flex-col lg:flex-row h-full min-h-0">
          {/* Top/Left - carousel + thumbnail strip */}
          <div className="lg:w-[55%] lg:shrink-0 flex flex-col border-b lg:border-b-0 lg:border-r border-border min-h-0">
            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-bg-card min-h-[300px] lg:min-h-0">
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
                    className={`shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${idx === imgIndex
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

          {/* Bottom/Right - case study content */}
          <div
            className="flex-1 overflow-y-auto overscroll-contain"
            style={{
              overflowY: 'scroll',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-y',
              willChange: 'scroll-position'
            }}
            data-lenis-prevent
            onWheel={(e) => e.stopPropagation()}
          >
            <div className="p-6 lg:p-8">
              {/* Track badge */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`w-2 h-2 rounded-full ${project.track === "design" ? "bg-accent" : "bg-emerald-500"
                    }`}
                />
                <span className="text-xs text-text-muted uppercase tracking-wider">
                  {project.track}
                </span>
              </div>

              {/* LinkedIn post link for Security Capstone */}
              {project.title === "Security Capstone" && (
                <div className="mb-4">
                  <a
                    href="https://www.linkedin.com/pulse/exploring-full-cyber-kill-chain-where-red-vs-blue-purple-manandhar-cylwc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium bg-[#0077B5] text-white rounded-lg hover:bg-[#005885] transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Read LinkedIn Article
                  </a>
                </div>
              )}

              {/* Aqore mobile platform link */}
              {project.title === "Aqore" && (
                <div className="mb-4">
                  <a
                    href="https://www.aqore.com/staffing-app-mobile-software/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    View Live Platform
                  </a>
                </div>
              )}

              {/* KAHA app link */}
              {project.title === "KAHA" && (
                <div className="mb-4">
                  <a
                    href="https://kaha.com.np/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Explore Live App
                  </a>
                </div>
              )}

              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-6">
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
          </div>
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
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${activeTrack === t.value
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
              className="group rounded-xl flex flex-col cursor-pointer bg-bg-card border border-border overflow-hidden hover:border-accent/30 hover:bg-bg-card-hover transition-all duration-300 text-left w-full relative"
            >
              <div className="p-5 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`w-2 h-2 rounded-full ${project.track === "design"
                        ? "bg-accent"
                        : "bg-emerald-500"
                      }`}
                  />
                  <span className="text-xs text-text-muted uppercase tracking-wider">
                    {project.track}
                  </span>
                </div>

                {/* Absolutely positioned arrow */}
                <div className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-200">
                  <svg className="w-4 h-4 text-text-muted group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
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
