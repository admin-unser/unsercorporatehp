'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// タイピングアニメーション用の文言
const taglines = [
  '不確実性を、確かな成長へ。',
  'Your Growth, Our Mission.',
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentTagline, setCurrentTagline] = useState(0);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    // タグラインの切り替え
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (heroRef.current) {
      // 背景アニメーション
      const tl = gsap.timeline({ repeat: -1 });
      tl.to('.gradient-orb-1', {
        x: '+=120',
        y: '+=60',
        duration: 12,
        ease: 'sine.inOut',
      })
        .to('.gradient-orb-1', {
          x: '-=120',
          y: '-=60',
          duration: 12,
          ease: 'sine.inOut',
        });

      gsap.to('.gradient-orb-2', {
        x: '-=100',
        y: '+=80',
        duration: 15,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      gsap.to('.gradient-orb-3', {
        x: '+=60',
        y: '-=40',
        duration: 10,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Premium Animated Background */}
      <div className="absolute inset-0 bg-[#030303]">
        {/* Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="gradient-orb-1 absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-40"
            style={{ 
              y,
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)',
            }}
          />
          <motion.div
            className="gradient-orb-2 absolute bottom-[10%] right-[15%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-30"
            style={{ 
              y,
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 70%)',
            }}
          />
          <motion.div
            className="gradient-orb-3 absolute top-[40%] right-[30%] w-[300px] h-[300px] rounded-full blur-[100px] opacity-20"
            style={{ 
              background: 'radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, transparent 70%)',
            }}
          />
        </div>
        
        {/* Sophisticated Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fff 1px, transparent 1px),
              linear-gradient(to bottom, #fff 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030303]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030303_70%)]" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        style={{ opacity, scale }}
      >
        {/* Rotating Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 h-8"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentTagline}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm md:text-base font-medium tracking-[0.2em] uppercase text-gradient-accent"
            >
              {taglines[currentTagline]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold mb-8 leading-[1.1] tracking-tight"
        >
          <span className="block text-gradient-primary mb-2">
            想像を超える体験で
          </span>
          <span className="block text-gradient-accent">
            事業の未来を共創する
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          BPO・システム開発・コンサルティングを通じて、
          <br className="hidden md:block" />
          <span className="text-white/90">お客様の成長に伴走</span>するビジネスパートナー
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-4 overflow-hidden rounded-full font-semibold text-white transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              無料相談を予約する
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-4 rounded-full font-semibold text-white overflow-hidden"
          >
            <span className="absolute inset-0 border border-white/20 rounded-full group-hover:border-white/40 transition-colors duration-300" />
            <span className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
            <span className="relative flex items-center gap-2">
              サービスを見る
              <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </motion.a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 pt-8 border-t border-white/5"
        >
          <p className="text-xs text-[#71717a] mb-4 tracking-wider uppercase">Trusted by innovative companies</p>
          <div className="flex justify-center items-center gap-8 opacity-40">
            <div className="text-2xl font-bold tracking-tight">Client A</div>
            <div className="text-2xl font-bold tracking-tight">Client B</div>
            <div className="text-2xl font-bold tracking-tight">Client C</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#71717a] tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Corner Accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/10" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-white/10" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-white/10" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/10" />
    </section>
  );
}
