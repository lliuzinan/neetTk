# Record storage failure feedback — November 25, 2026

## Confirmed regression

The November 24 merge handler and existing replacement/review handlers replaced the storage error status with a success message. Reproduced with a synthetic backup and a `QuotaExceededError`: the status reported “Backup merged” while the warning said the changes were only in the tab and no record was persisted. This was a feedback regression, not evidence of a failed biology calculation.

## Change and scope

`save` now returns whether persistence succeeded. Merge, replacement and “Mark reviewed today” only announce success when the write succeeds. A failed write keeps the explicit not-saved status and the download warning. Imported/edited content remains available in memory for backup export; an existing persisted copy is not changed by a rejected write.

No teaching content, review claim, account setting, advertising setting or pending tool candidate was changed. The testcross packet and two-locus explorer still await their previously requested human review.

## Validation

- Production build and 54 worktree tests passed. The worktree includes the unpublished two-locus candidate; the release commit contains only the record component fix and browser regression script.
- `python3 tests/record-storage-browser.py` passed nine scenarios: merge, replacement and review marking with normal storage, quota errors and security errors. Assertions cover status, existing persisted data, in-memory backup download, and no mobile overflow.
- Record guide, example and PDF links returned HTTP 200 locally; 320/390/768/1440px had no horizontal page overflow. Inspected error-state screenshots at 390px and 1440px.
- Browser tests use isolated contexts and synthetic notes; third-party requests, including ads and analytics, are blocked.

## Release

Code commit `b9b137d46c780dafdf125648d293985c39656b48` pushed to `origin/main`. Deployment: https://vercel.com/teamqgocom/neet-tk/8eRp2XXotzmi18TJPk2m7AzZ4Qef . Vercel reports success. All nine browser scenarios also passed against https://medqgo.com/neet-ug/biology/learn/inheritance with third-party requests blocked; both persistence failure types leave the old saved copy intact and allow the current in-memory work to be downloaded. Production mobile checks passed at 390px.
