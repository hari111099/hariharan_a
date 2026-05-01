"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { fadeUp, staggerContainer, scaleIn } from "@/components/animations/variants";
import SectionHeading from "@/components/ui/SectionHeading";

// Maps skill categories to specific icons and gradient themes
const categoryConfig: Record<string, { icon: React.ReactNode, color: string, ringColor: string }> = {
  "Support & Ops": {
    color: "from-blue-500 to-indigo-500",
    ringColor: "ring-blue-500/20 dark:ring-blue-500/30",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    ),
  },
  "Technical": {
    color: "from-purple-500 to-fuchsia-500",
    ringColor: "ring-purple-500/20 dark:ring-purple-500/30",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  "Platforms & Tools": {
    color: "from-cyan-500 to-teal-500",
    ringColor: "ring-cyan-500/20 dark:ring-cyan-500/30",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  "Processes": {
    color: "from-indigo-500 to-blue-500",
    ringColor: "ring-indigo-500/20 dark:ring-indigo-500/30",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative bg-bg-primary py-24 sm:py-32 transition-colors duration-300 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 dark:via-indigo-800 to-transparent" />
      
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading 
          title="Skills" 
          subtitle="A comprehensive overview of my technical expertise and capabilities" 
          align="center" 
        />

        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          className="mt-16 grid gap-6 md:grid-cols-2"
        >
          {Object.entries(skills).map(([categoryName, items]) => {
            const config = categoryConfig[categoryName] || categoryConfig["Technical"];
            
            return (
              <motion.div 
                key={categoryName} 
                variants={fadeUp} 
                className={`group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-slate-200 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-slate-700`}
              >
                {/* Background decorative element */}
                <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${config.color} opacity-5 blur-3xl transition-opacity duration-500 group-hover:opacity-10`} />

                <div className="mb-6 flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${config.color} bg-opacity-10 text-white shadow-inner ring-4 ${config.ringColor} dark:bg-opacity-20`}>
                    {config.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{categoryName}</h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {items.map((skill, index) => (
                    <motion.div 
                      key={skill.name}
                      variants={scaleIn}
                      className="group/skill relative overflow-hidden rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 transition-colors hover:border-indigo-200 hover:bg-white dark:border-neutral-800 dark:bg-neutral-800/50 dark:hover:border-indigo-500/30 dark:hover:bg-slate-800"
                    >
                      <div className="flex items-center gap-2">
                        {/* Status indicator dot */}
                        <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${config.color}`} />
                        <span className="text-sm font-medium text-slate-700 dark:text-neutral-300">{skill.name}</span>
                        
                        {/* Hidden progress percentage (shown on hover) */}
                        <div className="ml-2 flex items-center opacity-0 transition-opacity duration-300 group-hover/skill:opacity-100">
                           <span className="text-xs font-semibold text-indigo-500 dark:text-indigo-400">{skill.level}%</span>
                        </div>
                      </div>
                      
                      {/* Progress bar background line */}
                      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-slate-200 dark:bg-neutral-700 opacity-0 transition-opacity group-hover/skill:opacity-100">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${config.color}`} 
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
