import { dev } from "$app/env";
import * as v from "valibot";

const ModuleSchema = v.object({
  metadata: v.object({
    title: v.string(),
    description: v.string(),
    date: v.pipe(v.string(), v.toDate()),
    draft: v.optional(v.boolean(), false),
  }),
});

export const DATE_FORMAT = new Intl.DateTimeFormat("en-AU", {
  day: "numeric",
  year: "numeric",
  month: "long",
});

export async function readAllMetadata() {
  const files = import.meta.glob("./**/*.svx");
  const allMetadata = await Promise.all(
    Object.entries(files).map(async ([filename, promise]) => {
      const module = await promise();
      const { metadata } = v.parse(ModuleSchema, module);
      const { title, description, date, draft } = metadata;
      if (draft && !dev) return null;
      return {
        // trim the "./" and "/+page.svx"
        slug: filename.substring(2, filename.length - 10),
        title: draft ? `(DRAFT) ${title}` : title,
        description,
        date: new Date(date),
      };
    }),
  );

  return allMetadata
    .filter((metadata) => metadata !== null)
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}
