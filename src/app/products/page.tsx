'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Server, Radio, Cable, Cpu, Gpu, Unplug, Usb, Waypoints } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { allProducts } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

type TabId = 'server' | 'cable' | 'transceiver';

function ProductsInner() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabId>('server');

  const resolveTab = (value: string | null | undefined): TabId | null => {
    if (!value) return null;
    const v = value.toLowerCase();
    if (v === 'server' || v === 'servers') return 'server';
    if (v === 'cable' || v === 'cables') return 'cable';
    if (v === 'transceiver' || v === 'transceivers' || v === 'optics') return 'transceiver';
    return null;
  };

  const tabs = [
    { id: 'server', label: 'サーバー', icon: Server },
    { id: 'transceiver', label: '光トランシーバー', icon: Radio },
    { id: 'cable', label: 'ケーブル', icon: Cable },
  ] as const;

  // 初期タブをクエリパラメータ ?tab= から切替（例: /products?tab=cable）
  useEffect(() => {
    const fromQuery = resolveTab(searchParams.get('tab'))
      || resolveTab(searchParams.get('category'))
      || resolveTab(searchParams.get('type'));
    const fromHash = typeof window !== 'undefined' ? resolveTab(window.location.hash?.replace('#', '')) : null;
    const next = fromQuery || fromHash;
    if (next) setActiveTab(next);
  }, [searchParams]);

  const renderEmptyState = (title: string) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 text-gray-400">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p>現在、製品情報を準備しています。</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              製品
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              スターシーズデジタルが提供するAIデータセンター向けエンドツーエンドソリューション製品をご紹介します。
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

            <div className="min-h-[400px]">
              {/* Server Products */}
              {activeTab === 'server' && (
                <div className="space-y-16">
                  {/* CPU Servers Section */}
                  <div>
                    <div className="flex items-center mb-8">
                      <div className="flex items-center bg-orange-50 px-4 py-2 rounded-full">
                        <Cpu className="w-5 h-5 text-orange-600 mr-2" />
                        <h2 className="text-lg font-bold text-orange-800">CPUサーバー</h2>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {allProducts
                        .filter((p) => p.category === 'cpu-server')
                        .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
                        .map((product) => (
                          <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                  </div>

                  {/* GPU Servers Section */}
                  <div>
                    <div className="flex items-center mb-8">
                      <div className="flex items-center bg-orange-50 px-4 py-2 rounded-full">
                        <Gpu className="w-5 h-5 text-orange-600 mr-2" />
                        <h2 className="text-lg font-bold text-orange-800">GPUサーバー</h2>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {allProducts
                        .filter(p => p.category === 'gpu-server')
                        .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
                        .map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Cable Products */}
              {activeTab === 'cable' && (
                <div className="space-y-16">
                  {/* AOC Section */}
                  <div>
                    <div className="flex items-center mb-8">
                      <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                        <Unplug className="w-5 h-5 text-blue-600 mr-2" />
                        <h2 className="text-lg font-bold text-blue-800">AOC (アクティブ光ケーブル)</h2>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {allProducts.filter((p) => p.category === 'aoc').length > 0 ? (
                        allProducts
                          .filter((p) => p.category === 'aoc')
                          .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
                          .map((product) => <ProductCard key={product.id} product={product} />)
                      ) : (
                        renderEmptyState('AOC')
                      )}
                    </div>
                  </div>

                  {/* DAC Section */}
                  <div>
                    <div className="flex items-center mb-8">
                      <div className="flex items-center bg-green-50 px-4 py-2 rounded-full">
                        <Usb className="w-5 h-5 text-green-600 mr-2" />
                        <h2 className="text-lg font-bold text-green-800">DAC (ダイレクトアタッチケーブル)</h2>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {allProducts.filter((p) => p.category === 'dac').length > 0 ? (
                        allProducts
                          .filter((p) => p.category === 'dac')
                          .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
                          .map((product) => <ProductCard key={product.id} product={product} />)
                      ) : (
                        renderEmptyState('DAC')
                      )}
                    </div>
                  </div>
                  
                  {/* MPO Section */}
                  <div>
                    <div className="flex items-center mb-8">
                      <div className="flex items-center bg-purple-50 px-4 py-2 rounded-full">
                        <Waypoints className="w-5 h-5 text-purple-600 mr-2" />
                        <h2 className="text-lg font-bold text-purple-800">MPO (多芯光ファイバーケーブル)</h2>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {allProducts.filter((p) => p.category === 'mpo').length > 0 ? (
                        allProducts
                          .filter((p) => p.category === 'mpo')
                          .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
                          .map((product) => <ProductCard key={product.id} product={product} />)
                      ) : (
                        renderEmptyState('MPO')
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Transceiver Products */}
              {activeTab === 'transceiver' && (
                <div className="space-y-16">
                  {/* 800G Section */}
                  <div>
                    <div className="flex items-center mb-8">
                      <div className="flex items-center bg-red-50 px-4 py-2 rounded-full">
                        <h2 className="text-lg font-bold text-red-800">800G</h2>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {allProducts
                        .filter(p => p.category === '800g')
                        .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
                        .map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>

                  {/* 400G Section */}
                  <div>
                    <div className="flex items-center mb-8">
                      <div className="flex items-center bg-yellow-50 px-4 py-2 rounded-full">
                        <h2 className="text-lg font-bold text-yellow-800">400G</h2>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {allProducts
                        .filter(p => p.category === '400g')
                        .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
                        .map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>

                  {/* 200G Section */}
                  <div>
                    <div className="flex items-center mb-8">
                      <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                        <h2 className="text-lg font-bold text-blue-800">200G</h2>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {allProducts
                        .filter(p => p.category === '200g')
                        .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
                        .map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>

                  {/* 100G Section */}
                  <div>
                    <div className="flex items-center mb-8">
                      <div className="flex items-center bg-green-50 px-4 py-2 rounded-full">
                        <h2 className="text-lg font-bold text-green-800">100G</h2>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {allProducts
                        .filter(p => p.category === '100g')
                        .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
                        .map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function Products() {
  return (
    <Suspense fallback={null}>
      <ProductsInner />
    </Suspense>
  );
}
