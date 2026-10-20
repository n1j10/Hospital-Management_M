import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import FormTextarea from "@/components/form/FormTextarea";
import SubmitButton from "@/components/form/SubmitButton";
import { createDepartmentAction } from "../actions";

export default function DepartmentForm() {
  return (
    <FormContainer action={createDepartmentAction}>
      <div className="space-y-5">
        <FormInput name="name" label="Department Name" placeholder="e.g. Cardiology" required />
        <FormTextarea name="description" label="Description" placeholder="Brief description of the department..." />
        <SubmitButton text="Create Department" />
      </div>
    </FormContainer>
  );
}
