"use client";

import { useEffect, useMemo, useState } from "react";
import type { NavbarNotification } from "@/types";

/** Tracks which navbar notifications the user has read, saved in localStorage per user. */
export function useReadNotifications(userId: string | undefined, notifications: NavbarNotification[]) {
  const storageKey = `hospital-read-notifications:${userId ?? "guest"}`;
  const [readNotificationIds, setReadNotificationIds] = useState<string[]>([]);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) setReadNotificationIds(parsed);
    } catch {
      window.localStorage.removeItem(storageKey);
    }
  }, [storageKey]);

  const unreadNotifications = useMemo(
    () => notifications.filter((notification) => !readNotificationIds.includes(notification.id)),
    [notifications, readNotificationIds]
  );

  const saveReadNotifications = (ids: string[]) => {
    setReadNotificationIds(ids);
    window.localStorage.setItem(storageKey, JSON.stringify(ids));
  };

  const markAsRead = (id: string) => {
    if (!readNotificationIds.includes(id)) {
      saveReadNotifications([...readNotificationIds, id]);
    }
  };

  const markAllAsRead = () => {
    saveReadNotifications([...new Set([...readNotificationIds, ...notifications.map((item) => item.id)])]);
  };

  const isRead = (id: string) => readNotificationIds.includes(id);

  return { unreadNotifications, isRead, markAsRead, markAllAsRead };
}
