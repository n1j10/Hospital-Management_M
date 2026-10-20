import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import PrimaryLinkButton from "@/components/shared/PrimaryLinkButton";

export default function PharmacyHeaderActions({ lowStockCount }: { lowStockCount: number }) {
  return (
    <div className="flex gap-2">
      <Link
        href="/pharmacy/low-stock"
        className="inline-flex h-10 items-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 text-sm font-semibold text-amber-700 transition-all hover:-translate-y-0.5 hover:bg-amber-500/15 dark:text-amber-300"
      >
        <AlertTriangle className="h-4 w-4" />
        Low Stock
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1.5 text-[11px] font-bold text-white">
          {lowStockCount}
        </span>
      </Link>
      <PrimaryLinkButton href="/pharmacy/add">Add Medicine</PrimaryLinkButton>
    </div>
  );
}
