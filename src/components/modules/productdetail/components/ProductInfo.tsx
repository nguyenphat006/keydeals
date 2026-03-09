import type { Product } from '@/types';
import PriceDisplay from '@/components/shared/PriceDisplay';
import PlatformBadge from '@/components/shared/PlatformBadge';
import DeliveryBadge from '@/components/shared/DeliveryBadge';
import StockIndicator from '@/components/shared/StockIndicator';
import AddToCartButton from '@/components/shared/AddToCartButton';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="space-y-5">
      {/* Platform + Delivery */}
      <div className="flex items-center gap-3 flex-wrap">
        <PlatformBadge platform={product.platform} size="md" />
        <DeliveryBadge type={product.deliveryType} />
      </div>

      {/* Name */}
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {product.name}
      </h1>

      {/* Short desc */}
      <p className="text-muted-foreground">{product.shortDescription}</p>

      {/* Price */}
      <PriceDisplay price={product.price} originalPrice={product.originalPrice} size="lg" />

      {/* Stock */}
      <div className="max-w-xs">
        <StockIndicator stock={product.stock} maxStock={product.maxStock} />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Add to Cart */}
      <AddToCartButton product={product} className="w-full sm:w-auto" />
    </div>
  );
}
