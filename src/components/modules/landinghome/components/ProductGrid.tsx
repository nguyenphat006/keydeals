import type { Product } from '@/types';
import { GameCard } from '@/components/shared/ProductCard';
import { AccountCard } from '@/components/shared/ProductCard';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="text-center text-muted-foreground text-sm py-12">
        Không có sản phẩm nào.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((product) =>
        product.type === 'game-key' ? (
          <GameCard key={product.id} product={product} />
        ) : (
          <AccountCard key={product.id} product={product} />
        )
      )}
    </div>
  );
}
