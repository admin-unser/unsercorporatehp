'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const philosophyItems = [
    {
      title: 'Mission',
      titleJa: 'ミッション',
      description: '事業成長のコンシェルジュとして、お客様の良きパートナーであり続ける',
      details: 'お客様の事業成長を第一に考え、真のパートナーとして支え仕えます。課題解決だけでなく、成長の伴走者として共に歩みます。',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" className="opacity-30" />
          <path d="M20 8V20L28 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      color: '#6366f1',
    },
    {
      title: 'Vision',
      titleJa: 'ビジョン',
      description: '期待を超える価値を届け、お客様の想像を超える体験を創出する',
      details: 'お客様のニーズに迅速かつ柔軟に対応し、反復的なプロセスで最適解を追求。常に期待を超える価値をお届けします。',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
          <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" className="opacity-50" />
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" className="opacity-20" />
        </svg>
      ),
      color: '#8b5cf6',
    },
    {
      title: 'Value',
      titleJa: 'バリュー',
      description: 'アジャイルなアプローチで、お客様の成功を共に創り上げる',
      details: 'ワンストップのソリューションサービスを提供し、変化に柔軟に対応。お客様と共に成功を創り上げていきます。',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
          <path d="M10 30L20 10L30 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 24H26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      color: '#ec4899',
    },
  ];

  return (
    <section
      id="philosophy"
      ref={ref}
      className="relative py-32 px-6 bg-[#030303]"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/[0.02] via-purple-500/[0.02] to-pink-500/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500" />
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#a1a1aa]">
              Corporate Philosophy
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            <span className="text-gradient-primary">
              企業理念
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base text-[#71717a] max-w-xl mx-auto"
          >
            私たちが大切にしている3つの指針
          </motion.p>
        </motion.div>

        {/* Philosophy Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Glow */}
              <motion.div
                className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: `radial-gradient(circle at center, ${item.color}30 0%, transparent 70%)` }}
              />

              <div 
                className="relative h-full p-8 rounded-2xl border transition-all duration-500"
                style={{
                  background: hoveredIndex === index 
                    ? 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)',
                  borderColor: hoveredIndex === index ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)',
                  boxShadow: hoveredIndex === index ? `0 25px 50px -12px ${item.color}15` : 'none',
                }}
              >
                {/* Number */}
                <div className="absolute top-6 right-6 text-[60px] font-bold leading-none opacity-[0.03] select-none">
                  0{index + 1}
                </div>

                {/* Icon */}
                <motion.div
                  className="mb-6 transition-colors duration-300"
                  style={{ color: hoveredIndex === index ? item.color : '#71717a' }}
                  animate={hoveredIndex === index ? { scale: 1.05, y: -2 } : { scale: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {item.icon}
                </motion.div>

                {/* Title */}
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#52525b] mb-1">
                  {item.title}
                </p>
                <h3 
                  className="text-2xl font-bold mb-4 transition-colors duration-300"
                  style={{ color: hoveredIndex === index ? item.color : 'white' }}
                >
                  {item.titleJa}
                </h3>

                {/* Description */}
                <p className="text-[#a1a1aa] text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Details (shown on hover) */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0, 
                    height: hoveredIndex === index ? 'auto' : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-white/[0.06]">
                    <p className="text-xs text-[#71717a] leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
