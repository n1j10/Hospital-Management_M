import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import FormSelect from "@/components/form/FormSelect";
import SubmitButton from "@/components/form/SubmitButton";
import { createDoctorAction } from "../actions";
import type { Department } from "@/types";

export default function DoctorForm({ departments }: { departments: Department[] }) {
  return (
    <FormContainer action={createDoctorAction}>
      <div className="space-y-5">
        <FormInput name="name" label="Full Name" placeholder="Dr. John Smith" required />
        <FormInput name="email" label="Email" type="email" placeholder="john@hospital.com" required />
        <FormInput name="password" label="Password" type="password" placeholder="••••••••" required />
        <FormInput name="specialization" label="Specialization" placeholder="e.g. Cardiologist" required />
        <FormSelect
          name="departmentId"
          label="Department"
          required
          options={departments.map((d) => ({ value: d.id, label: d.name }))}
          placeholder="Select department"
        />
        <SubmitButton text="Add Doctor" />
      </div>
    </FormContainer>
  );
}
