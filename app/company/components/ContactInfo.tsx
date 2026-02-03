'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ContactInfo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact-info"
      ref={ref}
      className="relative py-24 px-6 bg-black"
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
              所在地・お問い合わせ
            </span>
          </motion.h2>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-6">所在地</h3>
            <p className="text-gray-300 leading-relaxed mb-2">
              〒260-0013
            </p>
            <p className="text-gray-300 leading-relaxed">
              千葉県千葉市中央区中央2-5-1<br />
              千葉中央ツインビル2-7F
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-6">代表窓口</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">電話番号</p>
                <p className="text-gray-300 text-lg">TEL: 0120-192-748</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">メールアドレス</p>
                <p className="text-gray-300 text-lg">MAIL: info@unser-inc.com</p>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  ※お問い合わせの際は、お掛け間違いがないよう電話番号の再確認をお願いします。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
