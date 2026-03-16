'use client';

import { motion } from 'motion/react';
import { 
  Code2, Database, Server, Cloud, Terminal, 
  Briefcase, Users, Target, LineChart, Mail 
} from 'lucide-react';

const ENG_TOOLS = [
  { name: "Node.js", icon: Server },
  { name: "FastAPI", icon: Terminal },
  { name: "PostgreSQL", icon: Database },
  { name: "AWS", icon: Cloud },
  { name: "React/Next", icon: Code2 },
];

const GTM_TOOLS = [
  { name: "Sales Nav", icon: Users },
  { name: "Apollo/Clay", icon: Target },
  { name: "HubSpot", icon: Briefcase },
  { name: "Gong", icon: LineChart },
  { name: "Smartlead", icon: Mail },
];

export function Tools() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-zinc-800/50">
      <motion.h2 
        className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-12"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Tools I Use
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Engineering Stack */}
        <div>
          <h3 className="text-xl font-semibold text-zinc-100 mb-8 font-space flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Engineering Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {ENG_TOOLS.map((tool, idx) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-600 transition-colors group"
              >
                <tool.icon size={32} className="text-zinc-500 group-hover:text-zinc-300 transition-colors mb-4" />
                <span className="text-sm font-mono text-zinc-400 group-hover:text-zinc-200">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GTM Stack */}
        <div>
          <h3 className="text-xl font-semibold text-zinc-100 mb-8 font-space flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            GTM & Partnerships Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {GTM_TOOLS.map((tool, idx) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-600 transition-colors group"
              >
                <tool.icon size={32} className="text-zinc-500 group-hover:text-zinc-300 transition-colors mb-4" />
                <span className="text-sm font-mono text-zinc-400 group-hover:text-zinc-200">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
