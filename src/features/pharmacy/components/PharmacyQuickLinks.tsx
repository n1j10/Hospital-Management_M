import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PharmacyQuickLinks() {
  return (
    <div className="flex gap-3">
      <Link href="/pharmacy/categories"><Button variant="outline" size="sm">Manage Categories</Button></Link>
      <Link href="/pharmacy/expiring"><Button variant="outline" size="sm">Expiring Soon</Button></Link>
    </div>
  );
}
