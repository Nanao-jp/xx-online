import { allProducts } from '@/data/products';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';

// Import newly created components
import { ProductHero } from '@/components/product/ProductHero';
import { ProductIntroduction } from '@/components/product/ProductIntroduction';
import { ProductFeatures } from '@/components/product/ProductFeatures';
import { ProductReliability } from '@/components/product/ProductReliability';
import { ProductEnergySaving } from '@/components/product/ProductEnergySaving';
import { ProductOandM } from '@/components/product/ProductOandM';
import { ProductSpecs } from '@/components/product/ProductSpecs';

// Dynamically import components that are below the fold
const RelatedProducts = dynamic(() => import('@/components/product/RelatedProducts').then(mod => mod.RelatedProducts));
const ProductContactCTA = dynamic(() => import('@/components/product/ProductContactCTA').then(mod => mod.ProductContactCTA));
// const Footer = dynamic(() => import('@/components/Footer'));


export async function generateMetadata({ params }: { params: { productId: string } }) {
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

export default async function ProductDetailPage({ params }: { params: { productId:string } }) {
  const product = allProducts.find(p => p.id === params.productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <ProductHero content={product.hero} />
        <ProductIntroduction content={product.introduction} />
        <ProductFeatures features={product.features} />
        <ProductReliability features={product.reliability} />
        <ProductEnergySaving content={product.energySaving} />
        <ProductOandM content={product.oandm} />
        <ProductSpecs specs={product.specs} datasheetUrl={product.datasheetUrl} />
        <RelatedProducts currentProductId={product.id} />
        <ProductContactCTA />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
