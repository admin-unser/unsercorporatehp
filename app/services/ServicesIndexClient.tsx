'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { businessAreasData } from '@/lib/servicesData';

export default function ServicesIndexClient() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {businessAreasData.map((area, index) => (
            <motion.div
              key={area.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Link href={`/services/${area.slug}`} className="group block h-full">
                <motion.div
                  className="relative h-full p-8 md:p-10 rounded-2xl border border-white/[0.06] overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)`,
                    boxShadow: 'none',
                  }}
                  whileHover={{ y: -6, rotate: index % 2 === 0 ? -1 : 1 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${area.accentColor}15 0%, transparent 60%)`,
                    }}
                  />
                  <div
                    className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${area.accentColor}60, transparent)` }}
                  />

                  <div className="relative z-10">
                    <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#71717a] mb-2">
                      {area.titleEn}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-white">
                      {area.title}
                    </h2>
                    <p className="text-[#a1a1aa] text-sm leading-relaxed mb-6">
                      {area.shortDescription}
                    </p>
                    <span
                      className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300"
                      style={{ color: area.accentColor }}
                    >
                      詳細を見る
                      <motion.span
                        className="inline-block"
                        animate={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.span>
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/[0.06] rounded-tr-lg" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
