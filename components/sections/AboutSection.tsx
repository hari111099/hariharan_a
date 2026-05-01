"use client";

import { motion } from "framer-motion";
import { personalInfo, stats, education, certifications } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/components/animations/variants";
import SectionHeading from "@/components/ui/SectionHeading";
import StatsCounter from "@/components/ui/StatsCounter";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-bg-secondary py-24 sm:py-32 transition-colors duration-300 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 dark:via-indigo-800 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading title="About Me" subtitle="A snapshot of my professional journey and capabilities" />

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mx-auto max-w-3xl text-center">
          <p className="text-base leading-relaxed text-slate-600 dark:text-neutral-300 sm:text-lg">{personalInfo.summary}</p>
          <p className="mt-4 text-base leading-relaxed text-slate-500 dark:text-neutral-400 sm:text-lg">{personalInfo.summaryExtended}</p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <StatsCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} delay={i * 0.15} />
          ))}
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="mt-16 grid gap-6 md:grid-cols-2">
          <motion.div variants={fadeUp} className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-indigo-100/50 hover:border-indigo-100 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-indigo-500/30 dark:hover:shadow-indigo-500/20">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-500 dark:bg-indigo-500/10 dark:text-indigo-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Education</h3>
            </div>
            <p className="font-medium text-slate-800 dark:text-neutral-200">{education.degree}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-neutral-400">{education.institution}</p>
            <p className="mt-1 text-sm font-medium text-indigo-500 dark:text-indigo-400">{education.period}</p>
          </motion.div>

          <motion.div variants={fadeUp} className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-100/50 hover:border-purple-100 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-purple-500/30 dark:hover:shadow-purple-500/20">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-500 dark:bg-purple-500/10 dark:text-purple-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Certifications</h3>
            </div>
            {certifications.map((cert) => (
              <div key={cert.name}>
                <p className="font-medium text-slate-800 dark:text-neutral-200">{cert.name}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-neutral-400">{cert.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
