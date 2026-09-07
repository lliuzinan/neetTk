# MedQGo Editorial Reviewer Execution Checklist

## Goal

Publish a truthful editorial reviewer profile for MedQGo's NEET-UG Biology learning resources. This is a transparency improvement, not a substitute for copyright permission for question content.

## 1. Select a real reviewer

Choose someone who agrees to be publicly named and has a background that matches the role you plan to state.

Minimum public facts to collect:

- Full name used professionally.
- Accurate role, for example `Biology Content Reviewer` or `NEET Biology Educator`.
- A real degree or qualification that can be stated exactly, for example `M.Sc. Life Sciences`.
- Institution name and graduation year, if the reviewer agrees to publish them.
- A short factual biography of 40-80 words.
- The exact review scope, for example `Reviews NCERT concept accuracy for selected MedQGo revision notes`.
- Month and year when the review work starts.
- Optional public professional profile URL controlled by the reviewer.

Do not use a person who has not agreed to publication. Do not describe work that the reviewer does not actually perform.

## 2. Obtain written consent

Keep a signed or written confirmation outside this Git repository. It should confirm:

- The reviewer agrees that MedQGo may show their name, role, qualification, biography, and public profile URL.
- The reviewer confirms the qualification and biography are accurate.
- The reviewer agrees to the stated review scope.
- The reviewer can request an update or removal of their public profile.

Keep the following private and outside the project folder:

- Certificate scans or photos.
- Government ID documents.
- Signatures.
- Phone numbers, private email addresses, home address, or full private resume.

## 3. Define the actual review work

Before publishing the profile, agree on a narrow, real workflow:

1. Review newly written revision Notes for NCERT concept accuracy.
2. Mark unclear explanations and suggest corrections.
3. Review a recorded list of pages each month.
4. Report corrections through a shared document or email trail.

Avoid claims such as `reviewed all questions` unless the reviewer has actually checked all of them.

## 4. Fill the public profile file

Edit this file:

`/Users/liuzinan/Desktop/neetTk/neetug-biology-qbank/data/editorial-reviewer.json`

Example using fictional placeholders only. Replace every value with verified facts before saving:

```json
{
  "name": "Real Full Name",
  "role": "Biology Content Reviewer",
  "credentials": "M.Sc. Life Sciences",
  "institution": "Real University Name",
  "graduationYear": "2022",
  "bio": "Real Full Name reviews selected NCERT-aligned revision resources for clarity and concept accuracy.",
  "reviewScope": "Reviews NCERT concept accuracy for selected MedQGo revision notes.",
  "reviewedSince": "September 2026",
  "publicProfileUrl": "https://example.com/real-public-profile"
}
```

The Team page shows the individual profile only when `name`, `role`, `credentials`, and `reviewScope` are all filled.

## 5. Check the public wording

Allowed examples:

- `Reviewed by Real Full Name, M.Sc. Life Sciences`
- `Review scope: NCERT concept accuracy for selected revision notes.`
- `MedQGo is an independent study resource and is not affiliated with NCERT, NTA, or NEET.`

Do not claim:

- NCERT, NTA, NEET, government, or university affiliation unless it is current and authorised.
- Teaching years, exam ranks, institution employment, or credentials that cannot be verified.
- Review of all 348 questions unless that review is genuinely completed and documented.

## 6. Publish and verify

After filling the profile file, run:

```bash
cd /Users/liuzinan/Desktop/neetTk/neetug-biology-qbank
source ~/.nvm/nvm.sh
nvm use 22
npm test
git add data/editorial-reviewer.json
git commit -m "Publish verified editorial reviewer profile"
git push origin main
```

After Vercel deploys, verify:

- `https://medqgo.com/team` shows the correct name, role, credentials, and review scope.
- No certificate, ID, phone number, or private email appears publicly.
- The profile wording matches the reviewer's written consent.

## 7. Maintain the record

Once each month, keep a private record of:

- Pages reviewed.
- Corrections requested and completed.
- Date of the latest review.
- Any profile update or consent change.

Update or remove the public profile promptly if the reviewer stops participating or requests removal.
