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
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20 sm:py-32">
      {/* セクションヘッダー */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            製品の特長
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full"></div>
            <div className="h-1 w-8 bg-orange-200 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-center"
            >
                <div className={`relative w-full aspect-video md:h-96 md:aspect-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-200 ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
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
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10"></div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                    {feature.title}
                  </h3>
                  
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full"></div>
                    <div className="h-1 w-6 bg-orange-200 rounded-full"></div>
                  </div>
                  
                  <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  {feature.bullets && (
                    <ul className="mt-8 space-y-3">
                      {feature.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full mr-4 mt-0.5 flex items-center justify-center shadow-md">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{bullet}</p>
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
