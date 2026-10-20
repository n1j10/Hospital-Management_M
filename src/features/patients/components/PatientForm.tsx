import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import FormSelect from "@/components/form/FormSelect";
import FormTextarea from "@/components/form/FormTextarea";
import SubmitButton from "@/components/form/SubmitButton";
import { createPatientAction } from "../actions";

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((b) => ({
  value: b, label: b,
}));

export default function PatientForm() {
  return (
    <FormContainer action={createPatientAction}>
      <div className="space-y-5">
        <FormInput name="fullName" label="Full Name" placeholder="e.g. Ahmed Mohammed" required />
        <div className="grid gap-4 sm:grid-cols-2">
          <FormSelect
            name="gender"
            label="Gender"
            required
            options={[
              { value: "MALE", label: "Male" },
              { value: "FEMALE", label: "Female" },
            ]}
            placeholder="Select gender"
          />
          <FormSelect
            name="bloodType"
            label="Blood Type"
            options={bloodTypes}
            placeholder="Select blood type"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <FormInput name="dateOfBirth" label="Date of Birth" type="date" required />
          <FormInput name="phone" label="Phone Number" type="tel" placeholder="+964 7XX XXX XXXX" required />
        </div>
        <FormTextarea name="address" label="Address" placeholder="Patient's full address..." />
        <SubmitButton text="Register Patient" />
      </div>
    </FormContainer>
  );
}
