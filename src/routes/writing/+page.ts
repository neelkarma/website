import type { PageLoad } from "./$types";
import { readAllMetadata } from ".";

export const load: PageLoad = async () => {
  return {
    posts: await readAllMetadata(),
  };
};
