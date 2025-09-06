import { Product } from '@/data/products';
import Link from 'next/link';
import Image from 'next/image';

type ProductCardProps = {
  product: Product;
};

const ProductCardContent = ({ product }: { product: Product }) => (
  <>
    <div className="relative w-full aspect-square bg-gray-50 rounded-lg overflow-hidden mb-6">
      <Image
        src={product.mainImage}
        alt={product.name}
        fill
        className="object-contain group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2 truncate group-hover:text-orange-600 transition-colors">
      {product.name}
    </h3>
    <p className="text-gray-600 text-sm mb-4 h-10 overflow-hidden">
      {product.description}
    </p>
    
    {'shortFeatures' in product && product.shortFeatures && (
      <div className="space-y-2 border-t pt-4">
        {product.shortFeatures.slice(0, 2).map((feature, i) => (
          <div key={i} className="flex items-center text-sm text-gray-700">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
            <span>{feature}</span>
          </div>
        ))}
      </div>
    )}
  </>
);

export function ProductCard({ product }: ProductCardProps) {
  const commonClasses = "block bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group";

  if (product.displayType === 'modal') {
    return (
      <Link href={`/products/${product.id}`} className={commonClasses} scroll={false}>
        <ProductCardContent product={product} />
      </Link>
    );
  }

  // For 'fullpage' products, use a standard link to ensure navigation.
  return (
    <a href={`/products/${product.id}`} className={commonClasses}>
      <ProductCardContent product={product} />
    </a>
  );
};
