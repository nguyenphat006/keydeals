import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold tracking-tight text-accent">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Trang bạn tìm không tồn tại hoặc đã bị xóa.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent-soft active:scale-95 transition-all duration-200"
      >
        Quay về trang chủ
      </Link>
    </div>
  );
}
