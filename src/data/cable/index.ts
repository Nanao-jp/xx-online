import type { CableProduct } from '../types';

export const cableProducts: CableProduct[] = [
  {
    id: 'aoc-800g-osfp-qsfp-dd',
    name: '800G OSFP/QSFP-DD AOC',
    description: '最大50m伝送可能な800G OSFP/QSFP-DD対応の高性能アクティブ光ケーブル。',
    mainImage: '/products/cables/AOC/aoc-800g-osfp-01.png',
    category: 'aoc',
    displayType: 'modal',
    meta: {
      title: '800G OSFP/QSFP-DD AOC | XX-online',
      description: 'QSFP MSAおよびIEEE 802.3ckに準拠した、データセンター向け800G OSFP/QSFP-DDアクティブ光ケーブル。'
    },
    specs: [
      { label: 'フォームファクタ', value: 'OSFP' },
      { label: '最大データレート', value: '800Gbps' },
      { label: '波長', value: '850nm' },
      { label: '最大ケーブル長', value: '50m' },
      { label: 'ケーブルタイプ', value: 'MMF (マルチモードファイバー)' },
      { label: '動作温度', value: '0 to 70°C' },
      { label: 'プロトコル', value: 'IEEE 802.3ck, OSFP MSA' },
      { label: '消費電力', value: '14W' },
      { label: '製品型番', value: 'FOSD01OSDOC-F0100' },
      { label: 'ベンダー名', value: 'DFX' }
    ]
  }
];
