"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "@/lib/data";
import { navVariants } from "@/components/animations/variants";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    
    // Slight delay to allow the mobile menu to close before scrolling
    setTimeout(() => {
      const el = document.getElementById(href.replace("#", ""));
      if (el) {
        // Calculate offset for the sticky header
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 150);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg-primary shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-1"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 text-sm font-bold text-white shadow-md shadow-indigo-500/20 transition-transform group-hover:scale-105">
            H
          </div>
          <span className="ml-1 text-lg font-bold text-slate-800 dark:text-white">
            ari<span className="gradient-text">.</span>
          </span>
        </a>

        {/* Desktop Nav — Pill Container */}
        <div className="hidden items-center md:flex">
          <div className={`flex items-center gap-0.5 rounded-full px-1.5 py-1.5 transition-all duration-300 ${
            scrolled ? "bg-slate-100/80 dark:bg-neutral-800/80" : "bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm shadow-sm"
          }`}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative rounded-full px-4 py-1.5 text-[13px] font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-slate-500 hover:text-slate-800 dark:text-neutral-200 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 shadow-md shadow-indigo-500/20"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full bg-slate-100 p-2 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-800 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-slate-700 dark:hover:text-white"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <a
            href={personalInfo.resumeUrl}
            download
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 px-5 py-2 text-[13px] font-semibold text-white shadow-md shadow-indigo-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.02]"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/80 md:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="h-0.5 w-5 rounded-full bg-slate-700"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="h-0.5 w-5 rounded-full bg-slate-700"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="h-0.5 w-5 rounded-full bg-slate-700"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-900/95 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {mounted && (
                <div className="mb-4 flex items-center justify-between px-4">
                  <span className="text-sm font-medium text-slate-500 dark:text-neutral-400">Theme</span>
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="rounded-full bg-slate-100 p-2 text-slate-500 dark:bg-neutral-800 dark:text-neutral-300"
                  >
                    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                  </button>
                </div>
              )}
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-800 dark:text-neutral-200 dark:hover:bg-slate-800/50 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={personalInfo.resumeUrl}
                download
                className="mt-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
