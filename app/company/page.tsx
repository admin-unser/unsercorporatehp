import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CompanyOverview from '@/app/company/components/CompanyOverview';
import Message from '@/app/company/components/Message';
import Philosophy from '@/app/company/components/Philosophy';
import ContactInfo from '@/app/company/components/ContactInfo';

export const metadata = {
  title: '会社情報 | UNSER.inc',
  description: 'UNSER.incの会社概要、代表メッセージ、企業理念をご紹介します。',
};

export default function CompanyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CompanyOverview />
      <Message />
      <Philosophy />
      <ContactInfo />
      <Footer />
    </main>
  );
}
