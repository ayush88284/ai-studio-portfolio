'use client';

import { motion } from 'motion/react';

export function Bio() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-zinc-800/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <p className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight text-zinc-100 tracking-tight">
          Partnerships & GTM @ testRigor. Ex-founder. Full-stack engineer. Building CloseLoop. Based in Mumbai. Open to the right opportunity.
        </p>
      </motion.div>
    </section>
  );
}
