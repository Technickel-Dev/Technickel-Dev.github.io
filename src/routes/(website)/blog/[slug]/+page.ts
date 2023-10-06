import { error } from "@sveltejs/kit";
import type { PostMetadata } from "../post.js";

type GlobPost = {
  default: string;
  metadata: PostMetadata;
};

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  try {
    // Vite bug: https://github.com/vitejs/vite/issues/11824
    // const post = await import(`../posts/${params.slug}.md`);

    // Use following 2 lines instead
    const modules = import.meta.glob("../posts/*.md");
    const post = (await modules[`../posts/${params.slug}.md`]()) as GlobPost;

    return {
      content: post.default,
      meta: post.metadata
    };
  } catch (e) {
    throw error(404, `Could not find ${params.slug}`);
  }
}
