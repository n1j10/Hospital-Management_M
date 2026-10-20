import type { LucideIcon } from "lucide-react";

/** Card wrapping create/edit forms, with a gradient accent bar and side note. */
export default function FormCard({
  icon: Icon,
  title,
  description,
  children,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
      <div className="surface relative overflow-hidden animate-fade-up [animation-delay:100ms]">
        <div className="h-1.5 bg-brand-animated" />
        <div className="p-6 sm:p-8">{children}</div>
      </div>
      <aside className="hidden lg:block animate-fade-up [animation-delay:200ms]">
        <div className="surface relative overflow-hidden p-6">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal-500/15 blur-2xl animate-blob" />
          <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-teal-500/25 animate-float">
            <Icon className="h-6 w-6" />
          </span>
          <h3 className="relative mt-5 font-bold text-foreground">{title}</h3>
          <p className="relative mt-1.5 text-sm leading-relaxed text-muted-foreground">{description}</p>
          <div className="relative mt-5 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="text-teal-600">*</span> Required fields
          </div>
        </div>
      </aside>
    </div>
  );
}
