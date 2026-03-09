import type { Product } from '@/types';

export interface ProductCardProps {
  product: Product;
}

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: {
    label: string;
    href: string;
  };
}
