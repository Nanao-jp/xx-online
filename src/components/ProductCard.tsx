import Link from 'next/link';
import { Product } from '@/data/products';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="block h-full">
      <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow flex flex-col h-full">
        <div className="relative w-full h-40 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
          <Image
            src={product.mainImage}
            alt={product.name}
            fill
            className="object-contain p-4"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{product.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
        <div className="space-y-2">
          {product.shortFeatures.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-700">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
              {feature}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
