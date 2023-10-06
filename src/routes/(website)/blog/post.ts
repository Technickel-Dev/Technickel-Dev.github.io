export type Post = {
  metadata: PostMetadata;
  slug: string;
};

export type PostMetadata = {
  title: string;
  author: string;
  date: string;
  description: string;
  tags: string[];
  published: boolean;
};
