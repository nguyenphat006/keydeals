import { cn } from '@/lib/utils';

interface StockIndicatorProps {
  stock: number;
  maxStock: number;
}

export default function StockIndicator({ stock, maxStock }: StockIndicatorProps) {
  const ratio = stock / maxStock;
  const isLow = ratio <= 0.2;
  const isMedium = ratio > 0.2 && ratio <= 0.5;

  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 flex-1 rounded-full bg-muted overflow-hidden">
        <div
          className={cn(
            'h-full rounded-full transition-all duration-500',
            isLow && 'bg-destructive',
            isMedium && 'bg-warning',
            !isLow && !isMedium && 'bg-success'
          )}
          style={{ width: `${Math.round(ratio * 100)}%` }}
        />
      </div>
      <span className={cn(
        'text-xs font-mono tabular-nums',
        isLow ? 'text-destructive' : 'text-muted-foreground'
      )}>
        {isLow ? `Chỉ còn ${stock}` : `Còn ${stock}`}
      </span>
    </div>
  );
}
