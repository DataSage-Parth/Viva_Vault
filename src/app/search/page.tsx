import { createClient } from "@/lib/supabase/server";
import { Question } from "@/types";
import { QuestionCard } from "@/components/question-card";
import Link from "next/link";
import { SearchBar } from "@/components/search-bar";
import { Suspense } from "react";
import { Search as SearchIcon, FilterX } from "lucide-react";

export const revalidate = 0; // Dynamic page

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; subject?: string; level?: string }>;
}) {
  const params = await searchParams;
  const q = params.q || "";
  const subject = params.subject || "";
  const level = params.level || "";

  const supabase = await createClient();

  let query = supabase.from("questions").select("*");

  if (q) {
    // Search in proctor_id OR questions_text using ilike
    query = query.or(`proctor_id.ilike.%${q}%,questions_text.ilike.%${q}%`);
  }

  if (subject) {
    query = query.eq("subject", subject);
  }

  if (level) {
    query = query.eq("level", parseInt(level));
  }

  query = query.order("created_at", { ascending: false });

  const { data: questions, error } = await query;
  
  const results = (questions as Question[]) || [];
  
  // Terms to highlight: simple split by space, ignoring short words
  const searchTerms = q
    .split(/\s+/)
    .filter((word) => word.length > 2)
    .map((word) => word.trim());

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="flex flex-col gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Search Questions</h1>
          <p className="text-muted-foreground">Find specific questions by proctor name, keywords, or topics.</p>
        </div>
        
        <div className="p-4 rounded-xl glass">
          <SearchBar defaultValue={q} />
        </div>
      </div>

      <Suspense fallback={<div className="py-12 text-center text-muted-foreground">Loading results...</div>}>
        {results.length > 0 ? (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <SearchIcon className="h-5 w-5 text-violet-500" />
              Found {results.length} {results.length === 1 ? 'result' : 'results'} {q ? `for "${q}"` : 'total'}
            </h2>
            
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
              {results.map((question) => (
                <QuestionCard 
                  key={question.id} 
                  question={question}
                  highlightTerms={searchTerms} 
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center w-full px-4 glass rounded-2xl">
            <div className="h-16 w-16 rounded-full bg-muted/50 flex items-center justify-center mb-5 shadow-sm border border-border/50 ring-1 ring-border/20">
              <span className="text-3xl">📭</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight">
              No questions found
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
        )}
      </Suspense>
    </div>
  );
}
