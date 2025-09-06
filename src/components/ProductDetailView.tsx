import Image from 'next/image';
import { Product } from '@/data/types';
import { isServerProduct } from '@/utils/typeGuards';
import { CheckCircle } from 'lucide-react';

import ProductHero from './product/ProductHero';
import { ProductIntroduction } from './product/ProductIntroduction';
import { ProductFeatures } from './product/ProductFeatures';
import { ProductReliability } from './product/ProductReliability';
import { ProductEnergySaving } from './product/ProductEnergySaving';
import { ProductOandM } from './product/ProductOandM';
import { ProductSpecs } from './product/ProductSpecs';

export default function ProductDetailView({ product }: { product: Product }) {
  if (isServerProduct(product)) {
    // Full Page View for Server Products
    return (
      <>
        <ProductHero product={product} />
        <ProductIntroduction content={product.introduction} />
        <ProductFeatures features={product.features} />
        <ProductReliability features={product.reliability} />
        <ProductEnergySaving content={product.energySaving} />
        <ProductOandM content={product.oandm} />
        <ProductSpecs specs={product.specs} datasheetUrl={product.datasheetUrl} />
      </>
    );
  }
  
  // Modal View for Cable Products
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative w-full aspect-square bg-gray-50 rounded-lg">
          <Image
            src={product.mainImage}
            alt={product.name}
            fill
            className="object-contain p-4"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <div className="mt-6 border-t pt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">技術仕様</h2>
            {(() => {
              const mainSpecs = product.specs.filter(spec => !spec.label.includes('製品型番') && !spec.label.includes('ベンダー名'));
              const minorSpecs = product.specs.filter(spec => spec.label.includes('製品型番') || spec.label.includes('ベンダー名'));

              return (
                <>
                  <ul className="space-y-2">
                    {mainSpecs.map((spec) => (
                      <li key={spec.label} className="flex items-start text-gray-700">
                        <CheckCircle className="w-4 h-4 mt-1 text-green-500 mr-3 flex-shrink-0" />
                        <div>
                          <strong className="font-semibold">{spec.label}:</strong>
                          <span className="ml-2">{spec.value}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {minorSpecs.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <ul className="space-y-1">
                        {minorSpecs.map((spec) => (
                          <li key={spec.label} className="flex items-center text-sm text-gray-800">
                            <strong className="font-medium w-40 flex-shrink-0">{spec.label}:</strong>
                            <span className="ml-2 font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-600">{spec.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}
