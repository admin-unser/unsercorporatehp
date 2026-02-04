'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CompanyOverview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const companyInfo = [
    { label: '会社名', labelEn: 'Company Name', value: 'UNSER Inc.', valueJa: 'UNSER株式会社' },
    { label: '設立', labelEn: 'Founded', value: '2023年5月1日', valueJa: '' },
    { label: '従業員数', labelEn: 'Employees', value: '30名', valueJa: '（業務委託パートナー含む）' },
    { label: '事業内容', labelEn: 'Business', value: 'BPO事業 / システム開発事業 / コンサルティング事業', valueJa: '' },
  ];

  return (
    <section
      id="company"
      ref={ref}
      className="relative pt-32 pb-24 px-6 bg-[#030303]"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-500/[0.03] to-transparent blur-3xl" />
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
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#a1a1aa]">
              Company Overview
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            <span className="text-gradient-primary">
              会社概要
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base text-[#71717a] max-w-xl mx-auto"
          >
            不確実性に挑む、私たちの答えを。
          </motion.p>
        </motion.div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-transparent"
        >
          <div className="space-y-0 divide-y divide-white/[0.04]">
            {companyInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.08 }}
                className="flex flex-col md:flex-row md:items-center py-6 first:pt-0 last:pb-0"
              >
                <div className="md:w-1/3 mb-2 md:mb-0">
                  <span className="text-xs font-medium tracking-[0.1em] uppercase text-[#52525b]">
                    {info.labelEn}
                  </span>
                  <span className="block text-sm font-medium text-[#a1a1aa] mt-0.5">
                    {info.label}
                  </span>
                </div>
                <div className="md:w-2/3">
                  <span className="text-white font-medium">{info.value}</span>
                  {info.valueJa && (
                    <span className="text-[#71717a] text-sm ml-1">{info.valueJa}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
