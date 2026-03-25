import { Question } from "@/types";
import { QuestionCard } from "./question-card";

interface SectionGridProps {
  questions: Question[];
  highlightTerms?: string[];
  emptyMessage?: string;
}

export function SectionGrid({
  questions,
  highlightTerms = [],
  emptyMessage = "No questions found.",
}: SectionGridProps) {
  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
          <span className="text-2xl">📭</span>
        </div>
        <p className="text-muted-foreground text-sm">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
      {questions.map((question) => (
        <QuestionCard
          key={question.id}
          question={question}
          highlightTerms={highlightTerms}
        />
      ))}
    </div>
  );
}
