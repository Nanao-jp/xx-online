import Image from 'next/image';
import { ServerProduct } from '@/data/types';
import { CheckCircle2 } from 'lucide-react';

type ProductIntroductionProps = {
  content: ServerProduct['introduction'];
}

export function ProductIntroduction({ content }: ProductIntroductionProps) {
  return (
    <section className="bg-gray-900 md:relative md:h-auto md:py-28 border-t-4 border-orange-500">
      {/* Background Image for Desktop */}
      <div className="hidden md:block">
        <Image
          src={content.image}
          alt={content.title}
          fill
          className={`object-cover ${content.imageFlip ? 'scale-x-[-1]' : ''}`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        {/* Mobile Layout */}
        <div className="md:hidden pt-16 pb-12">
          <div className="relative w-full aspect-video">
            <Image
              src={content.image}
              alt={content.title}
              fill
              className={`object-contain ${content.imageFlip ? 'scale-x-[-1]' : ''}`}
            />
          </div>
          <div className="mt-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {content.title}
            </h2>
            
            {/* 装飾的なライン */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
            </div>
            
            <p className="mt-6 text-lg text-gray-300 leading-8">
              {content.description}
            </p>
            {content.bullets && (
              <ul className="mt-6 text-left inline-block">
                {content.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-center text-gray-300 mt-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
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
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight whitespace-nowrap">
              {content.title}
            </h2>
            
            {/* 装飾的なライン */}
            <div className="mt-6 flex items-center gap-3">
              <div className="h-1 w-20 bg-gradient-to-r from-orange-400 to-transparent rounded-full"></div>
              <div className="h-1 w-10 bg-orange-400/50 rounded-full"></div>
            </div>
            
            <p className="mt-8 text-lg text-gray-200 leading-relaxed">
              {content.description}
            </p>
            {content.bullets && (
              <ul className="mt-8 space-y-4">
                {content.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-center text-gray-200">
                    <CheckCircle2 className="w-6 h-6 text-orange-400 mr-4 flex-shrink-0" />
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
