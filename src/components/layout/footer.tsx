import { BookOpen, Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-violet-600 to-indigo-600">
              <BookOpen className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              VivaVault
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/search" className="hover:text-foreground transition-colors">
              Search
            </Link>
            <Link href="/submit" className="hover:text-foreground transition-colors">
              Submit
            </Link>
          </div>

          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> for MAD Students
          </p>
        </div>

        <div className="border-t border-border/20 py-6 text-center">
          <p className="text-xs text-muted-foreground/60 max-w-4xl mx-auto leading-relaxed">
            This platform is created purely for educational purposes to help students prepare for viva exams. The questions shared here are based on students&apos; personal experiences and may not reflect actual exam content. We do not promote any unfair practices or academic misconduct.
          </p>
        </div>
      </div>
    </footer>
  );
}
