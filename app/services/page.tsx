import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import ServicesIndexClient from './ServicesIndexClient';
import ServicesHeroClient from './ServicesHeroClient';

export const metadata: Metadata = {
  title: 'サービス一覧',
  description: 'BPO事業・システム開発・コンサルティングの3つの事業領域で、お客様のビジネス課題を包括的に解決します。',
  openGraph: {
    title: 'サービス一覧 | UNSER合同会社',
    description: 'BPO・システム開発・コンサルティングで、成長をドライブする。',
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#030303]">
      <Header />

      {/* Hero - 一言だけ傾けて遊び心 */}
      <ServicesHeroClient />

      {/* 事業カード - 各ページへのリンク */}
      <ServicesIndexClient />

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-[#71717a] text-sm mb-6">
            どのサービスが最適か、まずはお気軽にご相談ください。
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            無料相談はこちら
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
