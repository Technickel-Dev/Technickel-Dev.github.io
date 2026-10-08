import { sveltekit } from "@sveltejs/kit/vite";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-static";
import tailwindcss from "@tailwindcss/vite";
import { mdsvex, escapeSvelte } from "mdsvex";
import { createHighlighter } from "shiki";
import { defineConfig } from "vite";

const highlighter = await createHighlighter({
  themes: ["github-dark"],
  langs: ["html", "js", "ruby"]
});

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: [".md"],
  highlight: {
    highlighter: async (code, lang = "text") => {
      const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: "github-dark" }));
      return `{@html \`${html}\` }`;
    }
  }
};

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit({
      extensions: [".svelte", ".md"],
      adapter: adapter(),
      preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)]
    })
  ]
});
