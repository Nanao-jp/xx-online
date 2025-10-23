import Image from "next/image";
import Link from "next/link";
import { Server, Radio, Cable, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] sm:aspect-video overflow-hidden bg-gray-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="IT Infrastructure Background"
            fill
            className="object-cover opacity-50 object-[center_30%] sm:object-center"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/40"></div>
        </div>
        
        {/* Content: 見出しを縦中央、サブテキストをその直下に配置（重なり防止のためグリッド使用） */}
        <div className="absolute inset-0 z-10 grid grid-rows-[1fr_auto_1fr] justify-items-center">
          <div className="row-start-2 text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-[48px] sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight">
              <span className="block sm:inline whitespace-nowrap">AI基盤を築き、</span>
              <span className="block sm:inline whitespace-nowrap">
                <span className="text-orange-500">無限の知能</span>
                <span>の未来へ</span>
              </span>
            </h1>
          </div>
          <div className="row-start-3 mt-4">
            <div className="inline-block">
              <p className="text-[22px] sm:text-2xl text-gray-100 font-light tracking-wider border-b-2 border-orange-500 pb-1">
                Starseeds Digital
              </p>
            </div>
          </div>
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
            {/* 非表示: ストレージ/スイッチ/波長分離多重化/FTTx のカード */}
            {/*
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
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify中心 mb-4 group-hover:bg-orange-100 transition-colors">
                <Network className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">スイッチ</h3>
              <p className="text-sm text-gray-600 mb-3">L2・L3・コア</p>
              <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-900">
                詳細を見る <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link href="/products" className="group bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-orange-200 hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-xl flex items中心 justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">波長分離多重化</h3>
              <p className="text-sm text-gray-600 mb-3">DWDM・CWDM</p>
              <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-900">
                詳細を見る <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link href="/products" className="group bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-orange-200 hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg白 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                <Wifi className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">FTTx</h3>
              <p className="text-sm text-gray-600 mb-3">AP・OLT・ONU</p>
              <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-900">
                詳細を見る <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            */}

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

          {/* 最新ニュースセクション（非表示） */}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}