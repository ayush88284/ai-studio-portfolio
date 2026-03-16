'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';

export function EasterEgg() {
  useEffect(() => {
    let typed = '';
    const target = 'hire me';

    const handleKeyDown = (e: KeyboardEvent) => {
      typed += e.key.toLowerCase();
      if (typed.length > target.length) {
        typed = typed.slice(-target.length);
      }

      if (typed === target) {
        toast("already trying — check the resume section 👀", {
          duration: 4000,
          position: 'bottom-right',
        });
        typed = '';
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return null;
}
