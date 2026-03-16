'use client';

import { motion } from 'motion/react';

const CARDS = [
  {
    title: "GTM & Partnerships",
    body: "Channel programs, influencer strategy, SI onboarding, pipeline generation. I treat partnerships like a product — with roadmaps, metrics, and iteration cycles."
  },
  {
    title: "Full-Stack Engineering",
    body: "Node.js, FastAPI, PostgreSQL, Redis, AWS. I can read your codebase, understand your architecture, and speak to your engineering team without making anyone cringe."
  },
  {
    title: "Community & Influence",
    body: "2,000+ MHT-CET students mentored on YouTube. 2,000+ engineers in my Mumbai dev network. Community isn't a channel to me — it's how I think."
  }
];

export function WhatIDo() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-zinc-800/50">
      <motion.h2 
        className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-12"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        What I do
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {CARDS.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative"
          >
            <div className="absolute -inset-4 rounded-2xl bg-zinc-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <h3 className="text-xl font-semibold text-zinc-100 mb-4 font-space">{card.title}</h3>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              {card.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
