import { allProducts } from '@/data/products';
import Modal from '@/components/Modal';
import ProductDetailView from '@/components/ProductDetailView';
import { notFound } from 'next/navigation';

type Params = Promise<{ productId: string }>;

export default async function ProductModal({ params }: { params: Params }) {
    const { productId } = await params;
    const product = allProducts.find(p => p.id === productId);

    if (!product) {
        notFound();
    }
    
    if (product.displayType !== 'modal') {
        return null;
    }

    return (
        <Modal>
            <ProductDetailView product={product} />
        </Modal>
    );
}
