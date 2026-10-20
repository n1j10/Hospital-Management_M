import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * Page title row.
 * - With `backHref`: back arrow + title (detail / create pages).
 * - Without: title on the left, `actions` on the right (list pages).
 */
function PageHeader({
  title,
  description,
  backHref,
  actions,
  eyebrow,
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  backHref?: string;
  actions?: React.ReactNode;
  eyebrow?: string;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between animate-fade-up">
      <div className="flex items-start gap-4">
        {backHref && (
          <Link
            href={backHref}
            aria-label="Go back"
            className="group mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card shadow-xs transition-all hover:-translate-x-0.5 hover:border-teal-500/40 hover:text-teal-600"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          </Link>
        )}
        <div>
          {eyebrow && (
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">{eyebrow}</p>
          )}
          <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">{title}</h1>
          {description && <p className="mt-1.5 text-sm text-muted-foreground">{description}</p>}
        </div>
      </div>
      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </div>
  );
}

export default PageHeader;
