import { getNowPlaying } from "lib/spotify";
import type { NextApiRequest, NextApiResponse } from "next";
import { NowPlaying } from "types/spotify";

export default async function spotify(
  _res: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getNowPlaying();
  if (response.status === 204 || response.status > 400)
    return res.status(200).send({ isPlaying: false });

  const song = (await response.json()) as NowPlaying;

  if (song.item === null) return res.status(200).send({ isPlaying: false });

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((artist) => artist.name).join(", ");
  const url = song.item.external_urls.spotify;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  return res.status(200).json({
    isPlaying,
    title,
    artist,
    url,
  });
}
