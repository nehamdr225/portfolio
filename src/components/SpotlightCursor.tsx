"use client";

import { useEffect } from "react";

export default function SpotlightCursor() {
  useEffect(() => {
    const root = document.documentElement;
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        root.style.setProperty("--spotlight-x", `${e.clientX}px`);
        root.style.setProperty("--spotlight-y", `${e.clientY}px`);

        const target = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
        const isInteractive = !!target?.closest('a, button, input, textarea, select, [role="button"]');
        root.style.setProperty("--spotlight-size", isInteractive ? "0px" : "300px");
      });
    };

    const onMouseLeave = () => {
      root.style.setProperty("--spotlight-size", "0px");
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return null;
}
