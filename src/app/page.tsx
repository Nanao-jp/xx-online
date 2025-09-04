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
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight tracking-tight">
            ITインフラを<br />革新する
          </h1>
        </div>
      </section>

      {/* Products Showcase Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              取り扱い製品
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              データセンターから企業ネットワークまで、ITインフラの全領域をカバーする高品質な製品群
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

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gray-900 rounded-3xl p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                お客様のITインフラニーズに最適な製品をご提案
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                専門エンジニアがお客様の要件をヒアリングし、最適な製品構成をご提案いたします
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-orange-600 text-white px-8 py-3 rounded-xl hover:bg-orange-700 transition-colors duration-300 font-medium">
                  製品カタログ請求
                </button>
                <button className="border border-gray-600 text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors duration-300 font-medium">
                  技術相談予約
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}