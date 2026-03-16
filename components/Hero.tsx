'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const ROLES = [
  "Partnerships Manager",
  "GTM Engineer",
  "Backend Developer",
  "Ex-Founder",
  "The guy who does all of it"
];

const CHARS = "!<>-_\\\\/[]{}—=+*^?#________";

function ScrambleText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout;

    interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return <>{displayText}</>;
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const name = "Ayush Singh";

  useEffect(() => {
    const isLast = roleIndex === ROLES.length - 1;
    const timeout = setTimeout(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, isLast ? 4000 : 2000);

    return () => clearTimeout(timeout);
  }, [roleIndex]);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center relative px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 flex">
          {name.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>
        
        <div className="h-12 md:h-16 lg:h-20 flex items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-2xl md:text-4xl lg:text-5xl font-medium text-zinc-400 font-mono"
            >
              <ScrambleText text={ROLES[roleIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.p 
          className="mt-8 text-lg md:text-xl text-zinc-500 max-w-2xl font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          I close partnerships and ship code. Sometimes simultaneously.
        </motion.p>
      </motion.div>
    </section>
  );
}
