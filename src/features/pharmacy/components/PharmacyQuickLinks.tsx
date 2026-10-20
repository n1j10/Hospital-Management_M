import Link from "next/link";
import { ArrowRight, Clock, Tags } from "lucide-react";

const links = [
  { href: "/pharmacy/categories", label: "Manage Categories", hint: "Organize your inventory", icon: Tags, tone: "from-violet-400 to-purple-600" },
  { href: "/pharmacy/expiring", label: "Expiring Soon", hint: "Medicines within 30 days", icon: Clock, tone: "from-rose-400 to-pink-600" },
];

export default function PharmacyQuickLinks() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {links.map(({ href, label, hint, icon: Icon, tone }, i) => (
        <Link
          key={href}
          href={href}
          style={{ animationDelay: `${120 + i * 80}ms` }}
          className="surface lift group flex items-center gap-4 p-4 animate-fade-up"
        >
          <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg transition-transform duration-500 group-hover:rotate-6 ${tone}`}>
            <Icon className="h-5 w-5" />
          </span>
          <div className="flex-1">
            <p className="font-bold">{label}</p>
            <p className="text-xs text-muted-foreground">{hint}</p>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-teal-600" />
        </Link>
      ))}
    </div>
  );
}
