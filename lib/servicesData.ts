/**
 * 事業領域・サービス一覧の共通データ
 * ホーム・サービス一覧・各ビジネスページで参照
 */

export type ServiceSlug = 'bpo' | 'system' | 'consulting';

export interface ChildService {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  features: string[];
  highlight?: string;
  stats?: { label: string; value: string }[];
}

export interface BusinessAreaData {
  slug: ServiceSlug;
  title: string;
  titleEn: string;
  shortDescription: string;
  description: string;
  services: string[];
  childServices: ChildService[];
  accentColor: string;
  gradient: string;
  /** ページのキャッチコピー（ビジネスページヒーロー用） */
  heroCatch: string;
  heroSub: string;
  /** 見せ方のキーワード（差別化用） */
  valueProps: string[];
}

export const businessAreasData: BusinessAreaData[] = [
  {
    slug: 'bpo',
    title: 'BPO事業',
    titleEn: 'Business Process Outsourcing',
    shortDescription: 'コア業務への集中を可能にする戦略的アウトソーシング。',
    description: 'MAKU（ポスティング）とコールセンター（インアウト）を柱に、品質と効率を両立した業務支援を提供します。お客様のコア業務に集中していただくため、確かな実績とデータに基づく運用で成果を最大化します。',
    services: ['MAKU（ポスティングサービス）', 'コールセンター（インアウト）', 'DM配送・効果測定', 'カスタマーサポート'],
    heroCatch: '「任せる」から「成果が出る」へ。',
    heroSub: 'データと品質で、BPOの価値を再定義します。',
    valueProps: ['データドリブン', '品質管理体制', 'スケーラブル', '効果可視化'],
    accentColor: '#6366f1',
    gradient: 'from-indigo-500/10 via-blue-500/5 to-transparent',
    childServices: [
      {
        id: 'maku-posting',
        title: 'MAKU',
        titleEn: 'Posting Service',
        description: 'データドリブンなポスティングサービス。独自のエリア分析とターゲティングで、効果を最大化するダイレクトマーケティングを実現します。',
        features: [
          '全国47都道府県対応のポスティング',
          'GISを活用したエリア分析・ターゲティング',
          '配布完了報告・GPS追跡による品質管理',
          '効果測定レポート・PDCA支援',
        ],
        highlight: 'データで効果を可視化',
      },
      {
        id: 'call-center',
        title: 'コールセンター',
        titleEn: 'Inbound / Outbound',
        description: 'インバウンド・アウトバウンド対応のコールセンター運営。お客様のビジネスゴールに合わせたスクリプト設計から、高品質なオペレーションまでワンストップで提供します。',
        features: [
          'インバウンド（受電）・アウトバウンド（架電）両対応',
          'セールス・カスタマーサポート・問い合わせ対応',
          'CRM/SFAとのシームレス連携',
          'リアルタイムKPIモニタリング・品質管理体制',
        ],
        highlight: 'インアウト一貫対応',
        stats: [{ label: '顧客満足度', value: '98%' }],
      },
    ],
  },
  {
    slug: 'system',
    title: 'システム開発事業',
    titleEn: 'System Development',
    shortDescription: 'ビジネスの課題をテクノロジーで解決。',
    description: '業務効率化システムからWebアプリケーションまで、お客様のDX推進をエンド・トゥ・エンドでサポートします。現場の声を丁寧にヒアリングし、使われる・効果の出るシステムを構築します。',
    services: ['業務効率化システム構築', 'Webアプリ・モバイルアプリ開発', 'コーポレートサイト制作', 'API連携・システム統合'],
    heroCatch: 'アイデアを、動く形に。',
    heroSub: 'テクノロジーで業務と体験を次のレベルへ。',
    valueProps: ['アジャイル開発', 'UI/UX重視', '保守運用まで', 'スケール対応'],
    accentColor: '#8b5cf6',
    gradient: 'from-purple-500/10 via-violet-500/5 to-transparent',
    childServices: [
      {
        id: 'system-development',
        title: '業務効率化システム',
        titleEn: 'Business Automation',
        description: '属人化した業務をシステム化し、生産性を飛躍的に向上。現場の声を丁寧にヒアリングし、使われる・効果の出るシステムを構築します。',
        features: [
          '業務フロー分析・可視化',
          'ノーコード/ローコード対応',
          'レガシーシステムとの連携',
          '導入後の運用サポート',
        ],
        highlight: '工数削減40%達成実績',
      },
      {
        id: 'app-development',
        title: 'アプリケーション開発',
        titleEn: 'App Development',
        description: 'ビジネスアイデアをかたちに。企画段階からリリース後のグロースまで、プロダクトライフサイクル全体をサポートします。',
        features: [
          'iOS/Android ネイティブ & クロスプラットフォーム',
          'プロトタイプからのアジャイル開発',
          'UI/UXデザイン設計',
          'ストア申請・リリースサポート',
        ],
        highlight: 'アイデアを形に',
      },
      {
        id: 'web-development',
        title: 'Webサイト制作',
        titleEn: 'Web Development',
        description: '美しく、速く、見つけてもらえるWebサイトを。最新技術とSEOベストプラクティスで、ビジネスに貢献するWeb体験を創造します。',
        features: [
          'Next.js/Reactによるモダン開発',
          'Core Web Vitals最適化',
          'SEO/アクセシビリティ対応',
          'ヘッドレスCMS連携',
        ],
        highlight: 'パフォーマンスにこだわる',
      },
    ],
  },
  {
    slug: 'consulting',
    title: 'コンサルティング事業',
    titleEn: 'Consulting',
    shortDescription: '事業成長の羅針盤となるパートナー。',
    description: '新規事業立案から既存事業の最適化まで、データに基づいた戦略的アプローチで成果にコミットします。机上の空論ではなく、実行可能なプランと伴走支援で成長を加速させます。',
    services: ['事業戦略立案・実行支援', '市場調査・競合分析', '業務プロセス改善', 'KPI設計・モニタリング'],
    heroCatch: '戦略を、実行に。',
    heroSub: 'データと伴走で、成長の階段を一緒に上る。',
    valueProps: ['戦略から実行まで', 'KPI設計', '市場・競合分析', 'PDCA伴走'],
    accentColor: '#ec4899',
    gradient: 'from-pink-500/10 via-rose-500/5 to-transparent',
    childServices: [
      {
        id: 'consulting-strategy',
        title: '事業戦略コンサルティング',
        titleEn: 'Business Strategy',
        description: '事業成長の伴走者として。課題の本質を見極め、実行可能な戦略を共に策定。成果につながるソリューションを提供します。',
        features: [
          '事業戦略の策定・実行支援',
          '市場調査・競合分析',
          '新規事業立案・実行プラン策定',
          'KPI設計・PDCAサイクル構築',
        ],
        highlight: '戦略から実行まで伴走',
      },
      {
        id: 'consulting-dx',
        title: 'DX・業務改革支援',
        titleEn: 'Digital Transformation',
        description: 'デジタル変革と業務改革を一気通貫で支援。現状分析から改善施策の実行まで、お客様の組織に寄り添いながら推進します。',
        features: [
          '業務プロセス分析・改善提案',
          'DXロードマップ策定',
          'システム導入・運用の伴走支援',
          '組織・人材面の変革支援',
        ],
        highlight: '変革を現場から',
      },
    ],
  },
];

export function getBusinessAreaBySlug(slug: string): BusinessAreaData | undefined {
  return businessAreasData.find((area) => area.slug === slug);
}

export function getServicePaths(): { slug: ServiceSlug }[] {
  return businessAreasData.map((area) => ({ slug: area.slug }));
}
