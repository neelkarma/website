import { readAllMetadata } from "./writing";
import type { PageLoad } from "./writing/$types";

export const load: PageLoad = async () => {
  const posts = await readAllMetadata();
  return {
    post: posts[0],
  };
};
