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
    <section className="bg-white pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              {hero.title}
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-8">
              {hero.subtitle}
            </p>
          </div>
          <div className="relative w-full h-64 sm:h-80 lg:h-96">
            <Image
              src={hero.image}
              alt={hero.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
