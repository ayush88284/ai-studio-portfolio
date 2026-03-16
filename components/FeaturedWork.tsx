'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: "testRigor",
    description: "AI-driven QA automation product. Channel partner relationships, SI firms, and influencer GTM.",
    tags: ["Partnerships", "GTM", "Community"],
    detail: "Primary contact for customers & partners. Resolved technical onboarding blockers, improving partner activation rates. Built internal documentation & FAQs, reducing repetitive support queries. Managed channel partner relationships with SI firms and resellers. Led influencer and technical community outreach for product evangelism."
  },
  {
    title: "FinURL",
    description: "Fintech platform reaching 900+ organic users in Year 1.",
    tags: ["Co-Founder", "Fintech", "API"],
    detail: "Led NBFC and financial institution partnership development. Acted as technical POC for API integrations and platform workflows. Built Python automation scripts for data validation. Created partner onboarding documentation and self-service guides."
  },
  {
    title: "CloseLoop (Building)",
    description: "Post-call execution engine for B2B sales teams.",
    tags: ["FastAPI", "Node.js", "PostgreSQL", "OpenAI"],
    detail: "CRM updates, follow-up drafts, and task creation — triggered the moment the call ends. Because the best time to do your CRM is before you forget everything."
  },
  {
    title: "GAMA AI",
    description: "Student exam prep platform.",
    tags: ["Next.js", "Gemini API", "Firebase"],
    detail: "Built an AI-powered student exam prep platform utilizing Next.js, Gemini API, and Firebase for real-time data sync and authentication."
  }
];

export function FeaturedWork() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-zinc-800/50">
      <motion.h2 
        className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-12"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Featured Work
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative border border-zinc-800 bg-zinc-900/20 rounded-2xl p-6 md:p-8 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300 cursor-pointer overflow-hidden"
            onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-semibold text-zinc-100 font-space">{project.title}</h3>
              <ArrowUpRight className="text-zinc-500 group-hover:text-zinc-300 transition-colors" size={20} />
            </div>
            
            <p className="text-zinc-400 mb-6 text-sm md:text-base">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-xs font-mono text-zinc-300 bg-zinc-800 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <motion.div
              initial={false}
              animate={{ height: expandedIdx === idx ? 'auto' : 0, opacity: expandedIdx === idx ? 1 : 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-zinc-800 text-sm text-zinc-400 leading-relaxed">
                {project.detail}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
