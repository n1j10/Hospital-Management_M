import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import PrimaryLinkButton from "@/components/shared/PrimaryLinkButton";

export default function PharmacyHeaderActions({ lowStockCount }: { lowStockCount: number }) {
  return (
    <div className="flex gap-2">
      <Link href="/pharmacy/low-stock">
        <Button variant="outline" size="sm" className="text-amber-600 border-amber-500/30">
          <AlertTriangle className="h-4 w-4 mr-1" />
          Low Stock ({lowStockCount})
        </Button>
      </Link>
      <PrimaryLinkButton href="/pharmacy/add">Add Medicine</PrimaryLinkButton>
    </div>
  );
}
