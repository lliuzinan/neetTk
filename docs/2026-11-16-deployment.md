# November 16 consolidated remediation release

Owner confirmed actual batch review: “核对完了 推送”. Scope: consolidated candidate d334f48, not a whole-site or credential certification.

- Local: release candidate plus review record committed as 40a014b.
- Validation: production build and 41 tests pass; 75 sitemap pages / 722 destinations and anchors pass; 28 responsive checks pass, personal record persistence, keyboard/no-JS example and old-route 308 verified. Prior two-page PDF render evidence retained; PDF unchanged.
- Git: fast-forwarded main and pushed origin/main (4d8b981..40a014b).
- Deployment: GitHub Vercel status success, description “Deployment has completed”; deployment https://vercel.com/teamqgocom/neet-tk/8Q11a76kMm3vg4UXUrTtdP7tBq2J .
- Production: same 28 responsive checks, personal record preservation, 308, no-JS and zero page errors passed on https://medqgo.com after deployment. First probe while deployment pending saw old content; subsequent checks passed after Vercel success. Evidence: docs/audits/2026-11-16-release-evidence/production-browser.json.
- Download: production PDF SHA-256 equals local reviewed file: 5fda19ddc3ca489d11b549a4b36f7185c8ccc2b51d83298f75a3be0467b21698.

Live entry: https://medqgo.com/neet-biology-pdf#filled-example ; https://medqgo.com/neet-ug/biology/human-respiration ; https://medqgo.com/neet-ug/biology/biotechnology-principles-and-processes .

No advertising/account settings or automated resubmission. Account-side consent/eligibility and real learner feedback remain unverified. No AdSense acceptance promise.


## November 16 genetics study tools release

- Owner confirmed manual review of T1–T3, then T4, on November 16. This is recorded as owner-reported review; no independent subject credential is claimed.
- `e7f436c` completed the reviewed T1–T4 suite; `a56f0ba` corrected obsolete draft-review disclosures on the tool pages.
- Production build and all 47 tests passed. ESLint passed for all changed tool files. Repository-wide `npm run lint` still reports unrelated existing issues in site-map, learning, waitlist and `work/check-*.cjs` files.
- Both commits were pushed to `origin/main`; Vercel reports success for `a56f0ba`: https://vercel.com/teamqgocom/neet-tk/81UfJYXXhPoSJPUcb2CaQGc17JZR .
- Production returned HTTP 200 for `/neet-ug/biology/tools`, `monohybrid-cross`, `pedigree-analysis`, `testcross-evidence`, `dominance-patterns`, and `/neet-ug/biology/learn/inheritance`. Expected tool headings and owner-review disclosures were present; stale draft-review copy was absent.
- Responsive CSS rules were inspected: T3 result cards stack below 600px; T4 result cards stack below 650px and its cross table has a local horizontal scroller. No fresh production screenshot sweep was performed at mobile widths for this release.
- The tools remain `noindex`; users can reach them through the inheritance learning centre and dedicated tool directory. No account changes, automated resubmission, or AdSense result is claimed.
