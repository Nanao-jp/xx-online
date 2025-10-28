# Starseeds Digital コーポレートサイト

## 📋 プロジェクト概要

**スターシーズデジタル株式会社**の公式コーポレートサイトです。

### 🏢 会社情報
- **会社名**: スターシーズデジタル株式会社 (Starseeds Digital Co., Ltd.)
- **代表者**: 代表取締役 鈴木雅順
- **所在地**: 〒108-0073 東京都港区三田1-4-28 三田国際ビル1808
- **親会社**: StarSeeds（上場企業）
- **事業内容**: AIデータセンター向けエンドツーエンドソリューションの提供

### 🎯 事業ビジョン
AIデータセンター向けエンドツーエンドソリューションを提供し、AIサーバー、ストレージ、スイッチ、光モジュール、コンテナ型データセンター、先進的な液冷技術を組み合わせ、IDC運営事業者のネットワークサービスと連携。計画・構築・運営までを一貫して支援し、**AI駆動のビジネス革新と持続可能な成長を実現**し、社会のスマート化を推進します。

### 💪 私たちの強み
1. **革新的なテクノロジー** - AI技術の発展に合わせたAIデータセンターソリューション
2. **強力なパートナーネットワーク** - 世界をリードする技術サプライヤーとの協力
3. **カスタマイズソリューション** - お客様のニーズに応えるカスタマイズ対応
4. **プロフェッショナルサポート** - 経験豊富なエンジニアチームによる継続的支援

---

## 🛠️ 技術スタック

- **フレームワーク**: Next.js 15.4.6 (App Router)
- **UI ライブラリ**: React 19.1.0
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **アイコン**: Lucide React
- **コード品質**: ESLint + Husky + lint-staged
- **デプロイ**: Vercel
- **分析**: Vercel Analytics

### 開発時の自動化
- `git commit`時に自動でコード整形（lint-staged）
- TypeScript厳格モードによる型安全性
- データ駆動型アーキテクチャによる高いメンテナンス性

---

## 📄 サイト構成

### 🏠 `/` (トップページ)
企業のビジョンと製品を紹介するランディングページ。

- **ヒーローセクション**: 「AI駆動の未来を創る」をメインメッセージに、企業ビジョンを訴求
- **製品ラインナップ**: 7つの製品カテゴリをカード形式で表示
- **最新ニュース**: 直近3件のニュースを表示し、ニュースページへの導線を設置

#### トップのカードから各タブへ直リンク
トップページの製品カードは製品ページのタブに直接遷移します。

- サーバー: `/products?tab=server`
- トランシーバー: `/products?tab=transceiver`
- ケーブル: `/products?tab=cable`

製品ページ側では `?tab=` に加えて `?category=`/`?type=`、および `#server` のようなハッシュでも初期タブを判定します。

### 📦 `/products` (製品カタログ)
取り扱い製品を詳細に紹介するカタログページ。

**製品カテゴリ（タブ切り替え式）:**
1. **サーバー** - GPUサーバー / CPUサーバー
2. **光トランシーバー** - 800G / 400G / 200G / 100G
3. **ケーブル** - AOC / DAC / MPO
4. ストレージ（準備中）
5. スイッチ（準備中）

**特徴:**
- タブによるカテゴリ切り替え
- サブカテゴリ別の製品一覧表示
- データ駆動型で製品追加が容易

### 💼 `/solution` (事業内容)
提供するソリューションを2つのカテゴリに分けて紹介。

**1. AIデータセンターソリューション（E2E）**
- GPUサーバー - NVIDIA H100/H200/B200搭載、最大8基GPU
- ストレージサーバー - PBスケール、高速アクセス
- 液冷CDU - 先進的な液冷技術、省エネ実現
- コンテナー - モジュール型、迅速な展開
- スイッチ - 400G/800G対応、超低遅延
- 光モジュール - 最大800G対応、長距離伝送

**2. 統合接続ソリューション**
- 光トランシーバー - 100G〜800G、多様な規格対応
- AOCケーブル - アクティブ光ケーブル、低消費電力
- DACケーブル - コスト効率的な短距離接続
- MPOケーブル - 高密度配線、12/24芯対応
- ネットワーク統合設計 - トポロジー設計から運用管理
- コンサルティング - 要件定義から継続的サポート

**優位性セクション:**
4つの強み（革新的なテクノロジー、パートナーネットワーク、カスタマイズ、プロフェッショナルサポート）を2カラム×2行のカードで訴求。

### 📰 `/news` (ニュース)
企業からのお知らせや最新情報を掲載。

- 日付とカテゴリタグ付きのニュース記事
- お知らせ / プレスリリース / イベント / 製品情報などのカテゴリ分類
- 2025年10月前後の日付で実際の事業内容に即したニュースを掲載

### 🏢 `/about` (会社概要)
企業の基本情報を掲載。

**掲載情報:**
- 会社名、代表者、所在地、親会社
- 事業内容（AI DC Solution製品、サイト電源製品）
- 企業ビジョンと理念

### 🔧 `/service-support` (サービス・サポート)
※現在は準備中ページ。ヘッダーナビゲーションからは削除済みだが、URLで直接アクセス可能。

---

## 🎨 製品詳細ページの設計

### `/products/[productId]` - データ駆動型アーキテクチャ

本サイトの中核となる製品詳細ページは、**将来的な製品数の増加とメンテナンス性の向上**を目的とした、高度なデータ駆動型アーキテクチャを採用しています。

### 🔑 主要な設計思想

#### 1. データとUIの完全分離
- ページの見た目（UI）と製品情報（データ）を完全分離
- 新しい製品ページの追加は、**コードを一切触らずデータ追加のみ**で完了
- `src/data/` ディレクトリ内のデータファイルを編集するだけ

#### 2. コンポーネントベース設計
`src/components/product/` 内の再利用可能なコンポーネント群:
- `ProductHero.tsx` - ヒーローセクション
- `ProductIntroduction.tsx` - 製品紹介
- `ProductFeatures.tsx` - 製品特徴
- `ProductReliability.tsx` - 信頼性
- `ProductEnergySaving.tsx` - 省エネ性能
- `ProductOandM.tsx` - 運用保守性
- `ProductSecurity.tsx` - セキュリティ
- `ProductSpecs.tsx` - 技術仕様
- `ProductContactCTA.tsx` - お問い合わせCTA
- `RelatedProducts.tsx` - 関連製品

#### 3. 動的メタデータ生成
- 各製品ページで自動的にSEO最適化されたメタデータを生成
- `<title>` タグと `<meta description>` を製品データから自動生成

#### 4. パフォーマンス最適化
- `next/dynamic` による遅延読み込み
- 初期表示に不要なコンポーネントを遅延ロード
- 高速なページ表示を実現

#### 5. 表示形式の動的切り替え
製品データの `displayType` プロパティで表示形式を制御:

**`displayType: 'fullpage'`** (詳細ページ)
- サーバーなど詳細情報が豊富な製品向け
- 専用ページ（`/products/[productId]`）で表示
- 全セクション（hero, introduction, features, specs等）を表示

**`displayType: 'modal'`** (モーダル表示)
- ケーブル・光トランシーバーなど簡素な製品向け
- Next.js **Intercepting Routes**（`@modal`ディレクトリ）を活用
- ページ遷移を"横取り"してモーダルで表示
- スペック表と画像のみのシンプルな表示

#### 6. 型安全性の確保
- **判別可能な共用体（Discriminated Union）**の活用
- `category` を判別キーとして `ServerProduct` と `CableProduct` を区別
- **型ガード** (`isServerProduct`) による安全な型の絞り込み
- `satisfies` 演算子でデータと型の整合性をチェック

---

## 🚀 製品ページの追加方法

新しい製品ページは、**ソースコードを一切編集せず、データを追加するだけ**で作成できます。

### ステップ1: 画像ファイルの配置
製品画像を `public/products/` ディレクトリ内に配置します。

```
public/products/
  └── 製品ID/
      ├── main.jpg          # 製品一覧で表示される画像
      ├── hero.jpg          # ヒーローセクションの画像
      ├── intro.jpg         # 製品紹介の画像
      ├── feature1.jpg      # 特徴1の画像
      ├── energy-saving.jpg # 省エネセクションの画像
      └── datasheet.pdf     # データシート（任意）
```

### ステップ2: データファイルの編集

#### サーバー製品の場合
`src/data/server/index.ts` の `serverProducts` 配列に追加:

```typescript
{
  // 基本情報
  id: 'g5300-v8',
  name: 'G5300 V8 AI Server',
  description: 'NVIDIA H200搭載の次世代AIサーバー',
  mainImage: '/products/servers/g5300-v8/main.jpg',
  category: 'gpu-server', // または 'cpu-server'
  displayType: 'fullpage',
  order: 1, // 表示順序（オプション）

  // SEO設定
  meta: {
    title: 'G5300 V8 AI Server | Starseeds Digital',
    description: 'NVIDIA H200 Tensor Core GPUを最大8基搭載した高性能AIサーバー。大規模言語モデルのトレーニングと推論に最適。'
  },

  // コンテンツセクション
  hero: {
    title: 'G5300 V8 AI Server',
    subtitle: '次世代AI処理を実現する最高峰のGPUサーバー',
    image: '/products/servers/g5300-v8/hero.jpg'
  },

  introduction: {
    title: '次世代AIワークロードに最適化',
    description: 'NVIDIA H200 Tensor Core GPUを最大8基搭載...',
    image: '/products/servers/g5300-v8/intro.jpg'
  },

  features: [
    {
      title: '圧倒的な計算性能',
      description: '最新のNVIDIA H200 GPUにより...',
      image: '/products/servers/g5300-v8/computing.jpg',
      bullets: [
        'FP8演算で最大4ペタFLOPS',
        '141GB HBM3eメモリ搭載',
        'メモリ帯域幅4.8TB/s'
      ]
    }
  ],

  reliability: {
    title: '高い信頼性と可用性',
    description: 'エンタープライズグレードの信頼性...',
    points: [
      {
        icon: 'Shield',
        title: '冗長電源',
        description: '2+1冗長構成のホットスワップ対応電源'
      }
    ]
  },

  energySaving: {
    image: '/products/servers/g5300-v8/energy-saving.jpg',
    imagePosition: 'center', // 'top', 'center', 'bottom'
    points: [
      {
        icon: 'BatteryCharging',
        title: '高効率電源',
        description: '80 PLUS Titanium認証電源により...'
      }
    ]
  },

  oandm: {
    title: '運用管理性',
    description: '統合管理ツールによる効率的な運用...',
    features: [
      {
        icon: 'Monitor',
        title: 'リモート管理',
        description: 'BMCによるリモートKVM機能'
      }
    ]
  },

  specs: [
    { label: '形態', value: '4U ラックマウント型サーバー' },
    { label: 'プロセッサー', value: 'デュアル Intel Xeon Scalable (第5世代)' },
    { label: 'GPU', value: 'NVIDIA H200 Tensor Core GPU × 最大8基' },
    { label: 'メモリ', value: '最大2TB DDR5 ECC RDIMM' },
    { label: 'ストレージ', value: 'NVMe SSD × 最大8台' },
    { label: '電源', value: '3000W 冗長電源 (2+1構成)' },
  ],

  datasheetUrl: '/products/servers/g5300-v8/datasheet.pdf',
  shortFeatures: [
    'NVIDIA H200 × 8基',
    '液冷・空冷対応',
    '高速NVLink接続'
  ]
}
```

#### ケーブル・光トランシーバーの場合
`src/data/cable/index.ts` または `src/data/transceiver/index.ts` に追加:

```typescript
{
  id: 'aoc-800g-osfp',
  name: '800G OSFP AOC',
  description: '800Gbps対応アクティブ光ケーブル',
  mainImage: '/products/cables/AOC/aoc-800g-osfp-01.png',
  category: 'aoc', // 'aoc', 'dac', 'mpo', '800g', '400g', '200g', '100g'
  displayType: 'modal',
  order: 1,

  meta: {
    title: '800G OSFP AOC | Starseeds Digital',
    description: 'データセンター向けの800G OSFP アクティブ光ケーブル。低消費電力・長距離伝送対応。'
  },

  specs: [
    { label: '製品タイプ', value: 'AOC (アクティブ光ケーブル)' },
    { label: 'データレート', value: '800Gbps' },
    { label: 'コネクタ', value: 'OSFP' },
    { label: '伝送距離', value: '最大100m' },
    { label: '消費電力', value: '12W以下' },
    { label: '動作温度', value: '0°C ~ 70°C' },
  ]
}
```

### ステップ3: 自動反映の確認
データを追加すると、自動的に以下が反映されます:
- ✅ 製品一覧ページに製品カードが表示
- ✅ 製品詳細ページ（またはモーダル）が生成
- ✅ SEO最適化されたメタデータが設定
- ✅ URLルーティングが自動生成

---

## 🎯 開発ガイド

### セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
# → http://localhost:3000 で表示

# ビルド
npm run build

# プロダクションサーバーの起動
npm start

# Lintチェック
npm run lint
```

### ディレクトリ構造

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # ルートレイアウト（メタデータ）
│   ├── page.tsx           # トップページ
│   ├── about/             # 会社概要
│   ├── news/              # ニュース
│   ├── solution/          # 事業内容（ソリューション）
│   ├── products/          # 製品カタログ
│   │   ├── page.tsx       # 製品一覧
│   │   └── [productId]/   # 製品詳細ページ（動的ルート）
│   ├── @modal/            # Intercepting Routes（モーダル表示）
│   └── service-support/   # サービス・サポート（準備中）
├── components/            # Reactコンポーネント
│   ├── Header.tsx         # 共通ヘッダー
│   ├── Footer.tsx         # 共通フッター
│   ├── ProductCard.tsx    # 製品カード
│   ├── Modal.tsx          # モーダルコンポーネント
│   └── product/           # 製品詳細ページ用コンポーネント
│       ├── ProductHero.tsx
│       ├── ProductFeatures.tsx
│       └── ... (他多数)
├── data/                  # 製品データ
│   ├── products.ts        # 全製品データ統合
│   ├── server/
│   │   └── index.ts       # サーバー製品データ
│   ├── cable/
│   │   └── index.ts       # ケーブル製品データ
│   ├── transceiver/
│   │   └── index.ts       # 光トランシーバー製品データ
│   └── types.ts           # 型定義
└── utils/
    └── typeGuards.ts      # 型ガード関数

public/
└── products/              # 製品画像
    ├── servers/           # サーバー製品の画像
    │   └── [product-id]/
    ├── cables/            # ケーブル製品の画像
    │   ├── AOC/
    │   ├── DAC/
    │   └── MPO/
    └── transceivers/      # 光トランシーバー製品の画像
```

---

## ⚠️ 重要な技術的教訓

### TypeScript型安全性のベストプラクティス

このプロジェクトは、過去に「Next.js 15での`params`がPromiseになった」という仕様変更をきっかけに、連鎖的な型エラーに直面しました。その解決過程で得られた教訓を記録します。

#### 問題の連鎖
1. **不安定な型定義の参照** - Next.js公式の`PageProps`型が環境によって正しく読み込めなかった
2. **場当たり的な`any`型での回避** - 厳格なESLintルールに抵触
3. **データと型の不整合** - 製品データと`Category`の型定義が一致していない
4. **不完全な共用体型** - `ServerProduct`と`CableProduct`を明確に区別できない

#### アーキテクチャ改善による解決
✅ **判別可能な共用体の導入**
- `category`を判別キーとして型定義を再設計
- TypeScriptが製品タイプを正確に区別可能に

✅ **型ガードの実装**
- `isServerProduct`関数で安全な型の絞り込みを実現
- 型の判別ロジックを一箇所に集約

✅ **`satisfies`演算子の活用**
- データと型のズレを開発時に即座に検知
- データ配列に`satisfies`を適用して型安全性を確保

#### 今後の開発で気をつけること
- 🚫 **`any`型は最後の手段** - 型エラーは潜在的な問題のサイン
- ✅ **判別可能な共用体を積極活用** - 複数の型を扱う際は判別キーを設ける
- ✅ **ライブラリの破壊的変更に注意** - マイグレーションガイドを熟読
- ✅ **エラーメッセージの根本原因を探る** - 共用体の型定義まで遡って調査

---

## 📝 コーディング規約

### コンポーネント設計
- 単一責任の原則に従う
- プレゼンテーション層とロジック層を分離
- 再利用可能なコンポーネントは`src/components/`に配置

### データ管理
- 製品データは`src/data/`で一元管理
- 型定義は`types.ts`で管理
- 型安全性を最優先

### スタイリング
- Tailwind CSSのユーティリティクラスを使用
- カスタムCSSは最小限に
- レスポンシブデザインを常に考慮（`md:`, `lg:`等のプレフィックス活用）

### Git管理
- コミット時にESLintとPrettierが自動実行
- コミットメッセージは明確かつ簡潔に
- 破壊的変更は慎重に扱う

---

## 🚀 デプロイ

Vercelを使用した自動デプロイ:
- `main`ブランチへのプッシュで自動的にプロダクションデプロイ
- プルリクエストごとにプレビュー環境が自動生成
- Vercel Analyticsで訪問者の動向を分析

---

## 📞 サポート

プロジェクトに関する質問や問題がある場合は、開発チームまでお問い合わせください。

---

## 📜 ライセンス

© 2025 Starseeds Digital Co., Ltd. All rights reserved.
