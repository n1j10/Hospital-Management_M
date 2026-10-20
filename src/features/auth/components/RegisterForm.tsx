import Link from "next/link";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import FormSelect from "@/components/form/FormSelect";
import SubmitButton from "@/components/form/SubmitButton";
import { registerAction } from "../actions";

export default function RegisterForm() {
  return (
    <div className="mt-8 animate-fade-up [animation-delay:200ms]">
      <FormContainer action={registerAction}>
        <div className="space-y-5">
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
          <SubmitButton text="Create Account" className="w-full h-12 text-[15px]" />
        </div>
      </FormContainer>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-teal-600 underline-offset-4 hover:underline dark:text-teal-400">
          Sign in
        </Link>
      </p>
    </div>
  );
}
