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
      title: 'DFX Server DH116 V1 | XX-online',
      description: '強力な性能、高い信頼性、効率的な省エネルギーを兼ね備えたFusionServer G5200 V7の詳細な技術仕様と特徴をご紹介します。'
    },
    hero: {
      title: 'DFX Server DH116 V1',
      subtitle: 'AIワークロードを加速する、ストレージと拡張性に優れた4U2ソケットサーバー。',
      image: '/products/servers/dfx-dh116-v1/g5200v7-ai-server.jpg'
    },
    introduction: {
      title: '次世代の4U2ソケットAIサーバー',
      description: 'FusionServer G5200 V7は、強力な性能、高い信頼性と安全性、効率的な省エネルギー、容易な管理、容易な導入などの特長を備えており、トレーニングと推論のワークロードに利用できます。',
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
      title: 'DFX Server DH126 V1 | XX-online',
      description: '強力な性能、高い信頼性、効率的な省エネルギーを兼ね備えたFusionServer G5200 V7の詳細な技術仕様と特徴をご紹介します。'
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
      title: 'DFX Server DH120H V1 | XX-online',
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
      title: 'DFX Server DH226 V1 | XX-online',
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
    description: '（製品の短い説明文）',
    mainImage: '/products/servers/dfx-dh226h-v1/main.png',
    category: 'cpu-server',
    meta: {
      title: 'DFX Server DH226H V1 | XX-online',
      description: '（検索エンジン向けの説明文）'
    },
    hero: { title: 'DFX Server DH226H V1', subtitle: '仮想化からAI推論まで、多様なワークロードに対応する高性能2U2ソケットサーバー。', image: '/products/servers/dfx-dh226h-v1/main.png' },
    introduction: { 
      title: '次世代の2U2ソケットラックサーバー', 
      description: 'FusionServer 2258H V7は、インターネット、インターネットデータセンター（IDC）、クラウドコンピューティング、エンタープライズと電気通信サービスの運用などのニーズに応えて開発した、幅広く利用されている次世代の2U2ソケットラックサーバーです。ITコア業務、クラウドコンピューティング、仮想化、高性能計算、エンタープライズまたは電気通信サービスの運用、およびその他の複雑なワークロードに適します。',
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
      title: 'DFX Server DH220 V1 | XX-online',
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
    description: '（製品の短い説明文）',
    mainImage: '/products/servers/dfx-dh220h-v1/main.jpg',
    category: 'cpu-server',
    meta: {
      title: 'DFX Server DH220H V1 | XX-online',
      description: '（検索エンジン向けの説明文）'
    },
    hero: { title: 'DFX Server DH220H V1', subtitle: '', image: '/products/servers/dfx-dh220h-v1/main.jpg' },
    introduction: { title: '', description: '', image: '' },
    features: [],
    reliability: [],
    energySaving: { image: '', points: [] },
    oandm: { features: [] },
    specs: [],
    shortFeatures: [],
  },
  {
    id: 'dfx-dh240h-v1',
    order: 8,
    displayType: 'fullpage',
    name: 'DFX Server DH240H V1',
    description: '（製品の短い説明文）',
    mainImage: '/products/servers/dfx-dh240h-v1/main.png',
    category: 'cpu-server',
    meta: {
      title: 'DFX Server DH240H V1 | XX-online',
      description: '（検索エンジン向けの説明文）'
    },
    hero: { title: 'DFX Server DH240H V1', subtitle: '', image: '/products/servers/dfx-dh240h-v1/main.png' },
    introduction: { title: '', description: '', image: '' },
    features: [],
    reliability: [],
    energySaving: { image: '', points: [] },
    oandm: { features: [] },
    specs: [],
    shortFeatures: [],
  },
  {
    id: 'dfx-dh520-v2',
    order: 9,
    displayType: 'fullpage',
    name: 'DFX Server DH520 V2',
    description: '（製品の短い説明文）',
    mainImage: '/products/servers/dfx-dh520-v2/main.png',
    category: 'cpu-server',
    meta: {
      title: 'DFX Server DH520 V2 | XX-online',
      description: '（検索エンジン向けの説明文）'
    },
    hero: { title: 'DFX Server DH520 V2', subtitle: '', image: '/products/servers/dfx-dh520-v2/main.png' },
    introduction: { title: '', description: '', image: '' },
    features: [],
    reliability: [],
    energySaving: { image: '', points: [] },
    oandm: { features: [] },
    specs: [],
    shortFeatures: [],
  },
  {
    id: 'dfx-dh520s-v2',
    order: 10,
    displayType: 'fullpage',
    name: 'DFX Server DH520S V2',
    description: '（製品の短い説明文）',
    mainImage: '/products/servers/dfx-dh520s-v2/main.png',
    category: 'cpu-server',
    meta: {
      title: 'DFX Server DH520S V2 | XX-online',
      description: '（検索エンジン向けの説明文）'
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
    description: '（製品の短い説明文）',
    mainImage: '/products/servers/dfx-dh226h-v2/main.png',
    category: 'cpu-server',
    meta: {
      title: 'DFX Server DH226H V2 | XX-online',
      description: '（検索エンジン向けの説明文）'
    },
    hero: { title: 'DFX Server DH226H V2', subtitle: '', image: '/products/servers/dfx-dh226h-v2/main.png' },
    introduction: { title: '', description: '', image: '' },
    features: [],
    reliability: [],
    energySaving: { image: '', points: [] },
    oandm: { features: [] },
    specs: [],
    shortFeatures: [],
  },
  {
    id: 'dfx-dh216-v2',
    order: 13,
    displayType: 'fullpage',
    name: 'DFX Server DH216 V2',
    description: '（製品の短い説明文）',
    mainImage: '/products/servers/dfx-dh216-v2/main.png',
    category: 'cpu-server',
    meta: {
      title: 'DFX Server DH216 V2 | XX-online',
      description: '（検索エンジン向けの説明文）'
    },
    hero: { title: 'DFX Server DH216 V2', subtitle: '', image: '/products/servers/dfx-dh216-v2/main.png' },
    introduction: { title: '', description: '', image: '' },
    features: [],
    reliability: [],
    energySaving: { image: '', points: [] },
    oandm: { features: [] },
    specs: [],
    shortFeatures: [],
  },
  {
    id: 'dfx-dh520g-v1',
    order: 14,
    displayType: 'fullpage',
    name: 'DFX Server DH520G V1',
    description: '（製品の短い説明文）',
    mainImage: '/products/servers/dfx-dh520g-v1/main.png',
    category: 'gpu-server',
    meta: {
      title: 'DFX Server DH520G V1 | XX-online',
      description: '（検索エンジン向けの説明文）'
    },
    hero: { title: 'DFX Server DH520G V1', subtitle: '', image: '/products/servers/dfx-dh520g-v1/main.png' },
    introduction: { title: '', description: '', image: '' },
    features: [],
    reliability: [],
    energySaving: { image: '', points: [] },
    oandm: { features: [] },
    specs: [],
    shortFeatures: [],
  },
  {
    id: 'dfx-sh560g-v1',
    order: 15,
    displayType: 'fullpage',
    name: 'DFX Server SH560G V1',
    description: '（製品の短い説明文）',
    mainImage: '/products/servers/dfx-sh560g-v1/main.png',
    category: 'gpu-server',
    meta: {
      title: 'DFX Server SH560G V1 | XX-online',
      description: '（検索エンジン向けの説明文）'
    },
    hero: { title: 'DFX Server SH560G V1', subtitle: '', image: '/products/servers/dfx-sh560g-v1/main.png' },
    introduction: { title: '', description: '', image: '' },
    features: [],
    reliability: [],
    energySaving: { image: '', points: [] },
    oandm: { features: [] },
    specs: [],
    shortFeatures: [],
  },
  {
    id: 'dfx-dh880',
    order: 16,
    displayType: 'fullpage',
    name: 'DFX Server DH880',
    description: '（製品の短い説明文）',
    mainImage: '/products/servers/dfx-dh880/main.png',
    category: 'gpu-server',
    meta: {
      title: 'DFX Server DH880 | XX-online',
      description: '（検索エンジン向けの説明文）'
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
