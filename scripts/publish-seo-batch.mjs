import { execFileSync } from "node:child_process";

const steps = [
  ["Build seed data from verified CSV", "node", ["scripts/build-seed-data.mjs"]],
  ["Generate database seed SQL", "node", ["scripts/generate-supabase-seed.mjs"]],
  ["Build site and sitemap", "npm", ["run", "build"]],
];

for (const [label, command, args] of steps) {
  console.log(`\n[seo-pipeline] ${label}`);
  execFileSync(command, args, { stdio: "inherit" });
}

console.log("\n[seo-pipeline] Ready for deployment. Submit the regenerated sitemap in GSC after deploy.");
