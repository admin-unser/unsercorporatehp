import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#030303] to-[#050505]">
      <Header />
      <section className="min-h-[80vh] flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-lg mx-auto">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/10 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            送信完了
          </h1>
          <p className="text-[#a1a1aa] mb-8 leading-relaxed">
            お問い合わせいただきありがとうございます。
            <br />
            担当者より24時間以内にご連絡いたします。
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity"
          >
            トップページへ戻る
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
