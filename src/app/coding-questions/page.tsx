"use client";

import { useState } from "react";
import { codingQuestions } from "@/lib/coding-questions";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Code2,
  Lightbulb,
  ChevronDown,
  Sparkles,
  Database,
  Palette,
  Route,
  ShieldCheck,
  Search,
  GitBranch,
  Lock,
} from "lucide-react";

// Map icon string identifiers to actual Lucide components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  database: Database,
  palette: Palette,
  route: Route,
  "shield-check": ShieldCheck,
  search: Search,
  "git-branch": GitBranch,
};

export default function CodingQuestionsPage() {
  const [activeSubject, setActiveSubject] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);
  const [openHints, setOpenHints] = useState<Record<string, boolean>>({});

  const subject = codingQuestions[activeSubject];

  const toggleHint = (categoryIdx: number, questionIdx: number) => {
    const key = `${activeSubject}-${categoryIdx}-${questionIdx}`;
    setOpenHints((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isHintOpen = (categoryIdx: number, questionIdx: number) => {
    return openHints[`${activeSubject}-${categoryIdx}-${questionIdx}`] || false;
  };

  const handleSubjectChange = (idx: number) => {
    if (!codingQuestions[idx].available) return;
    setActiveSubject(idx);
    setActiveCategory(0);
    setOpenHints({});
  };

  const category = subject.available ? subject.categories[activeCategory] : null;

  // Total questions across all available subjects
  const totalQuestions = codingQuestions
    .filter((s) => s.available)
    .reduce(
      (acc, s) =>
        acc + s.categories.reduce((a, c) => a + c.questions.length, 0),
      0
    );

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-6 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-2">
          <Code2 className="h-4 w-4" />
          <span>Practical Coding Prep</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent text-center">
          Most Asked Coding Questions
        </h1>

        <p className="text-muted-foreground text-center max-w-2xl text-lg">
          The most frequently asked practical / coding questions in viva exams.
          Click the hint button to reveal a quick pointer for each question.
        </p>
      </div>

      {/* Subject Tabs */}
      <div className="flex items-center justify-center gap-3 mb-10">
        {codingQuestions.map((subj, idx) => (
          <button
            key={subj.subject}
            onClick={() => handleSubjectChange(idx)}
            disabled={!subj.available}
            className={cn(
              "relative px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 border flex items-center gap-2",
              activeSubject === idx && subj.available
                ? "bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-500/30 -translate-y-0.5"
                : subj.available
                ? "bg-card/50 backdrop-blur-sm text-muted-foreground border-border/50 hover:bg-muted/50 hover:text-foreground hover:border-border"
                : "bg-card/30 text-muted-foreground/50 border-border/30 cursor-not-allowed"
            )}
          >
            {!subj.available && <Lock className="h-3.5 w-3.5" />}
            {subj.subject}
            {!subj.available && (
              <span className="absolute -top-2.5 -right-2 px-1.5 py-0.5 rounded-full bg-amber-500/90 text-[10px] font-bold text-white leading-none">
                Soon
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Coming Soon State */}
      {!subject.available && (
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center justify-center py-24 text-center bg-card/50 backdrop-blur-sm rounded-2xl border border-dashed border-border/50">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 mb-6">
              <Lock className="h-8 w-8 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              {subject.subject} — Coming Soon
            </h3>
            <p className="text-muted-foreground max-w-md">
              Coding questions for {subject.subject} are being curated and will
              be available soon. Stay tuned!
            </p>
          </div>
        </div>
      )}

      {/* Active Subject Content */}
      {subject.available && category && (
        <>
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {subject.categories.map((cat, idx) => {
              const IconComponent = iconMap[cat.icon] || Code2;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(idx)}
                  className={cn(
                    "px-4 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 border flex items-center gap-2",
                    activeCategory === idx
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-500/30 -translate-y-0.5"
                      : "bg-card/50 backdrop-blur-sm text-muted-foreground border-border/50 hover:bg-muted/50 hover:text-foreground hover:border-border"
                  )}
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="hidden sm:inline">{cat.name}</span>
                  <span className="sm:hidden">
                    {cat.name.split("/")[0].trim().split(" ").slice(0, 2).join(" ")}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Questions List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {/* Category Card Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 shadow-lg shadow-emerald-500/25">
                {(() => {
                  const Icon = iconMap[category.icon] || Code2;
                  return <Icon className="h-6 w-6 text-white" />;
                })()}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {category.name}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {category.questions.length} question
                  {category.questions.length !== 1 ? "s" : ""}
                </p>
              </div>
            </div>

            {category.questions.map((q, qIdx) => {
              const open = isHintOpen(activeCategory, qIdx);
              return (
                <Card
                  key={qIdx}
                  className={cn(
                    "bg-card/50 backdrop-blur-sm border-border/50 rounded-xl transition-all duration-300",
                    open
                      ? "shadow-lg shadow-emerald-500/10 border-emerald-500/30"
                      : "hover:shadow-md hover:border-border"
                  )}
                >
                  <CardContent className="p-0">
                    {/* Question Row */}
                    <div className="flex items-start gap-4 p-5">
                      {/* Number Badge */}
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-bold mt-0.5">
                        {qIdx + 1}
                      </div>

                      {/* Question Text */}
                      <div className="flex-1 min-w-0">
                        <p className="text-[15px] font-medium leading-relaxed text-foreground/90">
                          {q.question}
                        </p>
                      </div>

                      {/* Hint Toggle Button */}
                      <button
                        onClick={() => toggleHint(activeCategory, qIdx)}
                        className={cn(
                          "shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 border cursor-pointer",
                          open
                            ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30"
                            : "bg-muted/50 text-muted-foreground border-border/50 hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-500/30"
                        )}
                      >
                        <Lightbulb className="h-3.5 w-3.5" />
                        <span>{open ? "Hide" : "Hint"}</span>
                        <ChevronDown
                          className={cn(
                            "h-3 w-3 transition-transform duration-300",
                            open && "rotate-180"
                          )}
                        />
                      </button>
                    </div>

                    {/* Hint Reveal */}
                    <div
                      className={cn(
                        "grid transition-all duration-300 ease-in-out",
                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5 pt-0">
                          <div className="flex items-start gap-3 rounded-lg bg-amber-500/5 border border-amber-500/20 p-4">
                            <Sparkles className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                            <p className="text-sm leading-relaxed text-amber-700 dark:text-amber-300">
                              {q.hint}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Stats Footer */}
            <div className="flex items-center justify-center gap-6 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-emerald-500" />
                <span>{totalQuestions} Total Questions</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-border" />
              <div className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-amber-500" />
                <span>{subject.categories.length} Categories</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
