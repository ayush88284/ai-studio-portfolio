'use client';

import { motion } from 'motion/react';

const TIMELINE = [
  { company: "testRigor", role: "Support & Partnerships Coordinator", date: "Jan 2025 – Present" },
  { company: "FinURL", role: "Co-Founder", date: "Mar 2023 – Jul 2024" },
  { company: "Nyuway", role: "Backend Developer Intern", date: "Jul 2024 – Aug 2024" },
  { company: "IETE-TSEC", role: "Chairperson", date: "Mar 2023 – Mar 2024" },
  { company: "TSEC CodeTantra", role: "Core Member", date: "2022 – 2023" },
  { company: "TSEC Mumbai", role: "B.E. Information Technology", date: "Jan 2022 – May 2025" },
];

export function Timeline() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-zinc-800/50">
      <motion.h2 
        className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-16"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Timeline
      </motion.h2>

      <div className="relative ml-4 md:ml-6 space-y-12">
        {/* Animated vertical line */}
        <motion.div 
          className="absolute left-0 top-0 bottom-0 w-[1px] bg-zinc-800 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {TIMELINE.map((item, idx) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            <motion.div 
              className="absolute -left-[4px] top-1.5 w-[9px] h-[9px] rounded-full bg-zinc-500 ring-4 ring-zinc-900"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: idx * 0.1 + 0.3 }}
            />
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
              <h3 className="text-xl md:text-2xl font-semibold text-zinc-100 font-space">{item.company}</h3>
              <span className="text-sm font-mono text-zinc-500">{item.date}</span>
            </div>
            <p className="text-zinc-400 text-base md:text-lg">{item.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
