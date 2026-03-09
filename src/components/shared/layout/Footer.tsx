import Link from 'next/link';

const FOOTER_LINKS = {
  'Sản phẩm': [
    { href: '/search?category=game-keys', label: 'Game Keys' },
    { href: '/search?category=streaming', label: 'Streaming' },
    { href: '/search?category=productivity', label: 'Productivity' },
    { href: '/search?category=ai-tools', label: 'AI Tools' },
  ],
  'Hỗ trợ': [
    { href: '#', label: 'Hướng dẫn mua hàng' },
    { href: '#', label: 'Chính sách đổi trả' },
    { href: '#', label: 'FAQ' },
    { href: '#', label: 'Liên hệ' },
  ],
  'Về chúng tôi': [
    { href: '#', label: 'Giới thiệu' },
    { href: '#', label: 'Điều khoản sử dụng' },
    { href: '#', label: 'Chính sách bảo mật' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-subtle">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-bold tracking-tight text-accent">
              Key<span className="text-foreground">Deals</span>
            </span>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Chuyên cung cấp Key Game bản quyền và Tài khoản số uy tín, giá tốt nhất thị trường.
            </p>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-3 text-sm font-bold text-foreground">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} KeyDeals. Tất cả quyền được bảo lưu.
        </div>
      </div>
    </footer>
  );
}
