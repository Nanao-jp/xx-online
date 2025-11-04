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
      title: '800G OSFP/QSFP-DD AOC | Starseeds Digital',
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
  },
  {
    id: 'aoc-400g-qsfp-dd',
    name: '400G QSFP-DD AOC',
    description: 'マルチモードファイバー上の400ギガビットイーサネットリンクで使用するために設計されたアクティブ光ケーブルです。OM3マルチモードファイバーで最大100メートルの伝送をサポートします。',
    mainImage: '/products/cables/AOC/aoc-400g-qsfp-dd-01.png',
    category: 'aoc',
    displayType: 'modal',
    meta: {
      title: '400G QSFP-DD AOC | Starseeds Digital',
      description: 'QSFP-DD MSAおよびIEEE 802.3cmに準拠しています。'
    },
    specs: [
      { label: '製品型番', value: 'FQDC01QDC0C-F0100' },
      { label: 'ベンダー名', value: 'DFX' },
      { label: 'フォームファクタ', value: 'QSFP-DD' },
      { label: '最大データレート', value: '400Gbps' },
      { label: '波長', value: '850nm' },
      { label: '最大ケーブル長', value: '100m' },
      { label: 'ケーブルタイプ', value: 'MMF' },
      { label: '動作温度', value: '0 to 70°C (32 to 158°F)' },
      { label: 'プロトコル', value: 'IEEE 802.3cm, QSFP MSA' },
      { label: '消費電力', value: '10W' }
    ]
  },
  {
    id: 'aoc-400g-osfp',
    name: '400G OSFP AOC',
    description: 'マルチモードファイバー上の400ギガビットイーサネットリンクで使用するために設計されたアクティブ光ケーブルです。OM3マルチモードファイバーで最大100メートルの伝送をサポートします。',
    mainImage: '/products/cables/AOC/aoc-400g-osfp-01.png',
    category: 'aoc',
    displayType: 'modal',
    meta: {
      title: '400G OSFP AOC | Starseeds Digital',
      description: 'OSFP MSAおよびIEEE 802.3cmに準拠しています。'
    },
    specs: [
      { label: '製品型番', value: 'FOSC01OSC0C-F0100' },
      { label: 'ベンダー名', value: 'DFX' },
      { label: 'フォームファクタ', value: 'OSFP' },
      { label: '最大データレート', value: '400Gbps' },
      { label: '波長', value: '850nm' },
      { label: '最大ケーブル長', value: '100m' },
      { label: 'ケーブルタイプ', value: 'MMF' },
      { label: '動作温度', value: '0 to 70°C (32 to 158°F)' },
      { label: 'プロトコル', value: 'IEEE 802.3cm, OSFP MSA' },
      { label: '消費電力', value: '10W' }
    ]
  },
  {
    id: 'aoc-400g-qsfp-dd-to-4x100g-qsfp56',
    name: '400G QSFP-DD to 4x100G QSFP56 AOC',
    description: 'マルチモードファイバー上で最大20mの400ギガビットイーサネットリンクで使用するために設計されたアクティブ光ケーブルです。',
    mainImage: '/products/cables/AOC/aoc-400g-qsfp-dd-to-4x100g-qsfp56-01.png',
    category: 'aoc',
    displayType: 'modal',
    meta: {
      title: '400G QSFP-DD to 4x100G QSFP56 AOC | Starseeds Digital',
      description: 'QSFP-DD MSAおよびIEEE 802.3cm/cdに準拠しています。'
    },
    specs: [
      { label: '製品型番', value: 'FQDC04QPA0C-F0050' },
      { label: 'ベンダー名', value: 'DFX' },
      { label: 'フォームファクタ', value: 'QSFP-DD/QSFP56' },
      { label: '最大データレート', value: '400Gbps' },
      { label: '波長', value: '850nm' },
      { label: '最大ケーブル長', value: '20m' },
      { label: 'ケーブルタイプ', value: 'MMF' },
      { label: '動作温度', value: '0 to 70°C (32 to 158°F)' },
      { label: 'プロトコル', value: 'IEEE 802.3cm/cd, QSFP-DD/QSFP56 MSA' },
      { label: '消費電力', value: '10W' }
    ]
  },
  {
    id: 'aoc-400g-qsfp-dd-to-2x200g-qsfp56',
    name: '400G QSFP-DD to 2x200G QSFP56 AOC',
    description: 'マルチモードファイバー上で最大20mの400ギガビットイーサネットリンクで使用するために設計されたアクティブ光ケーブルです。',
    mainImage: '/products/cables/AOC/aoc-400g-qsfp-dd-to-2x200g-qsfp56-01.png',
    category: 'aoc',
    displayType: 'modal',
    meta: {
      title: '400G QSFP-DD to 2x200G QSFP56 AOC | Starseeds Digital',
      description: 'QSFP-DD MSAおよびIEEE 802.3cm/cdに準拠しています。'
    },
    specs: [
      { label: '製品型番', value: 'FQDC02QPB0C-F0050' },
      { label: 'ベンダー名', value: 'DFX' },
      { label: 'フォームファクタ', value: 'QSFP-DD/QSFP56' },
      { label: '最大データレート', value: '400Gbps' },
      { label: '波長', value: '850nm' },
      { label: '最大ケーブル長', value: '20m' },
      { label: 'ケーブルタイプ', value: 'MMF' },
      { label: '動作温度', value: '0 to 70°C (32 to 158°F)' },
      { label: 'プロトコル', value: 'IEEE 802.3cm/cd, QSFP-DD MSA' },
      { label: '消費電力', value: '10W' }
    ]
  },
  {
    id: 'aoc-200g-qsfp56',
    name: '200G QSFP56 to 200G QSFP56 AOC',
    description: 'マルチモードファイバー上で最大20mの200ギガビットイーサネットリンクで使用するために設計されたアクティブ光ケーブルです。',
    mainImage: '/products/cables/AOC/aoc-200g-qsfp56-01.png',
    category: 'aoc',
    displayType: 'modal',
    meta: {
      title: '200G QSFP56 AOC | Starseeds Digital',
      description: 'QSFP MSAおよびIEEE 802.3cdに準拠しています。'
    },
    specs: [
      { label: '製品型番', value: 'FQPB01QPB0C-F0100' },
      { label: 'ベンダー名', value: 'DFX' },
      { label: 'フォームファクタ', value: 'QSFP56' },
      { label: '最大データレート', value: '200Gbps' },
      { label: '波長', value: '850nm' },
      { label: '最大ケーブル長', value: '20m' },
      { label: 'ケーブルタイプ', value: 'MMF' },
      { label: '動作温度', value: '0 to 70°C (32 to 158°F)' },
      { label: 'プロトコル', value: 'IEEE 802.3cd, QSFP MSA' },
      { label: '消費電力', value: '5W' }
    ]
  },
  {
    id: 'aoc-200g-qsfp56-to-2x100g-qsfp56',
    name: '200G QSFP56 to 2x100G QSFP56 AOC',
    description: 'マルチモードファイバー上で最大20mの200ギガビットイーサネットリンクで使用するために設計されたアクティブ光ケーブルです。',
    mainImage: '/products/cables/AOC/aoc-200g-qsfp56-to-2x100g-qsfp56-01.png',
    category: 'aoc',
    displayType: 'modal',
    meta: {
      title: '200G QSFP56 to 2x100G QSFP56 AOC | Starseeds Digital',
      description: 'QSFP MSAおよびIEEE 802.3cdに準拠しています。'
    },
    specs: [
      { label: '製品型番', value: 'FQPB02QPA0C-F0100' },
      { label: 'ベンダー名', value: 'DFX' },
      { label: 'フォームファクタ', value: 'QSFP56' },
      { label: '最大データレート', value: '200Gbps' },
      { label: '波長', value: '850nm' },
      { label: '最大ケーブル長', value: '20m' },
      { label: 'ケーブルタイプ', value: 'MMF' },
      { label: '動作温度', value: '0 to 70°C (32 to 158°F)' },
      { label: 'プロトコル', value: 'IEEE 802.3cd, QSFP MSA' },
      { label: '消費電力', value: '5W' }
    ]
  },
  {
    id: 'aoc-100g-qsfp28',
    name: '100G QSFP28 AOC',
    description: 'マルチモードファイバー上で最大100mの100ギガビットイーサネットリンクで使用するために設計されたアクティブ光ケーブルです。100G DSFP、100G DSFP-QSFP56、100G QSFP28の各タイプもサポートしています。',
    mainImage: '/products/cables/AOC/aoc-100g-qsfp28-01.png',
    category: 'aoc',
    displayType: 'modal',
    meta: {
      title: '100G QSFP28 AOC | Starseeds Digital',
      description: 'QSFP28 MSAおよびIEEE 802.3bmに準拠しています。'
    },
    specs: [
      { label: '製品型番', value: 'FQPA01QPA0C-F0100' },
      { label: 'ベンダー名', value: 'DFX' },
      { label: 'フォームファクタ', value: 'QSFP28' },
      { label: '最大データレート', value: '100Gbps' },
      { label: '波長', value: '850nm' },
      { label: '最大ケーブル長', value: '100m' },
      { label: 'ケーブルタイプ', value: 'MMF' },
      { label: '動作温度', value: '0 to 70°C (32 to 158°F)' },
      { label: 'プロトコル', value: 'IEEE 802.3bm, QSFP28 MSA' },
      { label: '消費電力', value: '2.5W' }
    ]
  },
  {
    id: 'dac-800g-osfp-qsfp-dd',
    name: '800G OSFP/QSFP-DD High Speed Cable Assembly',
    description: '800Gイーサネット向けに設計されたDACです。OSFP/QSFP-DD銅線ダイレクトアタッチソリューションを提供します。データセンター内の短距離接続に適しています。',
    mainImage: '/products/cables/DAC/dac-800g-osfp-to-osfp-01.png',
    category: 'dac',
    displayType: 'modal',
    meta: {
      title: '800G OSFP/QSFP-DD DAC | Starseeds Digital',
      description: 'OSFP/QSFP-DD MSAおよびIEEE 802.3ckイーサネット転送プロトコルに準拠しています。'
    },
    specs: [
      { label: '製品型番', value: 'FQDD01OSD0C-P0005' },
      { label: 'ベンダー名', value: 'DFX' },
      { label: 'コネクタA', value: 'OSFP/QSFP-DD' },
      { label: 'コネクタB', value: 'OSFP/QSFP-DD' },
      { label: 'ケーブルサイズ', value: '26AWG~30AWG' },
      { label: '最大データレート', value: '800Gbps' },
      { label: '動作温度', value: '0 to 70°C (32 to 158°F)' },
      { label: '最大ケーブル長', value: '0.5-2.0 M' },
      { label: 'プロトコル', value: 'IEEE 802.3ck, OSFP MSA' },
      { label: '消費電力', value: '2.5W' }
    ]
  },
  {
    id: 'dac-400g-qsfp-dd-qsfp112',
    name: '400G QSFP-DD/QSFP112 High Speed Cable Assembly',
    description: '400Gイーサネット向けに設計されたDACです。QSFP-DD/QSFP112銅線ダイレクトアタッチソリューションを提供します。',
    mainImage: '/products/cables/DAC/dac-400g-osfp-high-speed-copper-01.jpg',
    category: 'dac',
    displayType: 'modal',
    meta: {
      title: '400G QSFP-DD/QSFP112 DAC | Starseeds Digital',
      description: 'OSFP/QSFP-DD MSAおよびIEEE 802.3cdイーサネット転送プロトコルに準拠しています。'
    },
    specs: [
      { label: '製品型番', value: 'FQDC01QDC0C-P0005' },
      { label: 'ベンダー名', value: 'DFX' },
      { label: 'コネクタA', value: 'QSFP-DD/QSFP112' },
      { label: 'コネクタB', value: 'QSFP-DD/QSFP112' },
      { label: 'ケーブルサイズ', value: '26AWG~30AWG' },
      { label: '最大データレート', value: '400Gbps' },
      { label: '動作温度', value: '0 to 70°C (32 to 158°F)' },
      { label: '最大ケーブル長', value: '0.5-3 M' },
      { label: 'プロトコル', value: 'IEEE 802.3cd, QSFP-DD MSA' },
      { label: '消費電力', value: '0.1W' }
    ]
  },
  {
    id: 'dac-200g-qsfp-dd-qsfp56',
    name: '200G QSFP-DD/QSFP56 High Speed Cable Assembly',
    description: '200Gイーサネット向けに設計されたDACです。QSFP-DD/QSFP56銅線ダイレクトアタッチソリューションを提供します。',
    mainImage: '/products/cables/DAC/dac-200g-qsfp-dd-to-qsfp-dd-01.png',
    category: 'dac',
    displayType: 'modal',
    meta: {
      title: '200G QSFP-DD/QSFP56 DAC | Starseeds Digital',
      description: 'QSFP-DD/QSFP56 MSAおよびIEEE 802.3cdイーサネット転送プロトコルに準拠しています。'
    },
    specs: [
      { label: '製品型番', value: 'FQDB01QDB0C-P0005' },
      { label: 'ベンダー名', value: 'DFX' },
      { label: 'コネクタA', value: 'QSFP-DD/QSFP56' },
      { label: 'コネクタB', value: 'QSFP-DD/QSFP56' },
      { label: 'ケーブルサイズ', value: '26AWG~30AWG' },
      { label: '最大データレート', value: '200Gbps' },
      { label: '動作温度', value: '0 to 70°C (32 to 158°F)' },
      { label: '最大ケーブル長', value: '0.5-3 M' },
      { label: 'プロトコル', value: 'IEEE 802.3cd, SFF-8636 & QSFP56 MSA' },
      { label: '消費電力', value: '0.1W' }
    ]
  },
  {
    id: 'dac-100g-qsfp28',
    name: '100G QSFP28 High Speed Cable Assembly',
    description: '100Gbpsの速度で動作するダイレクトアタッチ銅線ケーブルです。データセンターやサーバーの接続用に設計された、高帯域幅、低遅延、低消費電力のソリューションです。',
    mainImage: '/products/cables/DAC/dac-100g-qsfp28-to-qsfp28-01.png',
    category: 'dac',
    displayType: 'modal',
    meta: {
      title: '100G QSFP28 DAC | Starseeds Digital',
      description: 'QSFP28 MSAおよびIEEE 802.3bjイーサネット転送プロトコルに準拠しています。'
    },
    specs: [
      { label: '製品型番', value: 'FQPA01QPA0C-P0005' },
      { label: 'ベンダー名', value: 'DFX' },
      { label: 'コネクタA', value: 'QSFP28' },
      { label: 'コネクタB', value: 'QSFP28' },
      { label: 'ケーブルサイズ', value: '26AWG ~ 30AWG' },
      { label: '最大データレート', value: '100Gbp/s' },
      { label: '動作温度', value: '0 to 70°C (32 to 158°F)' },
      { label: '最大ケーブル長', value: '1-5 M' },
      { label: 'プロトコル', value: 'IEEE802.3bj and QSFP28' },
      { label: '消費電力', value: '0.5W' }
    ]
  },
  {
    id: 'dac-800g-osfp-to-2x400g-osfp',
    name: '800Gbps OSFP to 2x400G OSFP High Speed Cable Assembly',
    description: 'OSFP 800Gから2つのOSFP 400Gへのダイレクトアタッチ銅線ケーブルで、通信およびデータセンターセクターでの使用向けに設計されています。',
    mainImage: '/products/cables/DAC/dac-800g-osfp-to-2x-osfp-rhs-400g-01.png',
    category: 'dac',
    displayType: 'modal',
    meta: {
      title: '800Gbps OSFP to 2x400G OSFP DAC | Starseeds Digital',
      description: 'OSFP MSAおよびIEEE 802.3ckに準拠した、高性能、低コスト、低遅延、低消費電力のI/Oソリューションです。'
    },
    specs: [
      { label: '製品型番', value: 'FOSD02OSC0C-P0005' },
      { label: 'ベンダー名', value: 'DFX' },
      { label: 'コネクタA', value: 'OSFP' },
      { label: 'コネクタB', value: 'OSFP' },
      { label: 'ケーブルサイズ', value: '26AWG~30AWG' },
      { label: '最大データレート', value: '800Gbps' },
      { label: '動作温度', value: '0 to 70°C (32 to 158°F)' },
      { label: '最大ケーブル長', value: '0.5-2M' },
      { label: 'プロトコル', value: 'IEEE802.3ck/IEEE802.3cd standards and OSFP MSA' },
      { label: '消費電力', value: '0.1W' }
    ]
  },
  {
    id: 'dac-400g-qsfp-dd-osfp-to-2x200g-qsfp56',
    name: '400Gbps QSFP-DD/OSFP to 2x200G QSFP56 High Speed Cable Assembly',
    description: 'QSFP-DD/OSFP 400Gから2つの200G QSFP56へのダイレクトアタッチ銅線ケーブルで、通信およびデータセンターセクターでの使用向けに設計されています。',
    mainImage: '/products/cables/DAC/dac-400g-osfp-to-2x-qsfp56-200g-01.png',
    category: 'dac',
    displayType: 'modal',
    meta: {
      title: '400Gbps QSFP-DD/OSFP to 2x200G QSFP56 DAC | Starseeds Digital',
      description: 'QSFP-DD/QSFP56 MSAおよびIEEE 802.3cd規格に準拠した、高性能、低コスト、低遅延、低消費電力のI/Oソリューションです。'
    },
    specs: [
      { label: '製品型番', value: 'FQDC02QPB0C-P0005' },
      { label: 'ベンダー名', value: 'DFX' },
      { label: 'コネクタA', value: 'QSFP-DD/OSFP' },
      { label: 'コネクタB', value: 'QSFP56' },
      { label: 'ケーブルサイズ', value: '26AWG~30AWG' },
      { label: '最大データレート', value: '400Gbps' },
      { label: '動作温度', value: '0 to 70°C' },
      { label: '最大ケーブル長', value: '0.5-3 m' },
      { label: 'プロトコル', value: 'IEEE 802.3cd, QSFP-DD/QSFP56 MSA' },
      { label: '消費電力', value: '0.2W' }
    ]
  },
  {
    id: 'dac-400g-qsfp-dd-to-4x100g-qsfp56',
    name: '400Gbps QSFP-DD To 4x100G QSFP56 High Speed Cable Assembly',
    description: 'QSFP-DD 400Gから4つの100G QSFP56へのダイレクトアタッチ銅線ケーブルで、通信およびデータセンターセクターでの使用向けに設計されています。',
    mainImage: '/products/cables/DAC/dac-400g-qsfp-dd-to-4x-qsfp56-100g-01.png',
    category: 'dac',
    displayType: 'modal',
    meta: {
      title: '400Gbps QSFP-DD To 4x100G QSFP56 DAC | Starseeds Digital',
      description: 'QSFP-DD/QSFP56 MSAおよびIEEE 802.3cd規格に準拠した、高性能、低コスト、低遅延、低消費電力のI/Oソリューションです。'
    },
    specs: [
      { label: '製品型番', value: 'FQDC04QPA0C-P0005' },
      { label: 'ベンダー名', value: 'DFX' },
      { label: 'コネクタA', value: 'QSFP-DD/' },
      { label: 'コネクタB', value: 'QSFP56' },
      { label: 'ケーブルサイズ', value: '26AWG~30AWG' },
      { label: '最大データレート', value: '400Gbps' },
      { label: '動作温度', value: '0 to 70°C (32 to 158°F)' },
      { label: '最大ケーブル長', value: '0.5-3m' },
      { label: 'プロトコル', value: 'IEEE 802.3cd/ IEEE 802.3bj standard and QSFP-DD/QSFP56 MSA' },
      { label: '消費電力', value: '0.1W' }
    ]
  },
  {
    id: 'dac-200g-qsfp-dd-to-2x100g-qsfp28',
    name: '200Gbps QSFP-DD To 2x100G QSFP28',
    description: 'QSFP-DD 200Gから2つの100G QSFP28へのダイレクトアタッチ銅線ケーブルで、通信およびデータセンターセクターでの使用向けに設計されています。',
    mainImage: '/products/cables/DAC/dac-200g-qsfp-dd-to-2x-qsfp28-100g-01.png',
    category: 'dac',
    displayType: 'modal',
    meta: {
      title: '200Gbps QSFP-DD To 2x100G QSFP28 DAC | Starseeds Digital',
      description: 'QSFP-DD/QSFP28 MSAおよびIEEE 802.3cd規格に準拠した、高性能、低コスト、低遅延、低消費電力のI/Oソリューションです。'
    },
    specs: [
      { label: '製品型番', value: 'FQDB0TQDA0C-P0005' },
      { label: 'ベンダー名', value: 'DFX' },
      { label: 'コネクタA', value: 'QSFP-DD' },
      { label: 'コネクタB', value: 'QSFP28' },
      { label: 'ケーブルサイズ', value: '28AWG~30AWG' },
      { label: '最大データレート', value: '200Gbps' },
      { label: '動作温度', value: '0 to 70°C (32 to 158°F)' },
      { label: '最大ケーブル長', value: '0.5-3 M' },
      { label: 'プロトコル', value: 'IEEE802.3bj standards, QSFP-DD/QSFP28 MSA' },
      { label: '消費電力', value: '0.5W' }
    ]
  },
  {
    id: 'mpo-fiber-cables',
    name: 'MPO Fiber Cables',
    description: 'シングルモードおよびマルチモードの事前終端MPO/MTPパッチケーブルは、データセンターや通信ネットワークでの迅速な展開に使用されるマルチファイバーコネクタです。MPOコネクタは標準コネクタの最大12倍の密度を提供し、スペースとコストを節約します。MPOパッチコードは、ファイバーアライメントのための金属ガイドピンと精密なハウジング寸法を備えた精密成型MTフェルールを使用し、4、8、12、または24ファイバーで大量終端が可能です。',
    mainImage: '/products/cables/MPO/mpo-01.png',
    category: 'mpo',
    displayType: 'modal',
    order: 1,
    meta: {
      title: 'MPO Fiber Cables | Starseeds Digital',
      description: '事前終端MPO-MPOファイバーオプティックトランクケーブル。高密度配線と効率的な接続管理を実現。'
    },
    specs: [
      { label: '特徴', value: 'Precision molded MT ferrule' },
      { label: '特徴', value: 'High precision guide pins for exact alignment, compact design, up to 4, 8, 12, 24 fibers' },
      { label: '特徴', value: 'Low loss Connector' },
      { label: '特徴', value: 'OM3, OM4 available' },
      { label: '特徴', value: 'IEC 61754-7 Compliant' },
      { label: '特徴', value: 'Telcordia GR-1435-CORE Compliant' },
      { label: 'アプリケーション', value: 'Asynchronous Transmission Mode (ATM)' },
      { label: 'アプリケーション', value: 'Gigabit Ethernet' },
      { label: 'アプリケーション', value: 'Active Deviced/Transceiver Interface' },
      { label: 'アプリケーション', value: 'CATV, Video and Multimedia' },
      { label: 'アプリケーション', value: 'Premise Installations' },
      { label: 'アプリケーション', value: 'Telecommunication Networks' },
      { label: 'アプリケーション', value: 'Parallel optical interconnect between PC Cards and patch panels Interconnection for O/E modules' },
      { label: 'アプリケーション', value: 'Industrial & Military' },
      { label: 'アプリケーション', value: 'Optical Switch interframe connections' }
    ]
  },
  {
    id: 'mpo-breakout',
    name: 'MPO Breakout',
    description: 'シングルモードおよびマルチモードの事前終端MPO/MTPパッチケーブルは、データセンターや通信ネットワークでの迅速な展開に使用されるマルチファイバーコネクタです。MPOコネクタは標準コネクタの最大12倍の密度を提供し、スペースとコストを節約します。MPOパッチコードは、ファイバーアライメントのための金属ガイドピンと精密なハウジング寸法を備えた精密成型MTフェルールを使用し、4、8、12、または24ファイバーで大量終端が可能です。',
    mainImage: '/products/cables/MPO/mpo-breakout-01.png',
    category: 'mpo',
    displayType: 'modal',
    order: 2,
    meta: {
      title: 'MPO Breakout | Starseeds Digital',
      description: '事前終端MPO-MPOファイバーオプティックトランクケーブル。高密度配線と効率的な接続管理を実現。'
    },
    specs: [
      { label: '特徴', value: 'Precision molded MT ferrule' },
      { label: '特徴', value: 'High precision guide pins for exact alignment, compact design, up to 4, 8, 12, 24 fibers' },
      { label: '特徴', value: 'Low loss Connector' },
      { label: '特徴', value: 'OM3, OM4 available' },
      { label: '特徴', value: 'IEC 61754-7 Compliant' },
      { label: '特徴', value: 'Telcordia GR-1435-CORE Compliant' },
      { label: 'アプリケーション', value: 'Asynchronous Transmission Mode (ATM)' },
      { label: 'アプリケーション', value: 'Gigabit Ethernet' },
      { label: 'アプリケーション', value: 'Active Deviced/Transceiver Interface' },
      { label: 'アプリケーション', value: 'CATV, Video and Multimedia' },
      { label: 'アプリケーション', value: 'Premise Installations' },
      { label: 'アプリケーション', value: 'Telecommunication Networks' },
      { label: 'アプリケーション', value: 'Parallel optical interconnect between PC Cards and patch panels Interconnection for O/E modules' },
      { label: 'アプリケーション', value: 'Industrial & Military' },
      { label: 'アプリケーション', value: 'Optical Switch interframe connections' }
    ]
  },
  {
    id: 'mpo-mmf',
    name: 'MPO MMF',
    description: 'シングルモードおよびマルチモードの事前終端MPO/MTPパッチケーブルは、データセンターや通信ネットワークでの迅速な展開に使用されるマルチファイバーコネクタです。MPOコネクタは標準コネクタの最大12倍の密度を提供し、スペースとコストを節約します。MPOパッチコードは、ファイバーアライメントのための金属ガイドピンと精密なハウジング寸法を備えた精密成型MTフェルールを使用し、4、8、12、または24ファイバーで大量終端が可能です。',
    mainImage: '/products/cables/MPO/mpo-mmf-01.png',
    category: 'mpo',
    displayType: 'modal',
    order: 3,
    meta: {
      title: 'MPO MMF | Starseeds Digital',
      description: '事前終端MPO-MPOファイバーオプティックトランクケーブル。高密度配線と効率的な接続管理を実現。'
    },
    specs: [
      { label: '特徴', value: 'Precision molded MT ferrule' },
      { label: '特徴', value: 'High precision guide pins for exact alignment, compact design, up to 4, 8, 12, 24 fibers' },
      { label: '特徴', value: 'Low loss Connector' },
      { label: '特徴', value: 'OM3, OM4 available' },
      { label: '特徴', value: 'IEC 61754-7 Compliant' },
      { label: '特徴', value: 'Telcordia GR-1435-CORE Compliant' },
      { label: 'アプリケーション', value: 'Asynchronous Transmission Mode (ATM)' },
      { label: 'アプリケーション', value: 'Gigabit Ethernet' },
      { label: 'アプリケーション', value: 'Active Deviced/Transceiver Interface' },
      { label: 'アプリケーション', value: 'CATV, Video and Multimedia' },
      { label: 'アプリケーション', value: 'Premise Installations' },
      { label: 'アプリケーション', value: 'Telecommunication Networks' },
      { label: 'アプリケーション', value: 'Parallel optical interconnect between PC Cards and patch panels Interconnection for O/E modules' },
      { label: 'アプリケーション', value: 'Industrial & Military' },
      { label: 'アプリケーション', value: 'Optical Switch interframe connections' }
    ]
  },
  {
    id: 'mpo-6lc',
    name: 'MPO-6LC',
    description: 'MPO-LCプリターミネート済み光ファイバーパッチコードは、メイン配線エリアからシステム機器ポートまたは機器エリア配線フレームへの直接接続を提供する光ファイバーパッチコードです。MPO標準に準拠しており、8、12、16、または24コアの選択が可能です。IEC 61754-7およびTelcordia GR-1435-COREに準拠しています。MTP/MPOマルチファイバートランクケーブルは、ミニラウンドケーブルやリボンケーブルで提供され、2〜24ファイバーの0.9mmまたは2.0mmテールにLC、SC、ST、FCなどのコネクタが付いています。ケーブル全長、ファンアウト長、コネクタタイプはカスタマイズ可能です。',
    mainImage: '/products/cables/MPO/mpo-6lc-01.png',
    category: 'mpo',
    displayType: 'modal',
    order: 4,
    meta: {
      title: 'MPO-6LC | Starseeds Digital',
      description: 'MPO-LCプリターミネート済み光ファイバーパッチコード。メイン配線エリアからシステム機器ポートへの直接接続を提供。'
    },
    specs: [
      { label: 'Fiber Count', value: '8/12/16/24F' },
      { label: 'Polish Type (SM)', value: 'UPC/APC' },
      { label: 'Polish Type (MM)', value: 'UPC/PC' },
      { label: 'Cable Jacket', value: 'PVC/LSZH/OFNP' },
      { label: 'Fiber Mode', value: 'G657A1/OM1/OM2/OM3/OM4/OM5' },
      { label: 'Wavelength (SM)', value: '1310/1550nm' },
      { label: 'Wavelength (MM)', value: '850/1300nm' },
      { label: 'Cable Diameter (Trunk)', value: '3.0mm' },
      { label: 'Cable Diameter (Harnesses)', value: '2.0mm' },
      { label: 'Operating Temperature', value: '-20°C〜+70°C' },
      { label: 'Storage Temperature', value: '-40°C〜+85°C' }
    ]
  },
  {
    id: 'mpo-12lc',
    name: 'MPO-12LC',
    description: 'MPO-LCプリターミネート済み光ファイバーパッチコードは、メイン配線エリアからシステム機器ポートまたは機器エリア配線フレームへの直接接続を提供する光ファイバーパッチコードです。MPO標準に準拠しており、8、12、16、または24コアの選択が可能です。IEC 61754-7およびTelcordia GR-1435-COREに準拠しています。MTP/MPOマルチファイバートランクケーブルは、ミニラウンドケーブルやリボンケーブルで提供され、2〜24ファイバーの0.9mmまたは2.0mmテールにLC、SC、ST、FCなどのコネクタが付いています。ケーブル全長、ファンアウト長、コネクタタイプはカスタマイズ可能です。',
    mainImage: '/products/cables/MPO/mpo-12lc-01.jpg',
    category: 'mpo',
    displayType: 'modal',
    order: 5,
    meta: {
      title: 'MPO-12LC | Starseeds Digital',
      description: 'MPO-LCプリターミネート済み光ファイバーパッチコード。メイン配線エリアからシステム機器ポートへの直接接続を提供。'
    },
    specs: [
      { label: 'Fiber Count', value: '8/12/16/24F' },
      { label: 'Polish Type (SM)', value: 'UPC/APC' },
      { label: 'Polish Type (MM)', value: 'UPC/PC' },
      { label: 'Cable Jacket', value: 'PVC/LSZH/OFNP' },
      { label: 'Fiber Mode', value: 'G657A1/OM1/OM2/OM3/OM4/OM5' },
      { label: 'Wavelength (SM)', value: '1310/1550nm' },
      { label: 'Wavelength (MM)', value: '850/1300nm' },
      { label: 'Cable Diameter (Trunk)', value: '3.0mm' },
      { label: 'Cable Diameter (Harnesses)', value: '2.0mm' },
      { label: 'Operating Temperature', value: '-20°C〜+70°C' },
      { label: 'Storage Temperature', value: '-40°C〜+85°C' }
    ]
  },
  {
    id: 'mpo-24lc',
    name: 'MPO-24LC',
    description: 'MPO-LCプリターミネート済み光ファイバーパッチコードは、メイン配線エリアからシステム機器ポートまたは機器エリア配線フレームへの直接接続を提供する光ファイバーパッチコードです。MPO標準に準拠しており、8、12、16、または24コアの選択が可能です。IEC 61754-7およびTelcordia GR-1435-COREに準拠しています。MTP/MPOマルチファイバートランクケーブルは、ミニラウンドケーブルやリボンケーブルで提供され、2〜24ファイバーの0.9mmまたは2.0mmテールにLC、SC、ST、FCなどのコネクタが付いています。ケーブル全長、ファンアウト長、コネクタタイプはカスタマイズ可能です。',
    mainImage: '/products/cables/MPO/mpo-24lc-01.jpg',
    category: 'mpo',
    displayType: 'modal',
    order: 6,
    meta: {
      title: 'MPO-24LC | Starseeds Digital',
      description: 'MPO-LCプリターミネート済み光ファイバーパッチコード。メイン配線エリアからシステム機器ポートへの直接接続を提供。'
    },
    specs: [
      { label: 'Fiber Count', value: '8/12/16/24F' },
      { label: 'Polish Type (SM)', value: 'UPC/APC' },
      { label: 'Polish Type (MM)', value: 'UPC/PC' },
      { label: 'Cable Jacket', value: 'PVC/LSZH/OFNP' },
      { label: 'Fiber Mode', value: 'G657A1/OM1/OM2/OM3/OM4/OM5' },
      { label: 'Wavelength (SM)', value: '1310/1550nm' },
      { label: 'Wavelength (MM)', value: '850/1300nm' },
      { label: 'Cable Diameter (Trunk)', value: '3.0mm' },
      { label: 'Cable Diameter (Harnesses)', value: '2.0mm' },
      { label: 'Operating Temperature', value: '-20°C〜+70°C' },
      { label: 'Storage Temperature', value: '-40°C〜+85°C' }
    ]
  }
];
