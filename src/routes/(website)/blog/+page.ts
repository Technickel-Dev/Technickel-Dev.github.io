import type { Post, PostMetadata } from "./post";

type File = {
  metadata: Object;
};

/** @type {import('./$types').PageLoad} */
export function load() {
  let posts: Post[] = [];

  const paths = import.meta.glob("./posts/*.md", { eager: true });

  for (const path in paths) {
    const file = paths[path] as File;
    const slug = path.split("/").at(-1)?.replace(".md", "");

    if (!slug) continue;

    const metadata = file.metadata as PostMetadata;
    const post = { metadata, slug } satisfies Post;
    post.metadata.published && posts.push(post);
  }

  return { posts };
}
