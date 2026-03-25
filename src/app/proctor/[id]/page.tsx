import { createClient } from "@/lib/supabase/server";
import { Question } from "@/types";
import { SectionGrid } from "@/components/section-grid";
import { extractTopicsFromQuestions } from "@/lib/keywords";
import { User, BookOpen, Layers, Target, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const revalidate = 60;

export default async function ProctorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const paramData = await params;
  const proctorId = decodeURIComponent(paramData.id);

  const supabase = await createClient();

  const { data: questions, error } = await supabase
    .from("questions")
    .select("*")
    .eq("proctor_id", proctorId)
    .order("created_at", { ascending: false });

  const proctorQs = (questions as Question[]) || [];
  
  // Calculate stats
  const mad1Count = proctorQs.filter((q) => q.subject === "MAD1").length;
  const mad2Count = proctorQs.filter((q) => q.subject === "MAD2").length;
  const l1Count = proctorQs.filter((q) => q.level === 1).length;
  const l2Count = proctorQs.filter((q) => q.level === 2).length;

  const topics = extractTopicsFromQuestions(proctorQs).slice(0, 8);

  // Extract all non-null advice
  const advices = proctorQs
    .map((q) => q.advice)
    .filter((a): a is string => Boolean(a));

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl space-y-8">
      {/* Header Profile */}
      <div className="relative overflow-hidden rounded-3xl bg-card border border-border/50 p-8 shadow-sm">
        <div className="absolute top-0 right-0 p-12 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-bl-full w-1/2 h-full pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-violet-500/20 shrink-0">
            <User className="w-12 h-12" />
          </div>
          
          <div className="space-y-3 flex-1">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{proctorId}</h1>
            
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="outline" className="px-3 py-1 bg-background text-sm font-medium">
                <Target className="w-4 h-4 mr-2 text-violet-500" />
                {proctorQs.length} {proctorQs.length === 1 ? 'Question' : 'Questions'}
              </Badge>
              
              <div className="flex gap-2">
                {mad1Count > 0 && (
                  <Badge variant="secondary" className="px-3 py-1 bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
                    MAD 1 ({mad1Count})
                  </Badge>
                )}
                {mad2Count > 0 && (
                  <Badge variant="secondary" className="px-3 py-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                    MAD 2 ({mad2Count})
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Col - Stats & Insights */}
        <div className="space-y-6">
          <Card className="glass border-border/50 overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-violet-500 to-indigo-500 w-full" />
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <Layers className="w-5 h-5 text-violet-500" />
                Common Topics
              </h2>
              {topics.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {topics.map((topic) => (
                    <Badge key={topic.topic} variant="outline" className="px-2.5 py-1 text-xs">
                      {topic.topic} <span className="ml-1 text-muted-foreground">({topic.count})</span>
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground italic">No specific recurring topics detected yet.</p>
              )}
            </CardContent>
          </Card>

          {advices.length > 0 && (
            <Card className="glass border-border/50 border-amber-500/20 bg-amber-500/5 dark:bg-amber-500/5">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold flex items-center gap-2 mb-4 text-amber-700 dark:text-amber-400">
                  <Info className="w-5 h-5" />
                  General Advice
                </h2>
                <div className="space-y-3">
                  {advices.slice(0, 3).map((advice, i) => (
                    <p key={i} className="text-sm text-amber-900/80 dark:text-amber-200/80 italic border-l-2 border-amber-500/30 pl-3">
                      "{advice}"
                    </p>
                  ))}
                  {advices.length > 3 && (
                    <p className="text-xs text-muted-foreground font-medium pt-2 text-center border-t border-border/30">
                      +{advices.length - 3} more pieces of advice in the questions
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right Col - Questions Grid */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-foreground/80" />
              All Questions
            </h2>
          </div>
          
          <SectionGrid questions={proctorQs} emptyMessage={`No questions available for ${proctorId}.`} />
        </div>
      </div>
    </div>
  );
}
