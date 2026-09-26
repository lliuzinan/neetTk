# September 23 publication

Publish the three physiology guides together with the two previously prepared conservation/microbes guides. Their shared content maps and assets are committed together; unrelated CMP logo files are excluded.

All five first-publication dates are September 23. Earlier writing notes record the pre-publication state, not the eventual deployment status.

Release checks: production build, rendered HTML tests, previous mobile/desktop previews, live page/image/sitemap verification after deployment, followed by IndexNow submission. Operational results will be recorded after verification. IndexNow acceptance does not guarantee indexing and does not submit to Google Search Console.

## Completed results

- Content release commit: efa8387, pushed to origin/main successfully.
- Production build and all 20 tests passed after correcting the two previously unpublished dates.
- Live verification at 2026-09-23 02:18:55 UTC: all five article URLs and illustration URLs returned HTTP 200; expected content, September 23 metadata and image references present.
- Live sitemap returned HTTP 200 and included all five article slugs.
- npm run indexnow:submit completed: 47 sitemap URLs submitted; script reported status 200, ok true and an empty response body. The script's curl fallback does not independently preserve HTTP status, so this log records the command's report rather than claiming verified indexing.
- Unrelated CMP logo files left uncommitted. This post-deployment result section is retained locally to avoid triggering a second deployment solely for the log.
