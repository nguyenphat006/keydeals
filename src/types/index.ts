export type ProductType = 'game-key' | 'account';
export type DeliveryType = 'instant' | 'manual';
export type Platform =
  | 'steam'
  | 'epic'
  | 'xbox'
  | 'playstation'
  | 'nintendo'
  | 'gog'
  | 'netflix'
  | 'spotify'
  | 'canva'
  | 'chatgpt'
  | 'adobe';

export type CategorySlug =
  | 'game-keys'
  | 'streaming'
  | 'productivity'
  | 'ai-tools'
  | 'all';

export interface Product {
  id: string;
  slug: string;
  name: string;
  type: ProductType;
  platform: Platform;
  category: CategorySlug;
  price: number;
  originalPrice?: number;
  discount?: number;
  thumbnail: string;
  images: string[];
  description: string;
  shortDescription: string;
  deliveryType: DeliveryType;
  stock: number;
  maxStock: number;
  tags: string[];
  featured?: boolean;
  flashSale?: boolean;
  flashSaleEndsAt?: string;
  createdAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  badge?: string;
}

export interface Category {
  slug: CategorySlug;
  label: string;
  icon: string;
  count: number;
}
