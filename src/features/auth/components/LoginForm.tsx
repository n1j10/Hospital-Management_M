import Link from "next/link";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import SubmitButton from "@/components/form/SubmitButton";
import { loginAction } from "../actions";

export default function LoginForm() {
  return (
    <div className="mt-8">
      <FormContainer action={loginAction}>
        <div className="space-y-4">
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
          <SubmitButton text="Sign In" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-md shadow-purple-500/20" />
        </div>
      </FormContainer>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400">
          Create account
        </Link>
      </p>
    </div>
  );
}
