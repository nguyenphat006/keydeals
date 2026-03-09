import { PLATFORMS } from '@/lib/constants';
import type { Platform } from '@/types';
import {
  Gamepad2, Monitor, Tv, Music, Palette, Sparkles, MonitorPlay, Globe,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const PLATFORM_ICONS: Partial<Record<Platform, LucideIcon>> = {
  steam: Gamepad2,
  epic: Monitor,
  xbox: Gamepad2,
  playstation: Gamepad2,
  nintendo: Gamepad2,
  gog: Globe,
  netflix: Tv,
  spotify: Music,
  canva: Palette,
  chatgpt: Sparkles,
  adobe: MonitorPlay,
};

interface PlatformBadgeProps {
  platform: Platform;
  size?: 'sm' | 'md';
}

export default function PlatformBadge({ platform, size = 'sm' }: PlatformBadgeProps) {
  const info = PLATFORMS[platform];
  const Icon = PLATFORM_ICONS[platform] ?? Globe;
  const iconSize = size === 'sm' ? 12 : 16;

  return (
    <span className={`inline-flex items-center gap-1 font-semibold uppercase tracking-wider ${
      size === 'sm' ? 'text-[10px]' : 'text-xs'
    } ${info.color}`}>
      <Icon size={iconSize} />
      {info.label}
    </span>
  );
}
