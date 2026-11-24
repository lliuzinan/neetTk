# Explanation-record backup merge — 2026-11-24

- Change: add a non-destructive backup merge option to the existing explanation-record restore flow. Merge preserves non-empty fields and topics already in this browser, and fills blank fields from the selected backup. Full replacement remains a separate explicit action.
- Rationale: learners can combine records moved between browsers/devices without silently overwriting existing notes. The feature does not change or assess biology explanations; data remains browser-local.
- Validation: `npm test` passed (production build and 54 tests). Chrome integration with synthetic records confirmed local conflict preservation, filling of a blank field, retention of an unrelated topic, import of a new topic, and a 390px viewport without horizontal overflow. `git diff --check` passed.
- Commit `272b099` pushed to `origin/main`.
- Production verification: `https://medqgo.com/neet-ug/biology/learn/inheritance` returned HTTP 200. Its current HTML references JS chunk `/_next/static/chunks/0pchkstlbsbr_.js`, which contains the new “Merge missing fields” and “Backup merged” UI strings.
- This utility update does not resolve the pending human content review for the testcross guide or the two-locus explorer; neither was included in this commit. No AdSense account action was taken.
