'use client';

import { useState } from 'react';
import { Brain, Server, Zap, Box, Network, Cable, Lightbulb, Users, Target, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              AIデータセンター向けエンドツーエンドソリューションを提供し、計画・構築・運営までを一貫して支援します。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              AI駆動のビジネス革新と持続可能な成長を実現し、社会のスマート化を推進します。
            </p>
          </div>
        </section>

        {/* 優位性セクション */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                私たちの強み
              </h2>
              <p className="text-lg text-gray-600">
                革新的なテクノロジーと確かなパートナーシップで、お客様のビジネスを支えます
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">革新的なテクノロジー</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  AI技術の発展に合わせて、AIデータセンターソリューションの提供に注力し、革新的で先進的なDC AIソリューションを提供
                </p>
              </div>
              
              <div className="bg-white p-10 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">強力なパートナーネットワーク</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  世界をリードする技術サプライヤーや業界リーダーと協力関係を構築し、リソースを共有、統合ソリューションを提供し市場競争力を強化
                </p>
              </div>
              
              <div className="bg-white p-10 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">カスタマイズソリューション</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  ニーズに応えるカスタマイズネットワークソリューションを提供し、各データセンターがビジネス目標や性能要件を確実に満たせるよう支援
                </p>
              </div>
              
              <div className="bg-white p-10 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Wrench className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">プロフェッショナルサポート</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  経験豊富なネットワークエンジニアと専門家チームが、プロフェッショナルなコンサルティング、実装、そして継続的なサポートサービスを提供
                </p>
              </div>
            </div>
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
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    E2E AIデータセンターソリューション
                  </h2>
                  <p className="text-lg text-gray-600">
                    GPUサーバー、ストレージサーバー、液冷CDU、コンテナー、スイッチ、光モジュールをカバーする<br />
                    総合的なAIデータセンターソリューションで、効率的かつ迅速な展開をサポート
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">GPUサーバー</h3>
                    <p className="text-gray-600 mb-4">
                      AI学習・推論に最適化された高性能GPUサーバー。NVIDIA H100/H200/B200などの最新GPUを搭載し、大規模AI処理を実現します。
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        最大8基のGPU搭載可能
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        液冷・空冷対応
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                      <Server className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">ストレージサーバー</h3>
                    <p className="text-gray-600 mb-4">
                      大容量データセットの保存と高速アクセスを実現する、AI/ML向けストレージソリューション。PBスケールの拡張性を提供します。
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        大容量・高速アクセス
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        スケーラブル設計
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">液冷CDU</h3>
                    <p className="text-gray-600 mb-4">
                      先進的な液冷技術により、高密度GPUサーバーの効率的な冷却を実現。省エネルギーとサステナビリティを両立します。
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        高効率冷却
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        大幅な電力削減
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                      <Box className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">コンテナー</h3>
                    <p className="text-gray-600 mb-4">
                      モジュール型コンテナデータセンターで、迅速な展開と柔軟な拡張を実現。短期間で大規模AI処理環境を構築できます。
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        迅速な展開
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        柔軟な拡張性
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                      <Network className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">スイッチ</h3>
                    <p className="text-gray-600 mb-4">
                      400G/800Gに対応した高速ネットワークスイッチ。AI/MLワークロードの膨大なデータ転送を低遅延で処理します。
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        400G/800G対応
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        超低遅延
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                      <Cable className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">光モジュール</h3>
                    <p className="text-gray-600 mb-4">
                      100G/200G/400G/800Gの高速光トランシーバーとケーブル。データセンター内外の高速・長距離通信を実現します。
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                        最大800G対応
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                        長距離伝送
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Integrated Connection Solutions */}
            {activeTab === 'integrated-connection' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    統合接続ソリューション
                  </h2>
                  <p className="text-lg text-gray-600">
                    データセンター内外の高速接続を実現する光トランシーバーとケーブルソリューション<br />
                    100Gから800Gまで幅広いラインナップで、あらゆる接続ニーズに対応
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                      <Cable className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">光トランシーバー</h3>
                    <p className="text-gray-600 mb-4">
                      100G/200G/400G/800Gに対応した高性能光トランシーバー。SR/DR/FR/LR/ZR等の多様な規格で、短距離から長距離まで対応します。
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        100G〜800G対応
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        多様な規格対応
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        QSFP28/QSFP56/QSFP-DD/OSFP
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6">
                      <Network className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">AOCケーブル</h3>
                    <p className="text-gray-600 mb-4">
                      アクティブ光ケーブル（AOC）で、ラック間やサーバー間の高速・低遅延接続を実現。柔軟性と信頼性を両立します。
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                        最大800G対応
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                        低消費電力
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                        柔軟で軽量
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mb-6">
                      <Cable className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">DACケーブル</h3>
                    <p className="text-gray-600 mb-4">
                      ダイレクトアタッチ銅ケーブル（DAC）で、短距離接続におけるコスト効率的なソリューション。高速データ転送を実現します。
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                        最大800G対応
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                        コスト効率的
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                        短距離接続に最適
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                      <Network className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">MPOケーブル</h3>
                    <p className="text-gray-600 mb-4">
                      マルチファイバーMPO/MPTケーブルで、高密度配線と効率的な接続管理を実現。データセンターの省スペース化に貢献します。
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        高密度配線
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        12/24芯対応
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        ブレイクアウト対応
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">ネットワーク統合設計</h3>
                    <p className="text-gray-600 mb-4">
                      データセンター全体のネットワーク接続を最適化。トポロジー設計から配線、運用管理までトータルサポートします。
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                        最適化設計
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                        冗長性確保
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                        運用管理支援
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6">
                      <Server className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">コンサルティング</h3>
                    <p className="text-gray-600 mb-4">
                      お客様のニーズに応じた最適な接続ソリューションを提案。性能要件、予算、将来の拡張性を考慮した設計をご提供します。
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                        要件定義支援
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                        コスト最適化
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                        継続的サポート
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
