'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navItems = [
  { name: 'ホーム', nameEn: 'Home', href: '/#home' },
  { name: '会社情報', nameEn: 'Company', href: '/company' },
  { name: 'サービス', nameEn: 'Services', href: '/#services' },
  { name: '事例', nameEn: 'Cases', href: '/#case-studies' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#030303]/90 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              {/* Logo Mark - Staircase inspired */}
              <div className="w-8 h-8 relative">
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-sm" />
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-sm" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-br from-pink-500 to-rose-500 rounded-sm" />
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white">
                UNSER
              </span>
              <span className="text-[8px] text-[#71717a] tracking-[0.2em] uppercase -mt-0.5">
                Your Growth, Our Mission
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-[#a1a1aa] hover:text-white transition-colors duration-300 group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/[0.04] transition-colors duration-300" />
                  <span className="absolute bottom-1 left-4 right-4 h-[1px] bg-gradient-to-r from-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </motion.div>
            ))}
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="ml-4"
            >
              <Link
                href="/#contact"
                className="group relative px-5 py-2.5 rounded-full text-sm font-medium text-white overflow-hidden transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500" />
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-1.5">
                  お問い合わせ
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.06]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? 'open' : 'closed'}
              className="w-5 h-4 flex flex-col justify-between"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 7.5 },
                }}
                transition={{ duration: 0.3 }}
                className="w-full h-[1.5px] bg-white origin-left"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1, x: 0 },
                  open: { opacity: 0, x: 10 },
                }}
                transition={{ duration: 0.2 }}
                className="w-full h-[1.5px] bg-white"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -7.5 },
                }}
                transition={{ duration: 0.3 }}
                className="w-full h-[1.5px] bg-white origin-left"
              />
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-6 pb-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-3 px-4 rounded-xl text-[#a1a1aa] hover:text-white hover:bg-white/[0.03] transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs text-[#52525b]">{item.nameEn}</span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="pt-4"
                >
                  <Link
                    href="/#contact"
                    className="block w-full py-3.5 text-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    お問い合わせ
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
