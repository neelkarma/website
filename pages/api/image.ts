import { NextApiRequest, NextApiResponse } from "next";
import nodeFetch from "node-fetch";
import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_TOKEN!,
  fetch: nodeFetch as unknown as typeof fetch,
});

const image = async (_req: NextApiRequest, res: NextApiResponse) => {
  const photo = await unsplash.photos
    .getRandom({ query: "night landscape" })
    .catch((error) => {
      console.error(`Unsplash API Error: ${error}`);
      res.status(500).json({ error: `Unsplash API Error: ${error}` });
    });
  if (!photo) return;
  if (!photo.response) return res.status(500).json({ error: photo.errors[0] });
  if (Array.isArray(photo.response))
    return res.status(500).json({ error: "Unsplash API returned an array." });

  const userURL =
    photo.response.user.links.html + "?utm_source=website&utm_medium=referral";
  const userFullName = photo.response.user.name;
  const photoURL = photo.response.urls.small;
  const description = photo.response.description;

  res.status(200).json({ userURL, userFullName, photoURL, description });
};

export default image;
