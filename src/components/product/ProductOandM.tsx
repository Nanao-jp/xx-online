'use client';

import { ServerProduct } from '@/data/types';
import { Rocket, Gauge, Search, LucideIcon, Zap, ArrowUpCircle } from 'lucide-react';

type ProductOandMProps = {
  oandm: ServerProduct['oandm'];
}

const iconMap: { [key: string]: LucideIcon } = {
  Rocket: Rocket,
  Gauge: Gauge,
  Search: Search,
  Zap: Zap,
  'arrow-up-circle': ArrowUpCircle,
  // 小文字のキーも対応
  rocket: Rocket,
  gauge: Gauge,
  search: Search,
  zap: Zap,
};

export function ProductOandM({ oandm }: ProductOandMProps) {
  if (!oandm || oandm.features.length === 0) {
    return null;
  }
  
  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border-t-4 border-orange-500 overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            インテリジェントなO&M
          </h2>
          {oandm.subtitle && (
            <p className="mt-3 text-orange-200 tracking-wide">{oandm.subtitle}</p>
          )}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-1 w-16 bg-gradient-to-r from-orange-400 to-orange-300 rounded-full"></div>
            <div className="h-1 w-8 bg-orange-300 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {oandm.features.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div 
                key={feature.title} 
                className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 flex flex-col items-center text-center"
              >
                {IconComponent && (
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-5 rounded-2xl mb-6 shadow-lg">
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                
                <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-transparent rounded-full mx-auto mb-4"></div>
                
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
