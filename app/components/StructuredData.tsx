export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "UNSER合同会社",
    url: "https://unser-jp.com",
    logo: "https://unser-jp.com/logo.png",
    description: "お客様の事業成長のコンシェルジュとして、多くのお客様の良きパートナーとして、支え仕えます。",
    address: {
      "@type": "PostalAddress",
      addressCountry: "JP",
    },
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "UNSER合同会社",
    url: "https://unser-jp.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://unser-jp.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Business Services",
    provider: {
      "@type": "Organization",
      name: "UNSER合同会社",
    },
    areaServed: {
      "@type": "Country",
      name: "Japan",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "UNSER Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "BPO事業",
            description: "コールセンター、ポスティング事業を中心に、お客様の業務を効率的にサポートします。",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "システム開発事業",
            description: "業務効率化システム、アプリ、WEBページの開発を通じて、お客様のデジタル変革を支援します。",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "コンサルティング事業",
            description: "新規事業の立ち上げから既存事業の改善・最適化まで、戦略的なアプローチでサポートします。",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
