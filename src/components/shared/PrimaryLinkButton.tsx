import Link from "next/link";
import { Plus } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** The gradient "+ Add ..." button shown at the top of list pages. */
function PrimaryLinkButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={cn(buttonVariants({ variant: "brand" }), "group h-10 rounded-xl px-4 font-semibold")}>
      <Plus className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
      {children}
    </Link>
  );
}

export default PrimaryLinkButton;
