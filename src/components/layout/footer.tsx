import { BookOpen, Heart, Code as GitHub, Briefcase as LinkedIn, MonitorPlay as Youtube, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Section */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-violet-600 to-indigo-600 shadow-sm shadow-violet-500/20">
                <BookOpen className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                VivaVault
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              A student-driven platform to explore real viva questions and prepare smarter. Stop guessing and start learning directly from actual viva experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Navigation</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-violet-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-violet-500 transition-colors">Search Questions</Link>
              </li>
              <li>
                <Link href="/submit" className="hover:text-violet-500 transition-colors">Submit Experience</Link>
              </li>
              <li>
                <Link href="/most-asked" className="hover:text-violet-500 transition-colors">Most Asked</Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Connect</h3>
            <div className="flex flex-col space-y-3">
              <a href="https://github.com/DataSage-Parth/Viva_Vault" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-violet-500 transition-colors group">
                <GitHub className="h-4 w-4 group-hover:text-violet-500 transition-colors" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/parth-sharma-ds1605" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-blue-500 transition-colors group">
                <LinkedIn className="h-4 w-4 group-hover:text-blue-500 transition-colors" />
                <span>LinkedIn</span>
              </a>
              <a href="https://www.youtube.com/@Datapocalypse-01" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-red-500 transition-colors group">
                <Youtube className="h-4 w-4 group-hover:text-red-500 transition-colors" />
                <span>YouTube</span>
              </a>
              <a href="mailto:parthsharma6182@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-indigo-500 transition-colors group pt-2">
                <Mail className="h-4 w-4 group-hover:text-indigo-500 transition-colors" />
                <span>parthsharma6182@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 pt-8 flex flex-col items-center gap-4">
          <p className="flex items-center justify-center gap-2 text-sm font-medium text-foreground">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> for MAD Students
          </p>

          <p className="text-xs text-muted-foreground/60 max-w-4xl text-center leading-relaxed">
            This platform is created purely for educational purposes to help students prepare for viva exams. The questions shared here are based on students&apos; personal experiences and may not reflect actual exam content. We do not promote any unfair practices or academic misconduct.
          </p>
        </div>
      </div>
    </footer>
  );
}
