import { allProducts } from '@/data/products';
import Modal from '@/components/Modal';
import ProductDetailView from '@/components/ProductDetailView';
import { notFound } from 'next/navigation';

export default async function ProductModal({ params }: { params: { productId: string } }) {
    const product = allProducts.find(p => p.id === params.productId);

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
