import { DELIVERY_TYPES } from '@/lib/constants';
import type { DeliveryType } from '@/types';
import { Zap, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DeliveryInfoProps {
  type: DeliveryType;
}

export default function DeliveryInfo({ type }: DeliveryInfoProps) {
  const info = DELIVERY_TYPES[type];
  const Icon = type === 'instant' ? Zap : Clock;

  return (
    <div className={cn(
      'glass-card flex items-start gap-3 rounded-lg p-4',
      type === 'instant' ? 'border-success/30' : 'border-warning/30'
    )}>
      <div className={cn(
        'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
        type === 'instant' ? 'bg-success/15' : 'bg-warning/15'
      )}>
        <Icon size={20} className={type === 'instant' ? 'text-success' : 'text-warning'} />
      </div>
      <div>
        <p className={cn(
          'text-sm font-semibold',
          type === 'instant' ? 'text-success' : 'text-warning'
        )}>
          {info.icon} {info.label}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">{info.description}</p>
      </div>
    </div>
  );
}
