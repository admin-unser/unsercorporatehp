'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import type { BusinessAreaData } from '@/lib/servicesData';

export default function BusinessPageClient({ area }: { area: BusinessAreaData }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const accent = area.accentColor;

  return (
    <>
      {/* Hero - 非対称・大胆なタイポグラフィ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(ellipse 100% 80% at 70% 20%, ${accent}40 0%, transparent 50%),
                        radial-gradient(ellipse 60% 60% at 20% 80%, ${accent}20 0%, transparent 50%)`,
          }}
        />
        <div className="absolute inset-0 bg-[#030303]/60" />
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs font-medium tracking-[0.25em] uppercase mb-6"
              style={{ color: accent }}
            >
              {area.titleEn}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]"
            >
              {area.heroCatch}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg md:text-xl text-[#a1a1aa] max-w-2xl"
            >
              {area.heroSub}
            </motion.p>
          </div>
        </div>
        {/* アクセントライン */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}50, transparent)` }}
        />
      </section>

      {/* Value Props - キーワードバッジ */}
      <section className="py-12 px-6 border-b border-white/[0.06]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-3">
            {area.valueProps.map((prop, i) => (
              <motion.span
                key={prop}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="px-4 py-2 rounded-full text-sm font-medium border"
                style={{
                  borderColor: `${accent}40`,
                  color: `${accent}`,
                  backgroundColor: `${accent}10`,
                }}
              >
                {prop}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* 事業概要 */}
      <section ref={sectionRef} className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            <div className="lg:col-span-5">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                {area.title}について
              </h2>
              <p className="text-[#a1a1aa] leading-relaxed">
                {area.description}
              </p>
            </div>
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold text-[#71717a] tracking-wider uppercase mb-4">
                提供サービス
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {area.services.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="flex items-center gap-3 text-[#a1a1aa]"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: accent }}
                    />
                    {s}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 個別サービス詳細 - カード */}
      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight"
          >
            サービス詳細
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {area.childServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl border border-white/[0.06] hover:border-white/[0.1] transition-colors duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)',
                }}
              >
                <div
                  className="absolute top-0 left-8 right-8 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, transparent, ${accent}50, transparent)` }}
                />
                <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#71717a] mb-1">
                  {service.titleEn}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">
                  {service.title}
                </h3>
                {service.highlight && (
                  <span
                    className="inline-block text-xs font-medium mb-3 px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: `${accent}20`, color: accent }}
                  >
                    {service.highlight}
                  </span>
                )}
                <p className="text-[#a1a1aa] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                {service.stats && (
                  <div className="flex gap-6 mb-6">
                    {service.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-2xl font-bold" style={{ color: accent }}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-[#71717a] mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
                <ul className="space-y-2">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#a1a1aa]">
                      <span
                        className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: accent }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-[#a1a1aa] mb-6">
            {area.title}について、まずはお気軽にご相談ください。
          </p>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white"
              style={{
                background: `linear-gradient(135deg, ${accent}, ${accent}dd)`,
                boxShadow: `0 10px 40px -10px ${accent}80`,
              }}
            >
              <span>無料相談はこちら</span>
              <motion.span
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
