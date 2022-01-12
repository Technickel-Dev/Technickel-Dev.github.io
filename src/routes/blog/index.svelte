<script context="module">
  const allBlogs = import.meta.glob("./*.md");
  let body = [];

  for (let path in allBlogs) {
    body.push(
      allBlogs[path]().then(({ metadata }) => {
        return { path, metadata };
      })
    );
  }

  export async function load() {
    const blogs = await Promise.all(body);
    return {
      props: { blogs }
    };
  }
</script>

<script>
  import { base } from "$app/paths";
  export let blogs;
</script>

<h1>All Blog</h1>

<ul>
  {#each blogs as { path, metadata: { title, tags } }}
    <li>
      <a href={`${base}/blog/${path.replace(".md", "")}`}>{title}</a>
    </li>
  {/each}
</ul>
