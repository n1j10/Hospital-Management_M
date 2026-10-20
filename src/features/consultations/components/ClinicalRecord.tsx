import { FileText, NotebookPen, Microscope } from "lucide-react";
import type { Consultation } from "@/types";

export default function ClinicalRecord({ consultation }: { consultation: Consultation }) {
  return (
    <div className="surface relative overflow-hidden p-6 animate-fade-up [animation-delay:250ms]">
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal-500/10 blur-3xl" />
      <h3 className="relative flex items-center gap-3 font-bold">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white shadow-md shadow-teal-500/20">
          <FileText className="h-5 w-5" />
        </span>
        Clinical Record
      </h3>
      <div className="relative mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-border/70 bg-muted/30 p-4">
          <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            <Microscope className="h-3.5 w-3.5" /> Diagnosis
          </p>
          <p className="mt-2 text-foreground">{consultation.diagnosis || "Not recorded"}</p>
        </div>
        <div className="rounded-xl border border-border/70 bg-muted/30 p-4">
          <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            <NotebookPen className="h-3.5 w-3.5" /> Notes
          </p>
          <p className="mt-2 whitespace-pre-line text-foreground">{consultation.notes || "No notes"}</p>
        </div>
      </div>
    </div>
  );
}
