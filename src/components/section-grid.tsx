import { Question } from "@/types";
import { QuestionCard } from "./question-card";
import Link from "next/link";

interface SectionGridProps {
  questions: Question[];
  highlightTerms?: string[];
  emptyMessage?: string;
  isLoading?: boolean;
}

export function SectionGrid({
  questions,
  highlightTerms = [],
  emptyMessage = "No questions found.",
  isLoading = false,
}: SectionGridProps) {
  if (isLoading) {
    return (
      <div className="w-full animation-fade-in">
        <div className="mb-6 text-center text-sm font-medium text-violet-500/80 animate-pulse">
          Loading questions...
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-border/50 bg-muted/30 animate-pulse h-48 w-full"
            />
          ))}
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center w-full px-4">
        <div className="h-16 w-16 rounded-full bg-muted/50 flex items-center justify-center mb-5 shadow-sm border border-border/50 ring-1 ring-border/20">
          <span className="text-3xl">📭</span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight">
          {emptyMessage}
        </h3>
        <p className="text-muted-foreground text-sm max-w-sm mb-8 leading-relaxed">
          Looks like no one has submitted questions for this yet. You can be the first to help your juniors 🚀
        </p>
        <Link
          href="/submit"
          className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:-translate-y-0.5"
        >
          Submit Your Questions
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
