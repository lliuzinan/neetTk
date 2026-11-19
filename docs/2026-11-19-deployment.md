# Testcross NCERT citation correction — 2026-11-19

- Verified source: official NCERT Class XII Chapter 4 PDF, `https://ncert.nic.in/textbook/pdf/lebo104.pdf`, Reprint 2026–27. Its contents page labels 4.1 “Mendel’s Laws of Inheritance” and 4.2 “Inheritance of One Gene”; the test-cross explanation appears on printed page 58.
- Corrected the guide's in-text anchor and reference label from section 4.1 to section 4.2, with the reprint year. No teaching example, diagram, or interactive was changed.
- Validation: `npm test` passed (production build plus 47 tests). Local and production pages returned HTTP 200 and displayed the corrected citation and official source link. Chrome checks at 320, 390 and 1440 px showed no horizontal overflow.
- Commit `66bca3e` pushed to `origin/main`; Vercel reported success: https://vercel.com/teamqgocom/neet-tk/A3hobQ6PXPyyeRxTxscctLmdmiZ4 . Production route: https://medqgo.com/neet-ug/biology/testcross-and-unknown-genotypes .
- This verifies the citation edition/section only. Actual human subject review and inspection of the guide's figure/interactive remain outstanding. It does not establish site-wide AdSense eligibility or real learner engagement.
