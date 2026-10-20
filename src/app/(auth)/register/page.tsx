import AuthBrand from "@/features/auth/components/AuthBrand";
import AuthHero from "@/features/auth/components/AuthHero";
import RegisterForm from "@/features/auth/components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left — Decorative */}
      <AuthHero
        title="Join MediCare"
        description="Create your account and start managing your hospital with powerful, modern tools."
        gradient="from-blue-600 via-indigo-600 to-purple-600"
        topBlob="right-20"
        bottomBlob="left-20"
      />

      {/* Right — Form */}
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-20">
        <div className="mx-auto w-full max-w-md">
          <AuthBrand />
          <h1 className="text-2xl font-bold text-foreground">Create account</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Register to access the hospital management system
          </p>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
