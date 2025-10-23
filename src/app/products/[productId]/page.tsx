import { allProducts } from '@/data/products';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import ProductDetailView from '@/components/ProductDetailView';
import Footer from '@/components/Footer';

// ✅ Next.js 15 から params/searchParams は Promise になった
type Params = Promise<{ productId: string }>;

// ---- メタデータ生成 ----
export async function generateMetadata(
  { params }: { params: Params }
): Promise<Metadata> {
  const { productId } = await params;
  const product = allProducts.find(p => p.id === productId);
  if (!product) notFound();

  return {
    title: product.meta.title,
    description: product.meta.description,
  };
}

// ---- 静的パス生成 ----
export async function generateStaticParams() {
  return allProducts.map((p) => ({ productId: p.id }));
}

// ---- ページ本体 ----
export default async function ProductDetailPage(
  { params }: { params: Params }
) {
  const { productId } = await params;
  const product = allProducts.find(p => p.id === productId);
  if (!product) notFound();

  // モーダル専用設定ならエラーページに誘導
  if (product.displayType === 'modal') {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Header />
        <main className="py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">Error</h1>
            <p>This product is configured to be viewed in a modal, but was accessed directly.</p>
            <p>Please access it through the products page.</p>
          </div>
        </main>
      </div>
    );
  }

  // 通常の製品ページ表示
  return (
    <div className="bg-white">
      <Header />
      <main>
        <ProductDetailView product={product} />
        <RelatedProducts currentProductId={product.id} />
        <ProductContactCTA />
      </main>
      <Footer />
    </div>
  );
}

// dynamic imports
const RelatedProducts = dynamic(() => import('@/components/product/RelatedProducts'));
const ProductContactCTA = dynamic(() => import('@/components/product/ProductContactCTA'));
