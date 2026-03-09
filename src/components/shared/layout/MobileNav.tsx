'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useUIStore } from '@/store/useUIStore';

const NAV_LINKS = [
  { href: '/', label: 'Trang chủ' },
  { href: '/search?category=game-keys', label: 'Game Keys' },
  { href: '/search?category=streaming', label: 'Streaming' },
  { href: '/search?category=productivity', label: 'Productivity' },
  { href: '/search?category=ai-tools', label: 'AI Tools' },
];

export default function MobileNav() {
  const isOpen = useUIStore((s) => s.isMobileNavOpen);
  const open = useUIStore((s) => s.openMobileNav);
  const close = useUIStore((s) => s.closeMobileNav);

  return (
    <>
      <button
        onClick={open}
        className="flex items-center justify-center p-2 text-foreground hover:text-accent transition-colors duration-200 lg:hidden"
        aria-label="Menu"
      >
        <Menu size={22} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[var(--z-modal)] lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={close} />
          <nav className="glass-elevated absolute left-0 top-0 bottom-0 w-72 p-6 space-y-4">
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-bold text-accent">KeyDeals</span>
              <button onClick={close} className="text-foreground hover:text-accent">
                <X size={20} />
              </button>
            </div>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="block py-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
