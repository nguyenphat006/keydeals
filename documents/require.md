Dưới đây là đặc tả hoàn chỉnh, sẵn sàng để copy:

---

# 📋 PRODUCT REQUIREMENT SPECIFICATION
## Digital Goods E-Commerce — Game Keys & Digital Accounts

---

## 🧩 PHẦN 1 — TỔNG QUAN DỰ ÁN

**Loại sản phẩm:** Website thương mại điện tử chuyên bán Key Game bản quyền (Steam, Epic, Xbox...) và Tài khoản số (Netflix, Spotify, Canva, ChatGPT...).

**Đối tượng người dùng:** Game thủ và người dùng dịch vụ số tại Việt Nam, 16–35 tuổi, quen thuộc với giao diện tối, ưu tiên tốc độ và tin tưởng khi mua hàng online.

**Mục tiêu cốt lõi:**
- Giao diện Dark Mode, Glassmorphism — đẹp, hiện đại, tạo cảm giác "premium" và đáng tin.
- Tốc độ tải trang nhanh nhất có thể (Core Web Vitals xanh toàn bộ).
- Kiến trúc code chuẩn, dễ mở rộng, không có technical debt từ ngày đầu.
- Tối ưu conversion: Từ lúc vào trang → thêm giỏ → thanh toán nhanh nhất có thể.

---

## ⚙️ PHẦN 2 — TECH STACK & TOOLING

| Hạng mục | Lựa chọn | Ghi chú |
|---|---|---|
| Framework | Next.js 14+ (App Router) | Bắt buộc dùng App Router, không Pages Router |
| Language | TypeScript (strict mode) | `"strict": true` trong tsconfig |
| Styling | Tailwind CSS v3 | Config mở rộng theo Design Token bên dưới |
| Component Library | shadcn/ui | Chỉ dùng làm base, override styling theo theme |
| Global State | Zustand v4 | Cart + UI state. Dùng `persist` middleware cho cart |
| Font | Figtree (Google Fonts) | `variable: '--font-sans'`, subset `latin` |
| Image | `next/image` | Bắt buộc — không dùng `<img>` thẻ HTML thuần |
| Icons | `lucide-react` | Nhẹ, tree-shakeable, nhất quán với shadcn/ui |
| Package Manager | pnpm | Nhanh hơn npm/yarn |

**Cấm dùng:**
- ❌ Framer Motion hoặc bất kỳ animation library JS nặng nào.
- ❌ `<img>` HTML tag (thay bằng `next/image`).
- ❌ Inline style (`style={{}}`), trừ trường hợp dynamic value không thể dùng Tailwind.
- ❌ `any` type trong TypeScript. Dùng `unknown` + type guard nếu cần.
- ❌ Barrel re-export trong thư mục `components/ui/` (shadcn) — không được chỉnh sửa.

---

## 🎨 PHẦN 3 — DESIGN SYSTEM

### 3.1 — Color Palette (HSL Variables)

Khai báo toàn bộ trong `src/app/globals.css`. Format bắt buộc theo chuẩn shadcn/ui (chỉ giá trị HSL, không có `hsl()`).

```css
@layer base {
  :root {
    /* ─── BACKGROUNDS ─── */
    --background:        260 30% 8%;    /* Tối sâu, ám tím — màu nền chính */
    --background-subtle: 260 25% 11%;  /* Card background, panel */
    --background-elevated:260 20% 14%; /* Dropdown, tooltip, popover */

    /* ─── SURFACES (Glassmorphism) ─── */
    --surface-glass:     258 24% 28%;  /* Dùng với /10 → /20 opacity */
    --surface-border:    258 24% 28%;  /* Border của glass cards — dùng /30 opacity */

    /* ─── PRIMARY ─── */
    --primary:           258 24% 28%;  /* #413759 — màu chủ đạo */
    --primary-foreground:0 0% 98%;

    /* ─── SECONDARY / MUTED ─── */
    --secondary:         268 12% 47%;  /* #786b87 */
    --secondary-foreground:0 0% 98%;
    --muted:             260 15% 20%;
    --muted-foreground:  260 10% 60%;

    /* ─── ACCENT (Call-to-action — Cyan Neon) ─── */
    --accent:            180 100% 50%; /* #00FFFF — Cyan neon */
    --accent-soft:       180 80% 40%;  /* Variant tối hơn cho hover */
    --accent-foreground: 260 30% 8%;   /* Text trên nền accent — tối */

    /* ─── ACCENT ALT (Neon Pink — dùng cho gaming section) ─── */
    --accent-pink:       320 100% 60%; /* #FF33CC */
    --accent-pink-soft:  320 80% 50%;

    /* ─── SEMANTIC ─── */
    --destructive:       0 72% 51%;
    --destructive-foreground: 0 0% 98%;
    --success:           142 71% 45%;
    --warning:           38 92% 50%;

    /* ─── BORDER & RING ─── */
    --border:            258 20% 22%;
    --input:             258 20% 18%;
    --ring:              258 24% 28%;

    /* ─── CARD ─── */
    --card:              260 25% 11%;
    --card-foreground:   0 0% 95%;

    /* ─── POPOVER ─── */
    --popover:           260 20% 14%;
    --popover-foreground:0 0% 95%;

    /* ─── FOREGROUND ─── */
    --foreground:        0 0% 95%;

    /* ─── RADIUS ─── */
    --radius: 0.5rem;
    --radius-game:          4px;  /* Steam, Epic, Xbox — góc cạnh */
    --radius-entertainment: 16px; /* Netflix, Spotify — mềm mại */

    /* ─── SHADOWS / GLOWS ─── */
    --glow-primary: 0 0 24px hsl(258 24% 28% / 0.5);
    --glow-cyan:    0 0 24px hsl(180 100% 50% / 0.35);
    --glow-pink:    0 0 24px hsl(320 100% 60% / 0.35);

    /* ─── Z-INDEX SCALE ─── */
    --z-base:      0;
    --z-card:      10;
    --z-sticky:    50;
    --z-dropdown:  100;
    --z-modal:     1000;
    --z-toast:     9999;
  }
}
```

### 3.2 — Typography

**Font duy nhất:** Figtree — đã có sẵn, không import thêm font nào khác.

```typescript
// src/app/layout.tsx
import { Figtree } from 'next/font/google';

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap', // Bắt buộc thêm — tránh FOIT
});
```

**Type Scale (khai báo trong `tailwind.config.ts`):**

```typescript
fontSize: {
  'xs':   ['0.75rem',  { lineHeight: '1rem',    letterSpacing: '0.025em' }],
  'sm':   ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.01em'  }],
  'base': ['1rem',     { lineHeight: '1.625rem',letterSpacing: '0'       }],
  'lg':   ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
  'xl':   ['1.25rem',  { lineHeight: '1.75rem', letterSpacing: '-0.015em'}],
  '2xl':  ['1.5rem',   { lineHeight: '2rem',    letterSpacing: '-0.02em' }],
  '3xl':  ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.025em'}],
  '4xl':  ['2.25rem',  { lineHeight: '2.5rem',  letterSpacing: '-0.03em' }],
  '5xl':  ['3rem',     { lineHeight: '1.15',    letterSpacing: '-0.035em'}],
  '6xl':  ['3.75rem',  { lineHeight: '1.1',     letterSpacing: '-0.04em' }],
},
```

**Quy tắc dùng font:**
- Heading (H1–H3): `font-bold tracking-tight` — Figtree Bold.
- Body text: `font-normal` — Figtree Regular.
- Giá tiền, key code, số liệu: `font-mono tabular-nums` — Figtree Mono (subset có sẵn).
- Label badge, button: `font-semibold uppercase tracking-wider text-xs`.

### 3.3 — Glassmorphism Pattern

Đây là visual signature của toàn bộ website. Áp dụng nhất quán theo quy tắc:

```css
/* Glass Card — dùng cho Product Card, Panel, Drawer */
.glass-card {
  background: hsl(var(--surface-glass) / 0.12);
  border: 1px solid hsl(var(--surface-border) / 0.25);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Glass Elevated — dùng cho Modal, Dropdown */
.glass-elevated {
  background: hsl(var(--background-elevated) / 0.85);
  border: 1px solid hsl(var(--surface-border) / 0.35);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* Quy tắc blur:
   - Card thông thường: blur(12px) — cân bằng đẹp/hiệu năng
   - Modal/Overlay: blur(20px)
   - KHÔNG vượt quá blur(24px) — gây lag nghiêm trọng trên mobile
*/
```

### 3.4 — Animation & Transition Rules

**Tuyệt đối không dùng JS animation library.** Mọi chuyển động dùng Tailwind CSS Transitions.

```typescript
// tailwind.config.ts — Khai báo transition utilities tùy chỉnh
transitionTimingFunction: {
  'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
  'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
},
transitionDuration: {
  'DEFAULT': '200ms',
  'fast': '150ms',
  'normal': '250ms',
  'slow': '350ms',
},
```

**Bảng animation chuẩn — dùng nhất quán toàn site:**

| Interaction | Tailwind Classes | Mô tả |
|---|---|---|
| Card hover nổi lên | `hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/30` | Nhẹ, mượt |
| Button press | `active:scale-95` | Feedback rõ ràng |
| Link/icon hover | `hover:text-accent transition-colors duration-200` | Đổi màu cyan |
| Overlay fade in | `animate-in fade-in duration-200` | shadcn built-in |
| Drawer slide in | `animate-in slide-in-from-right duration-300` | shadcn built-in |
| Skeleton loading | `animate-pulse` | Tailwind built-in |

**Accessibility — bắt buộc:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🏗️ PHẦN 4 — KIẾN TRÚC & CẤU TRÚC THƯ MỤC

### 4.1 — Cấu trúc thư mục đầy đủ

```
src/
┣ app/
│  ┣ (marketing)/                    ← Route group — không ảnh hưởng URL
│  │  ┗ page.tsx                     → <LandingHome /> — chỉ 1 dòng
│  ┣ products/
│  │  ┗ [slug]/
│  │     ┗ page.tsx                  → <ProductDetail /> + generateStaticParams + generateMetadata
│  ┣ cart/
│  │  ┗ page.tsx                     → <CartPage />
│  ┣ search/
│  │  ┗ page.tsx                     → <SearchResultsPage />
│  ┣ layout.tsx                      → Root layout: font, metadata, providers
│  ┣ globals.css                     → Design tokens + Tailwind base
│  ┗ not-found.tsx                   → Custom 404
│
┣ components/
│  ┣ module/                         ← Tính năng/trang cụ thể
│  │  ┣ landinghome/
│  │  │  ┣ index.tsx                 → Assembler: ghép Hero + Categories + FlashSale + Grids
│  │  │  ┣ index.ts                  → Barrel: export default LandingHome
│  │  │  ┣ components/
│  │  │  │  ┣ Hero.tsx               → Server Component — Hero slider section
│  │  │  │  ┣ Categories.tsx         → Server Component — Filter tabs
│  │  │  │  ┣ FlashSale.tsx          → Client Component — Countdown + products
│  │  │  │  ┣ ProductGrid.tsx        → Server Component — Grid layout
│  │  │  │  ┣ TrustBar.tsx           → Server Component — Social proof strip
│  │  │  │  └ SectionHeader.tsx      → Server Component — Tiêu đề section tái sử dụng
│  │  │  ┣ hooks/
│  │  │  │  ┣ useHeroSlider.ts       → Client hook — Auto-slide logic
│  │  │  │  └ useCountdown.ts        → Client hook — Flash sale timer
│  │  │  └ types/
│  │  │     └ index.ts               → ProductCardProps, HeroSlide, Category...
│  │  ┣ productdetail/
│  │  │  ┣ index.tsx
│  │  │  ┣ index.ts
│  │  │  ┣ components/
│  │  │  │  ┣ ProductGallery.tsx     → Image showcase
│  │  │  │  ┣ ProductInfo.tsx        → Tên, giá, badges, Add to cart
│  │  │  │  ┣ DeliveryInfo.tsx       → Instant vs Manual delivery detail
│  │  │  │  ┣ ProductDescription.tsx → Mô tả chi tiết
│  │  │  │  └ RelatedProducts.tsx    → Gợi ý sản phẩm liên quan
│  │  │  ┣ hooks/
│  │  │  │  └ useProductDetail.ts
│  │  │  └ types/
│  │  │     └ index.ts
│  │  └ cart/
│  │     ┣ index.tsx
│  │     ┣ index.ts
│  │     ┣ components/
│  │     │  ┣ CartDrawer.tsx         → Client Component — Slide-in từ phải
│  │     │  ┣ CartItem.tsx           → Item row trong drawer
│  │     │  └ CartSummary.tsx        → Tổng tiền + CTA checkout
│  │     └ types/
│  │        └ index.ts
│  │
│  ┣ shared/                         ← Dùng chung mọi module
│  │  ┣ ProductCard/
│  │  │  ┣ GameCard.tsx              → rounded-sm, sharp corners, pink glow
│  │  │  ┣ AccountCard.tsx           → rounded-xl, soft corners, cyan glow
│  │  │  ┣ ProductCardSkeleton.tsx   → Loading skeleton (animate-pulse)
│  │  │  └ index.ts                  → Barrel export
│  │  ┣ layout/
│  │  │  ┣ Header.tsx                → Server Component (Client chỉ ở CartButton)
│  │  │  ┣ Footer.tsx                → Server Component
│  │  │  ┣ MobileNav.tsx             → Client Component
│  │  │  └ CartButton.tsx            → Client Component (Zustand consumer)
│  │  ┣ AddToCartButton.tsx          → Client Component — Optimistic update
│  │  ┣ PriceDisplay.tsx             → Format VND, strikethrough, badge % giảm
│  │  ┣ PlatformBadge.tsx            → Icon + label (Steam/Netflix/...)
│  │  ┣ StockIndicator.tsx           → Progress bar + text cảnh báo tồn kho
│  │  ┣ DeliveryBadge.tsx            → "⚡ Giao ngay" vs "🕐 ~15 phút"
│  │  └ SearchBar.tsx                → Client Component — debounce 300ms
│  │
│  └ ui/                             ← shadcn/ui — KHÔNG chỉnh sửa trực tiếp
│
┣ store/
│  ┣ useCartStore.ts                 → Cart state + persist middleware
│  └ useUIStore.ts                   → Modal open/close, search overlay
│
┣ lib/
│  ┣ utils.ts                        → cn(), formatPrice(), slugify(), clamp()
│  ┣ constants.ts                    → PLATFORMS, CATEGORIES, DELIVERY_TYPES
│  ┣ mockData.ts                     → Dev data — replace bằng API call sau
│  └ metadata.ts                     → generateMetadata helper
│
└ types/
   └ index.ts                        → Global shared types
```

### 4.2 — RSC Boundary Rules (Bắt buộc)

Đây là quy tắc phân tách Server/Client Component. Vi phạm dẫn tới hydration error và bundle size tăng.

**Server Components (default — KHÔNG thêm `'use client'`):**
- Tất cả page files (`page.tsx`).
- Layout, Header, Footer.
- ProductGrid, ProductCard wrapper.
- Tất cả component chỉ render data, không có event handler.

**Client Components (thêm `'use client'` ở đầu file):**
- `CartButton.tsx`, `CartDrawer.tsx`, `CartItem.tsx` — cần Zustand.
- `AddToCartButton.tsx` — có `onClick`.
- `MobileNav.tsx` — có open/close state.
- `SearchBar.tsx` — có `onChange`, debounce.
- `FlashSale.tsx` — cần countdown timer (`setInterval`).
- `useHeroSlider.ts`, `useCountdown.ts` — custom hooks.

**Quy tắc vàng:** Đẩy `'use client'` boundary xuống component nhỏ nhất có thể.

```
✅ ĐÚNG:
<ProductCard>              ← Server Component
  <ProductCardMedia />     ← Server Component  
  <AddToCartButton />      ← Client Component (chỉ cái nút này)
</ProductCard>

❌ SAI:
<ProductCard 'use client'> ← Toàn bộ card thành client = tăng bundle thừa
  ...
</ProductCard>
```

---

## 📦 PHẦN 5 — DATA LAYER & FETCHING STRATEGY

### 5.1 — TypeScript Types (Global)

```typescript
// src/types/index.ts

export type ProductType = 'game-key' | 'account';
export type DeliveryType = 'instant' | 'manual';
export type Platform = 
  | 'steam' | 'epic' | 'x