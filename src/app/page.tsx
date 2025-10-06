import Image from "next/image";
import Link from "next/link";
import { Server, HardDrive, Network, Zap, Wifi, Radio, Cable, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="IT Infrastructure Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            AI駆動の未来を創る
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            AIデータセンター向けエンドツーエンドソリューション
          </p>
        </div>
      </section>

      {/* Products Showcase Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              製品ラインナップ
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AIデータセンター構築に必要な全ての製品を提供。GPUサーバーから光モジュールまで、E2Eソリューションを実現
            </p>
          </div>

          {/* Product Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Link href="/products" className="group bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-orange-200 hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                <Server className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">サーバー</h3>
              <p className="text-sm text-gray-600 mb-3">GPU・CPUサーバー</p>
              <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-900">
                詳細を見る <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link href="/products" className="group bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-orange-200 hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                <HardDrive className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">ストレージ</h3>
              <p className="text-sm text-gray-600 mb-3">NAS・SAN・SSD</p>
              <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-900">
                詳細を見る <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link href="/products" className="group bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-orange-200 hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                <Network className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">スイッチ</h3>
              <p className="text-sm text-gray-600 mb-3">L2・L3・コア</p>
              <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-900">
                詳細を見る <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link href="/products" className="group bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-orange-200 hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">波長分離多重化</h3>
              <p className="text-sm text-gray-600 mb-3">DWDM・CWDM</p>
              <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-900">
                詳細を見る <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link href="/products" className="group bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-orange-200 hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                <Wifi className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">FTTx</h3>
              <p className="text-sm text-gray-600 mb-3">AP・OLT・ONU</p>
              <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-900">
                詳細を見る <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link href="/products" className="group bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-orange-200 hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                <Radio className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">トランスセイバー</h3>
              <p className="text-sm text-gray-600 mb-3">1.6T～10G・Coherent</p>
              <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-900">
                詳細を見る <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link href="/products" className="group bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-orange-200 hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                <Cable className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">ケーブル</h3>
              <p className="text-sm text-gray-600 mb-3">MPO・AOC・DAC・ACC・AEC</p>
              <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-900">
                詳細を見る <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            {/* Featured Product Card */}
            <Link href="/products" className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl text-white hover:from-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">全製品を見る</h3>
              <p className="text-sm text-gray-300 mb-3">7カテゴリの詳細製品</p>
              <div className="flex items-center text-sm text-gray-300 group-hover:text-white">
                製品ページへ <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          </div>

          {/* Latest News Section */}
          <div className="mt-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">最新ニュース</h2>
              <Link href="/news" className="text-orange-600 hover:text-orange-700 font-medium flex items-center">
                すべて見る <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="space-y-4">
              <Link href="/news" className="block bg-white p-6 rounded-2xl border border-gray-200 hover:border-orange-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-3">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    お知らせ
                  </span>
                  <span className="text-gray-500 text-sm ml-4">2025.10.01</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  800G OSFP光トランシーバー新製品ラインナップを拡充
                </h3>
                <p className="text-gray-600 text-sm">
                  次世代AIデータセンター向けの800G OSFP DR8/2xFR4光トランシーバーの提供を開始いたしました。
                </p>
              </Link>

              <Link href="/news" className="block bg-white p-6 rounded-2xl border border-gray-200 hover:border-orange-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    プレスリリース
                  </span>
                  <span className="text-gray-500 text-sm ml-4">2025.09.25</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  液冷CDUソリューションの国内展開を本格化
                </h3>
                <p className="text-gray-600 text-sm">
                  高密度GPU環境向けの先進的な液冷技術を活用したCDUソリューションの提供を拡大いたします。
                </p>
              </Link>

              <Link href="/news" className="block bg-white p-6 rounded-2xl border border-gray-200 hover:border-orange-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    イベント
                  </span>
                  <span className="text-gray-500 text-sm ml-4">2025.09.15</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  「AI Data Center Expo 2025」に出展いたします
                </h3>
                <p className="text-gray-600 text-sm">
                  10月23日〜25日開催の展示会にて、最新のAIデータセンターソリューションをご紹介します。
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}