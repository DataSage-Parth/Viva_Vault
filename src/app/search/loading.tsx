import { LoadingSkeleton } from "@/components/loading-skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 animate-pulse">
          Searching Knowledge Base...
        </h1>
        <div className="h-4 w-64 bg-muted animate-pulse rounded"></div>
      </div>
      <LoadingSkeleton />
    </div>
  );
}
