'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Message() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const messagePoints = [
    {
      title: 'UNSERの由来',
      content: '私たちは2023年5月にUNSERと題して活動を開始しました。UNSERとは「不確実なことに対する私たちの答え」という造語です。'
    },
    {
      title: '私たちの使命',
      content: 'お客様の抱える問題を解決し、事業成長を全力でサポートすること。それが私たちの存在意義であり、お客様に心から満足していただくことが、私たちの喜びです。'
    },
    {
      title: '大切にしていること',
      content: '私たちが最も大切にしているのは「想像力」です。ビジネススキル以上に、仕事への姿勢、情熱、使命感といった人間としての基礎を重視しています。'
    },
    {
      title: '最高品質のサービス',
      content: '私たちが考える最高品質のサービスとは、圧倒的にポジティブな「驚き」—お客様の想像を超える体験とホスピタリティの提供です。'
    },
    {
      title: 'ロゴに込めた想い',
      content: '私たちのロゴは階段をモチーフにしています。現状の延長線上ではなく、「こうありたい」という熱い想いから生まれる新しい道を表現しています。'
    },
    {
      title: '事業成長のコンシェルジュ',
      content: 'ホスピタリティ精神とコミュニケーション能力という普遍的な力を武器に、お客様のあらゆるご要望にきめ細かくお応えしていきます。'
    },
  ];

  return (
    <section
      id="message"
      ref={ref}
      className="relative py-32 px-6 bg-gradient-to-b from-[#030303] via-[#050505] to-[#030303]"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/[0.03] to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-indigo-500/[0.03] to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl relative">
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
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#a1a1aa]">
              Message from CEO
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            <span className="text-gradient-primary">
              代表メッセージ
            </span>
          </motion.h2>
        </motion.div>

        {/* Message Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {/* Quote */}
          <div className="relative mb-12 py-8 px-8 md:px-12 rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-transparent">
            <div className="absolute top-6 left-6 text-5xl text-indigo-500/20 font-serif">&ldquo;</div>
            <blockquote className="relative z-10 text-xl md:text-2xl text-white/90 font-light leading-relaxed text-center">
              想像力は、創造力につながる。
              <br />
              お客様の未来を想い、誠心誠意の行動で応える。
            </blockquote>
            <div className="absolute bottom-6 right-6 text-5xl text-indigo-500/20 font-serif rotate-180">&rdquo;</div>
          </div>

          {/* Message Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {messagePoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.08 }}
                className="p-6 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:border-white/[0.08] hover:bg-white/[0.02] transition-all duration-300"
              >
                <h3 className="text-sm font-semibold text-indigo-400 mb-2">{point.title}</h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">{point.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-12 flex items-center justify-end gap-6"
          >
            <div className="text-right">
              <p className="text-xs text-[#52525b] mb-1">2024年6月吉日</p>
              <p className="text-lg font-bold text-white">代表社員</p>
              <p className="text-2xl font-bold text-gradient-accent">在原 拓海</p>
            </div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/10 border border-white/[0.06] flex items-center justify-center">
              <span className="text-2xl font-bold text-white/30">在</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
