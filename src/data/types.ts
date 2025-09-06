// src/data/types.ts

// --- 共通の型定義 ---

export type ProductSpec = {
  label: string;
  value: string;
};

// カテゴリを判別キーとして明確化
export type ServerCategory = 'gpu-server' | 'cpu-server';
export type CableCategory = 'aoc' | 'dac' | 'mpo';
export type Category = ServerCategory | CableCategory;

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
  shortFeatures: string[];
}

// ケーブル製品：hero は存在しない
export interface CableProduct extends BaseProduct {
  category: CableCategory;
  displayType: 'modal';
  
  specs: ProductSpec[];
}

// すべての製品を網羅する判別可能な共用体
export type Product = ServerProduct | CableProduct;
