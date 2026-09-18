"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "medqgo-analytics-consent-v1";
const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  medqgoAnalyticsAllowed?: boolean;
  googlefc?: { showRevocationMessage?: () => void };
};

function removeAnalyticsCookies() {
  const host = location.hostname.split(".");
  const domains = ["", ...host.map((_, i) => `; domain=${host.slice(i).join(".")}`)];
  for (const entry of document.cookie.split(";")) {
    const name = entry.split("=")[0].trim();
    if (name === "_ga" || name.startsWith("_ga_") || name === "_gid" || name.startsWith("_gat")) {
      for (const domain of domains) document.cookie = `${name}=; Max-Age=0; path=/${domain}; SameSite=Lax`;
    }
  }
}

export function GoogleAnalytics({ gaId }: { gaId: string }) {
  const [visible, setVisible] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const w = window as AnalyticsWindow;
    function apply(allowed: boolean) {
      w.medqgoAnalyticsAllowed = allowed;
      if (!allowed) {
        // Disable automatic GA events too; removing a script cannot unload GA.
        if (gaId) (w as unknown as Record<string, unknown>)[`ga-disable-${gaId}`] = true;
        if (document.getElementById("medqgo-ga")) w.gtag?.("consent", "update", { analytics_storage: "denied" });
        removeAnalyticsCookies();
        return;
      }
      if (!gaId) return;
      (w as unknown as Record<string, unknown>)[`ga-disable-${gaId}`] = false;
      w.gtag?.("consent", "update", { analytics_storage: "granted" });
      if (!document.getElementById("medqgo-ga")) {
        w.gtag?.("js", new Date());
        w.gtag?.("config", gaId);
        const script = document.createElement("script");
        script.id = "medqgo-ga";
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
        document.head.appendChild(script);
      }
    }
    function restore() {
      let allowed = false;
      let known = false;
      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
        known = typeof saved?.allowed === "boolean" && Number.isFinite(saved?.at) && Date.now() >= saved.at && Date.now() - saved.at < MAX_AGE;
        allowed = known && saved.allowed;
      } catch { /* Unavailable storage leaves analytics off. */ }
      apply(allowed);
      setVisible(!known && Boolean(gaId));
    }
    const open = () => { setNotice(""); setVisible(true); };
    const choice = (event: Event) => {
      const allowed = (event as CustomEvent<boolean>).detail;
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ allowed, at: Date.now() })); } catch { /* Session-only choice. */ }
      apply(allowed);
      setVisible(false);
    };
    restore();
    window.addEventListener("medqgo:privacy", open);
    window.addEventListener("medqgo:analytics-choice", choice);
    window.addEventListener("storage", restore);
    return () => {
      window.removeEventListener("medqgo:privacy", open);
      window.removeEventListener("medqgo:analytics-choice", choice);
      window.removeEventListener("storage", restore);
    };
  }, [gaId]);

  if (!visible) return null;
  return (
    <section className="analyticsConsent" aria-label="Analytics privacy choices">
      <h2>Optional analytics</h2>
      <p>Allow Google Analytics cookies to help us understand how these notes are used? Reading works either way. Advertising choices are managed separately by Google. <a href="/privacy">Privacy policy</a></p>
      <div className="consentActions">
        <button type="button" onClick={() => window.dispatchEvent(new CustomEvent("medqgo:analytics-choice", { detail: false }))}>Reject analytics</button>
        <button type="button" onClick={() => window.dispatchEvent(new CustomEvent("medqgo:analytics-choice", { detail: true }))}>Allow analytics</button>
        <button type="button" onClick={() => {
          const cmp = (window as AnalyticsWindow).googlefc;
          if (cmp?.showRevocationMessage) { setVisible(false); cmp.showRevocationMessage(); }
          else setNotice("Google advertising privacy controls are not available for this visit.");
        }}>Advertising choices</button>
      </div>
      {notice && <p role="status">{notice}</p>}
    </section>
  );
}
