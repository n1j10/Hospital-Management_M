import Link from "next/link";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatusUpdateForm from "./StatusUpdateForm";
import type { AppointmentWithDetails } from "@/types";

/** Status buttons for the appointment detail page (depend on the current status). */
export default function AppointmentActions({ appointment }: { appointment: AppointmentWithDetails }) {
  const id = appointment.id;

  return (
    <div className="flex gap-2">
      {appointment.status === "PENDING" && (
        <>
          <StatusUpdateForm appointmentId={id} newStatus="CONFIRMED" label="Confirm" variant="default" />
          <StatusUpdateForm appointmentId={id} newStatus="CANCELLED" label="Cancel" variant="destructive" />
        </>
      )}
      {appointment.status === "CONFIRMED" && (
        <>
          <StatusUpdateForm appointmentId={id} newStatus="COMPLETED" label="Mark Completed" variant="default" />
          <StatusUpdateForm appointmentId={id} newStatus="CANCELLED" label="Cancel" variant="destructive" />
        </>
      )}
      {appointment.status === "COMPLETED" && !appointment.consultation && (
        <Link href={`/consultations/create?appointmentId=${id}`}>
          <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-md shadow-purple-500/20">
            <FileText className="h-4 w-4 mr-1" />
            Add Consultation
          </Button>
        </Link>
      )}
    </div>
  );
}
