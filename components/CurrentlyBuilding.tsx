'use client';

import { motion } from 'motion/react';
import { Github } from 'lucide-react';

export function CurrentlyBuilding() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-zinc-800/50 flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 md:p-12 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          <motion.h2 
            className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Currently Building
          </motion.h2>

          <h3 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-6 font-space">
            CloseLoop
          </h3>

          <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl leading-relaxed">
            Post-call execution engine for B2B sales teams. CRM updates, follow-up drafts, and task creation — triggered the moment the call ends. Because the best time to do your CRM is before you forget everything.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            {["FastAPI", "Node.js", "PostgreSQL", "OpenAI"].map(tech => (
              <span key={tech} className="px-4 py-2 text-sm font-mono text-zinc-300 bg-zinc-800/50 rounded-full border border-zinc-700/50">
                {tech}
              </span>
            ))}
          </div>

          <a 
            href="https://github.com/ayushs1214/CloseLoop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-zinc-100 text-zinc-900 rounded-full font-medium hover:bg-white transition-colors"
          >
            <Github size={20} />
            Follow progress
          </a>
        </div>
      </motion.div>
    </section>
  );
}
