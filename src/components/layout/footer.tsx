import {
  BookOpen,
  Heart,
  Sparkles,
  FileCode2,
  Search,
  Send,
  BarChart3,
  PlayCircle,
} from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/search", label: "Search Questions" },
  { href: "/submit", label: "Submit Experience" },
  { href: "/most-asked", label: "Most Asked" },
  { href: "/coding-questions", label: "Coding Questions" },
];

const resourceLinks = [
  { href: "/search", label: "Browse by Subject", icon: Search },
  { href: "/most-asked", label: "Top Viva Topics", icon: BarChart3 },
  { href: "/coding-questions", label: "Practice Code", icon: FileCode2 },
  { href: "/submit", label: "Share Your Viva", icon: Send },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] gap-12 lg:gap-16 mb-12">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 shadow-md shadow-violet-500/20">
                <BookOpen className="h-4.5 w-4.5 text-white" />
              </div>

              <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                VivaVault
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              A student-driven platform to explore real viva questions and
              prepare smarter. Stop guessing — start learning from actual viva
              experiences.
            </p>

            <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
              <Sparkles className="h-3.5 w-3.5 text-violet-500" />
              <span>Built by students, for students</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-widest">
              Navigation
            </h3>

            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-violet-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-widest">
              Resources
            </h3>

            <ul className="space-y-2.5 text-sm">
              {resourceLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-indigo-500 transition-colors duration-200 group"
                  >
                    <link.icon className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}

              <li>
                <a
                  href="https://www.youtube.com/playlist?list=PLKg-vW748IxmjeW8hrbv68iqWdqlmV8YI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-red-600 transition-colors duration-200 group"
                >
                  <PlayCircle className="h-3.5 w-3.5 text-red-500 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200" />
                  MAD 1 Viva Preparation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/20" />

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="flex items-center gap-1.5 text-sm font-medium text-foreground">
            Made with
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 animate-pulse" />
            for MAD Students
          </p>

          <p className="text-xs text-muted-foreground/50 max-w-lg sm:text-right leading-relaxed">
            Created for educational purposes only. Questions are based on
            students&apos; personal experiences and may not reflect actual exam
            content.
          </p>
        </div>
      </div>
    </footer>
  );
}
