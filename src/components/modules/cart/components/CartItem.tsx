'use client';

import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import type { CartItem as CartItemType } from '@/types';
import { useCartStore } from '@/store/useCartStore';
import { formatPrice } from '@/lib/utils';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const { product, quantity } = item;

  return (
    <div className="glass-card flex gap-3 rounded-lg p-3">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded">
        <Image
          src={product.thumbnail}
          alt={product.name}
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between min-w-0">
        <div>
          <h4 className="text-sm font-semibold text-foreground truncate">{product.name}</h4>
          <p className="text-xs text-accent font-mono tabular-nums">{formatPrice(product.price)}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="flex h-6 w-6 items-center justify-center rounded bg-muted text-foreground hover:bg-muted/80"
            >
              <Minus size={12} />
            </button>
            <span className="text-sm font-mono tabular-nums w-5 text-center">{quantity}</span>
            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="flex h-6 w-6 items-center justify-center rounded bg-muted text-foreground hover:bg-muted/80"
            >
              <Plus size={12} />
            </button>
          </div>

          <button
            onClick={() => removeItem(product.id)}
            className="text-muted-foreground hover:text-destructive transition-colors"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
