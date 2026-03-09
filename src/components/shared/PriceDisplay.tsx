import { formatPrice, calcDiscountPercent } from '@/lib/utils';

interface PriceDisplayProps {
  price: number;
  originalPrice?: number;
  size?: 'sm' | 'md' | 'lg';
}

export default function PriceDisplay({ price, originalPrice, size = 'md' }: PriceDisplayProps) {
  const discount = originalPrice ? calcDiscountPercent(originalPrice, price) : 0;

  const sizeClasses = {
    sm: { price: 'text-sm', original: 'text-xs', badge: 'text-[10px] px-1 py-0.5' },
    md: { price: 'text-lg', original: 'text-sm', badge: 'text-xs px-1.5 py-0.5' },
    lg: { price: 'text-2xl', original: 'text-base', badge: 'text-sm px-2 py-1' },
  };

  const s = sizeClasses[size];

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className={`${s.price} font-bold font-mono tabular-nums text-accent`}>
        {formatPrice(price)}
      </span>
      {originalPrice && originalPrice > price && (
        <>
          <span className={`${s.original} font-mono tabular-nums text-muted-foreground line-through`}>
            {formatPrice(originalPrice)}
          </span>
          <span className={`${s.badge} font-semibold rounded bg-accent-pink/20 text-accent-pink`}>
            -{discount}%
          </span>
        </>
      )}
    </div>
  );
}
