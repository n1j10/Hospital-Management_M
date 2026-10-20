import Link from "next/link";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import SubmitButton from "@/components/form/SubmitButton";
import { loginAction } from "../actions";

export default function LoginForm() {
  return (
    <div className="mt-8 animate-fade-up [animation-delay:200ms]">
      <FormContainer action={loginAction}>
        <div className="space-y-5">
          <FormInput
            name="email"
            label="Email"
            type="email"
            placeholder="doctor@hospital.com"
            required
          />
          <FormInput
            name="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            required
          />
          <SubmitButton text="Sign In" className="w-full h-12 text-[15px]" />
        </div>
      </FormContainer>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-semibold text-teal-600 underline-offset-4 hover:underline dark:text-teal-400">
          Create account
        </Link>
      </p>
    </div>
  );
}
