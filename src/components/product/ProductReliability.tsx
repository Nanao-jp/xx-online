import Image from 'next/image';
import { ServerProduct } from '@/data/types';

type ProductReliabilityProps = {
  features: ServerProduct['reliability'];
}

export function ProductReliability({ features }: ProductReliabilityProps) {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            高い信頼性と安全性
          </h2>
        </div>
        <div className="space-y-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              <div className={`relative w-full h-80 rounded-lg overflow-hidden ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  {feature.title}
                </h3>
                <p className="mt-4 text-lg text-gray-600 leading-8">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
