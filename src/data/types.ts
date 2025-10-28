// src/data/types.ts

// --- 共通の型定義 ---

export type ProductSpec = {
  label: string;
  value: string;
};

// カテゴリを判別キーとして明確化
export type CableCategory = 'aoc' | 'dac' | 'mpo';
export type TransceiverCategory =
  | '1.6t'
  | '800g'
  | '400g'
  | '200g'
  | '100g'
  | 'coherent';

// Server-specific categories
export type ServerCategory = 'gpu-server' | 'cpu-server';

// Union of all possible categories
export type Category = ServerCategory | CableCategory | TransceiverCategory;

export type HeroData = {
  title: string;
  subtitle: string;
  image: string;
};

export type ProductFeature = {
  title: string;
  description: string;
  image: string;
  bullets?: string[];
  imagePosition?: string;
};

export type ProductOandMFeature = {
  title: string;
  description: string;
  icon: 'Rocket' | 'Gauge' | 'Search';
};

export type ProductEnergySavingPoint = {
  title: string;
  description: string;
  icon: 'BatteryCharging' | 'ThermometerSun' | 'Gauge';
};


// --- 製品種別ごとの型定義 ---

// 全ての製品が共通して持つべき基本情報
export interface BaseProduct {
  id: string;
  name: string;
  description: string;
  mainImage: string;
  category: Category; // ← 判別キーとして使用
  displayType: 'fullpage' | 'modal';
  meta: {
    title: string;
    description: string;
  };
  specs?: ProductSpec[];
  shortFeatures?: string[];
  order?: number;
}

// サーバー製品：hero を必須にもつ
export interface ServerProduct extends BaseProduct {
  category: ServerCategory;
  displayType: 'fullpage';
  
  hero: HeroData;
  introduction: {
    title: string;
    description: string;
    image: string;
    bullets?: string[];
    imageFlip?: boolean;
  };
  features: ProductFeature[];
  reliability: ProductFeature[];
  energySaving: {
    image: string;
    points: ProductEnergySavingPoint[];
    imagePosition?: string;
  };
  oandm: {
    subtitle?: string;
    features: ProductOandMFeature[];
  };
  security?: ProductFeature[];
  specs: ProductSpec[];
  datasheetUrl?: string;
  shortFeatures: string[];
  showSpecs?: boolean;
  showSecurity?: boolean;
}

// ケーブル製品：hero は存在しない
export interface CableProduct extends BaseProduct {
  category: CableCategory;
  displayType: 'modal';
  
  specs: ProductSpec[];
}

// 光トランシーバー製品
export interface TransceiverProduct extends BaseProduct {
  category: TransceiverCategory;
  displayType: 'modal'; // ケーブルと同様にモーダル表示を想定

  specs: ProductSpec[];
}

// すべての製品を網羅する判別可能な共用体
export type Product = ServerProduct | CableProduct | TransceiverProduct;
