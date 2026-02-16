'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

interface ServiceDetail {
  id: string;
  title: string;
  titleEn: string;
  category: string;
  categoryColor: string;
  description: string;
  features: string[];
  stats?: { label: string; value: string }[];
  highlight?: string;
}

const serviceDetails: ServiceDetail[] = [
  {
    id: 'maku-posting',
    title: 'MAKU',
    titleEn: 'Posting Service',
    category: 'BPO',
    categoryColor: '#6366f1',
    description: 'データドリブンなポスティングサービス。独自のエリア分析とターゲティングで、効果を最大化するダイレクトマーケティングを実現します。',
    features: [
      '全国47都道府県対応のポスティング',
      'GISを活用したエリア分析・ターゲティング',
      '配布完了報告・GPS追跡による品質管理',
      '効果測定レポート・PDCA支援',
    ],
    highlight: 'データで効果を可視化',
  },
  {
    id: 'call-center',
    title: 'コールセンター',
    titleEn: 'Inbound / Outbound',
    category: 'BPO',
    categoryColor: '#6366f1',
    description: 'インバウンド・アウトバウンド対応のコールセンター運営。お客様のビジネスゴールに合わせたスクリプト設計から、高品質なオペレーションまでワンストップで提供します。',
    features: [
      'インバウンド（受電）・アウトバウンド（架電）両対応',
      'セールス・カスタマーサポート・問い合わせ対応',
      'CRM/SFAとのシームレス連携',
      'リアルタイムKPIモニタリング・品質管理体制',
    ],
    stats: [
      { label: '顧客満足度', value: '98%' },
    ],
    highlight: 'インアウト一貫対応',
  },
  {
    id: 'system-development',
    title: '業務効率化システム',
    titleEn: 'Business Automation',
    category: 'Development',
    categoryColor: '#8b5cf6',
    description: '属人化した業務をシステム化し、生産性を飛躍的に向上。現場の声を丁寧にヒアリングし、使われる・効果の出るシステムを構築します。',
    features: [
      '業務フロー分析・可視化',
      'ノーコード/ローコード対応',
      'レガシーシステムとの連携',
      '導入後の運用サポート',
    ],
    highlight: '工数削減40%達成実績',
  },
  {
    id: 'app-development',
    title: 'アプリケーション開発',
    titleEn: 'App Development',
    category: 'Development',
    categoryColor: '#8b5cf6',
    description: 'ビジネスアイデアをかたちに。企画段階からリリース後のグロースまで、プロダクトライフサイクル全体をサポートします。',
    features: [
      'iOS/Android ネイティブ & クロスプラットフォーム',
      'プロトタイプからのアジャイル開発',
      'UI/UXデザイン設計',
      'ストア申請・リリースサポート',
    ],
    highlight: 'アイデアを形に',
  },
  {
    id: 'web-development',
    title: 'Webサイト制作',
    titleEn: 'Web Development',
    category: 'Development',
    categoryColor: '#8b5cf6',
    description: '美しく、速く、見つけてもらえるWebサイトを。最新技術とSEOベストプラクティスで、ビジネスに貢献するWeb体験を創造します。',
    features: [
      'Next.js/Reactによるモダン開発',
      'Core Web Vitals最適化',
      'SEO/アクセシビリティ対応',
      'ヘッドレスCMS連携',
    ],
    highlight: 'パフォーマンスにこだわる',
  },
  {
    id: 'consulting-strategy',
    title: '事業戦略コンサルティング',
    titleEn: 'Business Strategy',
    category: 'Consulting',
    categoryColor: '#ec4899',
    description: '事業成長の伴走者として。課題の本質を見極め、実行可能な戦略を共に策定。机上の空論ではなく、成果につながるソリューションを提供します。',
    features: [
      '事業戦略の策定・実行支援',
      '市場調査・競合分析',
      '新規事業立案・実行プラン策定',
      'KPI設計・PDCAサイクル構築',
    ],
    highlight: '戦略から実行まで伴走',
  },
  {
    id: 'consulting-dx',
    title: 'DX・業務改革支援',
    titleEn: 'Digital Transformation',
    category: 'Consulting',
    categoryColor: '#ec4899',
    description: 'デジタル変革と業務改革を一気通貫で支援。現状分析から改善施策の実行まで、お客様の組織に寄り添いながら推進します。',
    features: [
      '業務プロセス分析・改善提案',
      'DXロードマップ策定',
      'システム導入・運用の伴走支援',
      '組織・人材面の変革支援',
    ],
    highlight: '変革を現場から',
  },
];

function ServiceCard({ service, index }: { service: ServiceDetail; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group"
    >
      <div
        className={`relative p-6 md:p-8 rounded-2xl cursor-pointer transition-all duration-500`}
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          background: isExpanded 
            ? 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)',
          border: `1px solid ${isExpanded ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)'}`,
          boxShadow: isExpanded ? `0 20px 40px -15px ${service.categoryColor}15` : 'none',
        }}
      >
        {/* Top Line Accent */}
        <motion.div
          className="absolute top-0 left-6 right-6 h-[1px]"
          style={{ 
            background: `linear-gradient(90deg, transparent, ${service.categoryColor}40, transparent)`,
          }}
          animate={{ opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span 
              className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full"
              style={{ 
                backgroundColor: `${service.categoryColor}15`,
                color: service.categoryColor,
              }}
            >
              {service.category}
            </span>
            {service.highlight && (
              <span className="text-[10px] font-medium text-[#71717a] tracking-wide hidden sm:inline">
                {service.highlight}
              </span>
            )}
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-[#71717a] text-xs mt-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>

        {/* English Title */}
        <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#52525b] mb-1">
          {service.titleEn}
        </p>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>

        {/* Description */}
        <p className="text-[#a1a1aa] text-sm leading-relaxed mb-4">{service.description}</p>

        {/* Stats */}
        {service.stats && (
          <div className="flex gap-6 mb-4">
            {service.stats.map((stat) => (
              <div key={stat.label}>
                <div 
                  className="text-3xl font-bold number-display"
                  style={{ color: service.categoryColor }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-[#71717a] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden"
            >
              <div className="pt-5 border-t border-white/[0.06] mt-4">
                <p className="text-xs font-semibold text-[#71717a] tracking-wider uppercase mb-4">
                  Key Features
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-3 text-sm text-[#a1a1aa]"
                    >
                      <span 
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: service.categoryColor }}
                      />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hover indicator */}
        <motion.div
          className="absolute bottom-4 right-4 text-[#52525b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{ x: isExpanded ? 0 : [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: isExpanded ? 0 : Infinity }}
        >
          <span className="text-xs">
            {isExpanded ? 'クリックで閉じる' : 'クリックで詳細'}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ServicesDetail() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="services-detail"
      ref={ref}
      className="relative py-32 px-6 bg-gradient-to-b from-[#030303] via-[#050505] to-[#030303]"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/[0.03] to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-purple-500/[0.03] to-transparent blur-3xl" />
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
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#a1a1aa]">
              Service Details
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            <span className="text-gradient-primary">
              各サービスの詳細
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base md:text-lg text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed"
          >
            アジャイルなアプローチで最適解を追求し、
            <br className="hidden md:block" />
            <span className="text-white/90">期待を超える価値</span>をお届けします。
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceDetails.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom Divider */}
        <div className="mt-20 section-divider" />
      </div>
    </section>
  );
}
