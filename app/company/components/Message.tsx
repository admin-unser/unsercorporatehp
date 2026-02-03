'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Message() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="message"
      ref={ref}
      className="relative py-24 px-6 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              代表メッセージ
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-400"
          >
            Message from CEO
          </motion.p>
        </motion.div>

        {/* Message Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">代表社員</h3>
              <p className="text-gray-400">在原 拓海</p>
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                私たちは2023年5月にUNSERと題して活動を開始しました。
                UNSERとは私たちの造語で、「不確実なことに対する私たちの答え」という意味があります。
              </p>
              <p>
                お客様の抱える問題を解決し、事業成長を全力でサポートすること。それが、私たちの使命であり、存在意義です。
              </p>
              <p>
                そして、お客様に心から満足していただけることこそ、私たちの喜びであり、エネルギーの源です。
              </p>
              <p>
                私たちが提供するサービスの中心は代行事業、つまりお客様あっての事業ということになります。
              </p>
              <p>
                私たちが最も大切にしている人間としてのスキル、それは「想像力」です。
              </p>
              <p>
                それぞれのビジネススキルも大切ですが、それ以上に人間としての基礎を重視しています。
                人間としての基礎、つまり、仕事に対する姿勢や態度、所作、笑顔、常識、情熱、使命感、思想、あきらめない心...
                これらの要素において大切なのは、想像力だと考えます。なぜなのでしょうか。
              </p>
              <p>
                私たちが考える最高品質のサービスとは、「驚き」それも圧倒的ポジティブな驚きです。
                つまり、お客様の想像を超える体験やホスピタリティーを提供することです。
              </p>
              <p>
                これには自分以上にお客様を想う気持ち、お客様へ仕える気持ち、紳士・淑女的な精神、それと、
                お客様の未来を思っての誠心誠意の行動が必要になります。
                これが私たちの考える「想像力」です。想像力は、創造力につながります。
              </p>
              <p>
                「想像力」は私たちのロゴにも込められています。
              </p>
              <p>
                私たちUNSERのロゴのモティーフは階段です。
                現状の延長線上ではなく、「こうありたい」という熱い想いから生まれる新しい道を表現しています。
              </p>
              <p>
                また、現代の企業が抱える問題は、とても複雑で見えづらいものとなっています。
                問題発見力と適切なコンサルティングが様々な業界で求められています。
                そうした発見力と提案力の礎となるのが、人間としての基礎を土台としたホスピタリティ精神やコミュニケーション能力だと考えています。
                それはまた、時代が変わっても変わることのない本質的な力でもあります。
              </p>
              <p>
                そんな普遍的な力を武器に「事業成長のコンシェルジュ」として、お客様のあらゆるご要望にきめ細かくお応えしていきます。
              </p>
              <div className="mt-8 pt-6 border-t border-white/10 text-right">
                <p className="text-gray-400">2024年6月吉日</p>
                <p className="text-white font-semibold mt-2">代表社員 在原 拓海</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
