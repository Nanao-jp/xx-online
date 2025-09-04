// src/data/products.ts

export interface FeatureImage {
  src: string;
  alt: string;
}

// 製品一つの情報の「型」を定義します
export interface Product {
  id: string; // URLで使うID (例: g5200-v7)
  category: 'gpu-server' | 'cpu-server';
  name: string;
  mainImage: string;
  description: string;
  shortFeatures: string[];
  featureImages?: FeatureImage[]; // 詳細ページで使う画像ギャラリー
  specs?: { [key: string]: string }; // 詳細ページで使うスペック表
}

// 全製品のデータを配列として管理します
export const allProducts: Product[] = [
  {
    id: 'g5200-v7',
    category: 'gpu-server',
    name: 'G5200 V7 AI Server',
    mainImage: '/products/g5200v7/g5200v7-ai-server.jpg',
    description: '次世代の4U 2ソケットAIサーバー。堅牢なパフォーマンスと大容量ストレージを両立。',
    shortFeatures: [
      '堅牢なパフォーマンス',
      '超大容量ストレージ',
      '柔軟な拡張性'
    ],
    // 手動でのリネームが完了していることを想定しています
    featureImages: [
        { src: '/products/g5200v7/computing-power.jpg', alt: '超強算力' },
        { src: '/products/g5200v7/large-storage.jpg', alt: '超大存储' },
        { src: '/products/g5200v7/flexible-expansion.jpg', alt: '灵活扩展' },
        { src: '/products/g5200v7/heat-dissipation.jpg', alt: '散热器能力提升' },
        { src: '/products/g5200v7/high-reliability.jpg', alt: '系统宕机率降低' },
        { src: '/products/g5200v7/energy-saving.jpg', alt: '总功耗最低算法' },
    ]
  },
  {
    id: 'g5500-v7',
    category: 'gpu-server',
    name: 'G5500 V7 AI Server',
    mainImage: '/products/placeholder.svg',
    description: '最大10基のダブルワイドGPUをサポートする、高密度AIトレーニング・推論サーバー。',
    shortFeatures: [
      '高密度実装',
      '優れた電力効率',
      '柔軟なアーキテクチャ'
    ],
  },
  {
    id: 'g8600-v7',
    category: 'gpu-server',
    name: 'G8600 V7 Flagship AI Server',
    mainImage: '/products/placeholder.svg',
    description: 'フラッグシップコンピューティングパワー、究極のエネルギー効率と信頼性を備えた最上位AIサーバー。',
    shortFeatures: [
      'フラッグシップ性能',
      '究極のエネルギー効率',
      'AIトレーニングに最適'
    ],
  }
  // 今後、ここに新しいGPUサーバーやCPUサーバーの情報をオブジェクトとして追加していくだけでよくなります。
];
