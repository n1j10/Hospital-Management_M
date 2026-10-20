"use client";

import { RotateCcw, ServerCrash } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="relative animate-float">
        <div className="absolute inset-0 -m-4 rounded-full bg-rose-500/15 blur-xl" />
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 text-white shadow-xl shadow-rose-500/30">
          <ServerCrash className="h-8 w-8" />
        </div>
      </div>
      <h1 className="mt-6 text-2xl font-extrabold text-foreground animate-fade-up">Something went wrong</h1>
      <p className="mt-2 max-w-md text-sm text-muted-foreground animate-fade-up [animation-delay:100ms]">{error.message}</p>
      <Button variant="brand" onClick={reset} className="group mt-6 h-11 rounded-xl px-6 font-semibold animate-fade-up [animation-delay:200ms]">
        <RotateCcw className="h-4 w-4 transition-transform duration-500 group-hover:-rotate-180" />
        Try again
      </Button>
    </div>
  );
}
