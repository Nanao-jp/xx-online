import Image from 'next/image';
import { Product } from '@/data/products';

type ProductHeroProps = {
  content: Product['hero'];
}

export function ProductHero({ content }: ProductHeroProps) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              {content.title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-8">
              {content.subtitle}
            </p>
          </div>
          <div className="relative w-full h-80">
            <Image
              src={content.image}
              alt={content.title}
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
