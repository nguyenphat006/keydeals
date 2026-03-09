import { Shield, Clock, CreditCard, Headphones } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Shield, label: 'Bảo hành 100%', desc: 'Đổi key nếu lỗi' },
  { icon: Clock, label: 'Giao hàng tức thì', desc: 'Key gửi qua email' },
  { icon: CreditCard, label: 'Thanh toán an toàn', desc: 'Bảo mật SSL 256-bit' },
  { icon: Headphones, label: 'Hỗ trợ 24/7', desc: 'Chat & Hotline' },
];

export default function TrustBar() {
  return (
    <section className="glass-card rounded-xl p-4">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {TRUST_ITEMS.map(({ icon: Icon, label, desc }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
              <Icon size={20} className="text-accent" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{label}</p>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
