import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CursorFollower from "@/components/ui/CursorFollower";
import StructuredData from "@/app/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "UNSER合同会社 - Your Growth, Our Mission",
    template: "%s | UNSER合同会社",
  },
  description: "お客様の事業成長のコンシェルジュとして、多くのお客様の良きパートナーとして、支え仕えます。BPO事業、システム開発事業、コンサルティング事業を展開しています。",
  keywords: ["BPO", "コールセンター", "システム開発", "コンサルティング", "業務効率化", "アプリ開発", "WEB制作"],
  authors: [{ name: "UNSER合同会社" }],
  creator: "UNSER合同会社",
  publisher: "UNSER合同会社",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://unser-jp.com"),
  icons: {
    icon: "/icon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://unser-jp.com",
    siteName: "UNSER合同会社",
    title: "UNSER合同会社 - Your Growth, Our Mission",
    description: "お客様の事業成長のコンシェルジュとして、多くのお客様の良きパートナーとして、支え仕えます。",
  },
  twitter: {
    card: "summary_large_image",
    title: "UNSER合同会社 - Your Growth, Our Mission",
    description: "お客様の事業成長のコンシェルジュとして、多くのお客様の良きパートナーとして、支え仕えます。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <StructuredData />
        <ScrollProgress />
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
