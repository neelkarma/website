import { getNowPlaying } from "$lib/spotify/spotify";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  const spotify = await getNowPlaying();
  return { spotify };
}) satisfies PageServerLoad;
