import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/15 blur-3xl animate-blob" />
        <div className="absolute inset-0 bg-dots [mask-image:radial-gradient(circle_at_center,black,transparent_60%)]" />
      </div>
      <p className="relative text-[120px] font-extrabold leading-none tracking-tighter text-brand sm:text-[180px] animate-scale-in">404</p>
      <div className="relative -mt-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-xl shadow-teal-500/30 animate-float">
        <Compass className="h-7 w-7 animate-spin-slow" />
      </div>
      <h1 className="relative mt-6 text-2xl font-extrabold text-foreground animate-fade-up [animation-delay:150ms]">Page not found</h1>
      <p className="relative mt-2 max-w-sm text-muted-foreground animate-fade-up [animation-delay:250ms]">
        The page you are looking for does not exist or was moved.
      </p>
      <Link
        href="/admin"
        className={cn(buttonVariants({ variant: "brand" }), "group relative mt-8 h-11 rounded-xl px-6 font-semibold animate-fade-up [animation-delay:350ms]")}
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Dashboard
      </Link>
    </div>
  );
}
