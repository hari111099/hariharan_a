"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { fadeUp, staggerContainer, scaleIn } from "@/components/animations/variants";
import SectionHeading from "@/components/ui/SectionHeading";

const contactCards = [
  { label: "Email", value: "hariharanoutlooks@gmail.com", href: "mailto:hariharanoutlooks@gmail.com", color: "from-indigo-50 to-indigo-100/50", iconColor: "text-indigo-500",
    icon: (<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>) },
  { label: "Phone", value: "+91 97892 76074", href: "tel:+919789276074", color: "from-purple-50 to-purple-100/50", iconColor: "text-purple-500",
    icon: (<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>) },
  { label: "LinkedIn", value: "Hariharan Arumugam", href: "https://linkedin.com/in/hariharan-arumugam-b27572195", color: "from-cyan-50 to-cyan-100/50", iconColor: "text-cyan-500",
    icon: (<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>) },
  { label: "Location", value: "Chennai, India", href: null, color: "from-rose-50 to-rose-100/50", iconColor: "text-rose-500",
    icon: (<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>) },
];

export default function ContactSection() {
  const [mounted, setMounted] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative bg-bg-secondary py-24 sm:py-32 transition-colors duration-300 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 dark:via-indigo-800 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading title="Get In Touch" subtitle="Have a question or want to work together? Let's connect." />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Info Cards */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4 lg:col-span-2">
            {contactCards.map((card) => {
              const Wrapper = card.href ? "a" : "div";
              const wrapperProps = card.href ? { href: card.href, target: card.label === "LinkedIn" ? "_blank" : undefined, rel: card.label === "LinkedIn" ? "noopener noreferrer" : undefined } : {};
              return (
                <motion.div key={card.label} variants={scaleIn}>
                  <Wrapper {...wrapperProps} className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-slate-200 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-slate-700">
                    <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${card.color} ${card.iconColor} transition-transform group-hover:scale-110 dark:bg-opacity-10 dark:from-neutral-800 dark:to-neutral-800`}>
                      {card.icon}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{card.label}</p>
                      <p className="mt-0.5 text-sm font-medium text-slate-700 transition-colors group-hover:text-slate-900 dark:text-neutral-300 dark:group-hover:text-white">{card.value}</p>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 lg:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-xs font-medium text-slate-500 uppercase tracking-wider">Name</label>
                <input id="contact-name" type="text" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:placeholder-neutral-500 dark:focus:border-indigo-500 dark:focus:bg-slate-800 dark:focus:ring-indigo-500/20" placeholder="Your name" suppressHydrationWarning />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-xs font-medium text-slate-500 uppercase tracking-wider">Email</label>
                <input id="contact-email" type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:placeholder-neutral-500 dark:focus:border-indigo-500 dark:focus:bg-slate-800 dark:focus:ring-indigo-500/20" placeholder="your@email.com" suppressHydrationWarning />
              </div>
            </div>
            <div>
              <label htmlFor="contact-subject" className="mb-2 block text-xs font-medium text-slate-500 uppercase tracking-wider">Subject</label>
              <input id="contact-subject" type="text" required value={formState.subject} onChange={(e) => setFormState({ ...formState, subject: e.target.value })} className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:placeholder-neutral-500 dark:focus:border-indigo-500 dark:focus:bg-slate-800 dark:focus:ring-indigo-500/20" placeholder="What's this about?" suppressHydrationWarning />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-xs font-medium text-slate-500 uppercase tracking-wider">Message</label>
              <textarea id="contact-message" rows={5} required value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:placeholder-neutral-500 dark:focus:border-indigo-500 dark:focus:bg-slate-800 dark:focus:ring-indigo-500/20" placeholder="Your message..." />
            </div>
            <button type="submit" disabled={submitted} className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20 transition-all hover:shadow-xl hover:shadow-indigo-300/50 dark:hover:shadow-indigo-800/40 disabled:opacity-70" suppressHydrationWarning>
              <span className="relative z-10">{submitted ? "Message Sent! ✓" : "Send Message"}</span>
              <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
