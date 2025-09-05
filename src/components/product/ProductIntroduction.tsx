import Image from 'next/image';
import { Product } from '@/data/products';

type ProductIntroductionProps = {
  content: Product['introduction'];
}

export function ProductIntroduction({ content }: ProductIntroductionProps) {
  return (
    <section className="bg-gray-900 md:relative md:h-[60vh]">
      {/* Background Image for Desktop */}
      <div className="hidden md:block">
        <Image
          src={content.image}
          alt={content.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        {/* Mobile Layout */}
        <div className="md:hidden pt-16 pb-12">
          <div className="relative w-full aspect-video">
            <Image
              src={content.image}
              alt={content.title}
              fill
              className="object-contain"
            />
          </div>
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              {content.title}
            </h2>
            <p className="mt-4 text-lg text-gray-300 leading-8">
              {content.description}
            </p>
          </div>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center h-full">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {content.title}
            </h2>
            <p className="mt-6 text-lg text-gray-200 leading-8">
              {content.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
