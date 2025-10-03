import Image from 'next/image';
import { ServerProduct } from '@/data/types';

type ProductReliabilityProps = {
  features: ServerProduct['reliability'];
}

export function ProductReliability({ features }: ProductReliabilityProps) {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            高い信頼性と安全性
          </h2>
        </div>
      </div>
      
      <div className="space-y-20">
        {features.map((feature, index) => (
          <div key={index}>
            <div className="relative w-full aspect-video md:h-[600px] overflow-hidden">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className={`object-cover ${
                  feature.imagePosition === 'top' ? 'object-top' :
                  feature.imagePosition === 'bottom' ? 'object-bottom' :
                  feature.imagePosition === 'left' ? 'object-left' :
                  feature.imagePosition === 'right' ? 'object-right' :
                  'object-center'
                }`}
                sizes="100vw"
              />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mt-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  {feature.title}
                </h3>
                <p className="mt-4 text-lg text-gray-600 leading-8">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
