import Image from 'next/image';
import { ProductFeature } from '@/data/products';

type ProductReliabilityProps = {
  features: ProductFeature[];
}

export function ProductReliability({ features }: ProductReliabilityProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            高い信頼性と安全性
          </h2>
        </div>
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`relative w-full h-[50vh] rounded-2xl overflow-hidden ${index > 0 ? 'mt-16' : ''}`}
          >
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover"
            />
            {index % 2 === 0 ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/50"></div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 px-8">
                  <h3 className="text-3xl font-bold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-lg text-gray-600 leading-8">
                    {feature.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/50"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/2 px-8">
                  <h3 className="text-3xl font-bold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-lg text-gray-600 leading-8">
                    {feature.description}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
