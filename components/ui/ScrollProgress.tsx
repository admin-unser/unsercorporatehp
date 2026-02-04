'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-[60]">
      <motion.div
        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
      {/* Glow effect */}
      <motion.div
        className="absolute top-0 h-1 blur-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-60"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}
