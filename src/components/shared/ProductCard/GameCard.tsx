'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Product } from '@/types';
import PriceDisplay from '@/components/shared/PriceDisplay';
import PlatformBadge from '@/components/shared/PlatformBadge';
import DeliveryBadge from '@/components/shared/DeliveryBadge';
import StockIndicator from '@/components/shared/StockIndicator';
import AddToCartButton from '@/components/shared/AddToCartButton';
import { useTilt } from '@/hooks/useTilt';

interface GameCardProps {
  product: Product;
}

export default function GameCard({ product }: GameCardProps) {
  const [ref, tiltValues, handleMouseMove, handleMouseLeave] = useTilt<HTMLDivElement>({
    max: 8,
    scale: 1.03,
    glare: true,
  });

  return (
    <motion.div
      ref={ref}
      className="glass-card group rounded-sm overflow-hidden relative cursor-pointer"
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      animate={{
        rotateX: tiltValues.rotateX,
        rotateY: tiltValues.rotateY,
        scale: tiltValues.scale,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        boxShadow: "0 20px 40px -10px rgba(255, 51, 204, 0.3)",
      }}
    >
      {/* Glare Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${tiltValues.glareX}% ${tiltValues.glareY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
        }}
      />
      
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src={product.thumbnail}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </motion.div>
          
          {/* Animated Discount Badge */}
          {product.discount && product.discount > 0 && (
            <motion.div 
              className="absolute top-2 left-2 rounded bg-accent-pink px-2 py-0.5 text-xs font-bold text-white"
              whileHover={{ scale: 1.1 }}
              animate={{ 
                boxShadow: [
                  "0 0 5px rgba(255,51,204,0.5)",
                  "0 0 15px rgba(255,51,204,0.8)",
                  "0 0 5px rgba(255,51,204,0.5)"
                ]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              -{product.discount}%
            </motion.div>
          )}
          <div className="absolute top-2 right-2">
            <DeliveryBadge type={product.deliveryType} />
          </div>
          
          {/* Image overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      <div className="p-3 space-y-2 relative z-10">
        <div className="flex items-center justify-between">
          <PlatformBadge platform={product.platform} />
        </div>

        <Link href={`/products/${product.slug}`}>
          <h3 className="font-bold text-sm text-foreground line-clamp-1 group-hover:text-accent transition-colors duration-200">
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
    </motion.div>
  );
}
