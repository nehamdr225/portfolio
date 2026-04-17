"use client";

import { useEffect, useRef, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sentinel placed at the start of the footer — button shows when this is visible */}
      <div ref={sentinelRef} aria-hidden />

      <button
        onClick={() => window.dispatchEvent(new Event("lenis:scrollToTop"))}
        aria-label="Back to top"
        className={`fixed bottom-8 right-8 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-bg-card border border-border text-text-muted shadow-md hover:text-text hover:border-accent/40 hover:bg-bg-card-hover transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 10 8 5 13 10" />
        </svg>
      </button>
    </>
  );
}
