import { Rocket } from "lucide-react";

export default function MaintenancePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-background to-indigo-500/10" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-xl text-center">
        <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-500">
          <Rocket className="h-8 w-8" />
        </div>

        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-violet-500">
          VivaVault
        </p>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          We&apos;ll be back soon.
        </h1>

        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-muted-foreground sm:text-lg">
          VivaVault is taking a little break while we make some improvements.
          Thanks for your patience — see you again soon.
        </p>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-violet-500" />
          Currently under maintenance
        </div>
      </div>
    </main>
  );
}
