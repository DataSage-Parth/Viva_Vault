"use client";

import { useState } from "react";
import { mostAsked } from "@/lib/mostasked";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Flame } from "lucide-react";

const SUBJECTS = ["MAD1", "MAD2", "MLP", "BDM", "GENAI"] as const;
type Subject = typeof SUBJECTS[number];

export default function MostAskedPage() {
  const [selectedSubject, setSelectedSubject] = useState<Subject>("MAD1");

  const subjectData = (mostAsked as Record<string, any>)[selectedSubject] || {};

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="flex flex-col items-center justify-center gap-6 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-medium mb-2">
          <Flame className="h-4 w-4" />
          <span>Curated Question Bank</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent text-center">
          Most Asked Questions
        </h1>
        
        <p className="text-muted-foreground text-center max-w-2xl text-lg mb-4">
          Prepare securely with our aggregated list of the most recurring viva questions separated dynamically by your subject module.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {SUBJECTS.map((subject) => (
            <button
              key={subject}
              onClick={() => setSelectedSubject(subject)}
              className={cn(
                "px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 border",
                selectedSubject === subject
                  ? "bg-violet-600 text-white border-violet-600 shadow-lg shadow-violet-500/30 -translate-y-0.5"
                  : "bg-card/50 backdrop-blur-sm text-muted-foreground border-border/50 hover:bg-muted/50 hover:text-foreground hover:border-border"
              )}
            >
              {subject}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {Object.keys(subjectData).length === 0 ? (
          <div className="col-span-full py-20 text-center text-muted-foreground bg-card/50 backdrop-blur-sm rounded-xl border border-dashed border-border/50">
            No popular questions mapped for {selectedSubject} yet.
          </div>
        ) : (
          Object.entries(subjectData).map(([categoryName, content]) => (
            <Card 
              key={categoryName} 
              className="flex flex-col bg-card/50 backdrop-blur-sm border-border/50 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 hover:border-violet-500/30 hover:-translate-y-1 h-[450px]"
            >
              <CardHeader className="pb-3 border-b border-border/40 shrink-0">
                <CardTitle className="text-xl font-bold text-violet-600 dark:text-violet-400 capitalize">
                  {categoryName.replace(/_/g, " ").toLowerCase()}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-6 flex-1 overflow-y-auto custom-scrollbar pr-2">
                {Array.isArray(content) ? (
                  <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed text-muted-foreground marker:text-violet-500/50">
                    {content.map((question: string, idx: number) => (
                      <li key={idx} className="hover:text-foreground/90 transition-colors">
                        {question}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="space-y-6">
                    {Object.entries(content as Record<string, string[]>).map(([subCategoryName, questions]) => (
                      <div key={subCategoryName} className="space-y-3">
                        <h4 className="font-semibold text-sm text-foreground/90 border-l-2 border-violet-500 pl-3 py-0.5 capitalize bg-violet-500/5 rounded-r w-fit pr-3">
                          {subCategoryName.replace(/_/g, " ").toLowerCase()}
                        </h4>
                        <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed text-muted-foreground marker:text-violet-500/50 pl-2">
                          {questions.map((question: string, idx: number) => (
                            <li key={idx} className="hover:text-foreground/90 transition-colors">
                              {question}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
