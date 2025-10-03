import Image from 'next/image';
import { ServerProduct } from '@/data/types';

type ProductFeaturesProps = {
  features: ServerProduct['features'];
}

export function ProductFeatures({ features }: ProductFeaturesProps) {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-center"
            >
              <div className={`relative w-full aspect-video md:h-80 md:aspect-auto rounded-lg overflow-hidden ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
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
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                  {feature.title}
                </h2>
                <p className="mt-6 text-lg text-gray-600 leading-8">
                  {feature.description}
                </p>
                {feature.bullets && (
                  <ul className="mt-6 space-y-4">
                    {feature.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
                        <p className="text-gray-700">{bullet}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
