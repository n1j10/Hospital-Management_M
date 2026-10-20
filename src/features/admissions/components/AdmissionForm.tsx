import FormContainer from "@/components/form/FormContainer";
import FormSelect from "@/components/form/FormSelect";
import FormTextarea from "@/components/form/FormTextarea";
import SubmitButton from "@/components/form/SubmitButton";
import { createAdmissionAction } from "../actions";
import type { Department, DoctorWithRelations, Patient } from "@/types";

export default function AdmissionForm({
  patients,
  doctors,
  departments,
}: {
  patients: Patient[];
  doctors: DoctorWithRelations[];
  departments: Department[];
}) {
  return (
    <FormContainer action={createAdmissionAction}>
      <div className="space-y-4">
        <FormSelect
          name="patientId"
          label="Patient"
          required
          options={patients.map((p) => ({ value: p.id, label: p.fullName }))}
          placeholder="Select patient"
        />
        <FormSelect
          name="doctorId"
          label="Attending Doctor"
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
        <FormTextarea name="reason" label="Reason for Admission" placeholder="Describe the reason for admission..." rows={3} />
        <SubmitButton text="Admit Patient" />
      </div>
    </FormContainer>
  );
}
