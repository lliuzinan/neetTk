"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CONSENT_KEY = "medqgo_cookie_consent_v1";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(window.localStorage.getItem(CONSENT_KEY) !== "accepted");
  }, []);

  function accept() {
    window.localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside className="cookieConsent" aria-label="Cookie consent">
      <div>
        <strong>Cookies on MedQGo</strong>
        <p>
          We use essential cookies plus analytics and advertising cookies where permitted to improve NEET Biology resources and measure site performance.
          Read our <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </div>
      <button type="button" onClick={accept}>Accept</button>
    </aside>
  );
}
