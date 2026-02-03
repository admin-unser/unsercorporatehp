'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const philosophyItems = [
    {
      title: 'ミッション',
      description: 'お客様の事業成長のコンシェルジュとして、多くのお客様の良きパートナーとして、支え仕えます。',
    },
    {
      title: 'ビジョン',
      description: 'お客様のニーズに迅速かつ柔軟に対応し、反復的なプロセスで最適解を追求することで、期待を超える価値をお届けします。',
    },
    {
      title: 'バリュー',
      description: 'アジャイルなアプローチを取り入れたワンストップのソリューションサービスをご提供し、お客様の成功を共に創り上げます。',
    },
  ];

  return (
    <section
      id="philosophy"
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
              企業理念
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-400"
          >
            Corporate Philosophy
          </motion.p>
        </motion.div>

        {/* Philosophy Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-white/20 hover:shadow-xl hover:shadow-purple-500/20 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
