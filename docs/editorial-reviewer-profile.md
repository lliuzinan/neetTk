# Editorial Reviewer Profile

Fill `data/editorial-reviewer.json` only with facts the named person has agreed to publish.

- `name`: real full name used publicly by the reviewer.
- `role`: accurate role, such as `Biology Content Reviewer`.
- `credentials`: verified degree or professional qualification. Do not use a planned, honorary, or unverified qualification.
- `institution` and `graduationYear`: optional factual education details.
- `bio`: short factual biography, written in the third person.
- `reviewScope`: exact work the reviewer actually performs, such as `Reviews NCERT concept accuracy for selected revision notes`.
- `reviewedSince`: optional month and year when that review work began.
- `publicProfileUrl`: optional public professional profile controlled by the reviewer.

Do not store certificate images, ID documents, signatures, phone numbers, or private resumes in this repository. Keep any supporting records outside the project and retain the person's written consent for the public profile.

The Team page renders the individual profile only when `name`, `role`, `credentials`, and `reviewScope` are all present.
