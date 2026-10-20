import AuthBrand from "@/features/auth/components/AuthBrand";
import AuthHero from "@/features/auth/components/AuthHero";
import LoginForm from "@/features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left — Form */}
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-20">
        <div className="mx-auto w-full max-w-md">
          <AuthBrand />
          <h1 className="text-2xl font-bold text-foreground">Welcome back</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to your account to continue
          </p>
          <LoginForm />
        </div>
      </div>

      {/* Right — Decorative */}
      <AuthHero
        title="Hospital Management System"
        description="Manage patients, doctors, appointments, pharmacy, and more with our comprehensive healthcare solution."
        gradient="from-purple-600 via-indigo-600 to-blue-600"
        topBlob="left-20"
        bottomBlob="right-20"
      />
    </div>
  );
}
