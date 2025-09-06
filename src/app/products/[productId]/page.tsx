import type { Metadata } from 'next';
import { allProducts } from '@/data/products';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';

// Import server page components
import { ProductHero } from '@/components/product/ProductHero';
import { ProductIntroduction } from '@/components/product/ProductIntroduction';
import { ProductFeatures } from '@/components/product/ProductFeatures';
import { ProductReliability } from '@/components/product/ProductReliability';
import { ProductEnergySaving } from '@/components/product/ProductEnergySaving';
import { ProductOandM } from '@/components/product/ProductOandM';
import { ProductSpecs } from '@/components/product/ProductSpecs';
import ProductDetailView from '@/components/ProductDetailView';

const RelatedProducts = dynamic(() => import('@/components/product/RelatedProducts'));
const ProductContactCTA = dynamic(() => import('@/components/product/ProductContactCTA'));

type ProductPageProps = {
  params: { productId: string };
};

export async function generateMetadata(
  { params }: ProductPageProps
): Promise<Metadata> {
  const product = allProducts.find(p => p.id === params.productId);

  if (!product) {
    return {
      title: '製品が見つかりません',
      description: 'お探しの製品ページは見つかりませんでした。',
    };
  }
  return {
    title: product.meta.title,
    description: product.meta.description,
  };
}

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    productId: product.id,
  }));
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const product = allProducts.find(p => p.id === params.productId);

  if (!product) {
    notFound();
  }

  if (product.displayType === 'fullpage') {
    // This is not a perfect type guard, but it helps TypeScript
    const serverProduct = product as import('@/data/types').ServerProduct;
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-16">
          <ProductHero content={serverProduct.hero} />
          <ProductIntroduction content={serverProduct.introduction} />
          <ProductFeatures features={serverProduct.features} />
          <ProductReliability features={serverProduct.reliability} />
          <ProductEnergySaving content={serverProduct.energySaving} />
          <ProductOandM content={serverProduct.oandm} />
          <ProductSpecs specs={serverProduct.specs} datasheetUrl={serverProduct.datasheetUrl} />
          <RelatedProducts currentProductId={serverProduct.id} />
          <ProductContactCTA />
        </main>
      </div>
    );
  }

  // Render a simple, non-modal page for Cable products (for direct access, refresh, etc.)
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4">
            <ProductDetailView product={product} />
        </div>
      </main>
    </div>
  );
}
