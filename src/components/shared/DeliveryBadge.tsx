import { DELIVERY_TYPES } from '@/lib/constants';
import type { DeliveryType } from '@/types';
import { cn } from '@/lib/utils';

interface DeliveryBadgeProps {
  type: DeliveryType;
}

export default function DeliveryBadge({ type }: DeliveryBadgeProps) {
  const info = DELIVERY_TYPES[type];

  return (
    <span className={cn(
      'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold',
      type === 'instant'
        ? 'bg-success/15 text-success'
        : 'bg-warning/15 text-warning'
    )}>
      {info.icon} {info.label}
    </span>
  );
}
