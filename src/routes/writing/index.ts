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

      if (module === null || typeof module !== "object" || !("metadata" in module)) {
        throw new Error(`No metadata field in "${filename}"`);
      }

      const { metadata } = module;

      if (
        metadata === null ||
        typeof metadata !== "object" ||
        !("title" in metadata) ||
        !("description" in metadata) ||
        !("date" in metadata)
      ) {
        throw new Error(`Metadata not found in "${filename}"`);
      }

      const { title, description, date } = metadata;

      if (
        typeof title !== "string" ||
        typeof description !== "string" ||
        typeof date !== "string"
      ) {
        throw new Error(`Incorrect metadata types in "${filename}"`);
      }
      console.log();

      return {
        // trimming off the "./" and "/+page.svx"
        slug: filename.substring(2, filename.length - 10),
        title,
        description,
        date: new Date(date),
      };
    }),
  );

  allMetadata.sort((a, b) => b.date.getDate() - a.date.getDate());

  return allMetadata;
}
