/// <reference types="bun-types" />

export {};

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function getCurrentDateSlug() {
  const now = new Date();
  const year = now.getFullYear();
  const month = pad(now.getMonth() + 1);
  const day = pad(now.getDate());

  return `${year}-${month}-${day}`;
}

function printUsageAndExit() {
  console.error("Usage: bun scripts/new-writing.ts <slug>");
  process.exit(1);
}

const slug = Bun.argv[2];

if (!slug || slug.startsWith("-")) {
  printUsageAndExit();
}

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error(
    'Invalid slug. Use lowercase letters, numbers, and hyphens only, for example: "my-new-post".',
  );
  process.exit(1);
}

const dateSlug = getCurrentDateSlug();
const entryName = `${dateSlug}-${slug}`;
const entryDir = `src/routes/writing/${entryName}`;
const pagePath = `${entryDir}/+page.svx`;

await Bun.write(
  pagePath,
  `---
title:
description:
date: ${dateSlug}
---

`,
);

console.log(`Created ${pagePath}`);
