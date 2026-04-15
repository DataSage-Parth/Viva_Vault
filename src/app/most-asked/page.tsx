"use client";

import { useState } from "react";
import { mostAskedQA } from "@/lib/mostasked-qa";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Flame,
  ChevronDown,
  MessageSquare,
  BookOpen,
  Server,
  FileCode,
  Globe,
  Webhook,
  Hash,
  Database,
  Link,
  KeyRound,
  HardDrive,
  Layers,
  Code,
  Palette,
  Layout,
  UserCheck,
  Cookie,
  Shield,
  GitBranch,
  Terminal,
  Rocket,
  Braces,
  Parentheses,
  Timer,
  Monitor,
  Compass,
  Boxes,
  RefreshCw,
  Clock,
  Zap,
  Bell,
  Gauge,
  Brain,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  server: Server,
  "file-code": FileCode,
  globe: Globe,
  webhook: Webhook,
  hash: Hash,
  database: Database,
  link: Link,
  "key-round": KeyRound,
  "hard-drive": HardDrive,
  layers: Layers,
  code: Code,
  palette: Palette,
  layout: Layout,
  "user-check": UserCheck,
  cookie: Cookie,
  shield: Shield,
  "git-branch": GitBranch,
  terminal: Terminal,
  rocket: Rocket,
  braces: Braces,
  parentheses: Parentheses,
  timer: Timer,
  monitor: Monitor,
  compass: Compass,
  boxes: Boxes,
  "refresh-cw": RefreshCw,
  clock: Clock,
  zap: Zap,
  bell: Bell,
  gauge: Gauge,
  brain: Brain,
};

export default function MostAskedPage() {
  const [activeSubject, setActiveSubject] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);
  const [openAnswers, setOpenAnswers] = useState<Record<string, boolean>>({});

  const subject = mostAskedQA[activeSubject];

  const toggleAnswer = (categoryIdx: number, questionIdx: number) => {
    const key = `${activeSubject}-${categoryIdx}-${questionIdx}`;
    setOpenAnswers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isAnswerOpen = (categoryIdx: number, questionIdx: number) => {
    return openAnswers[`${activeSubject}-${categoryIdx}-${questionIdx}`] || false;
  };

  const handleSubjectChange = (idx: number) => {
    setActiveSubject(idx);
    setActiveCategory(0);
    setOpenAnswers({});
  };

  const category = subject.categories[activeCategory];

  const totalQuestions = mostAskedQA.reduce(
    (acc, s) =>
      acc + s.categories.reduce((a, c) => a + c.questions.length, 0),
    0
  );

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-6 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-medium mb-2">
          <Flame className="h-4 w-4" />
          <span>Curated Question Bank</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent text-center">
          Most Asked Questions
        </h1>

        <p className="text-muted-foreground text-center max-w-2xl text-lg">
          Prepare with our aggregated list of the most recurring viva questions.
          Click the answer button to reveal the full explanation.
        </p>
      </div>

      {/* Subject Tabs */}
      <div className="flex items-center justify-center gap-3 mb-10">
        {mostAskedQA.map((subj, idx) => (
          <button
            key={subj.subject}
            onClick={() => handleSubjectChange(idx)}
            className={cn(
              "px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 border",
              activeSubject === idx
                ? "bg-violet-600 text-white border-violet-600 shadow-lg shadow-violet-500/30 -translate-y-0.5"
                : "bg-card/50 backdrop-blur-sm text-muted-foreground border-border/50 hover:bg-muted/50 hover:text-foreground hover:border-border"
            )}
          >
            {subj.subject}
          </button>
        ))}
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
        {subject.categories.map((cat, idx) => {
          const IconComponent = iconMap[cat.icon] || BookOpen;
          return (
            <button
              key={cat.name}
              onClick={() => {
                setActiveCategory(idx);
                setOpenAnswers({});
              }}
              className={cn(
                "px-3.5 py-2 text-sm font-semibold rounded-full transition-all duration-300 border flex items-center gap-1.5",
                activeCategory === idx
                  ? "bg-violet-600 text-white border-violet-600 shadow-lg shadow-violet-500/30 -translate-y-0.5"
                  : "bg-card/50 backdrop-blur-sm text-muted-foreground border-border/50 hover:bg-muted/50 hover:text-foreground hover:border-border"
              )}
            >
              <IconComponent className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{cat.name}</span>
              <span className="sm:hidden">
                {cat.name.split("&")[0].trim().split(" ").slice(0, 2).join(" ")}
              </span>
            </button>
          );
        })}
      </div>

      {/* Questions List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Category Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/25">
            {(() => {
              const Icon = iconMap[category.icon] || BookOpen;
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
          const open = isAnswerOpen(activeCategory, qIdx);
          return (
            <Card
              key={qIdx}
              className={cn(
                "bg-card/50 backdrop-blur-sm border-border/50 rounded-xl transition-all duration-300",
                open
                  ? "shadow-lg shadow-violet-500/10 border-violet-500/30"
                  : "hover:shadow-md hover:border-border"
              )}
            >
              <CardContent className="p-0">
                {/* Question Row */}
                <div className="flex items-start gap-4 p-5">
                  {/* Number Badge */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 text-sm font-bold mt-0.5">
                    {qIdx + 1}
                  </div>

                  {/* Question */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[15px] font-medium leading-relaxed text-foreground/90">
                      {q.question}
                    </p>
                  </div>

                  {/* Answer Toggle */}
                  <button
                    onClick={() => toggleAnswer(activeCategory, qIdx)}
                    className={cn(
                      "shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 border cursor-pointer",
                      open
                        ? "bg-violet-500/15 text-violet-600 dark:text-violet-400 border-violet-500/30"
                        : "bg-muted/50 text-muted-foreground border-border/50 hover:bg-violet-500/10 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/30"
                    )}
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>{open ? "Hide" : "Answer"}</span>
                    <ChevronDown
                      className={cn(
                        "h-3 w-3 transition-transform duration-300",
                        open && "rotate-180"
                      )}
                    />
                  </button>
                </div>

                {/* Answer Reveal */}
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-0">
                      <div className="flex items-start gap-3 rounded-lg bg-violet-500/5 border border-violet-500/20 p-4">
                        <BookOpen className="h-4 w-4 text-violet-500 mt-0.5 shrink-0" />
                        <p className="text-sm leading-relaxed text-violet-700 dark:text-violet-300">
                          {q.answer}
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
            <Flame className="h-4 w-4 text-orange-500" />
            <span>{totalQuestions} Total Questions</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-border" />
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-violet-500" />
            <span>{subject.categories.length} Categories</span>
          </div>
        </div>
      </div>
    </div>
  );
}
