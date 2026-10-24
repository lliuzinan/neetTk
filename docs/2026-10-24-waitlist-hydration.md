# Waitlist loading fallback — 24 October 2026

Fixed the audit's browser-default GET submission risk: waitlist fields and submit button are disabled until the React handler is ready. The form also declares POST explicitly and provides a visible explanation before initialization, while keeping the free sample available. Prevent duplicate submissions while a request is pending; announce submission feedback as a status message.

Scope is the frontend fallback only. API input validation, database access policy and actual email delivery remain unaudited/unfixed in this change. No production leads were submitted. Browser checks use intercepted local responses, not database writes.

Validation: production build and existing rendered/content tests, JavaScript-disabled control states, mobile/desktop error and retry-success paths, and no email query string. Other outstanding content work includes the immunity diagram/classification and generic references; this is not completion of the wider content programme.
