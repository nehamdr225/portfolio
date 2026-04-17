"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Let&apos;s work together
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-10">
              I&apos;m currently open to new opportunities in UX design and
              cybersecurity. Whether you have a project in mind or just want to
              connect — I&apos;d love to hear from you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="grid sm:grid-cols-3 gap-5 mb-10"
          >
            {[
              {
                label: "Email",
                value: "neha@manandhar.com",
                href: "mailto:neha@manandhar.com",
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/manandhar-neha/",
                href: "https://www.linkedin.com/in/manandhar-neha/",
              },
              {
                label: "Location",
                value: "St. Louis, MO",
                href: null,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-xl bg-bg-card border border-border text-center"
              >
                <p className="text-text-muted text-xs uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text text-sm font-medium hover:text-accent transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-text text-sm font-medium">{item.value}</p>
                )}
              </div>
            ))}
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            href="mailto:neha@manandhar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            Send me a message
          </motion.a>
        </div>
      </div>
    </section>
  );
}
