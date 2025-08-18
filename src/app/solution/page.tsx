'use client';

import { useState } from 'react';
import { Brain, Database, Cpu, Server, Network, Wifi, Globe, Shield } from "lucide-react";
import Header from "@/components/Header";

export default function Solution() {
  const [activeTab, setActiveTab] = useState('ai-datacenter');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              ソリューション
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              AIデータセンターと統合接続の両分野で、お客様の課題に合わせた最適なソリューションをご提案します。
            </p>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-2xl p-2 border border-gray-200">
                <button
                  onClick={() => setActiveTab('ai-datacenter')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === 'ai-datacenter'
                      ? 'bg-gray-900 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  AIデータセンターソリューション
                </button>
                <button
                  onClick={() => setActiveTab('integrated-connection')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === 'integrated-connection'
                      ? 'bg-gray-900 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  統合接続ソリューション
                </button>
              </div>
            </div>

            {/* AI Data Center Solutions */}
            {activeTab === 'ai-datacenter' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                    <Brain className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">AI処理基盤構築</h3>
                  <p className="text-gray-600 mb-4">
                    機械学習・深層学習に最適化されたGPUクラスターとストレージ基盤を構築します。
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      高性能GPUクラスター
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      分散処理最適化
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                    <Database className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">ビッグデータ管理</h3>
                  <p className="text-gray-600 mb-4">
                    大容量データの効率的な収集・保存・分析を実現するデータレイク構築を支援します。
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      データレイク構築
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      リアルタイム分析
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                    <Cpu className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">エッジAI統合</h3>
                  <p className="text-gray-600 mb-4">
                    エッジデバイスとクラウドAIを連携させた分散AI処理システムを構築します。
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      エッジ・クラウド連携
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      低遅延処理
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                    <Server className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">データセンター最適化</h3>
                  <p className="text-gray-600 mb-4">
                    AI処理に特化したデータセンターの設計・構築・運用を包括的にサポートします。
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      冷却システム最適化
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      電力効率化
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Integrated Connection Solutions */}
            {activeTab === 'integrated-connection' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                    <Network className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">SD-WAN統合</h3>
                  <p className="text-gray-600 mb-4">
                    複数拠点を安全で高速なSD-WANで接続し、統合的なネットワーク管理を実現します。
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      拠点間高速接続
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      中央集権管理
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                    <Wifi className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">5G・Wi-Fi 6統合</h3>
                  <p className="text-gray-600 mb-4">
                    5GとWi-Fi 6を統合した次世代ワイヤレスネットワークソリューションを提供します。
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      超高速通信
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      低遅延接続
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                    <Globe className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">クラウド統合接続</h3>
                  <p className="text-gray-600 mb-4">
                    マルチクラウド環境とオンプレミスを安全に接続する統合ネットワークを構築します。
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      ハイブリッド接続
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      セキュア通信
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">ゼロトラスト統合</h3>
                  <p className="text-gray-600 mb-4">
                    ゼロトラストセキュリティモデルに基づく統合認証・認可システムを構築します。
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      統合認証基盤
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      動的アクセス制御
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">XX-online</h3>
            <p className="text-gray-400">
              企業のITインフラを革新し、ビジネス成長を支援します
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
