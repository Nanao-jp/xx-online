import { allProducts } from '@/data/products';
import Modal from '@/components/Modal';
import ProductDetailView from '@/components/ProductDetailView';

export default async function ProductModal({ params }: { params: { productId: string } }) {
  const product = allProducts.find(p => p.id === params.productId);

  if (!product) {
    // モーダル表示のトリガーとなるナビゲーションがなければ、このルートはアクティブにならないため
    // 基本的にnullが返されることはありませんが、念のため記述しています。
    return null;
  }

  return (
    <Modal>
      <ProductDetailView product={product} />
    </Modal>
  );
}
