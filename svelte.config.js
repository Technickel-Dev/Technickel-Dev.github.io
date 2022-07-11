import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte"],

  kit: {
    adapter: adapter(),
  },

  preprocess: [preprocess({})]
};

export default config;
