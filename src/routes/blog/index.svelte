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
  export let blogs;
  let searchQuery = "";
  let filteredBlogs = [];

  $: {
    if (searchQuery) {
      filteredBlogs = blogs.filter((blog) => {
        return blog.metadata.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
      console.log(filteredBlogs);
    } else {
      filteredBlogs = [...blogs];
    }
  }
</script>

<h1>Blogs</h1>
<input
  type="text"
  class="w-full rounded-md text-md p-2 border-4 border-sky-500 text-black"
  placeholder="Search All Blogs"
  bind:value={searchQuery}
/>
<ul>
  {#each filteredBlogs as { path, metadata: { title, tags } }}
    <li>
      <a href={`/blog/${path.replace(".md", "")}`}>{title}</a>
    </li>
  {/each}
</ul>
