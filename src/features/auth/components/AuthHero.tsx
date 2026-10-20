import { Activity } from "lucide-react";
import { cn } from "@/lib/utils";

/** The gradient half of the auth screens. */
export default function AuthHero({
  title,
  description,
  gradient,
  topBlob,
  bottomBlob,
}: {
  title: string;
  description: string;
  gradient: string;
  topBlob: string;
  bottomBlob: string;
}) {
  return (
    <div className={cn("hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br relative overflow-hidden", gradient)}>
      <div className="absolute inset-0">
        <div className={cn("absolute top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl", topBlob)} />
        <div className={cn("absolute bottom-20 h-96 w-96 rounded-full bg-white/5 blur-3xl", bottomBlob)} />
      </div>
      <div className="relative text-center text-white px-12">
        <Activity className="h-16 w-16 mx-auto mb-6 opacity-90" />
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-purple-100 text-lg max-w-md mx-auto leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
