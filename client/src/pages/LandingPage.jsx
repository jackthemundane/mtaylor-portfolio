import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Moon, Sun } from "lucide-react";

const LandingPage = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-[#111] dark:text-[#ededed] font-sans transition-colors duration-300 flex flex-col">
      {/* HEADER & TOGGLE */}
      <header className="p-6 md:p-8 flex justify-end max-w-5xl w-full mx-auto">
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full text-slate-500 hover:text-[#111] dark:hover:text-[#ededed] hover:bg-black/5 dark:hover:bg-white/10 transition-all"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex px-8 md:px-16 lg:px-24 pb-16 md:pb-32 max-w-5xl mx-auto w-full">
        <div className="w-full">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-[#dcfce7] dark:bg-emerald-950/40 text-[#166534] dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-8 border border-[#bbf7d0] dark:border-emerald-900/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 dark:bg-emerald-500"></span>
            </span>
            Open to Work
          </div>

          {/* The Hero Statement */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-8">
            I'm Mike Taylor.
            <br />
            I turn complex strategy
            <br />
            into actionable backlogs
            <br />
            and focused execution.
            <br />
          </h1>

          {/* Subtitle / Bio */}
          <p className="text-lg md:text-xl text-[#525252] dark:text-[#a1a1aa] leading-relaxed max-w-3xl mb-6">
            Senior Technical Product Owner with 12+ years of experience. I
            bridge the gap between business objectives and technical delivery to
            build enterprise products that actually matter. When I'm off the
            clock, I build my own full-stack apps and games. It's a great hobby,
            and an even better reminder of why I leave the production code to
            the actual engineers.
          </p>

          {/* Inline Artifact Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm md:text-base font-bold text-[#111] dark:text-[#ededed] mb-16">
            <a
              href="https://www.linkedin.com/in/michaeltaylorca/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Linkedin
            </a>

            <a
              href="https://github.com/jackthemundane"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Github
            </a>
          </div>

          {/* THREE EQUAL PILLARS SECTION */}
          <div className="mt-8 flex flex-col gap-8">
            {/* 2. 20 Games Challenge */}
            <Link
              to="/games"
              className="group flex items-center gap-3 text-2xl md:text-3xl font-bold w-fit transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              20 Games Challenge
              <ArrowRight
                size={28}
                className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
              />
            </Link>

            {/* 1. Technical Projects */}
            <Link
              to="/technical"
              className="group flex items-center gap-3 text-2xl md:text-3xl font-bold w-fit transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              Technical Projects
              <ArrowRight
                size={28}
                className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
              />
            </Link>

            {/* 3. Product Portfolio */}
            <Link
              to="/product"
              className="group flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-2xl md:text-3xl font-bold w-fit transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              <div className="flex items-center gap-3">
                Product Portfolio
                <ArrowRight
                  size={28}
                  className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all hidden md:block"
                />
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
