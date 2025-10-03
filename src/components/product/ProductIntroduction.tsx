import Image from 'next/image';
import { ServerProduct } from '@/data/types';
import { CheckCircle2 } from 'lucide-react';

type ProductIntroductionProps = {
  content: ServerProduct['introduction'];
}

export function ProductIntroduction({ content }: ProductIntroductionProps) {
  return (
    <section className="bg-gray-900 md:relative md:h-auto md:py-24">
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight whitespace-nowrap">
              {content.title}
            </h2>
            <p className="mt-4 text-lg text-gray-300 leading-8">
              {content.description}
            </p>
            {content.bullets && (
              <ul className="mt-6 text-left inline-block">
                {content.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-center text-gray-300 mt-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base whitespace-nowrap">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center h-full">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight whitespace-nowrap">
              {content.title}
            </h2>
            <p className="mt-6 text-lg text-gray-200 leading-8">
              {content.description}
            </p>
            {content.bullets && (
              <ul className="mt-8 space-y-4">
                {content.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start text-gray-200">
                    <CheckCircle2 className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                    <span className="whitespace-nowrap">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
