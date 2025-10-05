import Image from 'next/image';
import { ServerProduct } from '@/data/types';

type ProductSecurityProps = {
  security: ServerProduct['security'];
}

export function ProductSecurity({ security }: ProductSecurityProps) {
  if (!security || security.length === 0) {
    return null;
  }

  const getPositionClasses = (position?: string) => {
    switch (position) {
      case 'top':
        return 'object-top';
      case 'bottom':
        return 'object-bottom';
      case 'left':
        return 'object-left';
      case 'right':
        return 'object-right';
      default:
        return 'object-center';
    }
  };

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 border-t-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            業界をリードするセキュリティ技術
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full"></div>
            <div className="h-1 w-8 bg-orange-200 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="space-y-24">
        {security.map((feature, index) => (
          <div key={index} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full aspect-video md:h-[600px] overflow-hidden shadow-2xl rounded-2xl">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className={`object-cover ${getPositionClasses(feature.imagePosition)}`}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                <div className="max-w-5xl">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                    {feature.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-1 w-20 bg-gradient-to-r from-orange-400 to-transparent rounded-full"></div>
                    <div className="h-1 w-10 bg-orange-400/50 rounded-full"></div>
                  </div>
                  <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

