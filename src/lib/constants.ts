import type { Platform, CategorySlug } from '@/types';

export const PLATFORMS: Record<Platform, { label: string; color: string }> = {
  steam: { label: 'Steam', color: 'text-[#66c0f4]' },
  epic: { label: 'Epic Games', color: 'text-white' },
  xbox: { label: 'Xbox', color: 'text-[#107c10]' },
  playstation: { label: 'PlayStation', color: 'text-[#006fcd]' },
  nintendo: { label: 'Nintendo', color: 'text-[#e4000f]' },
  gog: { label: 'GOG', color: 'text-[#86328a]' },
  netflix: { label: 'Netflix', color: 'text-[#e50914]' },
  spotify: { label: 'Spotify', color: 'text-[#1db954]' },
  canva: { label: 'Canva', color: 'text-[#00c4cc]' },
  chatgpt: { label: 'ChatGPT', color: 'text-[#10a37f]' },
  adobe: { label: 'Adobe', color: 'text-[#ff0000]' },
};

export const CATEGORIES: Record<CategorySlug, { label: string; icon: string }> = {
  all: { label: 'Tất cả', icon: 'Grid3X3' },
  'game-keys': { label: 'Game Keys', icon: 'Gamepad2' },
  streaming: { label: 'Streaming', icon: 'Play' },
  productivity: { label: 'Productivity', icon: 'Briefcase' },
  'ai-tools': { label: 'AI Tools', icon: 'Sparkles' },
};

export const DELIVERY_TYPES = {
  instant: { label: 'Giao ngay', icon: '⚡', description: 'Nhận key tự động sau thanh toán' },
  manual: { label: '~15 phút', icon: '🕐', description: 'Xử lý thủ công trong 15 phút' },
} as const;
