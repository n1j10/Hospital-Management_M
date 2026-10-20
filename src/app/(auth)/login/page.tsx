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
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground animate-fade-up [animation-delay:80ms]">
            Welcome back <span className="inline-block origin-[70%_70%] animate-[wiggle_2.5s_ease-in-out_infinite]">👋</span>
          </h1>
          <p className="mt-2 text-muted-foreground animate-fade-up [animation-delay:140ms]">
            Sign in to your account to continue
          </p>
          <LoginForm />
        </div>
      </div>

      {/* Right — Showcase */}
      <AuthHero
        title="Hospital Management System"
        description="Manage patients, doctors, appointments, pharmacy, and more with our comprehensive healthcare solution."
      />
    </div>
  );
}
