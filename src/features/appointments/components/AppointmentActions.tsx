import Link from "next/link";
import { FileText } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import StatusUpdateForm from "./StatusUpdateForm";
import type { AppointmentWithDetails } from "@/types";

/** Status buttons for the appointment detail page (depend on the current status). */
export default function AppointmentActions({ appointment }: { appointment: AppointmentWithDetails }) {
  const id = appointment.id;

  return (
    <div className="flex flex-wrap gap-2">
      {appointment.status === "PENDING" && (
        <>
          <StatusUpdateForm appointmentId={id} newStatus="CONFIRMED" label="Confirm" variant="brand" />
          <StatusUpdateForm appointmentId={id} newStatus="CANCELLED" label="Cancel" variant="destructive" />
        </>
      )}
      {appointment.status === "CONFIRMED" && (
        <>
          <StatusUpdateForm appointmentId={id} newStatus="COMPLETED" label="Mark Completed" variant="brand" />
          <StatusUpdateForm appointmentId={id} newStatus="CANCELLED" label="Cancel" variant="destructive" />
        </>
      )}
      {appointment.status === "COMPLETED" && !appointment.consultation && (
        <Link
          href={`/consultations/create?appointmentId=${id}`}
          className={cn(buttonVariants({ variant: "brand" }), "h-10 rounded-xl px-4 font-semibold")}
        >
          <FileText className="h-4 w-4" />
          Add Consultation
        </Link>
      )}
    </div>
  );
}
