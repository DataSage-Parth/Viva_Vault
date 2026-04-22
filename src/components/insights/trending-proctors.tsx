import { Question } from "@/types";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { User } from "lucide-react";

interface TrendingProctorsProps {
  questions: Question[];
  limit?: number;
}

export function TrendingProctors({ questions, limit = 5 }: TrendingProctorsProps) {
  // Group by proctor
  const proctorCounts: Record<string, number> = {};
  questions.forEach((q) => {
    proctorCounts[q.proctor_id] = (proctorCounts[q.proctor_id] || 0) + 1;
  });

  const trending = Object.entries(proctorCounts)
    .filter(([id]) => id !== "UNKNOWN")
    .map(([id, count]) => ({ id, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);

  if (trending.length === 0) {
    return <p className="text-sm text-muted-foreground italic">No proctors found yet.</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      {trending.map((proctor, index) => (
        <Link 
          key={proctor.id} 
          href={`/proctor/${encodeURIComponent(proctor.id)}`}
          className="group flex items-center justify-between p-2 -mx-2 rounded-lg hover:bg-muted/50 transition-colors"
        >
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
              <User className="h-4 w-4" />
            </div>
            <span className="text-sm font-medium truncate group-hover:text-indigo-500 transition-colors">
              {proctor.id}
            </span>
          </div>
          <Badge variant="outline" className="shrink-0 bg-background group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-200 dark:group-hover:bg-indigo-900/20 dark:group-hover:text-indigo-400 dark:group-hover:border-indigo-800 transition-colors">
            {proctor.count} Qs
          </Badge>
        </Link>
      ))}
    </div>
  );
}
