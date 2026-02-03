'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

interface BusinessArea {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  services: string[];
  icon: React.ReactNode;
  gradient: string;
  accentColor: string;
}

// カスタムSVGアイコン
const BpoIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" className="opacity-20" />
    <path d="M16 20C16 18.8954 16.8954 18 18 18H30C31.1046 18 32 18.8954 32 20V32C32 33.1046 31.1046 34 30 34H18C16.8954 34 16 33.1046 16 32V20Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M20 14V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M28 14V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="24" cy="26" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M24 29V31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SystemIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <rect x="8" y="12" width="32" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 28H40" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="24" cy="31" r="1.5" fill="currentColor" />
    <path d="M18 38H30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M24 34V38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M15 18L18 21L15 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 24H27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ConsultingIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" className="opacity-20" />
    <path d="M24 12V24L32 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M14 36L18 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M34 36L30 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M24 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M40 24H38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const businessAreas: BusinessArea[] = [
  {
    id: 'bpo',
    title: 'BPO事業',
    titleEn: 'Business Process Outsourcing',
    description: 'コア業務への集中を可能にする戦略的アウトソーシング。コールセンター運営からポスティングまで、品質と効率を両立した業務支援を提供します。',
    services: ['インバウンド・アウトバウンドコール', 'ポスティング・DM配送', 'リスト作成・データ入力', 'カスタマーサポート'],
    icon: <BpoIcon />,
    gradient: 'from-indigo-500/10 via-blue-500/5 to-transparent',
    accentColor: '#6366f1',
  },
  {
    id: 'system',
    title: 'システム開発事業',
    titleEn: 'System Development',
    description: 'ビジネスの課題をテクノロジーで解決。業務効率化システムからWebアプリケーションまで、お客様のDX推進をエンド・トゥ・エンドでサポートします。',
    services: ['業務効率化システム構築', 'Webアプリ・モバイルアプリ開発', 'コーポレートサイト制作', 'API連携・システム統合'],
    icon: <SystemIcon />,
    gradient: 'from-purple-500/10 via-violet-500/5 to-transparent',
    accentColor: '#8b5cf6',
  },
  {
    id: 'consulting',
    title: 'コンサルティング事業',
    titleEn: 'Consulting',
    description: '事業成長の羅針盤となるパートナー。新規事業立案から既存事業の最適化まで、データに基づいた戦略的アプローチで成果にコミットします。',
    services: ['事業戦略立案・実行支援', '市場調査・競合分析', '業務プロセス改善', 'KPI設計・モニタリング'],
    icon: <ConsultingIcon />,
    gradient: 'from-pink-500/10 via-rose-500/5 to-transparent',
    accentColor: '#ec4899',
  },
];

function BusinessCard({ area, index }: { area: BusinessArea; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateXValue = (mouseY / (rect.height / 2)) * -8;
    const rotateYValue = (mouseX / (rect.width / 2)) * 8;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className="group relative"
    >
      {/* Outer Glow */}
      <motion.div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{ background: `radial-gradient(circle at center, ${area.accentColor}40 0%, transparent 70%)` }}
      />
      
      <div
        className={`relative h-full p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-gradient-to-br ${area.gradient} backdrop-blur-sm transition-all duration-500`}
        style={{
          background: isHovered 
            ? `linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)`
            : `linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)`,
          borderColor: isHovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)',
          boxShadow: isHovered ? `0 25px 50px -12px ${area.accentColor}20` : 'none',
        }}
      >
        {/* Top Accent Line */}
        <motion.div
          className="absolute top-0 left-8 right-8 h-[1px]"
          style={{ 
            background: `linear-gradient(90deg, transparent, ${area.accentColor}60, transparent)`,
            opacity: isHovered ? 1 : 0,
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="mb-6 text-white/80"
            style={{ color: isHovered ? area.accentColor : 'rgba(255,255,255,0.8)' }}
            animate={isHovered ? { scale: 1.05, y: -4 } : { scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {area.icon}
          </motion.div>

          {/* English Title */}
          <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#71717a] mb-2">
            {area.titleEn}
          </p>

          {/* Japanese Title */}
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white tracking-tight">
            {area.title}
          </h3>
          
          {/* Description */}
          <p className="text-[#a1a1aa] mb-8 leading-relaxed text-sm md:text-base">
            {area.description}
          </p>

          {/* Services */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-[#71717a] tracking-wider uppercase mb-3">
              Services
            </p>
            <div className="grid grid-cols-1 gap-2">
              {area.services.map((service, idx) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + idx * 0.05 }}
                  className="flex items-center gap-3 group/item"
                >
                  <span 
                    className="w-1 h-1 rounded-full transition-all duration-300 group-hover/item:scale-150"
                    style={{ backgroundColor: area.accentColor }}
                  />
                  <span className="text-sm text-[#a1a1aa] group-hover/item:text-white transition-colors duration-300">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Learn More Link */}
          <motion.div
            className="mt-8 pt-6 border-t border-white/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.6 }}
            transition={{ duration: 0.3 }}
          >
            <span 
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300"
              style={{ color: isHovered ? area.accentColor : '#71717a' }}
            >
              詳細を見る
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </motion.div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/[0.06] rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-white/[0.06] rounded-bl-lg" />
      </div>
    </motion.div>
  );
}

export default function BusinessAreas() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-32 px-6 bg-[#030303]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-500/5 via-purple-500/5 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse" />
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#a1a1aa]">
              Our Services
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            <span className="text-gradient-primary">
              3つの事業領域で
            </span>
            <br />
            <span className="text-gradient-accent">
              成長をドライブする
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base md:text-lg text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed"
          >
            BPO・システム開発・コンサルティングの3つの柱で、
            <br className="hidden md:block" />
            お客様のビジネス課題を包括的に解決します。
          </motion.p>
        </motion.div>

        {/* Business Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {businessAreas.map((area, index) => (
            <BusinessCard key={area.id} area={area} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-[#71717a] text-sm mb-4">
            どのサービスが最適かお悩みですか？
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 group"
          >
            <span className="text-sm font-medium">無料でご相談ください</span>
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
