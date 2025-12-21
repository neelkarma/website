import { readAllMetadata } from "./writing";
import type { PageLoad } from "./writing/$types";

export const load: PageLoad = async () => {
  const posts = await readAllMetadata();
  return {
    posts: posts.slice(0, 3),
  };
};
