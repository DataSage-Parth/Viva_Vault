export function LoadingSkeleton() {
  return (
    <div className="w-full py-8 animate-in fade-in duration-500">
      <div className="mb-8 text-center text-sm font-semibold text-violet-500 animate-pulse tracking-wide uppercase">
        Loading questions...
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div 
            key={i} 
            className="rounded-xl border border-border/40 bg-muted/30 animate-pulse h-40 w-full shadow-sm"
          />
        ))}
      </div>
    </div>
  );
}
