'use client';

import { allProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';

type RelatedProductsProps = {
  currentProductId: string;
}

export function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  const relatedProducts = allProducts.filter((p) => p.id !== currentProductId);

  // If no related products, don't render the section
  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            関連製品
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
