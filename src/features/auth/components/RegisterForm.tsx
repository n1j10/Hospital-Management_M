import Link from "next/link";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import FormSelect from "@/components/form/FormSelect";
import SubmitButton from "@/components/form/SubmitButton";
import { registerAction } from "../actions";

export default function RegisterForm() {
  return (
    <div className="mt-8">
      <FormContainer action={registerAction}>
        <div className="space-y-4">
          <FormInput
            name="name"
            label="Full Name"
            placeholder="Dr. John Smith"
            required
          />
          <FormInput
            name="email"
            label="Email"
            type="email"
            placeholder="john@hospital.com"
            required
          />
          <FormInput
            name="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            required
          />
          <FormSelect
            name="role"
            label="Role"
            required
            options={[
              { value: "RECEPTIONIST", label: "Receptionist" },
              { value: "DOCTOR", label: "Doctor" },
            ]}
            placeholder="Select your role"
          />
          <SubmitButton text="Create Account" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-md shadow-purple-500/20" />
        </div>
      </FormContainer>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400">
          Sign in
        </Link>
      </p>
    </div>
  );
}
