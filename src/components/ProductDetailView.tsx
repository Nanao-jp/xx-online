import { Product } from '@/data/products';
import Image from 'next/image';

export default function ProductDetailView({ product }: { product: Product }) {
  return (
    <div className="bg-white p-8 sm:p-12 rounded-2xl border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Column */}
        <div className="space-y-4">
          {product.featureImages && product.featureImages.length > 0 && (
            <div className="grid grid-cols-3 gap-4">
              {product.featureImages.map((image, index) => (
                <div key={index} className="relative h-24 bg-gray-100 rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Details Column */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{product.name}</h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">{product.description}</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">主な特徴</h2>
          <div className="space-y-3">
            {product.shortFeatures.map((feature, index) => (
              <div key={index} className="flex items-center text-lg text-gray-800">
                <div className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-4"></div>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
