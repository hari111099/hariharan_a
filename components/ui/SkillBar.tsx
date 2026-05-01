"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
  color?: string;
}

export default function SkillBar({ name, level, index, color = "#6366f1" }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <div ref={ref} className="group">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-600 transition-colors group-hover:text-slate-900">{name}</span>
        <motion.span
          className="text-xs font-mono font-semibold"
          style={{ color }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.8 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 }}
        />
      </div>
    </div>
  );
}
