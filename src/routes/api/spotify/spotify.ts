import type { AccessToken } from "./types";
import {
  SPOTIFY_CLIENT_ID as CLIENT_ID,
  SPOTIFY_CLIENT_SECRET as CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN as REFRESH_TOKEN,
} from "$env/static/private";

const BASIC = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const getAccessToken = async () =>
  (await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${BASIC}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }),
  }).then((res) => res.json())) as AccessToken;

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
