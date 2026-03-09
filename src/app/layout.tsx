import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/layout/Header";
import Footer from "@/components/shared/layout/Footer";
import CartDrawer from "@/components/modules/cart";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KeyDeals — Game Keys & Tài khoản số giá tốt",
  description:
    "Chuyên cung cấp Key Game bản quyền (Steam, Epic, Xbox) và Tài khoản số (Netflix, Spotify, ChatGPT) uy tín, giá tốt nhất.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={figtree.variable}>
      <body className="min-h-screen font-sans antialiased">
        <Header />
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          {children}
        </main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
