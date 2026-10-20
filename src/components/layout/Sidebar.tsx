"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronsLeft, ChevronsRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { sidebarSections } from "./nav-links";
import Logo from "./Logo";

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "relative z-30 hidden h-screen shrink-0 flex-col border-r border-sidebar-border bg-sidebar transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:flex",
        collapsed ? "w-[84px]" : "w-[272px]"
      )}
    >
      {/* soft glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-teal-500/10 to-transparent" />

      {/* Header / Logo */}
      <div className={cn("relative flex h-[72px] items-center px-5", collapsed && "justify-center px-0")}>
        <Logo compact={collapsed} />
      </div>

      {/* Nav Links */}
      <nav className="relative flex-1 space-y-6 overflow-y-auto px-3 py-4 scrollbar-thin">
        {sidebarSections.map((section, sectionIndex) => (
          <div key={section.title} className="animate-slide-in-left" style={{ animationDelay: `${sectionIndex * 70}ms` }}>
            {!collapsed ? (
              <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
                {section.title}
              </p>
            ) : (
              <div className="mx-auto mb-2 h-px w-8 bg-border" />
            )}
            <div className="space-y-1">
              {section.links.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/admin" && pathname.startsWith(link.href));
                const Icon = link.icon;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    title={collapsed ? link.name : undefined}
                    className={cn(
                      "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-300",
                      collapsed && "justify-center px-0",
                      isActive
                        ? "bg-brand text-white shadow-lg shadow-teal-500/25"
                        : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-[18px] w-[18px] shrink-0 transition-transform duration-300",
                        !isActive && "group-hover:scale-110 group-hover:text-teal-600 dark:group-hover:text-teal-400"
                      )}
                    />
                    {!collapsed && <span className="truncate">{link.name}</span>}
                    {isActive && !collapsed && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-white/90 shadow-[0_0_8px_white]" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Promo card */}
      {!collapsed && (
        <div className="relative mx-3 mb-3 overflow-hidden rounded-2xl bg-brand-animated p-4 text-white shadow-lg shadow-teal-500/20 animate-fade-up [animation-delay:400ms]">
          <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/15 blur-md animate-float" />
          <Sparkles className="relative h-5 w-5" />
          <p className="relative mt-2 text-sm font-bold">Care made simple</p>
          <p className="relative mt-0.5 text-xs text-white/80">Everything your hospital needs, in one place.</p>
        </div>
      )}

      {/* Collapse toggle */}
      <div className="relative border-t border-sidebar-border p-3">
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="flex h-9 w-full items-center justify-center gap-2 rounded-xl text-xs font-semibold text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground"
        >
          {collapsed ? (
            <ChevronsRight className="h-4 w-4" />
          ) : (
            <>
              <ChevronsLeft className="h-4 w-4" />
              Collapse
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
