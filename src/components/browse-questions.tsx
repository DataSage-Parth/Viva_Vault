"use client";

import { useState } from "react";
import { Question } from "@/types";
import { SectionGrid } from "@/components/section-grid";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BrowseQuestionsProps {
  questions: Question[];
}

export function BrowseQuestions({ questions }: BrowseQuestionsProps) {
  const [subject, setSubject] = useState<string>("MAD1");
  const [level, setLevel] = useState<string>("1");

  const isLevelRequired = ["MAD1", "MAD2", "MLP"].includes(subject);

  const filteredQuestions = questions.filter((q) => {
    if (q.subject !== subject) return false;
    if (isLevelRequired && q.level !== parseInt(level)) return false;
    return true;
  });

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold">Browse Questions</h2>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Select 
            value={subject} 
            onValueChange={(val) => {
              const strVal = val || "MAD1";
              setSubject(strVal);
              if (!["MAD1", "MAD2", "MLP"].includes(strVal)) {
                setLevel("");
              } else if (!level) {
                setLevel("1");
              }
            }}
          >
            <SelectTrigger className="w-[160px] sm:w-[180px] bg-card/50 backdrop-blur-sm border-border/50">
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="MAD1">MAD 1</SelectItem>
              <SelectItem value="MAD2">MAD 2</SelectItem>
              <SelectItem value="MLP">MLP</SelectItem>
              <SelectItem value="BDM">BDM</SelectItem>
              <SelectItem value="GENAI">GenAI</SelectItem>
            </SelectContent>
          </Select>

          {isLevelRequired && (
            <Select value={level} onValueChange={(val) => setLevel(val || "1")}>
              <SelectTrigger className="w-[160px] sm:w-[120px] bg-card/50 backdrop-blur-sm border-border/50">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Level 1</SelectItem>
                <SelectItem value="2">Level 2</SelectItem>
              </SelectContent>
            </Select>
          )}
        </div>
      </div>

      <SectionGrid 
        questions={filteredQuestions} 
        emptyMessage={`No questions found for ${subject}${isLevelRequired ? ` Level ${level}` : ""}.`} 
      />
    </div>
  );
}
