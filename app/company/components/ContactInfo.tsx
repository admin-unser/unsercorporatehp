'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

export default function ContactInfo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact-info"
      ref={ref}
      className="relative py-32 px-6 bg-gradient-to-b from-[#030303] to-[#050505]"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-indigo-500/[0.03] to-transparent blur-3xl" />
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
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#a1a1aa]">
              Access & Contact
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            <span className="text-gradient-primary">
              所在地・お問い合わせ
            </span>
          </motion.h2>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="p-8 rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-transparent"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#52525b] tracking-wider uppercase">Location</p>
                <h3 className="text-lg font-semibold text-white">所在地</h3>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-[#71717a]">〒260-0013</p>
              <p className="text-white leading-relaxed">
                千葉県千葉市中央区中央2-5-1
                <br />
                千葉中央ツインビル2-7F
              </p>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="p-8 rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-transparent"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#52525b] tracking-wider uppercase">Contact</p>
                <h3 className="text-lg font-semibold text-white">代表窓口</h3>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-[#52525b] mb-1 tracking-wider uppercase">Tel</p>
                <p className="text-xl font-semibold text-white number-display">0120-192-748</p>
              </div>
              <div>
                <p className="text-xs text-[#52525b] mb-1 tracking-wider uppercase">Mail</p>
                <p className="text-white">info@unser-inc.com</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[#71717a] text-sm mb-6">
            サービスに関するご質問・ご相談はこちらから
          </p>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
          >
            お問い合わせフォームへ
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-8 text-center text-xs text-[#52525b]"
        >
          ※お電話の際は、お掛け間違いがないよう番号をご確認ください
        </motion.p>
      </div>
    </section>
  );
}
