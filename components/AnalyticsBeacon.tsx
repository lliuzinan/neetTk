"use client";

type GtagWindow = typeof window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  medqgoAnalyticsAllowed?: boolean;
};

export function trackEvent(name: string, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") return false;
  const analyticsWindow = window as GtagWindow;
  if (!analyticsWindow.medqgoAnalyticsAllowed) return false;
  if (analyticsWindow.gtag) {
    analyticsWindow.gtag("event", name, params);
    return true;
  }
  return false;
}
