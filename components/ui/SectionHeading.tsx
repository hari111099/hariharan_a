"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/variants";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
        <span className="gradient-text">.</span>
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base text-slate-500 dark:text-neutral-400 sm:text-lg mx-auto">{subtitle}</p>
      )}
      <div className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 ${align === "center" ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
