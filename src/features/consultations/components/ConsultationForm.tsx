import FormContainer from "@/components/form/FormContainer";
import FormSelect from "@/components/form/FormSelect";
import FormTextarea from "@/components/form/FormTextarea";
import SubmitButton from "@/components/form/SubmitButton";
import { formatDateTime } from "@/lib/format";
import { createConsultationAction } from "../actions";
import type { AppointmentForSelect } from "@/types";

export default function ConsultationForm({
  appointments,
  defaultAppointmentId,
}: {
  appointments: AppointmentForSelect[];
  defaultAppointmentId?: string;
}) {
  return (
    <FormContainer action={createConsultationAction}>
      <div className="space-y-5">
        <FormSelect
          name="appointmentId"
          label="Appointment"
          required
          defaultValue={defaultAppointmentId}
          options={appointments.map((a) => ({
            value: a.id,
            label: `${a.patient.fullName} — ${a.doctor.user.name} (${formatDateTime(a.scheduledAt)})`,
          }))}
          placeholder="Select completed appointment"
        />
        {/* Patient and doctor are taken from the selected appointment by the backend */}
        <FormTextarea name="diagnosis" label="Diagnosis" placeholder="Enter diagnosis details..." rows={3} />
        <FormTextarea name="notes" label="Clinical Notes" placeholder="Additional notes, observations, or instructions..." rows={4} />
        <SubmitButton text="Save Consultation" />
      </div>
    </FormContainer>
  );
}
