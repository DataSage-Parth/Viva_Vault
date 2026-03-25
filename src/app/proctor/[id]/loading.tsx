import { LoadingSkeleton } from "@/components/loading-skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-16 w-16 bg-muted animate-pulse rounded-full border border-border/50"></div>
        <div className="space-y-2">
          <div className="h-8 w-48 bg-muted animate-pulse rounded"></div>
          <div className="h-4 w-32 bg-muted animate-pulse rounded"></div>
        </div>
      </div>
      <LoadingSkeleton />
    </div>
  );
}
