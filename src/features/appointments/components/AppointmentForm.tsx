import FormContainer from "@/components/form/FormContainer";
import FormSelect from "@/components/form/FormSelect";
import FormInput from "@/components/form/FormInput";
import FormTextarea from "@/components/form/FormTextarea";
import SubmitButton from "@/components/form/SubmitButton";
import { createAppointmentAction } from "../actions";
import type { Department, DoctorWithRelations, Patient } from "@/types";

export default function AppointmentForm({
  patients,
  doctors,
  departments,
  defaultPatientId,
}: {
  patients: Patient[];
  doctors: DoctorWithRelations[];
  departments: Department[];
  defaultPatientId?: string;
}) {
  return (
    <FormContainer action={createAppointmentAction}>
      <div className="space-y-4">
        <FormSelect
          name="patientId"
          label="Patient"
          required
          defaultValue={defaultPatientId}
          options={patients.map((p) => ({ value: p.id, label: p.fullName }))}
          placeholder="Select patient"
        />
        <FormSelect
          name="doctorId"
          label="Doctor"
          required
          options={doctors.map((d) => ({
            value: d.id,
            label: `${d.user.name} — ${d.specialization}`,
          }))}
          placeholder="Select doctor"
        />
        <FormSelect
          name="departmentId"
          label="Department"
          required
          options={departments.map((d) => ({ value: d.id, label: d.name }))}
          placeholder="Select department"
        />
        <FormInput
          name="scheduledAt"
          label="Scheduled Date & Time"
          type="datetime-local"
          required
        />
        <FormTextarea
          name="reason"
          label="Reason for Visit"
          placeholder="Brief description of the reason for this appointment..."
          rows={3}
        />
        <SubmitButton text="Create Appointment" />
      </div>
    </FormContainer>
  );
}
