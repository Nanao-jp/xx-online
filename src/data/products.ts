// src/data/products.ts

// 製品一つの情報の「型」を定義します
export type ProductSpec = {
  label: string;
  value: string;
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

export interface Product {
  id: string; // URLで使うID (例: g5200-v7)
  name: string;
  description: string;
  mainImage: string;
  category: 'gpu-server' | 'cpu-server';

  // SEO
  meta: {
    title: string;
    description: string;
  };

  // Page Sections Data
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

  // For product list page
  shortFeatures: string[];
}

// 全製品のデータを配列として管理します
export const allProducts: Product[] = [
  {
    id: 'g5200-v7',
    name: 'G5200 V7 AI Server',
    description: 'AIトレーニング・推論ワークロードに最適な次世代の4U2ソケットAIサーバー。',
    mainImage: '/products/g5200v7/g5200v7-ai-server.jpg',
    category: 'gpu-server',
    meta: {
      title: 'G5200 V7 AI Server | XX-online',
      description: '強力な性能、高い信頼性、効率的な省エネルギーを兼ね備えたFusionServer G5200 V7の詳細な技術仕様と特徴をご紹介します。'
    },
    hero: {
      title: 'G5200 V7 AI Server',
      subtitle: 'AIトレーニング・推論ワークロードに最適な次世代の4U2ソケットAIサーバー。',
      image: '/products/g5200v7/g5200v7-ai-server.jpg'
    },
    introduction: {
      title: '次世代の4U2ソケットAIサーバー',
      description: 'FusionServer G5200 V7は、強力な性能、高い信頼性と安全性、効率的な省エネルギー、容易な管理、容易な導入などの特長を備えており、トレーニングと推論のワークロードに利用できます。',
      image: '/products/g5200v7/main.jpg'
    },
    features: [
      {
        title: '超大容量ストレージ',
        description: 'AIの要求に応える大容量ストレージ構成に対応。柔軟なドライブオプションで、多様なワークロードをサポートします。',
        image: '/products/g5200v7/large-storage.jpg',
        bullets: [
          '最大28台の3.5インチSAS/SATAドライブ',
          '最大4台のNVMe SSD',
          '2台のM.2 SSD'
        ]
      },
      {
        title: '柔軟な拡張性',
        description: '', // This one uses a list format directly
        image: '/products/g5200v7/flexible-expansion.jpg',
        bullets: [
          '最大10×標準PCIe拡張スロットに対応',
          '2×OCP 3.0ネットワークカードに対応'
        ]
      },
      {
        title: '極めて優れた演算能力',
        description: '', // This one uses a list format directly
        image: '/products/g5200v7/computing-power.jpg',
        bullets: [
          '第4/5世代インテル®Xeon®スケーラブルプロセッサーに対応',
          '4×フルハイトフルレングスデュアル幅のGPUカードに対応',
          'GPUパススルー設計によりPCIeスイッチが不要'
        ]
      }
    ],
    reliability: [
      {
        title: 'ヒートシンクあたりの放熱性能が50%向上',
        description: 'ヒートパイプ拡張放熱技術により、優れた放熱とより強い温度適応性を実現',
        image: '/products/g5200v7/heat-dissipation.jpg'
      },
      {
        title: 'システムのダウンタイムが66%削減',
        description: '自社開発したAIメモリー障害自己修復機能により、システムの安定稼働を保証',
        image: '/products/g5200v7/high-reliability.jpg'
      }
    ],
    energySaving: {
      image: '/products/g5200v7/energy-saving.jpg',
      imagePosition: 'bottom',
      points: [
        {
          icon: 'BatteryCharging',
          title: 'サーバー全体の消費電力が業界平均よりも最大8%削減',
          description: '自社開発したアルゴリズムにより、ファンとCPUの消費電力を最小限に抑える'
        },
        {
          icon: 'ThermometerSun',
          title: '業界をリードする電源技術、より高い効率',
          description: '業界平均よりも12.5%低い電力損失を実現し、3つのコア技術で電力と効率を向上させ、業界をリードする電力変換率を提供'
        },
        {
          icon: 'Gauge',
          title: 'インテリジェントなサービス状況把握、動的な負荷調整',
          description: 'サービス負荷に応じてCPUの動作周波数を動的に調整可能'
        }
      ]
    },
    oandm: {
      features: [
        {
          icon: 'Rocket',
          title: '20倍向上のアップグレード効率',
          description: 'バージョンの自動プッシュと非接触型アップグレードに対応'
        },
        {
          icon: 'Gauge',
          title: '10倍向上の展開効率',
          description: '75%の合理化された展開手順がツールによって実行可能'
        },
        {
          icon: 'Search',
          title: '100%のインベントリー精度',
          description: 'すべてのベンダーのサーバーを管理可能で、資産位置の自動識別とリアルタイムの追跡に対応'
        }
      ]
    },
    specs: [
      { label: '形態', value: '4U AIサーバー' },
      { label: 'プロセッサー', value: '1基または2基の第4/5世代インテル®Xeon®スケーラブルプロセッサー、プロセッサーあたり最大TDP 350W、Montage Jintide®プロセッサー対応' },
      { label: 'チップセット', value: 'Emmitsburg PCH' },
      { label: 'メモリー', value: '32個のDDR5メモリースロット、最大速度5600MT/s' },
      { label: 'ローカルストレージ', value: '最大28×3.5インチSAS/SATAハードディスク, 最大4×NVMe SSD, 2×M.2 SSD (ホットスワップ対応)' },
      { label: 'RAIDサポート', value: 'RAID 0, 1, 10, 1E, 5, 50, 6, 60に対応し、スーパーキャパシタによるキャッシュデータの電源障害保護、RAIDレベルの移行、ディスクローミング、自己診断、Webによるリモート設定などの機能を提供' },
      { label: 'GPUアクセラレータカード', value: '4枚のデュアル幅または10枚のシングル幅GPUアクセラレータカード' },
      { label: 'ネットワーク', value: '複数タイプのネットワーク拡張機能に対応。必要に応じて2枚のOCP 3.0 NIC（通知式ホットスワップ対応、PCIe 5.0対応）を構成可能' },
      { label: 'PCIe拡張', value: '最大10個のPCIe 5.0対応の標準PCIeスロット' },
      { label: 'ファンモジュール', value: '8台のホットスワップ対応の二重反転ファンモジュール、N+1冗長対応' },
      { label: '電源モジュール', value: '4台のホットスワップ対応の電源モジュール (1500W Platinum または 2000W Platinum/Titanium)、1+1冗長対応' },
      { label: '管理', value: 'iBMCチップ搭載 (Redfish, SNMP, IPMI 2.0対応)。オプションのFusionDirector管理ソフトウェア対応' },
      { label: 'OS', value: 'xFusion FusionOS, Microsoft Windows Server, SUSE Linux Enterprise Server, VMware ESXi, Red Hat Enterprise Linux, CentOS, Oracle, Ubuntu, Debian, openEuler' },
      { label: 'セキュリティ特性', value: 'パワーオンパスワード, 管理者パスワード, TPM 2.0, セキュリティベゼル, セキュアブート, カバーオープン検知' },
      { label: '動作温度', value: '5°C～35°C（ASHRAE Class A1/A2に準拠）' },
      { label: '認証', value: 'CE, UL, CCC, FCC, VCCI, RoHS' },
      { label: '取り付けレール', value: 'L型レール、伸縮レール、ホールディングレール' },
      { label: '寸法（高さ×幅×奥行）', value: '175mm×447mm×798mm' },
    ],
    datasheetUrl: '/products/g5200v7/G5200-V7-Datasheet.pdf',
    shortFeatures: [
      '堅牢なパフォーマンス',
      '超大容量ストレージ',
      '柔軟な拡張性'
    ],
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
    // Add dummy data to satisfy the new type
    meta: { title: 'G5500 V7', description: 'G5500 V7 AI Server' },
    hero: { title: 'G5500 V7', subtitle: 'G5500 V7 AI Server', image: '/products/placeholder.svg' },
    introduction: { title: 'G5500 V7', description: 'G5500 V7 AI Server', image: '/products/placeholder.svg' },
    features: [],
    reliability: [],
    energySaving: { image: '', points: [] },
    oandm: { features: [] },
    specs: [],
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
    // Add dummy data to satisfy the new type
    meta: { title: 'G8600 V7', description: 'G8600 V7 Flagship AI Server' },
    hero: { title: 'G8600 V7', subtitle: 'G8600 V7 Flagship AI Server', image: '/products/placeholder.svg' },
    introduction: { title: 'G8600 V7', description: 'G8600 V7 Flagship AI Server', image: '/products/placeholder.svg' },
    features: [],
    reliability: [],
    energySaving: { image: '', points: [] },
    oandm: { features: [] },
    specs: [],
  }
];
