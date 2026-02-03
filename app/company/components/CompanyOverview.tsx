'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CompanyOverview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const companyInfo = [
    { label: '会社名', value: 'UNSER株式会社' },
    { label: '設立', value: '2023年5月1日' },
    { label: '従業員数', value: '30名（業務委託含む）' },
    { label: '事業内容', value: 'BPO事業、システム開発事業、コンサルティング事業' },
  ];

  return (
    <section
      id="company"
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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              会社概要
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-400"
          >
            Company Overview
          </motion.p>
        </motion.div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          {companyInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex flex-col md:flex-row md:items-center p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-white/20 transition-all"
            >
              <div className="md:w-1/3 mb-2 md:mb-0">
                <span className="text-sm font-semibold text-gray-400">{info.label}</span>
              </div>
              <div className="md:w-2/3">
                <span className="text-white">{info.value}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
