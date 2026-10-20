import { Building2, CalendarDays, LogOut, Mail, ShieldCheck, Stethoscope, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import InitialsAvatar from "@/components/shared/InitialsAvatar";
import InfoTile from "@/components/shared/InfoTile";
import { logoutAction } from "@/features/auth/actions";
import { formatDate } from "@/lib/format";
import type { UserProfile } from "@/types";

const roleLabels: Record<string, string> = {
  ADMIN: "Administrator",
  DOCTOR: "Doctor",
  RECEPTIONIST: "Receptionist",
};

export default function ProfileView({ user }: { user: UserProfile }) {
  const role = roleLabels[user.role] ?? user.role;

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <section className="surface relative overflow-hidden animate-scale-in">
        <div className="relative h-40 bg-brand-animated">
          <div className="absolute inset-0 bg-dots opacity-25" />
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/15 blur-2xl animate-blob" />
          <div className="absolute bottom-0 left-1/4 h-32 w-32 rounded-full bg-sky-300/25 blur-2xl animate-blob [animation-delay:-6s]" />
        </div>
        <div className="relative px-6 pb-6 sm:px-8">
          <div className="-mt-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
              <div className="rounded-full bg-card p-1.5 shadow-xl animate-fade-up [animation-delay:150ms]">
                <InitialsAvatar name={user.name} size="xl" className="ring-0" />
              </div>
              <div className="pb-1 animate-fade-up [animation-delay:250ms]">
                <h1 className="text-2xl font-extrabold tracking-tight text-foreground">{user.name}</h1>
                <p className="mt-0.5 text-sm text-muted-foreground">{user.email}</p>
              </div>
            </div>
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-teal-500/10 px-3.5 py-1.5 text-sm font-semibold text-teal-700 ring-1 ring-inset ring-teal-500/25 dark:text-teal-300 animate-fade-up [animation-delay:350ms]">
              <ShieldCheck className="h-4 w-4" />
              {role}
            </span>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="surface p-6 animate-fade-up [animation-delay:300ms]">
          <h2 className="mb-4 text-base font-bold">Account information</h2>
          <div className="space-y-3">
            <InfoTile icon={UserRound} label="Full name">{user.name}</InfoTile>
            <InfoTile icon={Mail} label="Email address">{user.email}</InfoTile>
            <InfoTile icon={ShieldCheck} label="System role">{role}</InfoTile>
          </div>
          <form action={logoutAction} className="mt-6 border-t border-border pt-5">
            <Button
              type="submit"
              className="group h-11 w-full rounded-xl bg-rose-500/10 font-semibold text-rose-600 hover:bg-rose-600 hover:text-white sm:w-auto sm:px-6"
            >
              <LogOut className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              Sign out
            </Button>
          </form>
        </div>

        <div className="surface p-6 animate-fade-up [animation-delay:400ms]">
          <h2 className="mb-4 text-base font-bold">Work details</h2>
          <div className="space-y-3">
            <InfoTile icon={Stethoscope} label="Specialization">
              {user.doctor?.specialization ?? "Not assigned"}
            </InfoTile>
            <InfoTile icon={Building2} label="Department">
              {user.doctor?.department.name ?? "Not assigned"}
            </InfoTile>
            <InfoTile icon={CalendarDays} label="Member since">{formatDate(user.createdAt)}</InfoTile>
          </div>
        </div>
      </section>
    </div>
  );
}
