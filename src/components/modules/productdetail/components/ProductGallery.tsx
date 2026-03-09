'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Product } from '@/types';
import { cn } from '@/lib/utils';

interface ProductGalleryProps {
  product: Product;
}

export default function ProductGallery({ product }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = product.images.length > 0 ? product.images : [product.thumbnail];

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="glass-card relative aspect-[16/10] overflow-hidden rounded-lg">
        <Image
          src={images[activeIndex]}
          alt={product.name}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                'relative h-16 w-24 shrink-0 overflow-hidden rounded border-2 transition-all duration-200',
                i === activeIndex
                  ? 'border-accent'
                  : 'border-transparent opacity-60 hover:opacity-100'
              )}
            >
              <Image src={img} alt={`${product.name} ${i + 1}`} fill className="object-cover" sizes="96px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
