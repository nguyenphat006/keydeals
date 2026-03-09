import Link from 'next/link';
import SearchBar from '@/components/shared/SearchBar';
import CartButton from './CartButton';
import MobileNav from './MobileNav';

const NAV_LINKS = [
  { href: '/', label: 'Trang chủ' },
  { href: '/search?category=game-keys', label: 'Game Keys' },
  { href: '/search?category=streaming', label: 'Streaming' },
  { href: '/search?category=productivity', label: 'Productivity' },
  { href: '/search?category=ai-tools', label: 'AI Tools' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-[var(--z-sticky)] glass-elevated">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Left: Logo + Mobile Nav */}
        <div className="flex items-center gap-3">
          <MobileNav />
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-accent">
              Key<span className="text-foreground">Deals</span>
            </span>
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Search + Cart */}
        <div className="flex items-center gap-3">
          <SearchBar className="hidden w-64 sm:block" />
          <CartButton />
        </div>
      </div>
    </header>
  );
}
