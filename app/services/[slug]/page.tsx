import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getBusinessAreaBySlug, getServicePaths } from '@/lib/servicesData';
import BusinessPageClient from './BusinessPageClient';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getServicePaths();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getBusinessAreaBySlug(slug);
  if (!area) return { title: 'サービス | UNSER合同会社' };
  return {
    title: `${area.title} | UNSER合同会社`,
    description: area.shortDescription + ' ' + area.heroSub,
    openGraph: {
      title: `${area.title} | UNSER合同会社`,
      description: area.shortDescription,
    },
  };
}

export default async function BusinessPage({ params }: Props) {
  const { slug } = await params;
  const area = getBusinessAreaBySlug(slug);
  if (!area) notFound();

  return (
    <main className="min-h-screen bg-[#030303]">
      <Header />
      <BusinessPageClient area={area} />
      <Footer />
    </main>
  );
}
