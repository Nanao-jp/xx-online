import Image from 'next/image';
import { ProductEnergySavingPoint } from '@/data/products';
import { BatteryCharging, ThermometerSun, Gauge } from 'lucide-react';
import { ElementType } from 'react';

// Icon mapping
const iconMap: { [key: string]: ElementType } = {
  BatteryCharging,
  ThermometerSun,
  Gauge,
};

type ProductEnergySavingProps = {
  content: {
    image: string;
    points: ProductEnergySavingPoint[];
    imagePosition?: 'top' | 'center' | 'bottom';
  };
}

export function ProductEnergySaving({ content }: ProductEnergySavingProps) {
  // To ensure Tailwind's JIT compiler detects the classes, we list them completely.
  const getPositionClasses = () => {
    switch (content.imagePosition) {
      case 'top':
        return 'object-top lg:object-center';
      case 'bottom':
        return 'object-bottom lg:object-center';
      case 'center':
      default:
        return 'object-center';
    }
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-12 items-center">
          
          {/* Image on the left */}
          <div className="relative w-full aspect-video lg:h-[70vh] lg:aspect-auto rounded-2xl overflow-hidden order-last lg:order-first">
            <Image
              src={content.image}
              alt="効率的な省エネ"
              fill
              className={`object-cover ${getPositionClasses()}`}
            />
          </div>

          {/* Points on the right */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                効率的な省エネ
              </h2>
            </div>
            {content.points.map((point) => {
              const Icon = iconMap[point.icon];
              return (
                <div key={point.title} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
                    {Icon && <Icon className="w-6 h-6 text-orange-600" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-gray-600">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
