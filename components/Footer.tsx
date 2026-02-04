'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks = {
  company: [
    { name: '会社概要', href: '/company#company' },
    { name: '代表メッセージ', href: '/company#message' },
    { name: '企業理念', href: '/company#philosophy' },
  ],
  services: [
    { name: 'BPO事業', href: '/#services' },
    { name: 'システム開発', href: '/#services' },
    { name: 'コンサルティング', href: '/#services' },
  ],
  resources: [
    { name: '実績・事例', href: '/#case-studies' },
    { name: 'お問い合わせ', href: '/#contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#030303] border-t border-white/[0.04]">
      {/* Background Accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-indigo-500/[0.02] to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Company Info */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              {/* Logo */}
              <Link href="/" className="inline-flex items-center gap-3 group">
                <div className="w-8 h-8 relative">
                  <div className="absolute bottom-0 left-0 w-2 h-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-sm" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-sm" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-br from-pink-500 to-rose-500 rounded-sm" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-white">
                    UNSER
                  </span>
                  <span className="text-[8px] text-[#52525b] tracking-[0.2em] uppercase -mt-0.5">
                    Your Growth, Our Mission
                  </span>
                </div>
              </Link>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#71717a] text-sm leading-relaxed mb-6 max-w-sm"
            >
              不確実な時代に、確かな成長を。
              <br />
              BPO・システム開発・コンサルティングで、
              <br />
              お客様のビジネスを次のステージへ。
            </motion.p>

            {/* Social Links Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <span className="text-xs text-[#52525b]">Follow us</span>
              <div className="flex gap-2">
                {['X', 'In', 'FB'].map((social) => (
                  <div
                    key={social}
                    className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-[10px] text-[#52525b] hover:text-white hover:border-white/10 transition-colors cursor-pointer"
                  >
                    {social}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Company Links */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-semibold text-[#a1a1aa] tracking-wider uppercase mb-4"
              >
                Company
              </motion.h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-[#71717a] hover:text-white text-sm transition-colors duration-300 link-underline"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-semibold text-[#a1a1aa] tracking-wider uppercase mb-4"
              >
                Services
              </motion.h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-[#71717a] hover:text-white text-sm transition-colors duration-300 link-underline"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-semibold text-[#a1a1aa] tracking-wider uppercase mb-4"
              >
                Resources
              </motion.h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-[#71717a] hover:text-white text-sm transition-colors duration-300 link-underline"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-[#52525b] text-xs">
            © {new Date().getFullYear()} UNSER合同会社 All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[#52525b] hover:text-[#a1a1aa] text-xs transition-colors duration-300"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/terms"
              className="text-[#52525b] hover:text-[#a1a1aa] text-xs transition-colors duration-300"
            >
              利用規約
            </Link>
            <Link
              href="#sitemap"
              className="text-[#52525b] hover:text-[#a1a1aa] text-xs transition-colors duration-300"
            >
              サイトマップ
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
