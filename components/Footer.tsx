'use client';

import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-zinc-500 text-sm font-mono"
      >
        Built by Ayush Singh. No template was harmed in the making of this site.
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex gap-6"
      >
        <a href="mailto:ayushsingh1214@gmail.com" className="text-zinc-500 hover:text-zinc-300 transition-colors">
          <Mail size={20} />
        </a>
        <a href="https://linkedin.com/in/ayushsingh1214" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300 transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com/ayushs1214" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300 transition-colors">
          <Github size={20} />
        </a>
        <a href="https://portfolio-2ohx.vercel.app" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300 transition-colors">
          <Globe size={20} />
        </a>
      </motion.div>
    </footer>
  );
}
