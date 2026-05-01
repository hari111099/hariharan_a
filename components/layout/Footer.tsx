"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { personalInfo } from "@/lib/data";
import { fadeUp } from "@/components/animations/variants";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-100 bg-white dark:border-neutral-800 dark:bg-bg-secondary transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col items-center gap-8">
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); handleScrollTop(); }} className="group flex items-center gap-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 text-xs font-bold text-white shadow-sm dark:shadow-indigo-500/20">H</div>
            <span className="ml-1 text-lg font-bold text-slate-800 dark:text-white">ari<span className="gradient-text">.</span></span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-indigo-500" aria-label="LinkedIn">
              <svg className="h-5 w-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`} className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-indigo-500" aria-label="Email">
              <svg className="h-5 w-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              Email
            </a>
            <a href={`tel:${personalInfo.phone}`} className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-indigo-500" aria-label="Phone">
              <svg className="h-5 w-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              Phone
            </a>
          </div>

          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-neutral-800 to-transparent" />

          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-slate-400 dark:text-neutral-500">© {mounted ? new Date().getFullYear() : ""} {personalInfo.name}. All rights reserved.</p>
            <button onClick={handleScrollTop} className="group flex items-center gap-1 text-xs text-slate-400 transition-colors hover:text-indigo-500 dark:text-neutral-300 dark:hover:text-indigo-400">
              Back to top
              <svg className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
