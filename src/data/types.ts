// src/data/types.ts

// --- 共通の型定義 ---

export type ProductSpec = {
  label: string;
  value: string;
};

// --- ページセクションごとの詳細な型 ---

export type ProductFeature = {
  title: string;
  description: string;
  image: string;
  bullets?: string[];
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
  category: string;
  displayType: 'fullpage' | 'modal';
  meta: {
    title: string;
    description: string;
  };
}

// サーバーのような情報量が多い製品 (フルページ表示用)
export interface ServerProduct extends BaseProduct {
  displayType: 'fullpage';
  category: 'gpu-server' | 'cpu-server';

  // 詳細ページ用のセクションデータ
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
  introduction: {
    title: string;
    description: string;
    image: string;
  };
  features: ProductFeature[];
  reliability: ProductFeature[];
  energySaving: {
    image: string;
    points: ProductEnergySavingPoint[];
    imagePosition?: 'top' | 'center' | 'bottom';
  };
  oandm: {
    features: ProductOandMFeature[];
  };
  specs: ProductSpec[];
  datasheetUrl?: string;

  // 製品一覧ページ用の短い特徴
  shortFeatures: string[];
}

// ケーブルのような情報量が少ない製品 (モーダル表示用)
export interface CableProduct extends BaseProduct {
  displayType: 'modal';
  category: 'cable';
  
  // モーダルで表示するシンプルな情報
  specs: ProductSpec[];
}

// すべての製品を網羅するUnion型
export type AnyProduct = ServerProduct | CableProduct;
