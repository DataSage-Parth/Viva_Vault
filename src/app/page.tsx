import { createClient } from "@/lib/supabase/server";
import { Question } from "@/types";
import { SearchBar } from "@/components/search-bar";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, TrendingUp, Users, Rocket } from "lucide-react";
import Link from "next/link";
import { MostAsked } from "@/components/insights/most-asked";
import { TrendingProctors } from "../components/insights/trending-proctors";
import { BrowseQuestions } from "@/components/browse-questions";

export const revalidate = 60; // Revalidate every minute

export default async function Home() {
  const supabase = await createClient();

  // Fetch all questions
  const { data: questions, error } = await supabase
    .from("questions")
    .select("*")
    .order("created_at", { ascending: false });

  const allQuestions = (questions as Question[]) || [];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-background to-indigo-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 text-sm font-medium">
            <BookOpen className="h-4 w-4" />
            <span>Viva Preparation Portal</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <span>Master Your</span>
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent flex items-center">
              Viva
            </span>
            <Rocket className="h-10 w-10 md:h-14 md:w-14 text-indigo-600 transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 drop-shadow-sm" />
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore previous questions, learn from others&apos; experiences, and ace your viva.
          </p>

          <div className="max-w-2xl mx-auto pt-4 relative z-10">
            <SearchBar size="lg" />
          </div>

          <div className="flex items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-violet-500" />
              <span>{new Set(allQuestions.map(q => q.proctor_id)).size} Proctors</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-border" />
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-indigo-500" />
              <span>{allQuestions.length} Questions</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <BrowseQuestions questions={allQuestions} />
        </div>

        {/* Sidebar Insights */}
        <div className="space-y-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 font-semibold mb-4 text-violet-600 dark:text-violet-400">
                <TrendingUp className="h-5 w-5" />
                <h3>Most Asked Topics</h3>
              </div>
              <MostAsked questions={allQuestions} limit={5} />
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                <Users className="h-5 w-5" />
                <h3>Trending Proctors</h3>
              </div>
              <TrendingProctors questions={allQuestions} limit={5} />
            </CardContent>
          </Card>

          <div className="rounded-xl overflow-hidden glass p-6 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <h3 className="font-semibold mb-2 relative z-10">Contribute</h3>
            <p className="text-sm text-muted-foreground mb-4 relative z-10">
              Help your juniors by sharing the questions asked in your viva.
            </p>
            <Link
              href="/submit"
              className="block w-full bg-primary text-primary-foreground text-sm font-medium py-2 px-4 rounded-md text-center hover:bg-primary/90 transition-colors relative z-10"
            >
              Submit Questions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
