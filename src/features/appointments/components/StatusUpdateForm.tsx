import FormContainer from "@/components/form/FormContainer";
import SubmitButton from "@/components/form/SubmitButton";
import { updateAppointmentStatusAction } from "../actions";

export default function StatusUpdateForm({ appointmentId, newStatus, label, variant }: {
  appointmentId: string;
  newStatus: string;
  label: string;
  variant?: "brand" | "destructive" | "outline";
}) {
  return (
    <FormContainer action={updateAppointmentStatusAction}>
      <input type="hidden" name="id" value={appointmentId} />
      <input type="hidden" name="status" value={newStatus} />
      <SubmitButton text={label} variant={variant ?? "outline"} size="sm" className="h-10 min-w-0 px-4" />
    </FormContainer>
  );
}
