interface ProductDescriptionProps {
  description: string;
}

export default function ProductDescription({ description }: ProductDescriptionProps) {
  return (
    <section className="glass-card rounded-lg p-6">
      <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
        Mô tả sản phẩm
      </h2>
      <div className="prose prose-sm prose-invert max-w-none">
        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>
    </section>
  );
}
