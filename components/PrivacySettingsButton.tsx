"use client";

export function PrivacySettingsButton() {
  return <button type="button" className="privacySettingsButton" onClick={() => window.dispatchEvent(new Event("medqgo:privacy"))}>Privacy settings</button>;
}
