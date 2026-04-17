"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            A bit about who I am
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              I&apos;m a multidisciplinary professional with a strong foundation in
              UX/UI design, cybersecurity, and frontend development. I hold a
              Master&apos;s degree in Cybersecurity from Saint Louis University and
              bring a unique perspective that combines user-centered design with
              security-first thinking.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              My work spans from creating intuitive interfaces and conducting
              user research to performing security audits and building secure web
              applications. I believe the best digital products are those that
              are both beautifully designed and fundamentally secure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { label: "Education", value: "MS Cybersecurity, SLU" },
              { label: "Focus", value: "UX + Security" },
              { label: "Location", value: "St. Louis, MO" },
              { label: "Availability", value: "Open to work" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-xl bg-bg-card border border-border"
              >
                <p className="text-text-muted text-xs uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="text-text font-medium">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
