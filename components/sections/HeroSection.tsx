"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import {
  letterAnimation,
  fadeUp,
  staggerContainer,
} from "@/components/animations/variants";

export default function HeroSection() {
  const firstName = "HARIHARAN";
  const lastName = "ARUMUGAM";

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-bg-primary pt-32 pb-20 lg:py-0 transition-colors duration-300"
    >
      {/* Gradient mesh overlays */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* Decorative gradient orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-indigo-200/40 to-cyan-200/30 blur-[80px] dark:from-indigo-900/30 dark:to-cyan-900/20"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -left-20 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-purple-200/30 to-indigo-200/30 blur-[100px] dark:from-purple-900/20 dark:to-indigo-900/20"
      />

      {/* Decorative shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-[15%] h-20 w-20 rounded-2xl border border-indigo-200/50 opacity-40 dark:border-indigo-800/40"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/3 left-[10%] h-14 w-14 rounded-full border border-purple-200/50 opacity-30 dark:border-purple-800/40"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side — Text Content */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            {/* Greeting badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-4 py-1.5 text-sm font-medium text-indigo-600 backdrop-blur-sm dark:border-indigo-900 dark:bg-indigo-900/30 dark:text-indigo-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
              </span>
              Available for opportunities
            </motion.div>

            {/* Name */}
            <div className="mb-2 overflow-hidden">
              <motion.h1
                className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                {firstName.split("").map((char, i) => (
                  <motion.span
                    key={`first-${i}`}
                    custom={i}
                    variants={letterAnimation}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
            <div className="mb-6 overflow-hidden">
              <motion.h1
                className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                {lastName.split("").map((char, i) => (
                  <motion.span
                    key={`last-${i}`}
                    custom={i + firstName.length}
                    variants={letterAnimation}
                    className="inline-block gradient-text"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mb-3 text-lg font-medium text-slate-600 dark:text-neutral-300 sm:text-xl"
            >
              {personalInfo.role}
              <span className="mx-2 text-indigo-300 dark:text-indigo-700">•</span>
              {personalInfo.experience}+ Years
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mb-8 flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-neutral-400 lg:justify-start"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              {personalInfo.location}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.4 }}
              className="flex flex-col items-center gap-3 sm:flex-row lg:items-start"
            >
              <button
                onClick={() => handleScroll("projects")}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
              </button>
              <div className="flex gap-4">
                <a
                  href={personalInfo.github || "https://github.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md hover:text-indigo-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-indigo-500/50 dark:hover:text-white"
                  aria-label="GitHub Profile"
                >
                  <svg className="h-5 w-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md hover:text-indigo-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-indigo-500/50 dark:hover:text-white"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="h-5 w-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right side — Profile Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="order-1 flex justify-center lg:order-2"
          >
            <div className="relative">
              {/* Outer rotating gradient ring */}
              <div className="absolute -inset-4 animate-spin-slow rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-20 blur-md" />

              {/* Pulse rings */}
              <div className="absolute -inset-6 animate-pulse-ring rounded-full border-2 border-indigo-200/50 dark:border-indigo-500/20" />
              <div className="absolute -inset-10 animate-pulse-ring rounded-full border border-purple-200/40 dark:border-purple-500/20" style={{ animationDelay: "1s" }} />

              {/* Profile circle */}
              <div className="relative h-56 w-56 overflow-hidden rounded-full sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 p-[3px]">
                  <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
                    <Image
                      src="/Profile.jpeg"
                      alt="Hariharan Arumugam"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-8 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-lg shadow-slate-200/50 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-black/50"
              >
                <span className="text-xs font-semibold text-slate-700 dark:text-neutral-300">5+ Years</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-6 bottom-12 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-lg shadow-slate-200/50 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-black/50"
              >
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">ITIL Certified</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-2 bottom-4 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-lg shadow-slate-200/50 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-black/50"
              >
                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">TCS</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium tracking-widest text-slate-400 dark:text-neutral-500 uppercase">Scroll</span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-slate-300 dark:border-neutral-600 p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-indigo-400 dark:bg-indigo-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
