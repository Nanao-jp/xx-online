# XX-online コーポレートサイト

## 1. プロジェクト概要

ITインフラ製品を扱う企業「XX-online」の公式コーポレートサイトです。
シンプルで信頼感のあるデザインを追求し、企業の顔となる洗練されたウェブサイトを目指しています。

### 主な技術スタック
- **フレームワーク**: Next.js (v15.4.6) / React (v19.1.0)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS (v4)
- **アイコン**: Lucide React
- **コード品質**: ESLint, Husky, lint-staged
  - `git commit`時に自動でコード整形が実行されます。

## 2. 各ページの構成と仕組み

### `/` (トップページ)
ウェブサイトの顔となるページです。

- **ヒーローセクション**: `/public/hero.jpg`を背景に、「ITインフラを革新する」というキャッチコピーで企業のビジョンを伝えます。
- **製品紹介**: 主要な製品カテゴリを一覧で紹介し、詳細ページへの導線を設けています。

### `/about` (会社情報)
企業の基本情報を掲載する静的なページです。

- 会社名、設立日、代表者、所在地、従業員数、事業内容などをまとめています。

### `/news` (ニュース)
企業からのお知らせや最新情報を掲載する静的なページです。

- 日付とカテゴリタグ付きでニュース記事をリスト表示します。

### `/solution` (ソリューション)
企業の提供するソリューションを分かりやすく紹介するページです。

- `'use client'`コンポーネントで実装されており、`useState`フックを利用したタブ切り替え機能が特徴です。
- 「AIデータセンターソリューション」と「統合接続ソリューション」の2つのカテゴリに分けて表示します。

### `/products` (製品)
取り扱い製品の詳細なカタログページです。

- こちらも`'use client'`コンポーネントで、複雑な製品カテゴリをタブで分類しています。
- 7つの大カテゴリと、その中の詳細なサブカテゴリ（サーバーはGPU/CPUで分類など）で構成されています。

### `/service-support` (サービス・サポート)
顧客サポートに関する情報を掲載するページです。

- 現在は「準備中」のプレースホルダーページとなっています。

### `/components/Header.tsx` (共通ヘッダー)
全ページで共通して使用されるヘッダーコンポーネントです。

- `'use client'`コンポーネントとして実装されています。
- `usePathname`フックを使い、現在表示しているページのナビゲーションリンクを動的にハイライトする機能を持ちます。

### `/products/[productId]` (製品詳細ページ)
**本サイトの中核となる、個別の製品情報を表示するページです。**
このページは、将来的な製品数の増加とメンテナンス性の向上を目的とした、**データ駆動型アーキテクチャ**を採用しています。

- **データとUIの完全分離**: ページの見た目（UI）と製品情報（データ）が完全に分離されています。ページの追加や情報更新は、コードではなくデータを編集するだけで完了します。
- **コンポーネントベース設計**: ページは`src/components/product/`ディレクトリ内の再利用可能な小さなコンポーネント群で構成されており、これらを組み合わせて表示されます。
- **動的メタデータ生成**: 各ページは製品データに基づき、SEOに最適化された`<title>`タグや`<meta description>`を自動生成します。
- **パフォーマンス最適化**: `next/dynamic`を利用し、初期表示に不要なコンポーネントを遅延読み込みすることで、高速なページ表示を実現しています。
- **動的な表示切り替え（フルページ / モーダル）**:
  - 製品データに`displayType`（`'fullpage'`または`'modal'`）というキーを追加。これにより、製品ごとに詳細ページで表示するか、モーダルで簡易表示するかをデータ側で制御できます。
  - Next.jsの**Intercepting Routes**機能（`@modal`ディレクトリ）を活用し、`displayType: 'modal'`の製品をクリックした際に、ページ遷移を"横取り"してモーダルとして表示します。
  - この実装により、`ProductCard`コンポーネントは製品の表示形式を意識する必要がなくなり、コードの関心事を分離し、高いメンテナンス性を維持しています。

---

## 3.【最重要】製品ページを追加する手順

新しい製品ページは、**ソースコードを編集することなく、データを追加するだけ**で作成できます。
AIアシスタントに依頼する場合は、以下の手順を伝えることで正確に意図が伝わります。

> **依頼例**: 「readmeを読んで製品ページの追加の仕方を理解して、新製品『G5300 V8』のページを追加してください。」

### ステップ1: 製品データの準備
- 新製品の製品名、スペック、特徴、説明文、関連画像など、ページに掲載したい全ての情報を準備します。

### ステップ2: 画像ファイルの配置
- 準備した画像ファイルを`public/products/`ディレクトリ内に、製品ごとのフォルダを作成して配置します。（例: `/public/products/g5300-v8/main.jpg`）

### ステップ3: データファイルの編集
- `src/data/products.ts`ファイルを開き、`allProducts`という配列の末尾に、新しい製品のオブジェクトを追加します。
- オブジェクトの型は`Product`インターフェースに従う必要があります。以下は`g5200-v7`のデータ構造です。これを参考に、新しい製品の情報を記述してください。

```typescript
// src/data/products.ts
export const allProducts: Product[] = [
  // ... 既存の製品データ
  {
    // --- 基本情報 ---
    id: 'g5300-v8', // URLに使われるユニークなID（例: /products/g5300-v8）
    name: 'G5300 V8 AI Server', // 製品名
    description: '（製品の短い説明文）',
    mainImage: '/products/g5300-v8/main-image.jpg', // 製品一覧で使われる画像
    category: 'gpu-server', // 'gpu-server' または 'cpu-server'
    displayType: 'fullpage', // 'fullpage'（詳細ページ） or 'modal'（モーダル表示）

    // --- SEO設定 ---
    meta: {
      title: 'G5300 V8 AI Server | XX-online', // ブラウザのタブに表示されるタイトル
      description: '（検索エンジン向けの説明文。80文字程度が推奨されます）'
    },

    // --- ページコンテンツ ---
    hero: { // ページ最上部のセクション
      title: 'G5300 V8 AI Server',
      subtitle: '（ヒーローセクションのサブタイトル）',
      image: '/products/g5300-v8/hero-image.jpg'
    },
    
    introduction: { // 製品紹介セクション
      title: '（製品紹介のタイトル）',
      description: '（製品紹介の説明文）',
      image: '/products/g5300-v8/intro-image.jpg'
    },

    features: [ // 製品特徴セクション（複数登録可）
      {
        title: '（特徴1のタイトル）',
        description: '（特徴1の説明文）',
        image: '/products/g5300-v8/feature1.jpg',
        bullets: [ '箇条書き1', '箇条書き2' ] // 箇条書きが不要な場合は省略可
      }
    ],

    // ... その他のセクションデータ（reliability, energySaving, oandm, specs）も同様に記述 ...

    energySaving: {
      image: '/products/g5300-v8/energy-saving.jpg',
      imagePosition: 'bottom', // 表示位置を 'top', 'center', 'bottom' から指定可。省略時は 'center'
      points: [
        {
          icon: 'BatteryCharging', // 'BatteryCharging', 'ThermometerSun', 'Gauge' から選択
          title: '（省エネ特徴1のタイトル）',
          description: '（省エネ特徴1の説明文）'
        }
      ]
    },

    specs: [ // 技術仕様テーブル
      { label: '形態', value: '（例: 4U AIサーバー）' },
      { label: 'プロセッサー', value: '（プロセッサー情報）' },
      // ... 必要なだけスペックを追加
    ],
    
    datasheetUrl: '/products/g5300-v8/datasheet.pdf', // データシートPDFのパス（不要な場合は省略可）

    // --- 製品一覧ページ用 ---
    shortFeatures: [ '特徴A', '特徴B', '特徴C' ]
  },
  // --- モーダル表示用の製品データ例 ---
  {
    id: 'aoc-100g-qsfp28',
    name: 'AOC 100G QSFP28',
    description: '高性能アクティブ光ケーブル',
    mainImage: '/products/cables/AOC/aoc-100g-qsfp28-01.png',
    category: 'aoc',
    displayType: 'modal',
    meta: {
      title: 'AOC 100G QSFP28 | XX-online',
      description: 'データセンター向けの100G QSFP28アクティブ光ケーブル。'
    },
    specs: [
      { label: '製品タイプ', value: 'AOC' },
      { label: 'データレート', value: '100Gbps' },
      { label: 'コネクタ', value: 'QSFP28' }
    ]
  }
];
```

以上の手順で、新しい製品ページが自動的にサイトへ追加されます。

## 4. 開発の始め方

1. **依存関係のインストール:**
   ```bash
   npm install
   ```

2. **開発サーバーの起動:**
   ```bash
   npm run dev
   ```
   ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

3. **ビルド:**
   ```bash
   npm run build
   ```

4. **Lintチェック:**
   ```bash
   npm run lint
   ```
