"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "@/components/AnalyticsBeacon";

type SubmitState = "idle" | "submitting" | "success" | "error";

type Props = {
  source?: string;
  topicSlug?: string;
  questionId?: string;
};

export function WaitlistForm({ source = "pdf_landing", topicSlug = "", questionId = "" }: Props) {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setState("submitting");
    setMessage("");

    const form = new FormData(formElement);
    const payload = {
      email: String(form.get("email") || ""),
      legalConsent: form.get("legalConsent") === "on",
      source,
      topicSlug,
      questionId,
      pagePath: window.location.pathname,
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Unable to join the list.");

      trackEvent("join_waitlist_submit", {
        source: payload.source,
        offer: "neet_biology_pdf",
        topic_slug: payload.topicSlug,
        question_id: payload.questionId,
      });
      setState("success");
      setMessage("You are on the early-access list. We will email you when the revision workbook is ready.");
      formElement.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Unable to join the list.");
    }
  }

  return (
    <form className="waitlistForm" onSubmit={onSubmit}>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={180} />
      </label>
      <label>
        <input name="legalConsent" type="checkbox" required />
        <span>I agree to the processing of my email for revision-workbook early access, as described in the <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms of Use</a>.</span>
      </label>
      <button type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? "Joining..." : "Join early access"}
      </button>
      {message && <p className={state === "success" ? "formSuccess" : "formError"}>{message}</p>}
    </form>
  );
}
