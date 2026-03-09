import Link from 'next/link';
import type { SectionHeaderProps } from '../types';
import { ArrowRight } from 'lucide-react';

export default function SectionHeader({ title, subtitle, action }: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
      {action && (
        <Link
          href={action.href}
          className="hidden items-center gap-1 text-sm text-accent hover:text-accent-soft transition-colors duration-200 sm:flex"
        >
          {action.label}
          <ArrowRight size={14} />
        </Link>
      )}
    </div>
  );
}
