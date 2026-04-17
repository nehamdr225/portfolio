"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    const stop = () => lenis.stop();
    const start = () => lenis.start();
    const scrollToTop = () => lenis.scrollTo(0, { duration: 1.4 });
    window.addEventListener("lenis:stop", stop);
    window.addEventListener("lenis:start", start);
    window.addEventListener("lenis:scrollToTop", scrollToTop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("lenis:stop", stop);
      window.removeEventListener("lenis:start", start);
      window.removeEventListener("lenis:scrollToTop", scrollToTop);
      lenis.destroy();
    };
  }, []);

  return null;
}
