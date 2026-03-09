import type { Product } from '@/types';
import { getRelatedProducts } from '@/lib/mockData';
import ProductGallery from './components/ProductGallery';
import ProductInfo from './components/ProductInfo';
import DeliveryInfo from './components/DeliveryInfo';
import ProductDescription from './components/ProductDescription';
import RelatedProducts from './components/RelatedProducts';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const related = getRelatedProducts(product);

  return (
    <div className="space-y-10">
      {/* Main: Gallery + Info */}
      <div className="grid gap-8 lg:grid-cols-2">
        <ProductGallery product={product} />
        <div className="space-y-6">
          <ProductInfo product={product} />
          <DeliveryInfo type={product.deliveryType} />
        </div>
      </div>

      {/* Description */}
      <ProductDescription description={product.description} />

      {/* Related */}
      <RelatedProducts products={related} />
    </div>
  );
}
