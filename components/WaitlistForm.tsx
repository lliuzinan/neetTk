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
    setState("submitting");
    setMessage("");

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      whatsapp: String(form.get("whatsapp") || ""),
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
      setMessage("You are on the early access list. The free PDF sample will be sent when it is ready.");
      event.currentTarget.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Unable to join the list.");
    }
  }

  return (
    <form className="waitlistForm" onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" type="text" autoComplete="name" placeholder="Your name" maxLength={120} />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={180} />
      </label>
      <label>
        WhatsApp number
        <input name="whatsapp" type="tel" autoComplete="tel" placeholder="+91..." maxLength={40} />
      </label>
      <button type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? "Joining..." : "Join early access"}
      </button>
      {message && <p className={state === "success" ? "formSuccess" : "formError"}>{message}</p>}
    </form>
  );
}
