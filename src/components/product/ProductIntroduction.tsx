import Image from 'next/image';
import { Product } from '@/data/products';

type ProductIntroductionProps = {
  content: Product['introduction'];
}

export function ProductIntroduction({ content }: ProductIntroductionProps) {
  return (
    <section className="relative h-[60vh]">
      <Image
        src={content.image}
        alt={content.title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {content.title}
          </h2>
          <p className="mt-6 text-lg text-gray-200 leading-8">
            {content.description}
          </p>
        </div>
      </div>
    </section>
  );
}
