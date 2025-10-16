import { Feed } from "feed";
import { readAllMetadata } from "..";

export const prerender = true;

export const GET = async () => {
  const posts = await readAllMetadata();

  const feed = new Feed({
    title: "iamkneel's writing",
    description: "iamkneel's writing",
    id: "https://iamkneel.dev/writing",
    link: "https://iamkneel.dev/writing",
    language: "en",
    copyright: "All rights reserved 2025, Neel Sharma",
    updated: posts[0].date,
    feedLinks: {
      rss: "https://iamkneel.dev/writing/rss.xml",
    },
    author: {
      name: "Neel Sharma",
      link: "https://iamkneel.dev",
    },
  });

  for (const { title, description, date, slug } of posts) {
    const url = "https://iamkneel.dev/writing/" + slug;
    feed.addItem({
      title,
      id: url,
      link: url,
      description,
      date,
      author: [
        {
          name: "Neel Sharma",
          link: "https://iamkneel.dev",
        },
      ],
    });
  }

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
};
