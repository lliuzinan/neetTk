import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("renders seeded qbank content on public index pages", async () => {
  const [homeHtml, biologyHtml] = await Promise.all([
    readFile(new URL("../.next/server/app/index.html", import.meta.url), "utf8"),
    readFile(
      new URL("../.next/server/app/neet-ug/biology.html", import.meta.url),
      "utf8",
    ),
  ]);

  assert.match(homeHtml, />55</);
  assert.match(homeHtml, /verified MCQs live/);
  assert.match(homeHtml, /Protein synthesis occurs in the/);
  assert.match(homeHtml, /neetug-bio-520996/);

  assert.match(biologyHtml, /55<!-- --> verified 4-option questions/);
  assert.match(biologyHtml, /Cell theory and cell organelles/);
  assert.doesNotMatch(homeHtml, />0<\/span><p>verified MCQs live/);
  assert.doesNotMatch(biologyHtml, /Start with <!-- -->0<!-- --> verified/);
});
