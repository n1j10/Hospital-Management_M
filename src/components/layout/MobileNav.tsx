"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { sidebarSections } from "./nav-links";
import Logo from "./Logo";

/** Slide-in navigation for small screens (the sidebar is hidden there). */
export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <button
            type="button"
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card shadow-xs md:hidden"
          />
        }
      >
        <Menu className="h-5 w-5" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] gap-0 p-0">
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <div className="flex h-[72px] items-center px-5">
          <Logo />
        </div>
        <nav className="space-y-5 overflow-y-auto px-3 py-4">
          {sidebarSections.map((section) => (
            <div key={section.title}>
              <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
                {section.title}
              </p>
              {section.links.map((link) => {
                const isActive =
                  pathname === link.href || (link.href !== "/admin" && pathname.startsWith(link.href));
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive ? "bg-brand text-white shadow-md" : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    )}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                    {link.name}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
