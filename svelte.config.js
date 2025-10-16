import { escapeSvelte, mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { createHighlighter } from "shiki";

const theme = "catppuccin-mocha";
const highlighter = await createHighlighter({
  themes: [theme],
  langs: ["c"],
});

const blogLayoutPath = new URL("./src/routes/writing/postlayout.svelte", import.meta.url).pathname;

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex({
      highlight: {
        highlighter: async (code, lang = "text") => {
          const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
          return `{@html \`${html}\` }`;
        },
      },
      layout: blogLayoutPath,
    }),
  ],
  kit: {
    adapter: adapter(),
  },
  extensions: [".svelte", ".svx"],
};

export default config;
