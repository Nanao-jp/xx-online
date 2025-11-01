"use client";

import Link from "next/link";
import { Server, Radio, Cable, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title={{
          line1: "AI基盤を築き、",
          line2: {
            highlight: "無限の知能",
            normal: "の未来へ",
          },
        }}
        subtitle="Star Seeds Digital Co., Ltd."
      />

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
            <Link href="/products?tab=server" className="group bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-orange-200 hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                <Server className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">サーバー</h3>
              <p className="text-sm text-gray-600 mb-3">GPU・CPUサーバー</p>
              <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-900">
                詳細を見る <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            {/* 非表示ブロックは削除済み */}

            <Link href="/products?tab=transceiver" className="group bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-orange-200 hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                <Radio className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">トランシーバー</h3>
              <p className="text-sm text-gray-600 mb-3">1.6T～10G・Coherent</p>
              <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-900">
                詳細を見る <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link href="/products?tab=cable" className="group bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-orange-200 hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1">
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