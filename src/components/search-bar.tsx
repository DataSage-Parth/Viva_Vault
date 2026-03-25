"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  defaultValue?: string;
  size?: "default" | "lg";
}

export function SearchBar({
  placeholder = "Search by proctor ID, keyword, or topic...",
  className = "",
  defaultValue = "",
  size = "default",
}: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultValue);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (query.trim()) {
        router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      }
    },
    [query, router]
  );

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <Search
        className={`absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground ${
          size === "lg" ? "h-5 w-5 left-4" : "h-4 w-4"
        }`}
      />
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={`${
          size === "lg"
            ? "h-14 pl-12 pr-4 text-base rounded-xl shadow-lg shadow-violet-500/5 border-violet-200 dark:border-violet-800/30 focus-visible:ring-violet-500/30"
            : "h-10 pl-9 pr-4 text-sm"
        } transition-all duration-300 bg-background/80 backdrop-blur-sm`}
      />
    </form>
  );
}
