import type { ServerProduct } from '../types';

export const serverProducts: ServerProduct[] = [
  {
    id: 'dfx-dh116-v1',
    order: 1,
    displayType: 'fullpage',
    name: 'DFX Server DH116 V1',
    description: 'AIトレーニング・推論ワークロードに最適な次世代の4U2ソケットAIサーバー。',
    mainImage: '/products/servers/dfx-dh116-v1/g5200v7-ai-server.jpg',
    category: 'cpu-server',
    meta: {
      title: 'DFX Server DH116 V1 | Starseeds Digital',
      description: '強力な性能、高い信頼性、効率的な省エネルギーを兼ね備えたDFX Server DH116 V1の詳細な技術仕様と特徴をご紹介します。'
    },
    hero: {
      title: 'DFX Server DH116 V1',
      subtitle: 'AIワークロードを加速する、ストレージと拡張性に優れた4U2ソケットサーバー。',
      image: '/products/servers/dfx-dh116-v1/g5200v7-ai-server.jpg'
    },
    introduction: {
      title: '次世代の4U2ソケットAIサーバー',
      description: 'DFX Server DH116 V1は、強力な性能、高い信頼性と安全性、効率的な省エネルギー、容易な管理、容易な導入などの特長を備えており、トレーニングと推論のワークロードに利用できます。',
      image: '/products/servers/dfx-dh116-v1/main.jpg'
    },
    features: [
      {
        title: '超大容量ストレージ',
        description: 'AIの要求に応える大容量ストレージ構成に対応。柔軟なドライブオプションで、多様なワークロードをサポートします。',
        image: '/products/servers/dfx-dh116-v1/large-storage.jpg',
        bullets: [
          '最大28台の3.5インチSAS/SATAドライブ',
          '最大4台のNVMe SSD',
          '2台のM.2 SSD'
        ]
      },
      {
        title: '柔軟な拡張性',
        description: '', // This one uses a list format directly
        image: '/products/servers/dfx-dh116-v1/flexible-expansion.jpg',
        bullets: [
          '最大10×標準PCIe拡張スロットに対応',
          '2×OCP 3.0ネットワークカードに対応'
        ]
      },
      {
        title: '極めて優れた演算能力',
        description: '', // This one uses a list format directly
        image: '/products/servers/dfx-dh116-v1/computing-power.jpg',
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
        image: '/products/servers/dfx-dh116-v1/heat-dissipation.jpg'
      },
      {
        title: 'システムのダウンタイムが66%削減',
        description: '自社開発したAIメモリー障害自己修復機能により、システムの安定稼働を保証',
        image: '/products/servers/dfx-dh116-v1/high-reliability.jpg'
      }
    ],
    energySaving: {
      image: '/products/servers/dfx-dh116-v1/energy-saving.jpg',
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
          description: 'ゼロ再起動のアップグレードと非接触型アップグレードに対応'
        },
        {
          icon: 'Gauge',
          title: '10倍向上の展開効率',
          description: '展開の待機時間がゼロ、75%の合理化された展開手順がツールによって実行可能'
        },
        {
          icon: 'Search',
          title: '100%のインベントリー精度',
          description: 'アセットインベントリーミスを完全排除、サードパーティのサーバーを管理可能で、資産位置の自動識別とリアルタイムの追跡に対応'
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
    datasheetUrl: '/products/servers/dfx-dh116-v1/G5200-V7-Datasheet.pdf',
    shortFeatures: [],
  },
  {
    id: 'dfx-dh126-v1',
    order: 2,
    displayType: 'fullpage',
    name: 'DFX Server DH126 V1',
    description: 'AIトレーニング・推論ワークロードに最適な次世代の4U2ソケットAIサーバー。',
    mainImage: '/products/servers/dfx-dh126-v1/main.png',
    category: 'cpu-server',
    meta: {
      title: 'DFX Server DH126 V1 | Starseeds Digital',
      description: 'DFX Server DH126 V1は、仮想化からAI推論まで、多様なワークロードに対応する高性能2U2ソケットサーバーです。'
    },
    hero: { 
      title: 'DFX Server DH126 V1',
      subtitle: '高密度コンピューティングと超高速相互接続を実現する、次世代の1U2ソケットサーバー。',
      image: '/products/servers/dfx-dh126-v1/main.png'
    },
    introduction: {
      title: '次世代の1U2ソケットラックサーバー',
      description: 'DFX Server DH126 V1は、インターネット、IDC、クラウドコンピューティング、エンタープライズ、電気通信サービスなど、幅広いニーズに応える次世代の1U2ソケットラックサーバーです。ITコア業務から複雑なワークロードまで柔軟に対応します。',
      image: '/products/servers/dfx-dh126-v1/00.jpg',
      bullets: [
        '主な運用：仮想化、クラウドコンピューティング、Webアプリケーション、AI推論',
        '主なメリット: 低消費電力、柔軟な拡張性、高信頼性、容易な管理・導入'
      ]
    },
    features: [
      {
        title: '高密度コンピューティング',
        description: '1Uスペースに2基の最大400WのCPUと24枚のDDR5 DIMMを搭載可能',
        image: '/products/servers/dfx-dh126-v1/01.jpg',
        imagePosition: 'right',
      },
      {
        title: '超高速相互接続',
        description: 'より高速な運用を実現、PCIe5.0対応、400Gbit/s NICの相互接続に対応',
        image: '/products/servers/dfx-dh126-v1/02.jpg',
      },
      {
        title: '高速フラッシュ',
        description: '10×2.5インチSAS/SATA/NVMe SSD、 4x3.5インチSAS/SATAハードディスクをサポートし、パフォーマンスの倍増を実現',
        image: '/products/servers/dfx-dh126-v1/03.jpg',
      }
    ],
    reliability: [
      {
        title: 'ヒートシンクあたりの放熱性能が50%向上',
        description: 'ヒートパイプ拡張放熱技術により、優れた放熱とより強い温度適応性を実現',
        image: '/products/servers/dfx-dh126-v1/04.jpg',
        imagePosition: 'right'
      },
      {
        title: '障害データ収集',
        description: 'CPUクラッシュ時の自動障害情報収集と迅速なシステム障害箇所特定に対応',
        image: '/products/servers/dfx-dh126-v1/05.jpg',
        imagePosition: 'left'
      }
    ],
    energySaving: {
      image: '/products/servers/dfx-dh126-v1/06.jpg',
      imagePosition: 'bottom',
      points: [
        {
          icon: 'ThermometerSun',
          title: '業界をリードする電源技術、より高い効率',
          description: '業界平均よりも12.5%低い電力損失を実現し、3つのコア技術で電力と効率を向上させ、業界をリードする電力変換率を提供'
        },
        {
          icon: 'BatteryCharging',
          title: 'サーバー全体の消費電力が業界平均よりも最大8%削減',
          description: '自社開発したアルゴリズムにより、ファンとCPUの消費電力を最小限に抑える'
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
          description: 'ゼロ再起動のアップグレードと非接触型アップグレードに対応'
        },
        {
          icon: 'Gauge',
          title: '10倍向上の展開効率',
          description: '展開の待機時間がゼロ、75%の合理化された展開手順がツールによって実行可能'
        },
        {
          icon: 'Search',
          title: '100%のインベントリー精度',
          description: 'アセットインベントリーミスを完全排除、サードパーティのサーバーを管理可能で、資産位置の自動識別とリアルタイムの追跡に対応'
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
    datasheetUrl: undefined, // No datasheet for this one yet
    shortFeatures: [],
    showSpecs: false,
  },
  {
    id: 'dfx-dh120h-v1',
    order: 3,
    displayType: 'fullpage',
    name: 'DFX Server DH120H V1',
    description: 'インターネット、IDC、クラウド、エンタープライズ、電気通信サービスなど、幅広いニーズに応える次世代の1U2ソケットラックサーバーです。',
    mainImage: '/products/servers/dfx-dh120h-v1/hero.jpg',
    category: 'cpu-server',
    meta: {
      title: 'DFX Server DH120H V1 | Starseeds Digital',
      description: 'DFX Server DH120H V1は、HPC、高密度仮想化、OAなどのシナリオに適した、柔軟性と信頼性に優れた次世代の1U2ソケットラックサーバーです。'
    },
    hero: { 
      title: 'DFX Server DH120H V1', 
      subtitle: 'HPCから高密度仮想化まで、多様なワークロードに応える高効率1U2ソケットサーバー。', 
      image: '/products/servers/dfx-dh120h-v1/hero.jpg' 
    },
    introduction: { 
      title: '次世代の1U2ソケットラックサーバー', 
      description: 'DFX Server DH120H V1は、インターネット、インターネットデータセンター（IDC）、クラウドコンピューティング、エンタープライズと電気通信サービスの運用などのニーズに応えて開発した、幅広く利用されている次世代の1U2ソケットラックサーバーです。ITコア業務から複雑なワークロードまで柔軟に対応します。',
      image: '/products/servers/dfx-dh120h-v1/hero.jpg',
      bullets: [
        '主な運用シナリオ: HPC, 高密度仮想化, OA',
        '主なメリット: 低消費電力、柔軟な拡張性、高信頼性、容易な管理・導入'
      ]
    },
    features: [
      {
        title: '高密度コンピューティング',
        description: '1Uスペースに2基の最大385WのCPUと32枚のDDR5 DIMMを搭載可能',
        image: '/products/servers/dfx-dh120h-v1/01.jpg'
      },
      {
        title: '超高速相互接続、より高速な運用',
        description: 'PCIe 5.0、400Gbit/s NICの相互接続に対応',
        image: '/products/servers/dfx-dh120h-v1/02.jpg'
      }
    ],
    reliability: [
      {
        title: 'ヒートシンクあたりの放熱性能が50%向上',
        description: 'ヒートパイプ拡張放熱技術により、優れた放熱とより強い温度適応性を実現',
        image: '/products/servers/dfx-dh120h-v1/03.jpg'
      },
      {
        title: 'システムのダウンタイムが66%削減',
        description: '自社開発したAIメモリー障害自己修rif修機能により、システムの安定稼働を保証',
        image: '/products/servers/dfx-dh120h-v1/04.jpg'
      }
    ],
    energySaving: { 
      image: '/products/servers/dfx-dh120h-v1/05.jpg',
      imagePosition: '50% 100%',
      points: [
        {
          icon: 'ThermometerSun',
          title: '業界をリードする電源技術、より高い効率',
          description: '業界平均よりも12.5%低い電力損失を実現し、3つのコア技術で電力と効率を向上させ、業界をリードする電力変換率を提供'
        },
        {
          icon: 'Gauge',
          title: 'インテリジェントなサービス状況把握、動的な負荷調整',
          description: 'サービス負荷に応じてCPUの動作周波数を動的に調整可能'
        },
        {
          icon: 'BatteryCharging',
          title: 'サーバー全体の消費電力が業界平均よりも最大8%削減',
          description: '自社開発したアルゴリズムにより、ファンとCPUの消費電力を最小限に抑える'
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
      { label: 'サーバータイプ', value: '1Uラックサーバー' },
      { label: 'プロセッサー', value: '1/2基の第4/5世代インテル®Xeon®スケーラブルプロセッサー、プロセッサーあたり最大TDP 385W対応' },
      { label: 'チップセット', value: 'Emmitsburg PCH' },
      { label: 'メモリー', value: '32枚のDDR5 DIMM（最大5,600MT/s）' },
      { label: 'ローカルストレージ', value: 'さまざまなハードディスク構成に対応（ハードディスクがホットスワップ対応）：• 8～10×2.5インチSAS/SATAハードディスク/SSD（2/4/6/8/10×NVMe SSD、合計10台以下）• 4×3.5インチSAS/SATAハードディスク/SSD フラッシュストレージに対応：• 2×M.2 SSD' },
      { label: 'RAIDサポート', value: 'RAID0、1、10、1E、5、50、6、60に対応し、スーパーキャパシタによるキャッシュデータの電源障害保護、RAIDレベルの移行、ディスクローミング、自己診断、Webによるリモート設定などの機能を提供' },
      { label: 'ネットワーク', value: '多種のネットワーク拡張機能に対応 OCP 3.0 NIC対応（2つのFlexIOカードスロットがそれぞれ2枚のOCP 3.0 NICをサポート、必要に応じて構成可能、ホットスワップ対応）、PCIe 5.0対応' },
      { label: 'PCIe拡張', value: '5つのPCIeスロットに対応：2つのOCP 3.0 NIC専用のFlexIOスロット、3つの標準PCIeスロット（1つがPCIe 5.0に対応）' },
      { label: 'ファンモジュール', value: '8台のホットスワップ対応の二重反転ファンモジュール、N+1冗長対応' },
      { label: '電源モジュール', value: '1+1冗長とホットスワップ対応の900W/1200W/1500W/2000W Platinum/Titanium電源モジュール' },
      { label: '管理', value: 'iBMCチップは、1つの管理用GEネットワークポートを統合しており、故障診断、自動O&M、ハードウェアセキュリティ強化などの包括的な管理機能を提供 • iBMCは、Redfish、SNMP、IPMI 2.0などの標準インターフェースに対応し、HTML5/VNC KVMに基づいたリモート管理ユーザーインターフェースを提供し、監視、診断、設定、エージェントレス、リモートコントロールなどの、管理の複雑さを簡素化する帯域外管理機能をサポート • オプションのFusionDirector管理ソフトウェアは、5つのインテリジェントテクノロジーなどの高度な管理機能を提供することで、ライフサイクル全体にわたるインテリジェント化・自動化・視覚化・洗練された管理を実現' },
      { label: 'OS', value: 'xFusion FusionOS、Microsoft Windows Server、SUSE Linux Enterprise Server、VMware ESXi、Red Hat Enterprise Linux、CentOS、Oracle、Ubuntu、Debian、openEulerより多くの対応OSについては、こちらを参照してください' },
      { label: 'セキュリティ特性', value: 'パワーオンパスワード、管理者パスワード、TPM 2.0、セキュリティベゼル、セキュアブート、カバー開閉検知' },
      { label: '動作温度', value: '5°C～45°C（ASHRAE Class A1/A2/A3/A4に準拠）' },
      { label: '認証', value: 'CE、UL、CCC、FCC、VCCI、RoHS' },
      { label: '取り付けレール', value: 'L型レール、伸縮レール、ホールディングレール' },
      { label: '寸法（高さ×幅×奥行）', value: '3.5インチハードディスクシャーシ：43mm×447mm×798mm 2.5インチハードディスクシャーシ：43mm×447mm×798mm' }
    ],
    shortFeatures: [],
    showSpecs: true,
  },
  {
    id: 'dfx-dh226-v1',
    order: 4,
    displayType: 'fullpage',
    name: 'DFX Server DH226 V1',
    description: '仮想化からAI推論まで、多様なワークロードに対応する高性能2U2ソケットサーバー。',
    mainImage: '/products/servers/dfx-dh226-v1/main.png',
    category: 'cpu-server',
    meta: {
      title: 'DFX Server DH226 V1 | Starseeds Digital',
      description: 'DFX Server DH226 V1は、仮想化、クラウドコンピューティング、AI推論などのシナリオに適した、高性能と柔軟な拡張性を両立した次世代の2U2ソケットラックサーバーです。'
    },
    hero: { 
      title: 'DFX Server DH226 V1', 
      subtitle: '仮想化からAI推論まで、多様なワークロードに対応する高性能2U2ソケットサーバー。',
      image: '/products/servers/dfx-dh226-v1/main.png' 
    },
    introduction: { 
      title: '次世代の2U2ソケットラックサーバー', 
      description: 'DFX Server DH226 V1は、インターネット、インターネットデータセンター（IDC）、クラウドコンピューティング、エンタープライズと電気通信サービスの運用などのニーズに応えて開発した、幅広く利用されている次世代の2U2ソケットラックサーバーです。ITコア業務から複雑なワークロードまで柔軟に対応します。',
      image: '/products/servers/dfx-dh226-v1/00.jpg',
      bullets: [
        '主な運用: 仮想化, クラウドコンピューティング, Webアプリケーション, AI推論',
        '主なメリット: 高性能、柔軟な拡張性、高信頼性、容易な管理、容易な導入'
      ]
    },
    features: [
      {
        title: '強力なパフォーマンス',
        description: '2基の最大400W対応の第4世代AMD EPYC™ 9004シリーズプロセッサー（Genoa）、24枚のDDR5 DIMMをサポート',
        image: '/products/servers/dfx-dh226-v1/01.jpg',
        imagePosition: 'right'
      },
      {
        title: '超高速相互接続',
        description: 'PCIe 5.0プロトコルと11個の標準PCIeスロットに対応することで、より柔軟な構成を実現、PCIe帯域幅を100%増加、超高速相互接続が可能',
        image: '/products/servers/dfx-dh226-v1/02.jpg'
      },
      {
        title: '高速フラッシュ',
        description: '高速フラッシュメモリーと多様な構成：',
        image: '/products/servers/dfx-dh226-v1/03.jpg',
        bullets: [
          '24×NVMe U.2 SSD、高速フラッシュメモリー、高速なパフォーマンス',
          '25×SAS/SATA SSD、柔軟な構成、高速なI/Oパフォーマンス',
          '16×CPUパススルー型のSATA HDD、より多くのハードディスクスロット、より高い費用対効果'
        ]
      }
    ],
    reliability: [
      {
        title: 'ヒートシンクあたりの放熱性能が50%向上',
        description: 'ヒートパイプ拡張放熱技術により、優れた放熱とより強い温度適応性を実現',
        image: '/products/servers/dfx-dh226-v1/04.jpg'
      },
      {
        title: '障害データ収集',
        description: 'CPUクラッシュ時の自動障害情報収集と迅速なシステム障害箇所特定に対応',
        image: '/products/servers/dfx-dh226-v1/05.jpg'
      }
    ],
    energySaving: {
      image: '/products/servers/dfx-dh226-v1/06.jpg',
      imagePosition: 'bottom',
      points: [
        {
          icon: 'ThermometerSun',
          title: '業界をリードする電源技術、より高い効率',
          description: '業界平均よりも12.5%低い電力損失を実現し、3つのコア技術で電力と効率を向上させ、業界をリードする電力変換率を提供'
        },
        {
          icon: 'Gauge',
          title: 'インテリジェントなサービス状況把握、動的な負荷調整',
          description: 'サービス負荷に応じてCPUの動作周波数を動的に調整可能'
        },
        {
          icon: 'BatteryCharging',
          title: 'サーバー全体の消費電力が業界平均よりも最大8%削減',
          description: '自社開発したアルゴリズムにより、ファンとCPUの消費電力を最小限に抑える'
        }
      ]
    },
    oandm: {
      features: [
        {
          icon: 'Rocket',
          title: '20倍向上のアップグレード効率',
          description: 'ゼロ再起動のアップグレードと非接触型アップグレードに対応'
        },
        {
          icon: 'Gauge',
          title: '10倍向上の展開効率',
          description: '展開の待機時間がゼロ、75%の合理化された展開手順がツールによって実行可能'
        },
        {
          icon: 'Search',
          title: '100%のインベントリー精度',
          description: 'アセットインベントリーミスを完全排除、サードパーティのサーバーを管理可能で、資産位置の自動識別とリアルタイムの追跡に対応'
        }
      ]
    },
    specs: [],
    shortFeatures: [],
    showSpecs: false,
  },
  {
    id: 'dfx-dh226h-v1',
    order: 5,
    displayType: 'fullpage',
    name: 'DFX Server DH226H V1',
    description: '仮想化からAI推論まで、多様なワークロードに対応する高性能2U2ソケットサーバー。',
    mainImage: '/products/servers/dfx-dh226h-v1/main.png',
    category: 'cpu-server',
    meta: {
      title: 'DFX Server DH226H V1 | Starseeds Digital',
      description: '仮想化からAI推論まで、多様なワークロードに対応する高性能2U2ソケットサーバー。低消費電力、柔軟な拡張性、高信頼性を実現。'
    },
    hero: { title: 'DFX Server DH226H V1', subtitle: '仮想化からAI推論まで、多様なワークロードに対応する高性能2U2ソケットサーバー。', image: '/products/servers/dfx-dh226h-v1/main.png' },
    introduction: { 
      title: '次世代の2U2ソケットラックサーバー', 
      description: 'DFX Server DH226H V1は、インターネット、インターネットデータセンター（IDC）、クラウドコンピューティング、エンタープライズと電気通信サービスの運用などのニーズに応えて開発した、幅広く利用されている次世代の2U2ソケットラックサーバーです。ITコア業務、クラウドコンピューティング、仮想化、高性能計算、エンタープライズまたは電気通信サービスの運用、およびその他の複雑なワークロードに適します。',
      image: '/products/servers/dfx-dh226h-v1/01.jpg',
      bullets: [
        '主な運用: 仮想化、クラウドコンピューティング、Webアプリケーション、AI推論',
        '主なメリット: 低消費電力、柔軟な拡張性、高信頼性、容易な管理、容易な導入'
      ]
    },
    features: [
      {
        title: '強力なパフォーマンス',
        description: '2基の最大400W対応の第4世代AMD EPYC™ 9004シリーズプロセッサー（Genoa）、24枚のDDR5 DIMMをサポート',
        image: '/products/servers/dfx-dh226h-v1/02.jpg',
        imagePosition: 'right'
      },
      {
        title: '超高速相互接続',
        description: 'PCIe 5.0プロトコルと8つのフルハイト標準PCIe拡張スロットに対応することで、より柔軟な構成を実現、PCIe帯域幅を100%増加、超高速相互接続が可能',
        image: '/products/servers/dfx-dh226h-v1/03.jpg'
      },
      {
        title: '高速フラッシュ',
        description: '12×SAS/SATA+4×NVMe U.2 SSD対応、高速フラッシュメモリー、高速なパフォーマンス',
        image: '/products/servers/dfx-dh226h-v1/04.jpg'
      }
    ],
    reliability: [
      {
        title: 'ヒートシンクあたりの放熱性能が50%向上',
        description: 'ヒートパイプ拡張放熱技術により、優れた放熱とより強い温度適応性を実現',
        image: '/products/servers/dfx-dh226h-v1/05.jpg'
      },
      {
        title: '障害データ収集',
        description: 'CPUクラッシュ時の自動障害情報収集と迅速なシステム障害箇所特定に対応',
        image: '/products/servers/dfx-dh226h-v1/06.jpg'
      }
    ],
    energySaving: {
      image: '/products/servers/dfx-dh226h-v1/07.jpg',
      imagePosition: 'bottom',
      points: [
        {
          icon: 'ThermometerSun',
          title: '業界をリードする電源技術、より高い効率',
          description: '業界平均よりも12.5%低い電力損失を実現し、3つのコア技術で電力と効率を向上させ、業界をリードする電力変換率を提供'
        },
        {
          icon: 'Gauge',
          title: 'インテリジェントなサービス状況把握、動的な負荷調整',
          description: 'サービス負荷に応じてCPUの動作周波数を動的に調整可能'
        },
        {
          icon: 'BatteryCharging',
          title: 'サーバー全体の消費電力が業界平均よりも最大8%削減',
          description: '自社開発したアルゴリズムにより、ファンとCPUの消費電力を最小限に抑える'
        }
      ]
    },
    oandm: {
      features: [
        {
          icon: 'Rocket',
          title: '20倍向上のアップグレード効率',
          description: 'ゼロ再起動のアップグレードと非接触型アップグレードに対応'
        },
        {
          icon: 'Gauge',
          title: '10倍向上の展開効率',
          description: '展開の待機時間がゼロ、75%の合理化された展開手順がツールによって実行可能'
        },
        {
          icon: 'Search',
          title: '100%のインベントリー精度',
          description: 'アセットインベントリーミスを完全排除、サードパーティのサーバーを管理可能で、資産位置の自動識別とリアルタイムの追跡に対応'
        }
      ]
    },
    specs: [],
    shortFeatures: [],
    showSpecs: false,
  },
  {
    id: 'dfx-dh220-v1',
    order: 6,
    displayType: 'fullpage',
    name: 'DFX Server DH220 V1',
    description: 'クラウドから分散ストレージまで、多様なワークロードに対応する高性能2U2ソケットサーバー。',
    mainImage: '/products/servers/dfx-dh220-v1/main.jpg',
    category: 'cpu-server',
    meta: {
      title: 'DFX Server DH220 V1 | Starseeds Digital',
      description: 'DFX Server DH220 V1は、クラウドコンピューティング、仮想化、分散型ストレージ、ビッグデータ処理などのニーズに応える次世代の2U2ソケットラックサーバーです。'
    },
    hero: { 
      title: 'DFX Server DH220 V1', 
      subtitle: 'クラウドから分散ストレージまで、多様なワークロードに対応する高性能2U2ソケットサーバー。', 
      image: '/products/servers/dfx-dh220-v1/main.jpg' 
    },
    introduction: { 
      title: '次世代の2U2ソケットラックサーバー', 
      description: 'DFX Server DH220 V1は、インターネット、インターネットデータセンター（IDC）、クラウドコンピューティング、エンタープライズと電気通信サービスの運用などのニーズに応えて開発した、幅広く利用されている次世代の2U2ソケットラックサーバーです。ITコア業務、クラウドコンピューティング、仮想化、分散型ストレージ、ビッグデータ処理、エンタープライズまたは電気通信サービスの運用、およびその他の複雑なワークロードに適します。',
      image: '/products/servers/dfx-dh220-v1/main.jpg',
      bullets: [
        '主な運用: クラウドコンピューティング、仮想化、分散型ストレージ、ビッグデータ処理',
        '主なメリット: 低消費電力、柔軟な拡張性、高信頼性、容易な管理、容易な導入'
      ]
    },
    features: [
      {
        title: '軽量コンピューティング、エネルギー節約と消費電力削減の実現',
        description: '低電力のファンモジュールで放熱のニーズを満たし、簡素化したエアダクト設計で迅速な放熱を実現',
        image: '/products/servers/dfx-dh220-v1/01.png'
      },
      {
        title: '簡素化した設計、柔軟で使いやすい',
        description: '4つのライザーフリーの標準PCIeスロットをサポートし、柔軟な構成とツール不要のメンテナンスに対応',
        image: '/products/servers/dfx-dh220-v1/02.png'
      }
    ],
    reliability: [
      {
        title: 'ヒートシンクあたりの放熱性能が50%向上',
        description: 'ヒートパイプ拡張放熱技術により、優れた放熱とより強い温度適応性を実現',
        image: '/products/servers/dfx-dh220-v1/03.jpg'
      },
      {
        title: 'システムのダウンタイムが66%削減',
        description: '自社開発したAIメモリー障害自己修復機能により、システムの安定稼働を保証',
        image: '/products/servers/dfx-dh220-v1/04.jpg'
      }
    ],
    energySaving: {
      image: '/products/servers/dfx-dh220-v1/05.jpg',
      imagePosition: 'bottom',
      points: [
        {
          icon: 'ThermometerSun',
          title: '業界をリードする電源技術、より高い効率',
          description: '業界平均よりも12.5%低い電力損失を実現し、3つのコア技術で電力と効率を向上させ、業界をリードする電力変換率を提供'
        },
        {
          icon: 'Gauge',
          title: 'インテリジェントなサービス状況把握、動的な負荷調整',
          description: 'サービス負荷に応じてCPUの動作周波数を動的に調整可能'
        },
        {
          icon: 'BatteryCharging',
          title: 'サーバー全体の消費電力が業界平均よりも最大8%削減',
          description: '自社開発したアルゴリズムにより、ファンとCPUの消費電力を最小限に抑える'
        }
      ]
    },
    oandm: {
      features: [
        {
          icon: 'Rocket',
          title: '20倍向上のアップグレード効率',
          description: 'ゼロ再起動のアップグレードと非接触型アップグレードに対応'
        },
        {
          icon: 'Gauge',
          title: '10倍向上の展開効率',
          description: '展開の待機時間がゼロ、75%の合理化された展開手順がツールによって実行可能'
        },
        {
          icon: 'Search',
          title: '100%のインベントリー精度',
          description: 'アセットインベントリーミスを完全排除、サードパーティのサーバーを管理可能で、資産位置の自動識別とリアルタイムの追跡に対応'
        }
      ]
    },
    specs: [
      { label: 'サーバータイプ', value: '2Uラックサーバー' },
      { label: 'プロセッサー', value: '1/2基の第4/5世代インテル®Xeon®スケーラブルプロセッサー、プロセッサーあたり最大TDP 225W対応' },
      { label: 'チップセット', value: 'Emmitsburg PCH' },
      { label: 'メモリー', value: '16枚のDDR5 DIMM（最大4,800MT/s）' },
      { label: 'ローカルストレージ', value: 'さまざまなハードディスク構成に対応（ハードディスクがホットスワップ対応）：8～31×2.5インチSAS/SATAハードディスク/SSD、10～14×3.5インチSAS/SATAハードディスク、4×NVMe SSD、最大31×2.5インチハードディスク。フラッシュストレージに対応：2×M.2 SSD' },
      { label: 'RAIDサポート', value: 'RAID0、1、10、1E、5、50、6、60に対応し、スーパーキャパシタによるキャッシュデータの電源障害保護、RAIDレベルの移行、ディスクローミング、自己診断、Webによるリモート設定などの機能を提供' },
      { label: 'ネットワーク', value: '複数タイプのネットワーク拡張機能に対応。OCP 3.0 NIC対応（1つのFlexIOカードスロットが1枚のOCP 3.0 NICをサポート、必要に応じて構成可能）' },
      { label: 'PCIe拡張', value: '最大8個のPCIe拡張スロットに対応。1つのOCP 3.0 NIC専用のFlexIOスロット、1つのRAIDコントローラカード専用のスロット、6つの標準PCIeスロット' },
      { label: 'GPUアクセラレータカード', value: '4枚の75WのハーフハイトハーフレングスGPUアクセラレータカード' },
      { label: 'ファンモジュール', value: '4台のホットスワップ対応の二重反転ファンモジュール、N+1冗長対応' },
      { label: '電源モジュール', value: '1+1冗長とホットスワップ対応の900W/1200W/1500W/2000W/3000W Platinum/Titanium電源モジュール' },
      { label: '管理', value: 'iBMCチップは、1つの管理用GEネットワークポートを統合しており、故障診断、自動O&M、ハードウェアセキュリティ強化などの包括的な管理機能を提供。iBMCは、Redfish、SNMP、IPMI 2.0などの標準インターフェースに対応し、HTML5/VNC KVMに基づいたリモート管理ユーザーインターフェースを提供し、監視、診断、設定、エージェントレス、リモートコントロールなどの、管理の複雑さを簡素化する帯域外管理機能をサポート。オプションのFusionDirector管理ソフトウェアは、5つのインテリジェントテクノロジーなどの高度な管理機能を提供し、ライフサイクル全体にわたるインテリジェント化・自動化・視覚化・洗練された管理を実現' },
      { label: 'OS', value: 'xFusion FusionOS、Microsoft Windows Server、SUSE Linux Enterprise Server、VMware ESXi、Red Hat Enterprise Linux、CentOS、Oracle、Ubuntu、Debian、openEuler' },
      { label: 'セキュリティ特性', value: 'パワーオンパスワード、管理者パスワード、TPM 2.0、セキュリティベゼル、セキュアブート、カバーオープン検知' },
      { label: '動作温度', value: '動作温度：5℃～35℃（ASHRAE Class A1/A2/A3に準拠）' },
      { label: '認証', value: 'CE、UL、CCC、FCC、VCCI、RoHS' },
      { label: '取り付けレール', value: 'L型レール、伸縮レール、ホールディングレール' },
      { label: '寸法（高さ×幅×奥行）', value: '3.5インチハードディスクシャーシ：86.1mm×447mm×798mm、2.5インチハードディスクシャーシ：86.1mm×447mm×798mm' }
    ],
    shortFeatures: [],
  },
  {
    id: 'dfx-dh220h-v1',
    order: 7,
    displayType: 'fullpage',
    name: 'DFX Server DH220H V1',
    description: 'SDS、VDI、CDN、仮想化、ビッグデータ、AI推論など多様なワークロードに対応する次世代の2U2ソケットラックサーバー',
    mainImage: '/products/servers/dfx-dh220h-v1/main.jpg',
    category: 'cpu-server',
    meta: {
      title: 'DFX Server DH220H V1 | Starseeds Digital',
      description: 'SDS、VDI、CDN、仮想化、ビッグデータ、AI推論など多様なワークロードに対応する次世代の2U2ソケットラックサーバー。低消費電力、柔軟な拡張性、高信頼性を実現。'
    },
    hero: { title: 'DFX Server DH220H V1', subtitle: 'SDS、VDI、CDN、仮想化、ビッグデータ、AI推論など多様なワークロードに対応する2U2ソケットラックサーバー。', image: '/products/servers/dfx-dh220h-v1/main.jpg' },
    introduction: { 
      title: '次世代の2U2ソケットラックサーバー', 
      description: 'DFX Server DH220H V1は、SDS、VDI、CDN、仮想化、ビッグデータ、データベース、クラウドシナリオ、AI推論、小規模企業、OA、Webアプリケーションなどのニーズに応えて開発した、幅広く利用されている次世代の2U2ソケットラックサーバーです。エンタープライズまたは電気通信サービスの運用、およびその他の複雑なワークロードに適します。低消費電力、柔軟な拡張性、高信頼性、容易な管理、容易な導入などのメリットを備えています。', 
      image: '/products/servers/dfx-dh220h-v1/main.jpg',
      bullets: [
        '主な運用: SDS、VDI、CDN、仮想化、ビッグデータ、データベース、クラウドシナリオ、AI推論、小規模企業、OA、Webアプリケーション',
        '主なメリット: 低消費電力、柔軟な拡張性、高信頼性、容易な管理、容易な導入'
      ]
    },
    features: [
      {
        title: '最大50%向上した全体的なパフォーマンス',
        description: '第4/5世代インテル®Xeon®スケーラブルプロセッサー（最大350W対応）と32枚のDDR5 DIMMをサポートすることにより、強力な演算能力を提供し、CXLを介して最大48個のメモリースロットまで拡張可能',
        image: '/products/servers/dfx-dh220h-v1/01.jpg'
      },
      {
        title: '100%増加のPCIe帯域幅、超高速の相互接続',
        description: 'PCIe 5.0プロトコルと17個の標準PCIeスロットに対応することで、より柔軟な構成を実現',
        image: '/products/servers/dfx-dh220h-v1/02.jpg'
      },
      {
        title: '高速フラッシュ、高性能',
        description: '28×NVMe U.2 SSDで高速フラッシュと高性能を実現。45×SAS/SATA SSDでより多くのスロット、より高い費用対効果を提供',
        image: '/products/servers/dfx-dh220h-v1/03.jpg'
      }
    ],
    reliability: [
      {
        title: 'ヒートシンクあたりの放熱性能が50%向上',
        description: 'ヒートパイプ拡張放熱技術により、優れた放熱とより強い温度適応性を実現',
        image: '/products/servers/dfx-dh220h-v1/04.jpg',
        imagePosition: 'bottom'
      },
      {
        title: 'システムのダウンタイムが66%削減',
        description: '自社開発したAIメモリー障害自己修復機能により、システムの安定稼働を保証',
        image: '/products/servers/dfx-dh220h-v1/05.jpg',
        imagePosition: 'bottom'
      }
    ],
    energySaving: {
      image: '/products/servers/dfx-dh220h-v1/06.jpg',
      imagePosition: '35% center',
      points: [
        {
          icon: 'BatteryCharging',
          title: 'サーバー全体の消費電力が業界平均よりも最大8%削減',
          description: '自社開発したアルゴリズムにより、ファンとCPUの消費電力を最小限に抑える'
        },
        {
          icon: 'Gauge',
          title: 'インテリジェントなサービス状況把握、動的な負荷調整',
          description: 'サービス負荷に応じてCPUの動作周波数を動的に調整可能'
        },
        {
          icon: 'ThermometerSun',
          title: '業界をリードする電源技術、より高い効率',
          description: '業界平均よりも12.5%低い電力損失を実現し、3つのコア技術で電力と効率を向上させ、業界をリードする電力変換率を提供'
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
      { label: 'サーバータイプ', value: '2Uラックサーバー' },
      { label: 'プロセッサー', value: '1/2基の第4/5世代インテル®Xeon®スケーラブルプロセッサー、プロセッサーあたり最大TDP 385W対応' },
      { label: 'チップセット', value: 'Emmitsburg PCH' },
      { label: 'メモリー', value: '32枚の最大4800MT/sのDDR5 DIMM、CXLテクノロジーにより最大16枚のDDR5 DIMM拡張可能、最大48枚のDIMM対応*' },
      { label: 'ローカルストレージ', value: 'さまざまなハードディスク構成に対応（ハードディスクがホットスワップ対応）：8～35×2.5インチSAS/SATAハードディスク/SSD（最大45×2.5インチハードディスクまたは34×フルNVMe SSD）、12～18×3.5インチSAS/SATAハードディスク、4/8/16/24×NVMe SSD、最大45×2.5インチハードディスクまたは28×フルNVMe SSD*。フラッシュストレージに対応：2×M.2 SSD' },
      { label: 'RAIDサポート', value: 'RAID0、1、10、1E、5、50、6、60に対応し、スーパーキャパシタによるキャッシュデータの電源障害保護、RAIDレベルの移行、ディスクローミング、自己診断、Webによるリモート設定などの機能を提供' },
      { label: 'ネットワーク', value: '多種のネットワーク拡張機能に対応。OCP 3.0 NIC対応（2つのFlexIOカードスロットがそれぞれ2枚のOCP 3.0 NICをサポート、必要に応じて構成可能、ホットスワップ対応）、PCIe 5.0対応' },
      { label: 'PCIe拡張', value: '最大19個のPCIe拡張スロットに対応*：2つのOCP 3.0 NIC専用のFlexIOスロット、17個の標準PCIeスロット*（8個がPCIe 5.0スロット）' },
      { label: 'GPUアクセラレータカード', value: '4枚のデュアル幅または14枚のシングル幅GPUアクセラレータカード*' },
      { label: 'ファンモジュール', value: '4台のホットスワップ対応の二重反転ファンモジュール、N+1冗長対応' },
      { label: '電源モジュール', value: '1+1冗長とホットスワップ対応の900W/1200W/1500W/2000W/3000W Platinum/Titanium電源モジュール' },
      { label: '管理', value: 'iBMCチップは、1つの管理用GEネットワークポートを統合しており、故障診断、自動O&M、ハードウェアセキュリティ強化などの包括的な管理機能を提供。iBMCは、Redfish、SNMP、IPMI 2.0などの標準インターフェースに対応し、HTML5/VNC KVMに基づいたリモート管理ユーザーインターフェースを提供し、監視、診断、設定、エージェントレス、リモートコントロールなどの、管理の複雑さを簡素化する帯域外管理機能をサポート。オプションのFusionDirector管理ソフトウェアは、5つのインテリジェントテクノロジーなどの高度な管理機能を提供することで、ライフサイクル全体にわたるインテリジェント化・自動化・視覚化・洗練された管理を実現' },
      { label: 'OS', value: 'xFusion FusionOS、Microsoft Windows Server、SUSE Linux Enterprise Server、VMware ESXi、Red Hat Enterprise Linux、CentOS、Oracle、Ubuntu、Debian、openEuler' },
      { label: 'セキュリティ特性', value: 'パワーオンパスワード、管理者パスワード、TPM 2.0、セキュリティベゼル、セキュアブート、カバーオープン検知' },
      { label: '動作温度', value: '5°C～50°C（ASHRAE Class A1/A2/A3/A4に準拠）' },
      { label: '認証', value: 'CE、UL、CCC、FCC、VCCI、RoHS' },
      { label: '取り付けレール', value: 'L型レール、伸縮レール、ホールディングレール' },
      { label: '寸法（高さ×幅×奥行）', value: '3.5インチハードディスクシャーシ：86.1mm×447mm×798mm、2.5インチハードディスクシャーシ：86.1mm×447mm×798mm' },
      { label: '注記', value: '*計画情報であり、現在の設定可能な情報はテクニカルホワイトペーパーを基準とします。' }
    ],
    shortFeatures: [],
  },
  {
    id: 'dfx-dh240h-v1',
    order: 8,
    displayType: 'fullpage',
    name: 'DFX Server DH240H V1',
    description: '高パフォーマンスデータベース、HPC、高密度仮想化に最適な2U4ソケットラックサーバー。',
    mainImage: '/products/servers/dfx-dh240h-v1/main.jpg',
    category: 'cpu-server',
    meta: {
      title: 'DFX Server DH240H V1 | Starseeds Digital',
      description: '高パフォーマンスデータベース、HPC、高密度仮想化に最適な2U4ソケットラックサーバー。高性能計算、大容量ストレージ、低消費電力を実現。'
    },
    hero: { title: 'DFX Server DH240H V1', subtitle: '高パフォーマンスデータベース、HPC、高密度仮想化に最適な2U4ソケットラックサーバー。', image: '/products/servers/dfx-dh240h-v1/main.jpg' },
    introduction: { 
      title: '幅広く利用されている2U4ソケットラックサーバー', 
      description: 'DFX Server DH240H V1は、インターネットデータセンター（Internet Data Center、IDC）、クラウドコンピューティング、エンタープライズと電気通信サービスの運用などのニーズに応えて開発した、幅広く利用されている2U4ソケットラックサーバーです。データベース、クラウドコンピューティング、仮想化、インメモリーコンピューティングなど、さまざまな運用シナリオに適します。高性能計算、大容量ストレージ、低消費電力、高信頼性、容易な管理、容易な導入、高密度の仮想化などのメリットを備えています。', 
      image: '/products/servers/dfx-dh240h-v1/00.jpg',
      bullets: [
        '主な運用: 高パフォーマンスデータベース（OLAP/OLTP）、インメモリデータベース、HPC、高密度仮想化',
        '主なメリット: 高性能計算、大容量ストレージ、低消費電力、高信頼性、容易な管理・導入、高密度の仮想化'
      ]
    },
    features: [
      {
        title: '比類のない演算能力',
        description: '業界をリードして、2Uスペースに4基の最大350WのCPUと64枚のDDR5 DIMMを搭載可能',
        image: '/products/servers/dfx-dh240h-v1/01.jpg'
      },
      {
        title: '超高速の相互接続',
        description: 'CPU間の相互接続UPIバスの速度が50%向上することで、より優れたパフォーマンスを実現し、PCIe 5.0対応、400Gbit/s NICの相互接続に対応',
        image: '/products/servers/dfx-dh240h-v1/02.jpg'
      },
      {
        title: '柔軟な構成',
        description: 'PCIe 5.0および複数の標準PCIeスロットに対応',
        image: '/products/servers/dfx-dh240h-v1/03.jpg'
      }
    ],
    reliability: [
      {
        title: 'ヒートシンクあたりの放熱性能が50%向上',
        description: 'ヒートパイプ拡張放熱技術により、優れた放熱とより強い温度適応性を実現',
        image: '/products/servers/dfx-dh240h-v1/04.jpg'
      },
      {
        title: 'システムのダウンタイムが66%削減',
        description: '自社開発したAIメモリー障害自己修復機能により、システムの安定稼働を保証',
        image: '/products/servers/dfx-dh240h-v1/05.jpg'
      }
    ],
    energySaving: {
      image: '/products/servers/dfx-dh240h-v1/06.jpg',
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
    specs: [],
    shortFeatures: [],
    showSpecs: false,
  },
  {
    id: 'dfx-dh520-v2',
    order: 9,
    displayType: 'fullpage',
    name: 'DFX Server DH520 V2',
    description: 'デジタル通貨、コールドストレージ、SDS、ビデオストレージに最適な次世代の4U2ソケットラックサーバー。',
    mainImage: '/products/servers/dfx-dh520-v2/main.png',
    category: 'cpu-server',
    meta: {
      title: 'DFX Server DH520 V2 | Starseeds Digital',
      description: 'デジタル通貨、コールドストレージ、SDS、ビデオストレージに最適な次世代の4U2ソケットラックサーバー。低消費電力、柔軟な拡張性、高信頼性を実現。'
    },
    hero: { title: 'DFX Server DH520 V2', subtitle: 'デジタル通貨、コールドストレージ、SDS、ビデオストレージに最適な4U2ソケットラックサーバー。', image: '/products/servers/dfx-dh520-v2/main.png' },
    introduction: { 
      title: '次世代の4U2ソケットラックサーバー', 
      description: 'DFX Server DH520 V2は、インターネット、インターネットデータセンター（Internet Data Center、IDC）、クラウドコンピューティング、エンタープライズと電気通信サービスの運用などのニーズに応えて開発した、幅広く利用されている次世代の4U2ソケットラックサーバーです。ITコア業務、クラウドコンピューティング、仮想化、分散型ストレージ、ビッグデータ処理、エンタープライズまたは電気通信サービスの運用、およびその他の複雑なワークロードに適します。低消費電力、柔軟な拡張性、高信頼性、容易な管理、容易な導入などのメリットを備えています。', 
      image: '/products/servers/dfx-dh520-v2/main.png',
      bullets: [
        '主な運用: デジタル通貨、コールドストレージ、SDS、ビデオストレージ',
        '主なメリット: 低消費電力、柔軟な拡張性、高信頼性、容易な管理、容易な導入'
      ]
    },
    features: [
      {
        title: '超大容量ストレージ',
        description: '44×3.5インチハードディスク＋4×NVMe U.2 SSDをサポート',
        image: '/products/servers/dfx-dh520-v2/01.jpg',
        imagePosition: 'right'
      },
      {
        title: '柔軟な構成',
        description: '最大10個の標準PCIe拡張スロットをサポート',
        image: '/products/servers/dfx-dh520-v2/02.jpg'
      },
      {
        title: '強力な演算能力',
        description: 'インテルの最新のSapphire Rapidsプロセッサー（最大350W対応）と32枚のDDR5 DIMMをサポート',
        image: '/products/servers/dfx-dh520-v2/03.jpg'
      }
    ],
    reliability: [
      {
        title: 'ヒートシンクあたりの放熱性能が50%向上',
        description: 'ヒートパイプ拡張放熱技術により、優れた放熱とより強い温度適応性を実現',
        image: '/products/servers/dfx-dh520-v2/04.jpg'
      },
      {
        title: 'システムのダウンタイムが66%削減',
        description: '自社開発したAIメモリー障害自己修復機能により、システムの安定稼働を保証',
        image: '/products/servers/dfx-dh520-v2/05.jpg'
      }
    ],
    energySaving: {
      image: '/products/servers/dfx-dh520-v2/06.jpg',
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
      { label: 'サーバータイプ', value: '4Uラックサーバー' },
      { label: 'プロセッサー', value: '1基または2基の第4世代インテル®Xeon®スケーラブルプロセッサー（Sapphire Rapidsシリーズ）、プロセッサーあたり最大TDP 350W対応' },
      { label: 'チップセット', value: 'Emmitsburg PCH' },
      { label: 'メモリー', value: '32枚のDDR5 DIMM（最大4800MT/s）' },
      { label: 'ローカルストレージ', value: 'さまざまなハードディスク構成に対応（ハードディスクがホットスワップ対応）：4×2.5インチSAS/SATAハードディスク/SSD、24～44×3.5インチSAS/SATAハードディスク、4×NVMe SSD。フラッシュストレージに対応：2×M.2 SSD' },
      { label: 'RAIDサポート', value: 'RAID0、1、10、1E、5、50、6、60に対応し、スーパーキャパシタによるキャッシュデータの電源障害保護、RAIDレベルの移行、ディスクローミング、自己診断、Webによるリモート設定などの機能を提供' },
      { label: 'ネットワーク', value: '多種のネットワーク拡張機能に対応。OCP 3.0 NIC対応（2つのFlexIOカードスロットがそれぞれ2枚のOCP 3.0 NICをサポート、必要に応じて構成可能、ホットスワップ対応）、PCIe 5.0対応' },
      { label: 'PCIe拡張', value: '最大10個のPCIe拡張スロットに対応。2つのOCP 3.0 NIC専用のFlexIOスロット、10個の標準PCIeスロット（PCIe 5.0対応）' },
      { label: 'GPUアクセラレータカード', value: '8枚のシングル幅GPUアクセラレータカード*' },
      { label: 'ファンモジュール', value: '6台または8台のホットスワップ対応の二重反転ファンモジュール、N+1冗長対応' },
      { label: '電源モジュール', value: '1+1冗長とホットスワップ対応の900W/1200W/1500W/2000W/3000W Platinum/Titanium電源モジュール' },
      { label: '管理', value: 'iBMCチップは、1つの管理用GEネットワークポートを統合しており、故障診断、自動O&M、ハードウェアセキュリティ強化などの包括的な管理機能を提供。iBMCは、Redfish、SNMP、IPMI 2.0などの標準インターフェースに対応し、HTML5/VNC KVMに基づいたリモート管理ユーザーインターフェースを提供し、監視、診断、設定、エージェントレス、リモートコントロールなどの、管理の複雑さを簡素化する帯域外管理機能をサポート。オプションのFusionDirector管理ソフトウェアは、5つのインテリジェントテクノロジーなどの高度な管理機能を提供することで、ライフサイクル全体にわたるインテリジェント化・自動化・視覚化・洗練された管理を実現' },
      { label: 'OS', value: 'xFusion FusionOS、Microsoft Windows Server、SUSE Linux Enterprise Server、VMware ESXi、Red Hat Enterprise Linux、CentOS、Oracle、Ubuntu、Debian、openEuler' },
      { label: 'セキュリティ特性', value: 'パワーオンパスワード、管理者パスワード、TPM 2.0、セキュリティベゼル、セキュアブート、カバーオープン検知' },
      { label: '動作温度', value: '5°C～35°C（ASHRAE Class A1/A2に準拠）' },
      { label: '認証', value: 'CE、UL、CCC、FCC、VCCI、RoHS' },
      { label: '取り付けレール', value: 'L型レール、伸縮レール、ホールディングレール' },
      { label: '寸法（高さ×幅×奥行）', value: '3.5インチハードディスクシャーシ：175mm×447mm×798mm' },
      { label: '注記', value: '*計画情報であり、現在の設定可能な情報はテクニカルホワイトペーパーを基準とします。' }
    ],
    shortFeatures: [],
  },
  {
    id: 'dfx-dh520s-v2',
    order: 10,
    displayType: 'fullpage',
    name: 'DFX Server DH520S V2',
    description: '製品ページ準備中',
    mainImage: '/products/servers/dfx-dh520s-v2/main.png',
    category: 'cpu-server',
    meta: {
      title: 'DFX Server DH520S V2 | Starseeds Digital',
      description: '製品ページ準備中'
    },
    hero: { title: 'DFX Server DH520S V2', subtitle: '', image: '/products/servers/dfx-dh520s-v2/main.png' },
    introduction: { title: '', description: '', image: '' },
    features: [],
    reliability: [],
    energySaving: { image: '', points: [] },
    oandm: { features: [] },
    specs: [],
    shortFeatures: [],
  },
  {
    id: 'dfx-dh226h-v2',
    order: 11,
    displayType: 'fullpage',
    name: 'DFX Server DH226H V2',
    description: 'ITコア業務、クラウドコンピューティング、高性能計算に最適な次世代の2U2ソケットラックサーバー。',
    mainImage: '/products/servers/dfx-dh226h-v2/main.png',
    category: 'cpu-server',
    meta: {
      title: 'DFX Server DH226H V2 | Starseeds Digital',
      description: 'ITコア業務、クラウドコンピューティング、高性能計算に最適な次世代の2U2ソケットラックサーバー。高性能、柔軟な拡張性、高信頼性を実現。'
    },
    hero: { title: 'DFX Server DH226H V2', subtitle: 'ITコア業務、クラウドコンピューティング、高性能計算に最適な2U2ソケットラックサーバー。', image: '/products/servers/dfx-dh226h-v2/main.png' },
    introduction: { 
      title: '次世代の2U2ソケットラックサーバー', 
      description: 'DFX Server DH226H V2は、HPC、インターネット、インターネットデータセンター（Internet Data Center、IDC）、クラウドコンピューティング、エンタープライズなどのニーズに応えて開発した、幅広く利用されている次世代の2U2ソケットラックサーバーです。ITコア業務、クラウドコンピューティング、仮想化、高性能計算、エンタープライズ、およびその他の複雑なワークロードに適します。高性能、柔軟な拡張性、高信頼性、容易な管理、容易な導入などのメリットを備えています。',
      image: '/products/servers/dfx-dh226h-v2/01.png',
      imageFlip: true,
      bullets: [
        '主な運用: ITコア業務、クラウドコンピューティング、高性能計算',
        '主なメリット: 高性能、柔軟な拡張性、高信頼性、容易な管理、容易な導入'
      ]
    },
    features: [
      {
        title: '強力な演算能力',
        description: '192コアのCPUを2つ対応（最大TDP 500W）',
        image: '/products/servers/dfx-dh226h-v2/01.png',
        imagePosition: 'left'
      },
      {
        title: '豊富なI/O拡張性',
        description: '最大12個のPCIe スロットに対応（2個のOCP 3.0専用のスロットを含む）',
        image: '/products/servers/dfx-dh226h-v2/02.png'
      },
      {
        title: '柔軟なストレージ構成',
        description: '2.5/3.5インチ×SAS/SATA/NVMeハードディスク、2×M.2 SSDハードディスク',
        image: '/products/servers/dfx-dh226h-v2/03.png'
      }
    ],
    reliability: [
      {
        title: '高温環境下での安定動作を実現',
        description: '独自の放熱技術により50℃以上の環境でもサーバーが安定稼働を実現',
        image: '/products/servers/dfx-dh226h-v2/06.png'
      },
      {
        title: '高精度放熱アルゴリズム',
        description: 'MPC-PID 2.0高精度放熱アルゴリズムで高効率・省エネを実現',
        image: '/products/servers/dfx-dh226h-v2/07.png'
      }
    ],
    security: [
      {
        title: 'データ保護認証',
        description: 'FIPS認証、機密情報に対する強固なデータ保護と暗号化を実現',
        image: '/products/servers/dfx-dh226h-v2/05.png'
      }
    ],
    energySaving: { image: '', points: [] },
    oandm: { features: [] },
    specs: [],
    shortFeatures: [],
    showSecurity: false,
    showSpecs: false
  },
  {
    id: 'dfx-dh220h-v2',
    order: 12,
    displayType: 'fullpage',
    name: 'DFX Server DH220H V2',
    description: 'AI推論、クラウドコンピューティング、仮想化、高性能計算に最適な次世代の2U2ソケットラックサーバー。',
    mainImage: '/products/servers/dfx-dh220h-v2/main.png',
    category: 'cpu-server',
    meta: {
      title: 'DFX Server DH220H V2 | Starseeds Digital',
      description: 'AI推論、クラウドコンピューティング、仮想化、高性能計算に最適な次世代の2U2ソケットラックサーバー。低消費電力、柔軟な拡張性、高信頼性を実現。'
    },
    hero: { title: 'DFX Server DH220H V2', subtitle: 'AI推論、クラウドコンピューティング、仮想化、高性能計算に最適な2U2ソケットラックサーバー。', image: '/products/servers/dfx-dh220h-v2/main.png' },
    introduction: { 
      title: '次世代の2U2ソケットラックサーバー', 
      description: 'DFX Server DH220H V2は、インターネット、通信キャリア、政府や企業、金融、製造などの業界ニーズに応えて開発した、幅広く利用されている次世代の2U2ソケットラックサーバーです。AI推論、クラウドコンピューティング、仮想化、高性能計算、グラフィックス処理、VDI、ビッグデータ分析など、さまざまな運用シナリオに適しています。低消費電力、柔軟な拡張性、高信頼性、容易な管理、容易な導入などのメリットを備えています。',
      image: '/products/servers/dfx-dh220h-v2/00.png',
      bullets: [
        '主な運用: AI推論、クラウドコンピューティング、仮想化、高性能計算',
        '主なメリット: 低消費電力、柔軟な拡張性、高信頼性、容易な管理、容易な導入'
      ]
    },
    features: [
      {
        title: '強力で多様な演算能力',
        description: '2基のインテル® Xeon®6プロセッサーを搭載可能、4枚のデュアル幅GPUカードに対応',
        image: '/products/servers/dfx-dh220h-v2/01.jpg'
      },
      {
        title: 'I/O拡張',
        description: '最大21個のPCIeスロットをサポート、PCIe 5.0、フロントアクセスに対応',
        image: '/products/servers/dfx-dh220h-v2/02.png'
      },
      {
        title: '優れたストレージ、柔軟な構成',
        description: 'さまざまなハードディスク構成（ハードディスクがホットスワップ可能）に対応：20×3.5インチSAS/SATAハードディスク、33×2.5インチフロントSAS/SATAハードディスクまたは24×NVMeハードディスク、36×E3.S SSDハードディスク',
        image: '/products/servers/dfx-dh220h-v2/03.png',
        imagePosition: 'right'
      }
    ],
    reliability: [
      {
        title: '保守効率が50%向上',
        description: 'PCIeリンクの精密診断により、高速な故障検出を実現',
        image: '/products/servers/dfx-dh220h-v2/04.png',
        imagePosition: 'bottom'
      },
      {
        title: 'システムのダウンタイムを66%削減',
        description: '独自開発のAIメモリー障害自己修復技術により、メモリリンクの精密診断を実現',
        image: '/products/servers/dfx-dh220h-v2/05.png',
        imagePosition: 'bottom'
      }
    ],
    energySaving: { 
      image: '/products/servers/dfx-dh220h-v2/06.png', 
      points: [
        {
          title: '動的エネルギー管理と効率の最適化',
          description: 'DEMT 3.0動的エネルギー管理技術は､ワークロードに応じた自動最適化により、再起動不要・中断なしでエネルギー効率を最大化',
          icon: 'Gauge'
        },
        {
          title: '業界をリードする電源技術、変換効率97%',
          description: '3つのコア技術で電力と効率を向上させ、高い電力変換率を実現',
          icon: 'BatteryCharging'
        }
      ]
    },
    oandm: { features: [] },
    specs: [],
    shortFeatures: [],
    showSpecs: false
  },
  {
    id: 'dfx-dh216-v2',
    order: 13,
    displayType: 'fullpage',
    name: 'DFX Server DH216 V2',
    description: '仮想化、ビッグデータ、AI推論に最適な次世代の2U1ソケットラックサーバー。',
    mainImage: '/products/servers/dfx-dh216-v2/main.png',
    category: 'cpu-server',
    meta: {
      title: 'DFX Server DH216 V2 | Starseeds Digital',
      description: '仮想化、ビッグデータ、AI推論に最適な次世代の2U1ソケットラックサーバー。高性能、柔軟な拡張性、高信頼性を実現。'
    },
    hero: { title: 'DFX Server DH216 V2', subtitle: '仮想化、ビッグデータ、AI推論に最適な2U1ソケットラックサーバー。', image: '/products/servers/dfx-dh216-v2/main.png' },
    introduction: { 
      title: '次世代の2U1ソケットラックサーバー', 
      description: 'DFX Server DH216 V2は、仮想化、ビッグデータ、データベース、クラウドシナリオ、AI推論、小規模企業などのニーズに応えて開発した、幅広く利用されている次世代の2U1ソケットラックサーバーです。インターネット、エンタープライズ、通信キャリアおよびその他の複雑なワークロードに適しています。高性能、柔軟な拡張性、高信頼性、容易な管理、容易な導入などのメリットを備えています。',
      image: '/products/servers/dfx-dh216-v2/00.png',
      imageFlip: true,
      bullets: [
        '主な運用: 仮想化、ビッグデータ、AI推論',
        '主なメリット: 高性能、柔軟な拡張性、高信頼性、容易な管理、容易な導入'
      ]
    },
    features: [
      {
        title: '最適なCPUとGPUのバランス',
        description: '1×CPU＋4×デュアル幅GPUカードに対応、または1×CPU＋10×シングル幅GPUカードに対応',
        image: '/products/servers/dfx-dh216-v2/01.png',
        imagePosition: 'right'
      },
      {
        title: '互換性の向上',
        description: '多様なGPUアクセラレーターカードに対応',
        image: '/products/servers/dfx-dh216-v2/02.png',
        imagePosition: 'bottom'
      },
      {
        title: 'より強力な汎用コンピューティングパフォーマンス',
        description: '192コアのCPUを１つ対応（最大TDP 500W）、SPECテストで世界第1位を獲得（2025年4月16日時点のデータによる）',
        image: '/products/servers/dfx-dh216-v2/03.png',
        imagePosition: 'bottom'
      }
    ],
    reliability: [
      {
        title: '卓越した放熱性能',
        description: '独自の放熱技術MPC-PID2.0により50℃以上の環境でもサーバーが安定稼働を実現',
        image: '/products/servers/dfx-dh216-v2/05.png'
      },
      {
        title: '優れた省エネルギー性能',
        description: '動的なバス電圧調整技術により、サーバーの消費電力を最小化、SPECPowerテストで世界第1位を獲得（2025年4月16日時点のデータによる）',
        image: '/products/servers/dfx-dh216-v2/06.png'
      }
    ],
    security: [
      {
        title: '業界をリードするセキュリティ技術',
        description: 'セキュリティ認証：CC EAL4+認証、高度な脅威に対する実証済みのセキュリティを提供｜データ保護認証：FIPS認証、機密情報に対する強固なデータ保護と暗号化を実現',
        image: '/products/servers/dfx-dh216-v2/04.png'
      }
    ],
    energySaving: { image: '', points: [] },
    oandm: { features: [] },
    specs: [],
    shortFeatures: [],
    showSecurity: true,
    showSpecs: false
  },
  {
    id: 'dfx-dh520g-v1',
    order: 14,
    displayType: 'fullpage',
    name: 'DFX Server DH520G V1',
    description: '大容量ストレージAIのニーズに応えた次世代の4U2ソケットAIサーバー',
    mainImage: '/products/servers/dfx-dh520g-v1/main.png',
    category: 'gpu-server',
    meta: {
      title: 'DFX Server DH520G V1 | Starseeds Digital',
      description: '大容量ストレージAIのニーズに応えた次世代の4U2ソケットAIサーバー。強力な性能、高い信頼性、省エネルギー、容易な管理を備え、音声、画像、ビデオ分析などのAIワークロードに最適。'
    },
    hero: { 
      title: 'DFX Server DH520G V1', 
      subtitle: '大容量ストレージと高性能GPUを搭載した4U2ソケットAIサーバー', 
      image: '/products/servers/dfx-dh520g-v1/main.png' 
    },
    introduction: { 
      title: '次世代の4U2ソケットAIサーバー', 
      description: 'DFX Server DH520G V1は、大容量ストレージAIのニーズに応えた次世代の4U2ソケットAIサーバーです。DH520G V1は、強力な性能、高い信頼性と安全性、効率的な省エネルギー、容易な管理、容易な導入などの特長を備えており、トレーニングと推論のワークロードに利用でき、音声、画像、ビデオ分析などのシナリオに適します。', 
      image: '/products/servers/dfx-dh520g-v1/00.jpg' 
    },
    features: [
      {
        title: '超大容量ストレージ',
        description: 'AIワークロードに必要な大容量データを格納できる、柔軟なストレージ構成をサポート。多様なドライブオプションで、あらゆるストレージニーズに対応します。',
        image: '/products/servers/dfx-dh520g-v1/01.jpg',
        bullets: [
          '最大28×2.5/3.5インチSAS/SATAハードディスクに対応',
          '最大4×NVMe SSDに対応',
          '2×M.2 SSDに対応'
        ]
      },
      {
        title: '柔軟な拡張性',
        description: '豊富な拡張スロットにより、将来的なニーズにも柔軟に対応。ネットワークやストレージの拡張が容易に行えます。',
        image: '/products/servers/dfx-dh520g-v1/02.jpg',
        bullets: [
          '最大10×標準PCIe拡張スロットに対応',
          '2×OCP 3.0ネットワークカードに対応'
        ]
      },
      {
        title: '極めて優れた演算能力',
        description: '最新世代のIntel Xeonプロセッサーと高性能GPUの組み合わせにより、大規模なAIトレーニングと推論を高速に処理します。',
        image: '/products/servers/dfx-dh520g-v1/03.jpg',
        bullets: [
          '第4/5世代インテル®Xeon®スケーラブルプロセッサー、プロセッサーあたり最大TDP 350W対応',
          '4×フルハイトフルレングスデュアル幅のGPUカードに対応',
          'GPUパススルー設計により、CPUとGPU間の通信にPCIeスイッチが不要'
        ]
      }
    ],
    reliability: [
      {
        title: 'ヒートシンクあたりの放熱性能が50%向上',
        description: 'ヒートパイプ拡張放熱技術により、優れた放熱とより強い温度適応性を実現',
        image: '/products/servers/dfx-dh520g-v1/04.jpg'
      },
      {
        title: 'システムのダウンタイムが66%削減',
        description: '自社開発したAIメモリー障害自己修復機能により、システムの安定稼働を保証',
        image: '/products/servers/dfx-dh520g-v1/05.jpg'
      }
    ],
    energySaving: { 
      image: '/products/servers/dfx-dh520g-v1/06.jpg',
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
      { label: '電源モジュール', value: '4台のホットスワップ対応の電源モジュール。PSU1とPSU2、PSU3とPSU4は1+1冗長対応。オプション仕様：1500W Platinum PSU、2000W Platinum/Titanium PSU' },
      { label: '管理', value: 'iBMCチップによる包括的な管理機能。Redfish、SNMP、IPMI 2.0などの標準インターフェース対応。HTML5/VNC KVMベースのリモート管理UI。オプションのFusionDirector管理ソフトウェアで高度な管理機能を提供' },
      { label: 'OS', value: 'xFusion FusionOS、Microsoft Windows Server、SUSE Linux Enterprise Server、VMware ESXi、Red Hat Enterprise Linux、CentOS、Oracle、Ubuntu、Debian、openEuler' },
      { label: 'セキュリティ特性', value: 'パワーオンパスワード、管理者パスワード、TPM 2.0、セキュリティベゼル、セキュアブート、カバーオープン検知' },
      { label: '動作温度', value: '5°C～35°C（ASHRAE Class A1/A2に準拠）' },
      { label: '認証', value: 'CE、UL、CCC、FCC、VCCI、RoHS' },
      { label: '取り付けレール', value: 'L型レール、伸縮レール、ホールディングレール' },
      { label: '寸法（高さ×幅×奥行）', value: '175mm×447mm×798mm' }
    ],
    shortFeatures: [],
  },
  {
    id: 'dfx-sh560g-v1',
    order: 15,
    displayType: 'fullpage',
    name: 'DFX Server SH560G V1',
    description: '最大10×デュアル幅GPUカードをサポートする次世代の4U2ソケットAIサーバー',
    mainImage: '/products/servers/dfx-sh560g-v1/main.png',
    category: 'gpu-server',
    meta: {
      title: 'DFX Server SH560G V1 | Starseeds Digital',
      description: '最大10×デュアル幅GPUカードをサポートする次世代の4U2ソケットAIサーバー。AIトレーニング、AI推論、HPC、画像解析・動画解析などのアプリケーションを高速化。'
    },
    hero: { title: 'DFX Server SH560G V1', subtitle: '最大10×デュアル幅GPUカード対応の4U2ソケットAIサーバー', image: '/products/servers/dfx-sh560g-v1/main.png' },
    introduction: { 
      title: '次世代の4U2ソケットAIサーバー', 
      description: 'DFX Server SH560G V1は、次世代の4U2ソケットAIサーバーです。最大10×デュアル幅GPUカードをサポートし、4×標準PCIeカードと3×OCPカードの拡張能力を備えています。また、24×3.5インチハードディスクまたは12×NVMe SSDに対応することで、超大容量または超高速ストレージを提供します。SH560G V1は、高性能、柔軟なアーキテクチャ、高信頼性、容易な導入、容易な管理などのメリットを備えています。SH560G V1は、AIトレーニング、AI推論、HPC、画像解析・動画解析、データベースなどのアプリケーションを高速化し、エンタープライズとパブリッククラウドの展開に対応します。', 
      image: '/products/servers/dfx-sh560g-v1/main.png' 
    },
    features: [
      {
        title: '比類ない演算能力',
        description: '最新世代のIntel Xeonプロセッサーと最大10枚のデュアル幅GPUカードの組み合わせにより、業界トップクラスのAI演算性能を実現します。',
        image: '/products/servers/dfx-sh560g-v1/01.jpg',
        bullets: [
          '第4/5世代インテル®Xeon®スケーラブルプロセッサー、最大TDP 385W対応、強力なパフォーマンスを提供',
          '最大10×デュアル幅GPUカードに対応し、業界の一般的に8×GPUカードを搭載したサーバーと比較して、25%のAI演算能力向上を実現'
        ]
      },
      {
        title: '柔軟なストレージ構成',
        description: '大容量HDDと高速NVMe SSDの両方に対応し、ワークロードに応じた最適なストレージ構成が可能です。',
        image: '/products/servers/dfx-sh560g-v1/02.jpg',
        bullets: [
          '24×3.5インチハードディスク：柔軟な構成',
          '12×NVMe SSD：柔軟な構成'
        ]
      },
      {
        title: '多数のI/O',
        description: '豊富なメモリスロットと拡張スロットにより、大規模なAIワークロードに必要な高速データ転送を実現します。',
        image: '/products/servers/dfx-sh560g-v1/03.jpg',
        imagePosition: 'left',
        bullets: [
          '32×5600MT/s対応のDDR5 DIMMをサポート',
          '8×デュアル幅GPUカード構成時、6×標準PCIeカード＋3×OCPネットワークカードを構成することで、強力な拡張機能を提供可能',
          'CPUとGPU間の通信がx32（業界平均のx16よりも1倍増加）の帯域幅をサポートすることで、CPUとGPU間の通信に広い帯域幅が必要なシナリオの要件を満たす'
        ]
      },
      {
        title: '先進的な技術設計',
        description: 'GPUDirect対応とRetimer不要設計により、高速データ転送と低遅延を実現。大規模クラスター展開に最適化されています。',
        image: '/products/servers/dfx-sh560g-v1/04.jpg',
        imagePosition: 'right',
        bullets: [
          'GPUDirect対応：GPUDirect Storage/RDMA/P2Pに対応し、大規模なクラスター展開に最適',
          'ワンクリックでのトポロジー切り替え：ソフトウェアによるカスケードトポロジーとバランス型トポロジーの切り替えをサポートし、さまざまなシナリオに柔軟に対応できます',
          'Retimer不要なチップ設計：PCIe Retimerフリーの設計により、PCIeレーンの遅延とシステムの消費電力を削減'
        ]
      }
    ],
    reliability: [
      {
        title: '高い信頼性と可用性',
        description: '優れた放熱設計で動作温度5℃～35℃（41℉～95℉）をサポート。4×高効率3000W Titanium PSUを搭載でき、N+N/N+M冗長に対応。6 or 8カスタマイズされた8080+ファンを搭載でき、N+1冗長に対応し、システムの安定稼働を保証します。',
        image: '/products/servers/dfx-sh560g-v1/05.jpg'
      }
    ],
    energySaving: { image: '', points: [] },
    oandm: { features: [] },
    specs: [],
    shortFeatures: [],
    showSpecs: false
  },
  {
    id: 'dfx-dh880',
    order: 16,
    displayType: 'fullpage',
    name: 'DFX Server DH880',
    description: '製品ページ準備中',
    mainImage: '/products/servers/dfx-dh880/main.png',
    category: 'gpu-server',
    meta: {
      title: 'DFX Server DH880 | Starseeds Digital',
      description: '製品ページ準備中'
    },
    hero: { title: 'DFX Server DH880', subtitle: '', image: '/products/servers/dfx-dh880/main.png' },
    introduction: { title: '', description: '', image: '' },
    features: [],
    reliability: [],
    energySaving: { image: '', points: [] },
    oandm: { features: [] },
    specs: [],
    shortFeatures: [],
  },
];
