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
  },
  {
    id: 'aoc-400g-qsfp-dd',
    name: '400G QSFP-DD AOC',
    description: 'マルチモードファイバー上の400ギガビットイーサネットリンクで使用するために設計されたアクティブ光ケーブルです。OM3マルチモードファイバーで最大100メートルの伝送をサポートします。',
    mainImage: '/products/cables/AOC/aoc-400g-qsfp-dd-01.png',
    category: 'aoc',
    displayType: 'modal',
    meta: {
      title: '400G QSFP-DD AOC | XX-online',
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
      title: '400G OSFP AOC | XX-online',
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
      title: '400G QSFP-DD to 4x100G QSFP56 AOC | XX-online',
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
      title: '400G QSFP-DD to 2x200G QSFP56 AOC | XX-online',
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
      title: '200G QSFP56 AOC | XX-online',
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
      title: '200G QSFP56 to 2x100G QSFP56 AOC | XX-online',
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
      title: '100G QSFP28 AOC | XX-online',
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
      title: '800G OSFP/QSFP-DD DAC | XX-online',
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
      title: '400G QSFP-DD/QSFP112 DAC | XX-online',
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
      title: '200G QSFP-DD/QSFP56 DAC | XX-online',
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
      title: '100G QSFP28 DAC | XX-online',
      description: 'QSFP28 MSAおよびIEEE 802.3bjイーサネット転送プロトコルに準拠しています。'
    },
    specs: [
      { label: '製品型番', value: 'FQPA01QPA0C-P0005' },
      { label: 'ベンダー名', value: 'DFX' },
      { label: 'コネクタA', value: 'QSFP28' },
      { label: 'コネクタB', value: 'QSFP28' },
      { label: 'ケーブルサイズ', value: '26AWG ~ 30AWG' },
      { label: '最大データレート', value: '100Gbps' },
      { label: '動作温度', value: '0 to 70°C (32 to 158°F)' },
      { label: '最大ケーブル長', value: '1-5 M' },
      { label: 'プロトコル', value: 'IEEE802.3bj and QSFP28 MSA' },
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
      title: '800Gbps OSFP to 2x400G OSFP DAC | XX-online',
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
      title: '400Gbps QSFP-DD/OSFP to 2x200G QSFP56 DAC | XX-online',
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
      title: '400Gbps QSFP-DD To 4x100G QSFP56 DAC | XX-online',
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
      title: '200Gbps QSFP-DD To 2x100G QSFP28 DAC | XX-online',
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
  }
];
