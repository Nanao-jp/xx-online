'use client';

import { useState } from 'react';
import { Server, HardDrive, Network, Zap, Wifi, Radio, Cable, Cpu, Gpu } from "lucide-react";
import Header from "@/components/Header";
import { allProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Products() {
  const [activeTab, setActiveTab] = useState('server');

  const tabs = [
    { id: 'server', label: 'サーバー', icon: Server },
    { id: 'storage', label: 'ストレージ', icon: HardDrive },
    { id: 'switch', label: 'スイッチ', icon: Network },
    { id: 'wavelength', label: '波長分離多重化装置', icon: Zap },
    { id: 'fttx', label: 'FTTx', icon: Wifi },
    { id: 'transceiver', label: 'トランスセイバー', icon: Radio },
    { id: 'cable', label: 'ケーブル', icon: Cable },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              製品
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              XX-onlineが提供する高品質なITインフラ製品を7つのカテゴリでご紹介します。
            </p>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tab Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              <div className="bg-white rounded-2xl p-2 border border-gray-200 flex flex-wrap gap-2">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                                              onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-gray-900 text-white shadow-lg'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 mr-2" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content Area */}
            <div className="min-h-[400px]">
              {/* Server Products */}
              {activeTab === 'server' && (
                <div className="space-y-12">
                  {/* GPU Servers Section */}
                  <div>
                    <div className="flex items-center mb-8">
                      <div className="flex items-center bg-orange-50 px-4 py-2 rounded-full">
                        <Gpu className="w-5 h-5 text-orange-600 mr-2" />
                        <h2 className="text-lg font-bold text-orange-800">GPUサーバー</h2>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {allProducts.filter(p => p.category === 'gpu-server').map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>

                  {/* CPU Servers Section */}
                  <div>
                    <div className="flex items-center mb-8">
                      <div className="flex items-center bg-gray-50 px-4 py-2 rounded-full">
                        <Cpu className="w-5 h-5 text-gray-600 mr-2" />
                        <h2 className="text-lg font-bold text-gray-700">CPUサーバー</h2>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {/* TODO: CPUサーバーのデータを追加する */}
                      <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                          <Cpu className="w-8 h-8 text-orange-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">ラックサーバー</h3>
                        <p className="text-gray-600 mb-4">
                          データセンター向け高性能ラックマウントサーバー
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                            1U/2U/4U対応
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                            冗長電源対応
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                          <Cpu className="w-8 h-8 text-orange-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">ブレードサーバー</h3>
                        <p className="text-gray-600 mb-4">
                          高密度実装可能なブレードサーバーシステム
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                            高密度実装
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                            統合管理
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                          <Cpu className="w-8 h-8 text-orange-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">エッジサーバー</h3>
                        <p className="text-gray-600 mb-4">
                          エッジコンピューティング向け小型サーバー
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                            コンパクト設計
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                            低消費電力
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Storage Products */}
              {activeTab === 'storage' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                      <HardDrive className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">NASストレージ</h3>
                    <p className="text-gray-600 mb-4">
                      ネットワーク接続型ストレージシステム
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        高可用性
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        スケーラブル
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                      <HardDrive className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">SANストレージ</h3>
                    <p className="text-gray-600 mb-4">
                      高性能ストレージエリアネットワーク
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        高速アクセス
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        冗長化対応
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                      <HardDrive className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">SSDアレイ</h3>
                    <p className="text-gray-600 mb-4">
                      高速SSDストレージシステム
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        高速アクセス
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        低遅延
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Switch Products */}
              {activeTab === 'switch' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                      <Network className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">L2スイッチ</h3>
                    <p className="text-gray-600 mb-4">
                      レイヤー2ネットワークスイッチ
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        VLAN対応
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        PoE対応
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                      <Network className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">L3スイッチ</h3>
                    <p className="text-gray-600 mb-4">
                      レイヤー3ルーティングスイッチ
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        ルーティング機能
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        ACL対応
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                      <Network className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">コアスイッチ</h3>
                    <p className="text-gray-600 mb-4">
                      データセンター向け高性能コアスイッチ
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        高帯域処理
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        冗長化対応
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Wavelength Products */}
              {activeTab === 'wavelength' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                      <Zap className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">DWDM装置</h3>
                    <p className="text-gray-600 mb-4">
                      高密度波長分割多重化装置
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        80波長対応
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        長距離伝送
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                      <Zap className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">CWDM装置</h3>
                    <p className="text-gray-600 mb-4">
                      粗波長分割多重化装置
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        18波長対応
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        コスト効率
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* FTTx Products */}
              {activeTab === 'fttx' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                      <Wifi className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">AP（アクセスポイント）</h3>
                    <p className="text-gray-600 mb-4">
                      高速無線アクセスポイント
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        Wi-Fi 6/6E対応
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        MIMO技術搭載
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                      <Wifi className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">OLT装置</h3>
                    <p className="text-gray-600 mb-4">
                      光回線終端装置
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        GPON/EPON対応
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        大容量収容
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                      <Wifi className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">ONU装置</h3>
                    <p className="text-gray-600 mb-4">
                      光ネットワーク装置
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        高速通信対応
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        省電力設計
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Transceiver Products */}
              {activeTab === 'transceiver' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                      <Radio className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">1.6T</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      1.6Tbps超高速トランスセイバー
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        1.6Tbps対応
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        次世代規格
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                      <Radio className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">800G</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      800Gbps高速トランスセイバー
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        800Gbps対応
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        データセンター向け
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                      <Radio className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">400G</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      400Gbps高速トランスセイバー
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        400Gbps対応
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        高密度実装
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                      <Radio className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">200G</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      200Gbps高速トランスセイバー
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        200Gbps対応
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        中距離伝送
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                      <Radio className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">100G</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      100Gbps標準トランスセイバー
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        100Gbps対応
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        汎用性高
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                      <Radio className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">50G</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      50Gbps中速トランスセイバー
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        50Gbps対応
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        コスト効率
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                      <Radio className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">10G</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      10Gbps標準トランスセイバー
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        10Gbps対応
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        低消費電力
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                      <Radio className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Coherent</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      コヒーレント光トランスセイバー
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        長距離伝送
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        高性能DSP
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Cable Products */}
              {activeTab === 'cable' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                      <Cable className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">MPO</h3>
                    <p className="text-gray-600 mb-4">
                      多芯光ファイバーコネクタケーブル
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        高密度接続
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        低損失設計
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                      <Cable className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">AOC</h3>
                    <p className="text-gray-600 mb-4">
                      アクティブ光ケーブル
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        長距離対応
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        高速伝送
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                      <Cable className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">DAC</h3>
                    <p className="text-gray-600 mb-4">
                      ダイレクトアタッチケーブル
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        短距離高速
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        低コスト
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                      <Cable className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">ACC</h3>
                    <p className="text-gray-600 mb-4">
                      アクティブ銅線ケーブル
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        中距離対応
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        電力効率
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                      <Cable className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">AEC</h3>
                    <p className="text-gray-600 mb-4">
                      アクティブイーサネットケーブル
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        高帯域幅
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        柔軟性
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
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
