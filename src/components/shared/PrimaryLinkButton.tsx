import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

/** The purple "+ Add ..." button shown at the top of list pages. */
function PrimaryLinkButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-md shadow-purple-500/20">
        <Plus className="h-4 w-4 mr-1" />
        {children}
      </Button>
    </Link>
  );
}

export default PrimaryLinkButton;
