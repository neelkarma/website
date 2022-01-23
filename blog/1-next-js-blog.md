---
title: Creating a Personal Website with Next.js
description: It's pretty straightforward, to be honest.
slug: 1-next-js-blog
created: 2022-01-23T00:00:00.000Z
---

It's basically a rule of life that every web developer has to have a snazzy
personal website. Well, I'm no exception, so I've spent some time making the
website you're probably viewing this blog post on. Let's see how I made it.

# The Stack

The first thing I decided when starting out is what frontend stack I was going
to use. For the most part, this was pretty simple:

- UI Framework: [React](https://www.reactjs.org) with
  [Next.js](https://www.nextjs.org)
- Language: [TypeScript](https://www.typescriptlang.org)
- CSS Framework: [Tailwind CSS](https://www.tailwindcss.com)

I've had experience lots of experience with this stack, and it's proven again
and again to be an excellent choice.

React is the JavaScript framework of choice for me, and Next.js is, in my
opinion, the best all-around React Framework out there. You get insane
flexibility as a developer; it provides three rendering strategies (which you
can even use multiple of at the same time) on top of API routes and is backed by
a pretty big company.

TypeScript is basically JavaScript but on steroids. I tried it once back last
year, and every single project since has been completely TypeScript. I don't
think I could go back to JavaScript if I can't have the benefits of static
typing, compile-type error reporting and amazing autocompletion.

Finally, Tailwind CSS is something that I was reluctant to try at first, but was
astounded by the rate at which I could prototype designs. This, combined with
it's customizability and tooling, made it a go-to for me.

# Features

The second step was to find out what cool features I wanted to include in the
website. To do this, I crawled the web for inspiration from other developers.
The staggered fade-in you see on the home page was inspired by
[Paco Coursey's website](https://www.paco.me) and the Spotify Now Playing bit
you see at the bottom of the home page is - I'm not going to hide it - basically
a clone of the same feature from
[Lee Robinson's website](https://www.leerob.io). I also added a blog, since no
developer's website is complete without one. Finally, in the end, the home
screen felt a bit empty, so I decided to add a randomly-selected night landscape
image from the [Unsplash API](https://www.unsplash.com/developers).

## Staggered Fade In

To implement the staggered fade in from the home page, I used
[Framer Motion](https://www.framer.com/motion) to create two React components:
`FadeInUp` and `FadeInLeft`. They do what you'd expect; `FadeInUp` fades in it's
children upwards while `FadeInLeft` fades in it's children left. The
implementation is pretty simple - I simply defined the initial styles and the
styles to animate to, and added a custom transition curve to make the animation
really smooth:

```tsx
export const FadeInUp: FC<{ delay?: number }> = ({ children, delay }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateY: "4rem",
      }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        type: "tween",
        ease: [0, 0, 0.2, 1],
        duration: 0.7,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};
```

You can imagine how `FadeInLeft` would be similar.

## Spotify Now Playing

The Spotify Now Playing feature required a bit more work; I needed to register
the website with Spotify so I could get access to an access token, which I could
then use to get the Now Playing data. I'm not going to lie, the implementation
is pretty similar to Lee Robinson's:

```ts
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
```

After that, it was only a matter of setting up an API endpoint to fetch the data
from in the client, and formatting the data in a nice-looking way.

## Blog

For making the blog, I simply used static markdown files with YAML frontmatter
to make a completely static blog. I was considering using a Headless CMS, but
that seemed a bit overkill for a simple blog I would probably post to only once
a year.

To implement the rendering of the markdown, I used the
[UnifiedJS](https://www.unifiedjs.com/) along with a **ton** of plugins, such as
a GFM plugin and a plugin to highlight code blocks. To actually show the posts
inside the Next.js app, I used a dynamic route for the actual posts and
`getStaticProps` for listing all the posts.

## Random Image

This was similar to the Now Playing feature - I had to register my app with
Unsplash so I could get a token to query the Unsplash API with. However, unlike
the Now Playing feature, I used
[`unsplash-js`](https://www.npmjs.com/package/unsplash-js), the official JS
client for the Unsplash API, to make the requests instead of using `fetch` by
itself.

# Finishing Touches

After all of the features were programmed, I also added a subtle fading page
transition using Framer Motion's `AnimatePresence` component, and added some
more styles as well as custom fonts, and then it was done! You can view the
source for the website [here](https://www.github.com/neelkarma/website).
