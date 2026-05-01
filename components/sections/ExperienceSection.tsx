"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "@/lib/data";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/components/animations/variants";
import SectionHeading from "@/components/ui/SectionHeading";

const lightColors: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  "Production Support & Incident Management": { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-100", dot: "#6366f1" },
  "Application Transitions & Change Management": { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-100", dot: "#9333ea" },
  "Security, Compliance & Reporting": { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-100", dot: "#06b6d4" },
};

export default function ExperienceSection() {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const toggleCategory = (label: string) => {
    setExpandedCategories((prev) => { const next = new Set(prev); if (next.has(label)) next.delete(label); else next.add(label); return next; });
  };

  return (
    <section id="experience" className="relative bg-bg-primary py-24 sm:py-32 transition-colors duration-300">
      <div className="absolute inset-0 gradient-mesh" />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading title="Experience" subtitle="My professional journey and key contributions" />

        {experience.map((exp, expIndex) => (
          <motion.div key={expIndex} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-300 via-purple-200 to-transparent dark:from-indigo-800 dark:via-purple-900 md:left-1/2 md:-translate-x-px" />

            <div className="relative mb-12 flex flex-col items-start md:items-center">
              <motion.div variants={fadeUp} className="ml-14 rounded-2xl border border-indigo-100 bg-indigo-50/60 px-6 py-4 backdrop-blur-sm dark:border-indigo-900/50 dark:bg-indigo-900/20 md:ml-0">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.company}</h3>
                <p className="mt-1 text-sm font-semibold gradient-text">{exp.role}</p>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-neutral-400">
                  <span className="flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
                    {exp.domain}
                  </span>
                </div>
              </motion.div>
              <div className="absolute left-6 top-6 -translate-x-1/2 md:left-1/2">
                <div className="h-3 w-3 rounded-full border-2 border-indigo-400 bg-white dark:border-indigo-500 dark:bg-neutral-900" />
              </div>
            </div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-6">
              {exp.categories.map((category, catIndex) => {
                const isExpanded = expandedCategories.has(category.label);
                const isLeft = catIndex % 2 === 0;
                const colors = lightColors[category.label] || { bg: "bg-slate-50", text: "text-slate-600", border: "border-slate-100", dot: "#6366f1" };

                return (
                  <motion.div key={category.label} variants={isLeft ? slideInLeft : slideInRight} className={`relative flex ${isLeft ? "md:justify-start md:pr-[52%]" : "md:justify-end md:pl-[52%]"}`}>
                    <div className="absolute left-6 top-6 -translate-x-1/2 md:left-1/2">
                      <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: colors.dot }} />
                    </div>
                    <div className="ml-14 w-full cursor-pointer rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-slate-200 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-slate-700 md:ml-0" onClick={() => toggleCategory(category.label)}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`h-2 w-2 rounded-full`} style={{ backgroundColor: colors.dot }} />
                          <h4 className="font-semibold text-slate-900 dark:text-white">{category.label}</h4>
                        </div>
                        <motion.svg animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }} className="h-5 w-5 flex-shrink-0 text-slate-400 dark:text-neutral-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </motion.svg>
                      </div>
                      <p className="mt-2 text-sm text-slate-500 dark:text-neutral-400">{category.items.length} key responsibilities</p>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                            <ul className="mt-4 space-y-3 border-t border-slate-100 dark:border-neutral-800 pt-4">
                              {category.items.map((item, itemIndex) => (
                                <motion.li key={itemIndex} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: itemIndex * 0.1 }} className="flex gap-3 text-sm text-slate-600 dark:text-neutral-300">
                                  <svg className="mt-1 h-3.5 w-3.5 flex-shrink-0" style={{ color: colors.dot }} fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                  </svg>
                                  <span>{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
