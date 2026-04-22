"use client";

import { useState, useRef } from "react";
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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredQuestions = questions
    .filter((q) => {
      if (q.subject !== subject) return false;
      if (subject !== "BDM" && q.level !== parseInt(level)) return false;
      return true;
    })
    .sort((a, b) => {
      // Cards with no date go to the end
      if (!a.viva_datetime && !b.viva_datetime) return 0;
      if (!a.viva_datetime) return 1;
      if (!b.viva_datetime) return -1;
      // Latest dates come first
      return new Date(b.viva_datetime).getTime() - new Date(a.viva_datetime).getTime();
    });

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredQuestions.length / itemsPerPage);
  const currentData = filteredQuestions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
              setCurrentPage(1);
              if (!level) setLevel("1");
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

          {subject !== "BDM" && (
            <Select value={level} onValueChange={(val) => {
              setLevel(val || "1");
              setCurrentPage(1);
            }}>
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

      <div ref={gridRef} className="scroll-mt-24">
        <SectionGrid
          questions={currentData}
          emptyMessage={`No questions found for ${subject}${subject !== "BDM" ? ` Level ${level}` : ""}.`}
        />
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="rounded-md px-3 py-1 transition-all duration-300 hover:bg-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed text-zinc-300 disabled:hover:bg-transparent"
          >
            Previous
          </button>

          <div className="flex gap-1">
            {(() => {
              const windowSize = 3;
              let start = Math.max(1, currentPage - Math.floor(windowSize / 2));
              const end = Math.min(totalPages, start + windowSize - 1);
              start = Math.max(1, end - windowSize + 1);

              return Array.from({ length: end - start + 1 }, (_, i) => start + i).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`rounded-md px-3 py-1 transition-all duration-300 ${currentPage === page
                      ? "bg-purple-600 text-white"
                      : "text-zinc-400 hover:bg-zinc-800"
                    }`}
                >
                  {page}
                </button>
              ));
            })()}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="rounded-md px-3 py-1 transition-all duration-300 hover:bg-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed text-zinc-300 disabled:hover:bg-transparent"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
