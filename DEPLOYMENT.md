# UNSER ホームページ デプロイ手順書

バックオフィス担当者向け：GitHub連携からNetlifyデプロイ、独自ドメイン設定までの手順です。

---

## 1. GitHub にリポジトリを接続する

### 1-1. Git の初期化（未実施の場合）

プロジェクトフォルダで以下のコマンドを実行：

```bash
cd "/Users/takumia/UNSER homepage"
git init
```

### 1-2. 初回コミット

```bash
git add .
git status   # 追加されるファイルを確認
git commit -m "Initial commit: UNSER homepage"
```

### 1-3. GitHub リポジトリの作成

1. [GitHub](https://github.com) にログイン
2. 右上の **+** → **New repository**
3. 以下を設定：
   - **Repository name:** `unser-homepage`（任意）
   - **Visibility:** Private または Public
   - **Initialize with README:** チェックしない（ローカルに既にファイルがあるため）

### 1-4. リモート接続とプッシュ

GitHub で作成したリポジトリの URL を使用：

```bash
git remote add origin https://github.com/YOUR_USERNAME/unser-homepage.git
git branch -M main
git push -u origin main
```

※ `YOUR_USERNAME` を実際のGitHubユーザー名に置き換えてください。

---

## 2. Netlify でデプロイする

### 2-1. Netlify アカウント

1. [Netlify](https://www.netlify.com) にアクセス
2. **Sign up** → GitHub アカウントで連携推奨

### 2-2. サイトのインポート

1. Netlify ダッシュボードで **Add new site** → **Import an existing project**
2. **Connect to Git provider** → **GitHub** を選択
3. リポジトリ一覧から **unser-homepage** を選択
4. ビルド設定（自動検出される想定）：
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Base directory:** 空欄のままでOK

5. **Deploy site** をクリック

### 2-3. 環境変数（必要な場合）

お問い合わせフォーム用の API キーなどを使用する場合：

1. **Site settings** → **Environment variables**
2. 変数を追加（例：`FORMSPREE_EMAIL` など）

---

## 3. 独自ドメインの設定

### 3-1. Netlify でドメインを追加

1. Netlify ダッシュボードで対象サイトを選択
2. **Domain settings** → **Add custom domain** または **Add domain alias**
3. 使用する独自ドメインを入力（例：`www.unser-inc.com`）
4. **Verify** をクリック

### 3-2. DNS 設定

ドメインを取得したレジストラ（お名前.com、ムームードメイン等）で、以下を設定：

| タイプ | 名前 | 値 |
|--------|------|-----|
| **CNAME** | www | (Netlify が表示するサブドメイン、例: serene-name-xxxx.netlify.app) |
| **A** | @ | 75.2.60.5（Netlify の IP） |

※ Netlify の **Domain settings** に表示される具体的な値を参照してください。

### 3-3. HTTPS（SSL）

Netlify は Let's Encrypt で自動的に HTTPS を有効化します。数分〜数時間かかることがあります。

---

## 4. お問い合わせフォームについて

### 現状

現在、お問い合わせフォーム（`app/components/Contact/Contact.tsx`）は**送信先が未設定**です。

- 送信ボタンを押すと「送信完了しました！」と表示されますが、**実際にはデータはどこにも送信されていません**
- コメント：`// 実際の実装では、ここでAPIを呼び出します`

### 収集先候補

本番運用するには、以下のいずれかを実装する必要があります。

| サービス | 概要 | 費用 |
|----------|------|------|
| **Formspree** | フォーム送信をメールで受け取り | 無料プランあり（月50件まで） |
| **Netlify Forms** | Netlify 標準のフォーム機能 | 無料プランあり（月100件まで） |
| **Google Forms** | 埋め込みまたはリンクで送信 | 無料 |
| **自社メール（info@unser-inc.com）** | メールで直接受信 | 無料（実装が必要） |

### 推奨：Netlify Forms

Netlify でデプロイする場合は **Netlify Forms** が手軽です。

1. フォームに `data-netlify="true"` と `name` 属性を追加
2. 送信先を Netlify に任せる
3. Netlify ダッシュボードの **Forms** タブで送信内容を確認
4. 通知メールの設定も可能

導入を希望される場合は、`Contact.tsx` の具体的な修正案を作成します。

---

## 5. チェックリスト

デプロイ前に確認：

- [ ] `npm run build` がローカルで成功する
- [ ] `.env` や API キーは `.gitignore` に含まれている（コミットしない）
- [ ] GitHub リポジトリが作成され、コードがプッシュされている
- [ ] Netlify でビルドが成功している
- [ ] 独自ドメインの DNS が正しく設定されている
- [ ] お問い合わせフォームの送信先を決定し、実装済みである

---

## 6. トラブルシューティング

### ビルドが失敗する場合

- Node.js バージョン：Netlify の **Build settings** → **Environment** で Node 18 以上を指定
- `npm install` が失敗する場合：`package-lock.json` がコミットされているか確認

### 404 が発生する場合

- Next.js の App Router を使用しているため、Netlify の自動検出で問題ないはず
- 動的ルートがある場合は Netlify の設定を確認

### フォームが動かない場合

- Netlify Forms または外部サービス（Formspree 等）の実装状況を確認
- ブラウザのコンソールでエラーを確認
