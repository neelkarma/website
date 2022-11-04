import { json } from "@sveltejs/kit";
import { getNowPlaying } from "./spotify";
import type { NowPlaying } from "./types";

export const GET = async () => {
  const response = await getNowPlaying();
  if (response.status === 204 || response.status > 400)
    return json({ isPlaying: false });

  const song = (await response.json()) as NowPlaying;

  if (song.item === null) json({ isPlaying: false });

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((artist) => artist.name).join(", ");
  const url = song.item.external_urls.spotify;

  return json({
    isPlaying,
    title,
    artist,
    url,
  });
};
