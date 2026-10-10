import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { escapeSvelte, mdsvex } from "mdsvex";
import { createHighlighter } from "shiki";
import tailwindcss from "@tailwindcss/vite";
import Icons from "unplugin-icons/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

const theme = "catppuccin-mocha";

const highlighter = await createHighlighter({
  themes: [theme],
  langs: ["sh", "ini", "py", "toml", "java", "diff"],
});

const blogLayoutPath = new URL("./src/routes/writing/postlayout.svelte", import.meta.url).pathname;

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit({
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
      extensions: [".svelte", ".svx"],
      adapter: adapter(),
    }),
    Icons({ compiler: "svelte", scale: 1 }),
  ],
});
