import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// 動的インポートでパフォーマンス最適化
const Hero = dynamic(() => import('@/app/components/Hero/Hero'), {
  ssr: true,
});
const BusinessAreas = dynamic(() => import('@/app/components/BusinessAreas/BusinessAreas'), {
  ssr: true,
});
const ServicesDetail = dynamic(() => import('@/app/components/ServicesDetail/ServicesDetail'), {
  ssr: true,
});
const CaseStudies = dynamic(() => import('@/app/components/CaseStudies/CaseStudies'), {
  ssr: true,
});
const Contact = dynamic(() => import('@/app/components/Contact/Contact'), {
  ssr: true,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <BusinessAreas />
      <ServicesDetail />
      <CaseStudies />
      <Contact />
      <Footer />
    </main>
  );
}
