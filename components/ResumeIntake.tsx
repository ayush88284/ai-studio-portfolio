'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import dynamic from 'next/dynamic';

const ResumeViewer = dynamic(() => import('./ResumeViewer').then(mod => mod.ResumeViewer), { ssr: false });

const ROLES = [
  "Partnerships Manager",
  "Business Development",
  "Account Executive",
  "Founding GTM / GTM Engineer",
  "Full-Stack Engineer",
  "Other"
];

const STAGES = ["Seed", "Series A-B", "Growth", "Enterprise"];
const SOURCES = ["LinkedIn", "GitHub", "Referral", "Just browsing"];

export function ResumeIntake() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [role, setRole] = useState("");
  const [stage, setStage] = useState("");
  const [source, setSource] = useState("");
  const [showResume, setShowResume] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => {
    if (step === 0 && role) setStep(1);
    else if (step === 1 && stage) setStep(2);
    else if (step === 2 && source) {
      setIsLoading(true);
      // Simulate API call and loading
      setTimeout(() => {
        setIsLoading(false);
        setShowResume(true);
      }, 1000);
    }
  };

  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-zinc-800/50 flex flex-col items-center justify-center min-h-[60vh] relative">
      {!isOpen && !showResume && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={() => setIsOpen(true)}
          className="group relative px-8 py-4 bg-zinc-100 text-zinc-900 rounded-full font-medium text-lg hover:bg-white transition-all hover:scale-105 active:scale-95"
        >
          Get My Resume
          <div className="absolute -inset-2 rounded-full bg-zinc-100/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity -z-10" />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && !showResume && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-2 font-space">
              Let me show you the right version of me.
            </h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Three questions. Ten seconds. Then you get a resume that actually answers your questions &mdash; instead of making you hunt for them.
            </p>

            <div className="space-y-6">
              {step >= 0 && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                  <label className="block text-sm font-mono text-zinc-500 mb-2">What role are you hiring for?</label>
                  <div className="relative">
                    <select 
                      value={role}
                      onChange={(e) => { setRole(e.target.value); if(step === 0) setStep(1); }}
                      className="w-full appearance-none bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-600 transition-colors"
                    >
                      <option value="" disabled>Select a role...</option>
                      {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" size={20} />
                  </div>
                </motion.div>
              )}

              {step >= 1 && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                  <label className="block text-sm font-mono text-zinc-500 mb-2">What&apos;s your company stage?</label>
                  <div className="relative">
                    <select 
                      value={stage}
                      onChange={(e) => { setStage(e.target.value); if(step === 1) setStep(2); }}
                      className="w-full appearance-none bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-600 transition-colors"
                    >
                      <option value="" disabled>Select stage...</option>
                      {STAGES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" size={20} />
                  </div>
                </motion.div>
              )}

              {step >= 2 && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                  <label className="block text-sm font-mono text-zinc-500 mb-2">How did you find me?</label>
                  <div className="relative">
                    <select 
                      value={source}
                      onChange={(e) => setSource(e.target.value)}
                      className="w-full appearance-none bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-600 transition-colors"
                    >
                      <option value="" disabled>Select source...</option>
                      {SOURCES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" size={20} />
                  </div>
                </motion.div>
              )}

              {step === 2 && source && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={handleNext}
                  disabled={isLoading}
                  className="w-full py-4 bg-zinc-100 text-zinc-900 rounded-xl font-medium mt-8 hover:bg-white transition-colors disabled:opacity-50 flex justify-center items-center"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-zinc-900 border-t-transparent rounded-full" />
                      Loading your match...
                    </span>
                  ) : (
                    "Show my resume"
                  )}
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-5xl mx-auto"
          >
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 font-space">
                  Here&apos;s your version. &darr;
                </h3>
                <p className="text-zinc-500 font-mono text-sm mt-2">
                  Optimized for {role === "Other" ? "General" : role}
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl ring-1 ring-zinc-800">
              <ResumeViewer role={role} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
