import { writeFileSync, mkdirSync } from "fs";
import { pathToFileURL } from "url";
import { join } from "path";

const root = process.cwd();
const profile = (
    await import(pathToFileURL(join(root, "src/data/profile.js")).href)
).default;
const experience = (
    await import(pathToFileURL(join(root, "src/data/experience.js")).href)
).default;
const edu = await import(
    pathToFileURL(join(root, "src/data/education.js")).href
);

const site = {
    version: 1,
    profile,
    experience,
    education: edu.education,
    otherEducation: edu.otherEducation,
};

mkdirSync(join(root, "content"), { recursive: true });
const out = join(root, "content", "site.json");
writeFileSync(out, JSON.stringify(site, null, 2) + "\n");
console.log(`Wrote ${out}`);
