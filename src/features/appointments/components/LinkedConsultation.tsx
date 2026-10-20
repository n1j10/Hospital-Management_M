import Link from "next/link";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Consultation } from "@/types";

export default function LinkedConsultation({ consultation }: { consultation: Consultation }) {
  return (
    <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-5">
      <h3 className="font-semibold mb-2 text-purple-700 dark:text-purple-400 flex items-center gap-2">
        <FileText className="h-4 w-4" />
        Consultation Record
      </h3>
      <p className="text-sm text-muted-foreground mb-1">
        <strong>Diagnosis:</strong> {consultation.diagnosis || "Not recorded"}
      </p>
      <p className="text-sm text-muted-foreground mb-3">
        <strong>Notes:</strong> {consultation.notes || "No notes"}
      </p>
      <Link href={`/consultations/${consultation.id}`}>
        <Button size="sm" variant="outline">View Full Consultation</Button>
      </Link>
    </div>
  );
}
