import React, { useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeToggleProps {
  onThemeChange: (newTheme: Theme) => void;
}

function getInitialTheme(): Theme {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
  } catch {
    // 
  }
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onThemeChange }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch {
        // 
    }

    onThemeChange(theme); 

  }, [theme, onThemeChange]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggle}
      aria-pressed={isDark}
      aria-label="Toggle theme"
      className={`
        cursor-pointer rounded-full border px-3.5 py-2 font-semibold transition-colors duration-300
        ${isDark 
          ? 'border-gray-700 bg-gray-800 text-gray-200 hover:bg-gray-700' 
          : 'border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200'
        }
      `}
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default ThemeToggle;