'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface CaseStudy {
  id: string;
  title: string;
  titleEn: string;
  category: string;
  categoryColor: string;
  description: string;
  results: { metric: string; value: string; change?: string }[];
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: '大手メーカーのコールセンター改革',
    titleEn: 'Call Center Transformation',
    category: 'BPO',
    categoryColor: '#6366f1',
    description: '属人化していたコールセンター業務を標準化し、AIを活用した品質管理を導入。応対品質の向上と同時に、オペレーターの負担軽減を実現しました。',
    results: [
      { metric: '顧客満足度', value: '98%', change: '+15%' },
      { metric: '応対時間', value: '3.2分', change: '-40%' },
    ],
    tags: ['品質向上', 'AI活用', '標準化'],
  },
  {
    id: '2',
    title: 'スタートアップのDX推進',
    titleEn: 'Startup DX Initiative',
    category: 'Development',
    categoryColor: '#8b5cf6',
    description: '急成長するスタートアップの業務プロセスを可視化し、クラウドベースの業務システムを構築。スケーラブルな基盤を整備し、更なる成長をサポートしています。',
    results: [
      { metric: '業務効率', value: '40%', change: '向上' },
      { metric: '処理速度', value: '3倍', change: '高速化' },
    ],
    tags: ['業務効率化', 'クラウド', 'スケーラビリティ'],
  },
  {
    id: '3',
    title: '新規事業立ち上げの伴走支援',
    titleEn: 'New Business Launch Support',
    category: 'Consulting',
    categoryColor: '#ec4899',
    description: '市場調査から事業計画策定、実行フェーズまで一貫して伴走。データドリブンな意思決定と機動的な軌道修正で、事業の黒字化を達成しました。',
    results: [
      { metric: '目標達成', value: '120%', change: '計画比' },
      { metric: '黒字化', value: '8ヶ月', change: '前倒し' },
    ],
    tags: ['戦略立案', 'PMO', '事業開発'],
  },
];

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Outer Glow */}
      <motion.div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
        style={{ background: `radial-gradient(circle at center, ${study.categoryColor}30 0%, transparent 70%)` }}
      />

      <div 
        className="relative h-full p-8 md:p-10 rounded-2xl overflow-hidden transition-all duration-500"
        style={{
          background: isHovered 
            ? 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)',
          border: `1px solid ${isHovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)'}`,
          boxShadow: isHovered ? `0 25px 50px -12px ${study.categoryColor}15` : 'none',
        }}
      >
        {/* Number Badge */}
        <div 
          className="absolute top-6 right-6 text-[80px] font-bold leading-none opacity-[0.03] select-none"
          style={{ color: study.categoryColor }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <span 
              className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full"
              style={{ 
                backgroundColor: `${study.categoryColor}15`,
                color: study.categoryColor,
              }}
            >
              {study.category}
            </span>
          </div>

          {/* English Title */}
          <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#52525b] mb-1">
            {study.titleEn}
          </p>

          {/* Title */}
          <h3 
            className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight transition-colors duration-300"
            style={{ color: isHovered ? study.categoryColor : 'white' }}
          >
            {study.title}
          </h3>

          {/* Description */}
          <p className="text-[#a1a1aa] mb-8 leading-relaxed">{study.description}</p>

          {/* Results */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {study.results.map((result) => (
              <div key={result.metric} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="text-xs text-[#71717a] mb-1">{result.metric}</div>
                <div className="flex items-baseline gap-2">
                  <span 
                    className="text-2xl font-bold number-display"
                    style={{ color: study.categoryColor }}
                  >
                    {result.value}
                  </span>
                  {result.change && (
                    <span className="text-xs text-[#a1a1aa]">{result.change}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span 
                key={tag}
                className="text-[10px] font-medium text-[#71717a] px-2.5 py-1 rounded-full border border-white/[0.06]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-white/[0.06]" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-white/[0.06]" />
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="case-studies"
      ref={ref}
      className="relative py-32 px-6 bg-[#030303]"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-t from-purple-500/[0.03] via-indigo-500/[0.02] to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative">
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
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 animate-pulse" />
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#a1a1aa]">
              Case Studies
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            <span className="text-gradient-primary">
              成果で語る実績
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base md:text-lg text-[#a1a1aa] max-w-2xl mx-auto"
          >
            数字で見る、私たちが実現した
            <span className="text-white/90">ビジネスインパクト</span>
          </motion.p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>

        {/* More Cases CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-[#71717a] text-sm">
            その他の事例もご紹介可能です。お気軽にお問い合わせください。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
