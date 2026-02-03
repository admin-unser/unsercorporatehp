'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'メーカー(A)のコールセンター業務効率化',
    category: 'BPO事業',
    description: 'メーカー(A)のコールセンター業務を効率化し、顧客満足度と売上を大幅に向上させました。',
  },
  {
    id: '2',
    title: 'スタートアップの業務効率化システム構築',
    category: 'システム開発事業',
    description: 'スタートアップ企業の業務プロセスを分析し、カスタムシステムを構築。業務時間を40%削減。',
  },
  {
    id: '3',
    title: '新規事業立ち上げコンサルティング',
    category: 'コンサルティング事業',
    description: '企業の新規事業立ち上げを戦略的にサポート。市場分析から実行プランまで一貫して支援。',
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
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative h-full p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/30 hover:shadow-xl hover:shadow-purple-500/20">
        {/* Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Category */}
          <span className="inline-block text-xs font-semibold text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full mb-4">
            {study.category}
          </span>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
            {study.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed">{study.description}</p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-50" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-full opacity-50" />
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
      className="relative py-24 px-6 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block text-sm md:text-base text-gray-400 font-medium tracking-wider uppercase mb-4"
          >
            Case Studies
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              実績・事例
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            お客様の成功事例をご紹介します
          </motion.p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
