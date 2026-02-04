import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: 'UNSER合同会社のプライバシーポリシーです。個人情報の取り扱いについて定めています。',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#030303] to-[#050505]">
      <Header />
      <article className="container mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
          プライバシーポリシー
        </h1>
        <p className="text-[#a1a1aa] text-sm mb-12">
          制定日：2025年1月1日
        </p>

        <div className="prose prose-invert prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. はじめに</h2>
            <p className="text-[#a1a1aa] leading-relaxed">
              UNSER合同会社（以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、個人情報の保護に関する法律および関連法令・ガイドラインに基づき、適切な取り扱いと保護に努めます。本プライバシーポリシーは、当社が提供するサービスにおいて収集する個人情報の取り扱いについて定めるものです。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. 収集する個人情報</h2>
            <p className="text-[#a1a1aa] leading-relaxed mb-4">
              当社は、以下のような個人情報を収集することがあります。
            </p>
            <ul className="list-disc list-inside text-[#a1a1aa] space-y-2 ml-4">
              <li>氏名</li>
              <li>メールアドレス</li>
              <li>電話番号</li>
              <li>会社名・団体名</li>
              <li>お問い合わせ内容</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. 個人情報の利用目的</h2>
            <p className="text-[#a1a1aa] leading-relaxed mb-4">
              収集した個人情報は、以下の目的で利用いたします。
            </p>
            <ul className="list-disc list-inside text-[#a1a1aa] space-y-2 ml-4">
              <li>お問い合わせへの対応</li>
              <li>サービスに関するご案内・ご連絡</li>
              <li>契約の履行およびサービスの提供</li>
              <li>サービス改善のための分析</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. 個人情報の第三者提供</h2>
            <p className="text-[#a1a1aa] leading-relaxed">
              当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. 個人情報の安全管理</h2>
            <p className="text-[#a1a1aa] leading-relaxed">
              当社は、個人情報の漏洩、滅失、毀損の防止のため、適切な安全管理措置を講じます。また、個人情報を取り扱う従業員に対し、必要かつ適切な監督を行います。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. お問い合わせ窓口</h2>
            <p className="text-[#a1a1aa] leading-relaxed">
              個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。
            </p>
            <p className="text-[#a1a1aa] leading-relaxed mt-4">
              UNSER合同会社
              <br />
              〒260-0013 千葉県千葉市中央区中央2-5-1 千葉中央ツインビル2-7F
              <br />
              メール：info@unser-inc.com
              <br />
              電話：0120-192-748
            </p>
          </section>
        </div>

        <div className="mt-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#a1a1aa] hover:text-white transition-colors"
          >
            ← トップページへ戻る
          </Link>
        </div>
      </article>
      <Footer />
    </main>
  );
}
