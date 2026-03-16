'use client';

import { motion, useInView, useAnimation } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const STATS = [
  { label: "Students mentored", value: 2000, suffix: "+" },
  { label: "FinURL users", value: 900, suffix: "+" },
  { label: "Event participants", value: 500, suffix: "+" },
  { label: "People led", value: 60, suffix: "+" },
  { label: "Years building", value: 4, suffix: "+" },
];

function CountUp({ end, suffix }: { end: number, suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-bold font-space text-zinc-100">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-zinc-800/50 bg-zinc-900/10">
      <motion.h2 
        className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-12"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        By the numbers
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
        {STATS.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col gap-2"
          >
            <CountUp end={stat.value} suffix={stat.suffix} />
            <span className="text-sm md:text-base text-zinc-500 font-mono">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
