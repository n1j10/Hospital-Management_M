"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import Logo from "@/components/layout/Logo";
import DarkMode from "@/components/layout/DarkMode";
import { cn } from "@/lib/utils";

export default function LandingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass border-b border-border/70 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Logo />
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#features" className="transition-colors hover:text-foreground">Features</a>
          <a href="#stats" className="transition-colors hover:text-foreground">Why MediCare</a>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <DarkMode />
          <Link href="/login" className={cn(buttonVariants({ variant: "ghost" }), "hidden h-10 rounded-xl px-4 font-semibold sm:inline-flex")}>
            Sign In
          </Link>
          <Link href="/register" className={cn(buttonVariants({ variant: "brand" }), "h-10 rounded-xl px-4 font-semibold")}>
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
