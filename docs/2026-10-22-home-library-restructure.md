# Homepage and library restructure — 22 October 2026

User requested a substantive homepage and content-architecture rebuild after reporting an unsuccessful AdSense review. The exact rejection text has not been supplied, so this change does not claim to diagnose or resolve Google's decision.

Implemented:
- Editorial homepage with a defined inheritance starting route, seven knowledge-area entries, worked-case entry points, revision dates and a workbook-sample entry.
- Replaced the homepage's exhaustive repeated article-card grid with selected content; the full published inventory remains accessible through the library.
- Shared subject classification derived from the stored chapter references. Supplementary physiology remains labelled as supplementary on its guide card.
- Searchable library with combined keyword and subject filters, result count, clear/reset and empty state. All guide cards are server-rendered, including with JavaScript disabled.
- Homepage and library sitemap modification dates updated. Article publication dates preserved.
- Maintained existing consent, metadata, source, contact and policy routes. No new author, student or review claims.

Validation: production build, 33 existing tests updated where old homepage labels were intentionally replaced; browser checks for 320/390/1440 widths, combined filters, empty results and reset. Check local/home production links and image loading before completion.

Outstanding content audit items remain: immunity image/classification correction, waitlist behavior/API validation, workbook mobile layout, generic reference links and author-credential verification. The inheritance hub is the first developed study route, not seven complete study centres. No AdSense approval guarantee.
