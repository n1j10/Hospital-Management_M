import { SearchX } from "lucide-react";
import { cn } from "@/lib/utils";

function EmptyList({
  heading = "No items found",
  message = "Try adjusting your search or filters.",
  className,
}: {
  heading?: string;
  message?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "surface relative flex flex-col items-center justify-center overflow-hidden px-6 py-20 text-center animate-scale-in",
        className
      )}
    >
      <div className="absolute inset-0 bg-dots opacity-60 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />
      <div className="relative mb-6 animate-float">
        <div className="absolute inset-0 -m-4 rounded-full bg-teal-500/10 blur-xl" />
        <div className="absolute inset-0 -m-3 rounded-full border border-dashed border-teal-500/30 animate-spin-slow" />
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white shadow-xl shadow-teal-500/30">
          <SearchX className="h-7 w-7" />
        </div>
      </div>
      <h3 className="relative text-lg font-bold text-foreground">{heading}</h3>
      <p className="relative mt-1.5 max-w-sm text-sm text-muted-foreground">{message}</p>
    </div>
  );
}

export default EmptyList;
