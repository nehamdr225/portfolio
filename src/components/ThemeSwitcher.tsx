"use client";

import { useEffect, useState } from "react";

type Theme = "system" | "dark" | "light";

function applyTheme(theme: Theme) {
  const root = document.documentElement;

  // Enable smooth transition
  root.classList.add("theme-transitioning");
  const cleanup = () => root.classList.remove("theme-transitioning");
  const timer = setTimeout(cleanup, 300);

  const isLight =
    theme === "light" ||
    (theme === "system" &&
      !window.matchMedia("(prefers-color-scheme: dark)").matches);

  root.classList.toggle("light", isLight);

  return () => {
    clearTimeout(timer);
    cleanup();
  };
}

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("system");

  // Read stored theme on mount
  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Theme) || "system";
    setTheme(stored);
  }, []);

  // Listen for system preference changes when theme === "system"
  useEffect(() => {
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme]);

  const select = (t: Theme) => {
    setTheme(t);
    localStorage.setItem("theme", t);
    applyTheme(t);
  };

  const options: { value: Theme; label: string; icon: React.ReactNode }[] = [
    {
      value: "system",
      label: "System",
      icon: (
        <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <rect x="1" y="2" width="14" height="9" rx="1.5" />
          <line x1="8" y1="11" x2="8" y2="14" />
          <line x1="5" y1="14" x2="11" y2="14" />
        </svg>
      ),
    },
    {
      value: "dark",
      label: "Dark",
      icon: (
        <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3a5 5 0 1 0 5 5 3.5 3.5 0 0 1-5-5Z" />
        </svg>
      ),
    },
    {
      value: "light",
      label: "Light",
      icon: (
        <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <circle cx="8" cy="8" r="3" />
          <line x1="8" y1="1" x2="8" y2="3" />
          <line x1="8" y1="13" x2="8" y2="15" />
          <line x1="1" y1="8" x2="3" y2="8" />
          <line x1="13" y1="8" x2="15" y2="8" />
          <line x1="3" y1="3" x2="4.5" y2="4.5" />
          <line x1="11.5" y1="11.5" x2="13" y2="13" />
          <line x1="13" y1="3" x2="11.5" y2="4.5" />
          <line x1="4.5" y1="11.5" x2="3" y2="13" />
        </svg>
      ),
    },
  ];

  return (
    <div
      role="group"
      aria-label="Theme switcher"
      className="flex items-center rounded-lg border border-border bg-bg-card p-0.5 gap-0.5"
    >
      {options.map((opt) => {
        const active = theme === opt.value;
        return (
          <button
            key={opt.value}
            onClick={() => select(opt.value)}
            aria-pressed={active}
            aria-label={`${opt.label} theme`}
            title={opt.label}
            className={`flex items-center justify-center w-7 h-7 rounded-md transition-colors duration-150 ${
              active
                ? "bg-accent text-white"
                : "text-text-muted hover:text-text hover:bg-bg-card-hover"
            }`}
          >
            {opt.icon}
          </button>
        );
      })}
    </div>
  );
}
