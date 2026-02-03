# UNSER コーポレートサイト

UNSER.incのコーポレートサイトです。動的でユニークなデザインとインタラクティブな要素を備えたモダンなWebサイトです。

## 技術スタック

- **フレームワーク**: Next.js 14+ (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion + GSAP
- **パフォーマンス**: 動的インポート、画像最適化

## 機能

- レスポンシブデザイン（モバイル・タブレット・デスクトップ対応）
- 動的なアニメーションとインタラクティブ要素
- 3Dカードエフェクト
- スクロール連動アニメーション
- マウス追従エフェクト
- SEO最適化（構造化データ、メタタグ）
- お問い合わせフォーム（バリデーション付き）

## セットアップ

### 必要な環境

- Node.js 18以上
- npm または yarn

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### ビルド

```bash
npm run build
```

### 本番環境での起動

```bash
npm start
```

## プロジェクト構造

```
/
├── app/
│   ├── components/          # ページコンポーネント
│   │   ├── Hero/           # ヒーローセクション
│   │   ├── BusinessAreas/  # 事業紹介セクション
│   │   ├── ServicesDetail/ # サービス詳細セクション
│   │   ├── CaseStudies/    # 実績セクション
│   │   └── Contact/        # お問い合わせフォーム
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # ホームページ
│   └── globals.css         # グローバルスタイル
├── components/
│   ├── ui/                 # 再利用可能なUIコンポーネント
│   │   ├── ScrollProgress.tsx
│   │   └── CursorFollower.tsx
│   ├── Header.tsx          # ヘッダーコンポーネント
│   └── Footer.tsx          # フッターコンポーネント
├── lib/
│   ├── animations.ts       # アニメーション設定
│   └── utils.ts            # ユーティリティ関数
└── public/                 # 静的ファイル
```

## デザインシステム

### カラーパレット

- 背景: 黒（#0a0a0a）
- テキスト: 白（#ffffff）
- アクセント: グラデーション（青→紫→ピンク）

### タイポグラフィ

- フォント: Inter（Google Fonts）

## デプロイ

Vercel、Netlify、その他のNext.js対応ホスティングサービスにデプロイできます。

### Vercelへのデプロイ

```bash
npm install -g vercel
vercel
```

## ライセンス

UNSER.inc 所有
