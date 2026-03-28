"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bookmark,
  BookmarkCheck,
  Copy,
  Share2,
  Calendar,
  User,
  MessageSquare,
  ThumbsUp,
} from "lucide-react";
import { Question } from "@/types";
import { format } from "date-fns";
import { useState, useEffect, useCallback } from "react";
import { toast } from "sonner";
import Link from "next/link";
import { handleUpvote } from "@/lib/upvotes";

interface QuestionCardProps {
  question: Question;
  highlightTerms?: string[];
}

function highlightText(text: string, terms: string[]): React.ReactNode {
  if (!terms.length) return text;

  const regex = new RegExp(
    `(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi"
  );
  const parts = text.split(regex);

  return parts.map((part, i) => {
    const isMatch = terms.some(
      (t) => part.toLowerCase() === t.toLowerCase()
    );
    return isMatch ? <mark key={i}>{part}</mark> : part;
  });
}

export function QuestionCard({ question, highlightTerms = [] }: QuestionCardProps) {
  const [bookmarked, setBookmarked] = useState(false);
  const [upvotes, setUpvotes] = useState(question.upvotes || 0);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("vv-bookmarks") || "[]");
    setBookmarked(bookmarks.includes(question.id));
  }, [question.id]);

  const toggleBookmark = useCallback(() => {
    const bookmarks: string[] = JSON.parse(
      localStorage.getItem("vv-bookmarks") || "[]"
    );
    let updated: string[];
    if (bookmarks.includes(question.id)) {
      updated = bookmarks.filter((id) => id !== question.id);
      toast.info("Bookmark removed");
    } else {
      updated = [...bookmarks, question.id];
      toast.success("Question bookmarked!");
    }
    localStorage.setItem("vv-bookmarks", JSON.stringify(updated));
    setBookmarked(!bookmarked);
  }, [question.id, bookmarked]);

  const copyText = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(question.questions_text);
      toast.success("Copied to clipboard!");
    } catch {
      toast.error("Failed to copy");
    }
  }, [question.questions_text]);

  const share = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `VivaVault - ${question.proctor_id}`,
          text: question.questions_text,
          url: `/proctor/${encodeURIComponent(question.proctor_id)}`,
        });
      } catch {
        // User cancelled
      }
    } else {
      copyText();
    }
  }, [question, copyText]);

  const onUpvote = async () => {
    if (hasVoted) return;

    // Generate anonymous userId dynamically using localStorage
    let localUserId = localStorage.getItem("vv-userid");
    if (!localUserId) {
      localUserId = crypto.randomUUID();
      localStorage.setItem("vv-userid", localUserId);
    }

    // Optimistic UI update
    setHasVoted(true);
    setUpvotes(prev => prev + 1);

    const success = await handleUpvote(question.id, localUserId);
    if (!success) {
      // Revert if database fails
      setHasVoted(false);
      setUpvotes(prev => prev - 1);
    }
  };

  return (
    <Card className="group flex flex-col h-[450px] relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5 hover:border-violet-500/20 hover:-translate-y-0.5">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.02] to-indigo-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardHeader className="pb-3 relative">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href={`/proctor/${encodeURIComponent(question.proctor_id)}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline"
              >
                <User className="h-3.5 w-3.5" />
                {highlightText(question.proctor_id, highlightTerms)}
              </Link>
              <Badge
                variant="secondary"
                className="text-xs font-medium bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300"
              >
                {question.subject}
              </Badge>
              <Badge variant="outline" className="text-xs">
                Level {question.level}
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Button
              variant="ghost"
              size={upvotes > 0 ? "sm" : "icon"}
              className={`h-8 cursor-pointer hover:bg-violet-100 dark:hover:bg-violet-500/20 rounded-full ${upvotes > 0 ? "gap-1.5 px-3" : "w-8"}`}
              onClick={onUpvote}
              disabled={hasVoted}
            >
              <ThumbsUp className={`h-4 w-4 ${hasVoted ? "text-violet-500 fill-violet-500" : "text-zinc-500"}`} />
              {upvotes > 0 && (
                <span className={`text-xs font-medium ${hasVoted ? "text-violet-600 dark:text-violet-400" : "text-zinc-500"}`}>
                  {upvotes}
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 cursor-pointer"
              onClick={toggleBookmark}
              title={bookmarked ? "Remove bookmark" : "Bookmark"}
            >
              {bookmarked ? (
                <BookmarkCheck className="h-4 w-4 text-violet-500 fill-violet-500" />
              ) : (
                <Bookmark className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 cursor-pointer"
              onClick={copyText}
              title="Copy"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative flex-1 flex flex-col min-h-0 pb-4">
        <div className="flex-1 overflow-y-auto custom-scrollbar -mr-5 pr-5 space-y-3 mb-3">
          <div className="text-sm leading-relaxed">
            <ul className="list-disc pl-5 space-y-2 marker:text-violet-500">
              {question.questions_text.split('\n').map((line, idx) => {
                const cleanLine = line.replace(/^[-•*>\s]+/, '').trim();
                if (!cleanLine) return null;
                return (
                  <li key={idx} className="text-foreground/90 pl-1 leading-relaxed">
                    {highlightText(cleanLine, highlightTerms)}
                  </li>
                );
              })}
            </ul>
          </div>

          {question.advice && (
            <div className="flex gap-2 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/10 border border-amber-200/50 dark:border-amber-800/20 shrink-0">
              <MessageSquare className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800 dark:text-amber-200 leading-relaxed">
                <span className="font-semibold">Advice: </span>
                {highlightText(question.advice, highlightTerms)}
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-3 mt-auto justify-between w-full border-t border-border/20 shrink-0">
          <div className="flex flex-wrap gap-2">
            {question.tags?.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-[10px] px-2 py-0.5 font-normal text-muted-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-3 ml-auto">
            {question.viva_datetime && (
              <span className="flex items-center gap-1 text-xs text-muted-foreground mr-1">
                <Calendar className="h-3 w-3" />
                {format(new Date(question.viva_datetime), "MMM d, yyyy")}
              </span>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="h-6 px-2 text-[11px] font-medium text-muted-foreground hover:text-foreground cursor-pointer -mr-2"
              onClick={share}
              title="Share question"
            >
              <Share2 className="h-3 w-3 mr-1.5" /> Share
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
