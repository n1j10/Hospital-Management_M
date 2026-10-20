"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Bell, CheckCheck, CircleAlert, Info, BellOff } from "lucide-react";
import DarkMode from "./DarkMode";
import MobileNav from "./MobileNav";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import InitialsAvatar from "@/components/shared/InitialsAvatar";
import { useReadNotifications } from "@/hooks/use-read-notifications";
import { cn } from "@/lib/utils";
import type { AuthPayload } from "@/lib/auth";
import type { NavbarNotification } from "@/types";

function greeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export default function Navbar({
  user,
  notifications,
}: {
  user: AuthPayload | null;
  notifications: NavbarNotification[];
}) {
  const router = useRouter();
  const { unreadNotifications, isRead, markAsRead, markAllAsRead } = useReadNotifications(
    user?.userId,
    notifications
  );
  const firstName = user?.name.split(" ")[0] ?? "there";
  const today = new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" }).format(new Date());

  return (
    <header className="glass sticky top-0 z-20 flex h-[72px] items-center justify-between gap-4 border-b border-border/70 px-4 sm:px-8">
      {/* Left — greeting */}
      <div className="flex items-center gap-3">
        <MobileNav />
        <div className="animate-fade-in">
          <h2 className="text-base font-bold text-foreground sm:text-lg" suppressHydrationWarning>
            {greeting()}, <span className="text-brand">{firstName}</span> 👋
          </h2>
          <p className="hidden text-xs text-muted-foreground sm:block" suppressHydrationWarning>
            {today}
          </p>
        </div>
      </div>

      {/* Right — Actions */}
      <div className="flex items-center gap-2 sm:gap-3">
        <DarkMode />

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <button
                type="button"
                className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card shadow-xs transition-all hover:border-teal-500/40 hover:text-teal-600"
                aria-label={`Notifications${unreadNotifications.length ? `, ${unreadNotifications.length} unread` : ""}`}
              >
                <Bell className={cn("h-[18px] w-[18px]", unreadNotifications.length > 0 && "origin-top animate-[wiggle_2s_ease-in-out_infinite]")} />
                {unreadNotifications.length > 0 && (
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white ring-2 ring-card">
                    {unreadNotifications.length > 9 ? "9+" : unreadNotifications.length}
                  </span>
                )}
              </button>
            }
          />
          <DropdownMenuContent className="w-96 max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl p-0" align="end">
            <div className="relative overflow-hidden bg-brand px-4 py-4 text-white">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/15 blur-md" />
              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold">Notifications</p>
                  <p className="text-xs text-white/80">
                    {unreadNotifications.length ? `${unreadNotifications.length} unread alert${unreadNotifications.length === 1 ? "" : "s"}` : "You are all caught up"}
                  </p>
                </div>
                {unreadNotifications.length > 0 && (
                  <Button variant="ghost" size="sm" onClick={markAllAsRead} className="h-8 rounded-lg bg-white/15 text-xs text-white hover:bg-white/25 hover:text-white">
                    <CheckCheck className="h-3.5 w-3.5" />
                    Mark all read
                  </Button>
                )}
              </div>
            </div>
            <div className="max-h-96 overflow-y-auto p-2 scrollbar-thin">
              {notifications.length === 0 ? (
                <div className="flex flex-col items-center gap-2 px-4 py-10 text-center text-sm text-muted-foreground">
                  <BellOff className="h-6 w-6" />
                  No operational alerts right now.
                </div>
              ) : (
                notifications.map((notification) => {
                  const unread = !isRead(notification.id);
                  const Icon = notification.type === "warning" ? CircleAlert : Info;

                  return (
                    <DropdownMenuItem
                      key={notification.id}
                      className={cn("cursor-pointer items-start gap-3 rounded-xl px-3 py-3", unread && "bg-teal-500/[0.05]")}
                      onClick={() => {
                        markAsRead(notification.id);
                        router.push(notification.href);
                      }}
                    >
                      <span className={cn("mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg", notification.type === "warning" ? "bg-amber-500/15 text-amber-600" : "bg-sky-500/15 text-sky-600")}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center justify-between gap-3">
                          <span className="truncate text-sm font-semibold">{notification.title}</span>
                          {unread && <span className="h-2 w-2 shrink-0 rounded-full bg-teal-500 shadow-[0_0_8px] shadow-teal-500" aria-label="Unread" />}
                        </span>
                        <span className="mt-0.5 block whitespace-normal text-xs leading-5 text-muted-foreground">{notification.description}</span>
                      </span>
                    </DropdownMenuItem>
                  );
                })
              )}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link
          href="/profile"
          aria-label="Open profile"
          className="group flex items-center gap-3 rounded-xl border border-transparent py-1 pl-1 pr-1 transition-all hover:border-border hover:bg-card sm:pr-3"
        >
          <InitialsAvatar name={user?.name ?? "User"} className="h-9 w-9 text-xs transition-transform group-hover:scale-105" />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold text-foreground">{user?.name ?? "User"}</span>
            <span className="text-[11px] capitalize text-muted-foreground">{user?.role.toLowerCase()}</span>
          </span>
        </Link>
      </div>
    </header>
  );
}
