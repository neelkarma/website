import { getNowPlaying } from "$lib/spotify";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  const spotify = await getNowPlaying();
  return { spotify };
}) satisfies PageServerLoad;
