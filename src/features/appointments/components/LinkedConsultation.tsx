import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import type { Consultation } from "@/types";

export default function LinkedConsultation({ consultation }: { consultation: Consultation }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-teal-500/25 bg-gradient-to-br from-teal-500/10 via-cyan-500/5 to-transparent p-6 animate-fade-up [animation-delay:350ms]">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal-500/15 blur-2xl animate-blob" />
      <h3 className="relative flex items-center gap-2 font-bold text-teal-700 dark:text-teal-300">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white">
          <FileText className="h-4 w-4" />
        </span>
        Consultation Record
      </h3>
      <div className="relative mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Diagnosis</p>
          <p className="mt-1 text-sm text-foreground">{consultation.diagnosis || "Not recorded"}</p>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Notes</p>
          <p className="mt-1 text-sm text-foreground">{consultation.notes || "No notes"}</p>
        </div>
      </div>
      <Link
        href={`/consultations/${consultation.id}`}
        className="group relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800 dark:text-teal-300"
      >
        View Full Consultation
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
