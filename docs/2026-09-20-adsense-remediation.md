# AdSense remediation, 2026-09-20

## Completed in the site

- Corrected current NCERT chapter labels and PDF targets for inheritance,
  flowering-plant reproduction, biotechnology, circulation and ecosystems.
- Replaced general NCERT home-page references with chapter-specific sources
  in seven earlier guides.
- Marked digestion as supplementary physiology: it is absent as a standalone
  chapter from the current Class 11 contents. Removed the incorrect excretion
  PDF reference and added a specific digestion and absorption reference.
- Added an original ecosystem productivity budget, explained the simplifying
  assumptions and clarified that decomposers receive inputs from every level.
- Expanded digestion mechanisms and reasoned recall checks; replaced its
  repetitive editorial aside and added contextual links.
- Preserved curated local descriptions instead of overwriting them with the
  same generic sentence or legacy database copy; use them in page metadata.
- Disclosed that the AdSense script already contacts Google before visible ads.
- Preserved publication dates and changed modification dates for edited sources
  and substantive content. Updated the privacy sitemap date.

## Verification

- Production build and 15 rendered HTML tests passed.
- Local Chrome test: before a choice and after rejection/reload, no GA script
  request; allowing analytics requests it; withdrawing permission sets the
  site's allowed flag to false and the GA disable flag to true.
- Third-party requests were intercepted in that test. It verifies site logic,
  not Google's regional CMP or actual remote cookie/network behaviour.
- Both revised articles: checked at 390px and 1280px, teaching images loaded
  and no document horizontal overflow.

## Owner actions in AdSense

1. Privacy and messaging -> European regulations -> Messages: verify the
   message for medqgo.com is published. Privacy URL must be
   https://medqgo.com/privacy. Keep a visible refusal option.
2. In European regulations settings, retain advertising consent mode. For
   this site's separate analytics control, disable Google's analytics consent
   mode integration to avoid two controls updating analytics_storage.
3. In a fresh browser session with an actual EEA/UK/Swiss exit IP, verify the
   advertising message's choices and reopening via footer Privacy settings ->
   Advertising choices. A page without an overlay alone does not establish why
   the CMP is absent. If absent, inspect the message status and blocked Google
   requests; do not assume approval will automatically resolve it.
4. Check Sites and Policy center for account-specific notices or required
   actions. This audit did not access the signed-in AdSense dashboard.

No need to withdraw and resubmit the pending review solely for these edits.
These corrections do not guarantee AdSense approval.

## Source records

- https://ncert.nic.in/textbook/pdf/lebo1ps.pdf (2026-27 contents)
- https://ncert.nic.in/textbook/pdf/kebo1ps.pdf (current contents)
- https://openstax.org/books/biology-2e/pages/46-2-energy-flow-through-ecosystems
- https://openstax.org/books/anatomy-and-physiology-2e/pages/23-7-chemical-digestion-and-absorption-a-closer-look
