import { Product } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetailView({ product }: { product: Product }) {
  return (
    <div className="bg-white p-8 sm:p-12 rounded-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
      {/* Modal Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{product.name}</h1>
        <p className="text-lg text-gray-600 mt-2">{product.description}</p>
      </div>
      
      {/* Main Image */}
      <div className="relative w-full h-80 bg-gray-100 rounded-lg mb-8">
        <Image
          src={product.hero.image}
          alt={product.hero.title}
          fill
          className="object-contain p-4"
        />
      </div>

      {/* Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
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
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">技術仕様（抜粋）</h2>
          <div className="space-y-4">
            {product.specs.slice(0, 4).map((spec) => (
               <div key={spec.label} className="border-t border-gray-200 pt-2">
                 <dt className="font-medium text-gray-900">{spec.label}</dt>
                 <dd className="mt-1 text-sm text-gray-500">{spec.value}</dd>
               </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Button */}
      <div className="mt-12 text-center">
        <Link 
          href={`/products/${product.id}`}
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
        >
          詳細な製品情報を見る
        </Link>
      </div>
    </div>
  );
}
