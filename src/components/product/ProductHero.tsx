import Image from 'next/image';
import { Product } from '@/data/types';
import { isServerProduct } from '@/utils/typeGuards';

export default function ProductHero({ product }: { product: Product }) {
  // ケーブル等、hero を持たない製品は hero セクション自体を出さない
  if (!isServerProduct(product)) {
    return null;
  }

  // ここから先は ServerProduct として安全に hero を使える
  const { hero } = product;

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-orange-50 pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              {hero.title}
            </h1>
            
            {/* 装飾的なアクセントライン */}
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-3">
              <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full"></div>
              <div className="h-1 w-8 bg-orange-200 rounded-full"></div>
            </div>
            
            <p className="mt-8 text-lg lg:text-xl text-gray-600 leading-relaxed">
              {hero.subtitle}
            </p>
          </div>
          <div className="relative w-full h-64 sm:h-80 lg:h-96">
            <Image
              src={hero.image}
              alt={hero.title}
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
