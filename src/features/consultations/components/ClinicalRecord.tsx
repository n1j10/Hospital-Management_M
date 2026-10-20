import { FileText } from "lucide-react";
import type { Consultation } from "@/types";

export default function ClinicalRecord({ consultation }: { consultation: Consultation }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 space-y-4">
      <h3 className="font-semibold flex items-center gap-2">
        <FileText className="h-4 w-4 text-purple-600 dark:text-purple-400" />Clinical Record
      </h3>
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-1">Diagnosis</p>
        <p className="text-foreground">{consultation.diagnosis || "Not recorded"}</p>
      </div>
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-1">Notes</p>
        <p className="text-foreground whitespace-pre-line">{consultation.notes || "No notes"}</p>
      </div>
    </div>
  );
}
