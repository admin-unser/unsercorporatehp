import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '利用規約',
  description: 'UNSER合同会社のウェブサイト利用規約です。',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#030303] to-[#050505]">
      <Header />
      <article className="container mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
          利用規約
        </h1>
        <p className="text-[#a1a1aa] text-sm mb-12">
          制定日：2025年1月1日
        </p>

        <div className="prose prose-invert prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">第1条（適用）</h2>
            <p className="text-[#a1a1aa] leading-relaxed">
              本規約は、UNSER合同会社（以下「当社」）が運営するウェブサイト（以下「本サイト」）の利用条件を定めるものです。利用者は、本規約に同意の上、本サイトをご利用ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">第2条（禁止事項）</h2>
            <p className="text-[#a1a1aa] leading-relaxed mb-4">
              利用者は、本サイトの利用にあたり、以下の行為を行ってはなりません。
            </p>
            <ul className="list-disc list-inside text-[#a1a1aa] space-y-2 ml-4">
              <li>法令または公序良俗に反する行為</li>
              <li>当社または第三者の権利を侵害する行為</li>
              <li>虚偽の情報を登録または送信する行為</li>
              <li>本サイトの運営を妨害する行為</li>
              <li>不正アクセスまたはこれを試みる行為</li>
              <li>その他、当社が不適切と判断する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">第3条（著作権）</h2>
            <p className="text-[#a1a1aa] leading-relaxed">
              本サイトに掲載されるコンテンツ（文章、画像、デザイン等）の著作権は、当社または正当な権利を有する第三者に帰属します。利用者は、当社の許諾なく、これらの複製、転載、改変等を行うことはできません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">第4条（免責事項）</h2>
            <p className="text-[#a1a1aa] leading-relaxed">
              当社は、本サイトの内容について、正確性・完全性を保証するものではありません。本サイトの利用により生じた損害について、当社は一切の責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">第5条（規約の変更）</h2>
            <p className="text-[#a1a1aa] leading-relaxed">
              当社は、必要に応じて本規約を変更することがあります。変更後の規約は、本サイトに掲載した時点から効力を生じるものとします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">第6条（準拠法・管轄裁判所）</h2>
            <p className="text-[#a1a1aa] leading-relaxed">
              本規約の解釈および適用は、日本法に準拠するものとします。本サイトまたは本規約に関して紛争が生じた場合には、千葉地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">お問い合わせ</h2>
            <p className="text-[#a1a1aa] leading-relaxed">
              本規約に関するお問い合わせは、以下までご連絡ください。
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
