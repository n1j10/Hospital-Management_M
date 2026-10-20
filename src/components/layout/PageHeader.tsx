import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

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
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  backHref?: string;
  actions?: React.ReactNode;
}) {
  const heading = (
    <div>
      <h1 className="text-2xl font-bold text-foreground">{title}</h1>
      {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
    </div>
  );

  if (backHref) {
    return (
      <div className="flex items-center gap-4">
        <Link href={backHref}>
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        {heading}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between">
      {heading}
      {actions}
    </div>
  );
}

export default PageHeader;
