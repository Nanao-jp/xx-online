import { Product } from '@/data/products';
import Link from 'next/link';
import Image from 'next/image';

type ProductCardProps = {
  product: Product;
};

const ProductCardContent = ({ product }: { product: Product }) => (
  <>
    <div className="relative w-full aspect-square bg-gradient-to-br from-gray-50 to-orange-50/30 rounded-xl overflow-hidden mb-6 border border-gray-100">
      <Image
        src={product.mainImage}
        alt={product.name}
        fill
        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
      />
      {/* 装飾的なグラデーション */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    
    <div className="space-y-3">
      <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300 min-h-[3.5rem]">
        {product.name}
      </h3>
      
      {/* 装飾的なライン */}
      <div className="flex items-center gap-2">
        <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full"></div>
        <div className="h-0.5 w-6 bg-orange-200 rounded-full"></div>
      </div>
      
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 min-h-[2.5rem]">
        {product.description}
      </p>
    </div>
    
    {'shortFeatures' in product && product.shortFeatures && product.shortFeatures.length > 0 && (
      <div className="space-y-2 border-t border-gray-100 pt-4 mt-4">
        {product.shortFeatures.slice(0, 2).map((feature, i) => (
          <div key={i} className="flex items-center text-sm text-gray-700">
            <div className="w-2 h-2 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full mr-3 flex-shrink-0 shadow-sm"></div>
            <span>{feature}</span>
          </div>
        ))}
      </div>
    )}
  </>
);

export function ProductCard({ product }: ProductCardProps) {
  const commonClasses = "relative block bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-orange-500/50 shadow-md hover:shadow-2xl transition-all duration-300 group overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-orange-500/0 before:to-orange-500/0 hover:before:from-orange-500/5 hover:before:to-transparent before:transition-all before:duration-300";

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
