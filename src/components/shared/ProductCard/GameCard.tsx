import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/types';
import PriceDisplay from '@/components/shared/PriceDisplay';
import PlatformBadge from '@/components/shared/PlatformBadge';
import DeliveryBadge from '@/components/shared/DeliveryBadge';
import StockIndicator from '@/components/shared/StockIndicator';
import AddToCartButton from '@/components/shared/AddToCartButton';

interface GameCardProps {
  product: Product;
}

export default function GameCard({ product }: GameCardProps) {
  return (
    <div className="glass-card group rounded-sm overflow-hidden transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-accent-pink/20">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={product.thumbnail}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {product.discount && product.discount > 0 && (
            <div className="absolute top-2 left-2 rounded bg-accent-pink px-2 py-0.5 text-xs font-bold text-white">
              -{product.discount}%
            </div>
          )}
          <div className="absolute top-2 right-2">
            <DeliveryBadge type={product.deliveryType} />
          </div>
        </div>
      </Link>

      <div className="p-3 space-y-2">
        <div className="flex items-center justify-between">
          <PlatformBadge platform={product.platform} />
        </div>

        <Link href={`/products/${product.slug}`}>
          <h3 className="font-bold text-sm text-foreground line-clamp-1 hover:text-accent transition-colors duration-200">
            {product.name}
          </h3>
        </Link>

        <p className="text-xs text-muted-foreground line-clamp-1">
          {product.shortDescription}
        </p>

        <StockIndicator stock={product.stock} maxStock={product.maxStock} />

        <div className="flex items-center justify-between pt-1">
          <PriceDisplay price={product.price} originalPrice={product.originalPrice} size="sm" />
          <AddToCartButton product={product} variant="icon" />
        </div>
      </div>
    </div>
  );
}
