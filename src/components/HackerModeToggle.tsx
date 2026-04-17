"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HackerModeToggle() {
  const [hacker, setHacker] = useState(false);
  const [flashing, setFlashing] = useState(false);
  const [blink, setBlink] = useState(true);

  // Cursor blink when in normal mode
  useEffect(() => {
    if (hacker) return;
    const id = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(id);
  }, [hacker]);

  const toggle = () => {
    if (flashing) return;
    setFlashing(true);

    // Snap the theme at peak flash (halfway through)
    setTimeout(() => {
      const root = document.documentElement;
      if (hacker) {
        root.classList.remove("hacker");
      } else {
        root.classList.remove("light");
        root.classList.add("hacker");
      }
      setHacker((h) => !h);
    }, 160);

    // Remove flash overlay
    setTimeout(() => setFlashing(false), 420);
  };

  return (
    <>
      {/* Full-screen flash overlay */}
      <AnimatePresence>
        {flashing && (
          <motion.div
            key="flash"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: [0.7, 0.3, 0.65, 0] }}
            transition={{ duration: 0.42, ease: "easeOut", times: [0, 0.2, 0.5, 1] }}
            className="fixed inset-0 pointer-events-none"
            style={{
              zIndex: 99999,
              backgroundColor: "#00e676",
              mixBlendMode: "overlay",
            }}
          />
        )}
      </AnimatePresence>

      <button
        onClick={toggle}
        className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium tracking-widest border transition-all duration-200 ${
          hacker
            ? "border-accent/60 text-accent bg-bg-card hover:bg-bg-card-hover hover:border-accent"
            : "border-border text-text-muted bg-bg-card hover:text-text hover:border-text-muted"
        }`}
        style={{ fontFamily: hacker ? "var(--font-hacker), monospace" : undefined }}
      >
        {/* Status dot */}
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            hacker ? "bg-accent shadow-[0_0_6px_var(--color-accent)]" : "bg-text-muted"
          }`}
        />

        {hacker ? (
          <span>&gt;&nbsp;EXIT_</span>
        ) : (
          <span>
            Try Me
            <span className={`ml-0.5 ${blink ? "opacity-100" : "opacity-0"} transition-opacity duration-75`}>
              _
            </span>
          </span>
        )}
      </button>
    </>
  );
}
