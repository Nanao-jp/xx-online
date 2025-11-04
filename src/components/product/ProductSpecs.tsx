'use client';

import { ServerProduct } from '@/data/types';
import Link from 'next/link';
import { Download, ChevronDown } from 'lucide-react';
import { useState } from 'react';

type ProductSpecsProps = {
  specs: ServerProduct['specs'];
  datasheetUrl?: ServerProduct['datasheetUrl'];
};

export function ProductSpecs({ specs, datasheetUrl }: ProductSpecsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 py-20 sm:py-32 border-t-2 border-gray-200">
      {/* 装飾的な背景 */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            技術仕様
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full"></div>
            <div className="h-1 w-8 bg-orange-200 rounded-full"></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50"
          >
            <span className="text-lg font-semibold text-gray-900">
              詳細仕様を{isOpen ? '閉じる' : '表示'}
            </span>
            <ChevronDown 
              className={`w-6 h-6 text-gray-500 transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {isOpen && (
            <div className="divide-y divide-gray-200 border-t border-gray-200">
              {specs.map((spec, index) => (
                <div 
                  key={`${spec.label}-${index}`} 
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 hover:bg-gray-50"
                >
                  <dt className="font-semibold text-gray-900">
                    {spec.label}
                  </dt>
                  <dd className="md:col-span-2 text-gray-600 leading-relaxed">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </div>
          )}
        </div>

        {datasheetUrl && (
          <div className="mt-16 text-center">
            <Link
              href={datasheetUrl}
              download
              className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-orange-500 text-base font-bold rounded-xl text-white bg-gradient-to-r from-orange-600 to-orange-500 shadow-xl"
            >
              <Download className="w-5 h-5" />
              データシートをダウンロード
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
