export default function ProductCardSkeleton() {
  return (
    <div className="glass-card rounded-lg overflow-hidden animate-pulse">
      <div className="aspect-[16/10] bg-muted" />
      <div className="p-3 space-y-2">
        <div className="h-3 w-16 rounded bg-muted" />
        <div className="h-4 w-3/4 rounded bg-muted" />
        <div className="h-3 w-full rounded bg-muted" />
        <div className="h-1.5 w-full rounded-full bg-muted" />
        <div className="flex items-center justify-between pt-1">
          <div className="h-5 w-24 rounded bg-muted" />
          <div className="h-8 w-8 rounded-full bg-muted" />
        </div>
      </div>
    </div>
  );
}
