'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServicesHeroClient() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.12),transparent)]" />
      <div className="container mx-auto max-w-6xl relative">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#71717a] mb-4">
          Services
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl">
          3つの事業で、
          <br />
          <span className="inline-flex flex-wrap items-baseline gap-2">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              成長を
            </span>
            <motion.span
              className="inline-block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              whileHover={{ rotate: -4, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              ドライブする
            </motion.span>
          </span>
        </h1>
        <p className="text-lg text-[#a1a1aa] max-w-2xl">
          お客様の課題に合わせて、BPO・システム開発・コンサルティングから最適なソリューションを提供します。
        </p>
      </div>
    </section>
  );
}
