"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { fadeUp } from "@/components/animations/variants";

interface StatsCounterProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export default function StatsCounter({ value, suffix = "", label, delay = 0 }: StatsCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        delay,
        ease: "easeOut",
        onUpdate(val) { setDisplayValue(Math.round(val)); },
      });
      return () => controls.stop();
    }
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="group relative flex flex-col items-center rounded-2xl border border-slate-100 bg-white px-6 py-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-indigo-100/50 hover:border-indigo-100 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-indigo-500/30 dark:hover:shadow-indigo-500/20"
    >
      <span className="gradient-text text-4xl font-bold sm:text-5xl">
        {displayValue}{suffix}
      </span>
      <span className="mt-2 text-center text-sm text-slate-500 dark:text-neutral-400">{label}</span>
    </motion.div>
  );
}
