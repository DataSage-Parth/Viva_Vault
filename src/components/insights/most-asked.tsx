import { extractTopicsFromQuestions } from "@/lib/keywords";
import { Question } from "@/types";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface MostAskedProps {
  questions: Question[];
  limit?: number;
}

export function MostAsked({ questions, limit = 5 }: MostAskedProps) {
  const topics = extractTopicsFromQuestions(questions).slice(0, limit);

  if (topics.length === 0) {
    return <p className="text-sm text-muted-foreground italic">Not enough data to analyze topics yet.</p>;
  }

  return (
    <div className="space-y-3">
      {topics.map((topic, index) => (
        <div key={topic.topic} className="flex flex-col gap-1">
          <div className="flex items-center justify-between text-sm">
            <Link href={`/search?q=${encodeURIComponent(topic.topic)}`} className="font-medium hover:text-violet-500 transition-colors truncate pr-2">
              {topic.topic}
            </Link>
            <Badge variant="secondary" className="text-xs shrink-0 bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
              {topic.count} {topic.count === 1 ? 'time' : 'times'}
            </Badge>
          </div>
          <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
              style={{ width: `${Math.max(10, (topic.count / topics[0].count) * 100)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
