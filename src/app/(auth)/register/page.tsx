import AuthBrand from "@/features/auth/components/AuthBrand";
import AuthHero from "@/features/auth/components/AuthHero";
import RegisterForm from "@/features/auth/components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left — Showcase */}
      <AuthHero
        title="Join MediCare"
        description="Create your account and start managing your hospital with powerful, modern tools."
      />

      {/* Right — Form */}
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-20">
        <div className="mx-auto w-full max-w-md">
          <AuthBrand />
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground animate-fade-up [animation-delay:80ms]">
            Create account
          </h1>
          <p className="mt-2 text-muted-foreground animate-fade-up [animation-delay:140ms]">
            Register to access the hospital management system
          </p>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
