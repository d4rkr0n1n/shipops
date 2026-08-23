"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const resolvedTheme: Theme = theme ?? (typeof document !== "undefined" && document.documentElement.dataset.theme === "dark" ? "dark" : "light");

  useEffect(() => {
    const appliedTheme = document.documentElement.dataset.theme;
    const initialTheme: Theme = appliedTheme === "dark" ? "dark" : "light";
    setTheme(initialTheme);
  }, []);

  function toggleTheme() {
    const currentTheme: Theme = resolvedTheme;
    const nextTheme: Theme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("shipops-theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      onClick={toggleTheme}
    >
      <span aria-hidden="true">{resolvedTheme === "dark" ? "☀" : "◐"}</span>
    </button>
  );
}
