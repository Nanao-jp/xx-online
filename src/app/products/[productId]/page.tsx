import { allProducts } from '@/data/products';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { Rocket, Gauge, Search } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    productId: product.id,
  }));
}

export default async function ProductDetailPage({ params }: { params: { productId:string } }) {
  const product = allProducts.find(p => p.id === params.productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
                  {product.name}
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-8">
                  {product.description}
                </p>
              </div>
              <div className="relative w-full h-80">
                <Image
                  src="/products/g5200v7/g5200v7-ai-server.jpg"
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Image + Text Section */}
        <section className="relative h-[60vh]">
          <Image
            src="/products/g5200v7/main.jpg"
            alt="次世代の4U2ソケットAIサーバー"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                次世代の4U2ソケットAIサーバー
              </h2>
              <p className="mt-6 text-lg text-gray-200 leading-8">
                FusionServer G5200 V7は、強力な性能、高い信頼性と安全性、効率的な省エネルギー、容易な管理、容易な導入などの特長を備えており、トレーニングと推論のワークロードに利用できます。
              </p>
            </div>
          </div>
        </section>

        {/* Large Storage & Features Section */}
        <section className="bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Large Storage */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-80 rounded-lg overflow-hidden">
                <Image
                  src="/products/g5200v7/large-storage.jpg"
                  alt="超大容量ストレージ"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                  超大容量ストレージ
                </h2>
                <p className="mt-6 text-lg text-gray-600 leading-8">
                  AIの要求に応える大容量ストレージ構成に対応。柔軟なドライブオプションで、多様なワークロードをサポートします。
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <div className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
                    <p className="text-gray-700">最大28台の3.5インチSAS/SATAドライブ</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
                    <p className="text-gray-700">最大4台のNVMe SSD</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
                    <p className="text-gray-700">2台のM.2 SSD</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Expansion & Computing Power */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {/* Flexible Expansion Card */}
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/products/g5200v7/flexible-expansion.jpg"
                  alt="柔軟な拡張性"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
                <div className="relative h-full p-8 flex flex-col justify-start">
                  <h3 className="text-3xl font-bold text-white">柔軟な拡張性</h3>
                  <ul className="mt-4 space-y-2 text-gray-200">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span>最大10×標準PCIe拡張スロットに対応</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span>2×OCP 3.0ネットワークカードに対応</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Computing Power Card */}
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/products/g5200v7/computing-power.jpg"
                  alt="極めて優れた演算能力"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
                <div className="relative h-full p-8 flex flex-col justify-start">
                  <h3 className="text-3xl font-bold text-white">極めて優れた演算能力</h3>
                  <ul className="mt-4 space-y-2 text-gray-200">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>第4/5世代インテル®Xeon®スケーラブルプロセッサーに対応</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>4×フルハイトフルレングスデュアル幅のGPUカードに対応</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>GPUパススルー設計によりPCIeスイッチが不要</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* High Reliability Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
                高い信頼性と安全性
              </h2>
            </div>
            <div className="relative w-full h-[50vh] rounded-2xl overflow-hidden">
              <Image
                src="/products/g5200v7/heat-dissipation.jpg"
                alt="高い信頼性と安全性"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/50"></div>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 px-8">
                <h3 className="text-3xl font-bold text-gray-800">
                  ヒートシンクあたりの放熱性能が50%向上
                </h3>
                <p className="mt-4 text-lg text-gray-600 leading-8">
                  ヒートパイプ拡張放熱技術により、優れた放熱とより強い温度適応性を実現
                </p>
              </div>
            </div>

            <div className="relative w-full h-[50vh] rounded-2xl overflow-hidden mt-16">
              <Image
                src="/products/g5200v7/high-reliability.jpg"
                alt="システムのダウンタイムが66%削減"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/50"></div>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/2 px-8">
                <h3 className="text-3xl font-bold text-gray-800">
                  システムのダウンタイムが66%削減
                </h3>
                <p className="mt-4 text-lg text-gray-600 leading-8">
                  自社開発したAIメモリー障害自己修復機能により、システムの安定稼働を保証
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Energy Saving Section */}
        <section className="bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
                効率的な省エネ
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
              <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden md:col-span-2">
                <Image
                  src="/products/g5200v7/energy-saving.jpg"
                  alt="効率的な省エネ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-8 md:col-span-3">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    サーバー全体の消費電力が業界平均よりも最大8%削減
                  </h3>
                  <p className="mt-2 text-lg text-gray-600">
                    自社開発したアルゴリズムにより、ファンとCPUの消費電力を最小限に抑える
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    業界をリードする電源技術、より高い効率
                  </h3>
                  <p className="mt-2 text-lg text-gray-600">
                    業界平均よりも12.5%低い電力損失を実現し、3つのコア技術で電力と効率を向上させ、業界をリードする電力変換率を提供
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    インテリジェントなサービス状況把握、動的な負荷調整
                  </h3>
                  <p className="mt-2 text-lg text-gray-600">
                    サービス負荷に応じてCPUの動作周波数を動的に調整可能
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O&M Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
                インテリジェントなO&M
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Upgrade Efficiency */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-orange-50 p-4 rounded-full mb-6">
                  <Rocket className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">20倍向上のアップグレード効率</h3>
                <p className="text-gray-600">バージョンの自動プッシュと非接触型アップグレードに対応</p>
              </div>
              {/* Deployment Efficiency */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-orange-50 p-4 rounded-full mb-6">
                  <Gauge className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">10倍向上の展開効率</h3>
                <p className="text-gray-600">75%の合理化された展開手順がツールによって実行可能</p>
              </div>
              {/* Inventory Accuracy */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-orange-50 p-4 rounded-full mb-6">
                  <Search className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">100%のインベントリー精度</h3>
                <p className="text-gray-600">すべてのベンダーのサーバーを管理可能で、資産位置の自動識別とリアルタイムの追跡に対応</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications Section */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
                技術仕様
              </h2>
            </div>
            <div className="bg-white p-8 sm:p-12 rounded-2xl border border-gray-200 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                {[
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
                ].map((spec) => (
                  <div key={spec.label} className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">{spec.label}</dt>
                    <dd className="mt-2 text-sm text-gray-500">{spec.value}</dd>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/products/g5200v7/G5200-V7-Datasheet.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
              >
                データシートをダウンロード
              </Link>
            </div>
          </div>
        </section>

        {/* New Series Products Section */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
                新シリーズ製品
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {allProducts
                .filter((p) => p.id !== product.id)
                .map((p) => (
                  <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-100 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                製品に関するお問い合わせ
              </h2>
              <p className="mt-4 mx-auto text-lg leading-8 text-gray-600">
                導入のご相談、お見積もり、技術的なご質問など、お気軽にお問い合わせください。
              </p>
              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
                >
                  お問い合わせフォームへ
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
