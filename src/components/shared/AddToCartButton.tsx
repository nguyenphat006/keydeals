'use client';

import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { useUIStore } from '@/store/useUIStore';
import type { Product } from '@/types';
import { cn } from '@/lib/utils';

interface AddToCartButtonProps {
  product: Product;
  variant?: 'default' | 'icon';
  className?: string;
}

export default function AddToCartButton({ product, variant = 'default', className }: AddToCartButtonProps) {
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useUIStore((s) => s.openCart);

  const handleClick = () => {
    addItem(product);
    openCart();
  };

  if (variant === 'icon') {
    return (
      <button
        onClick={handleClick}
        className={cn(
          'flex items-center justify-center rounded-full p-2',
          'bg-accent text-accent-foreground',
          'hover:bg-accent-soft active:scale-95',
          'transition-all duration-200',
          className
        )}
        aria-label={`Thêm ${product.name} vào giỏ hàng`}
      >
        <ShoppingCart size={16} />
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3',
        'bg-accent text-accent-foreground font-semibold text-sm',
        'hover:bg-accent-soft active:scale-95',
        'transition-all duration-200',
        className
      )}
    >
      <ShoppingCart size={16} />
      Thêm vào giỏ
    </button>
  );
}
