<script context="module">
  const allBlogs = import.meta.glob("./posts/*.md");
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
        return (
          // Search for blogs based on title or description
          blog.metadata.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.metadata.description.toLowerCase().includes(searchQuery.toLocaleLowerCase())
        );
      });
    } else {
      filteredBlogs = [...blogs];
    }
  }
</script>

<svelte:head>
  <title>Blog - Technickel</title>
</svelte:head>

<div class="flex flex-col">
  <h1>Blogs</h1>
  <div class="p-4 rounded overflow-hidden shadow-lg bg-neutral-600 mb-4">
    <input
      type="text"
      class="w-full rounded-md text-md p-2 border-4 border-sky-500 text-black focus:outline-none"
      placeholder="Search All Blogs"
      bind:value={searchQuery}
    />
  </div>

  <ul class="list-none m-0">
    {#each filteredBlogs as { path, metadata: { title, description, tags } }}
      <li>
        <a
          class="p-4 rounded overflow-hidden shadow-lg bg-neutral-600 flex flex-col gap-2"
          href={`/blog/${path.replace(".md", "")}`}
        >
          <h2>{title}</h2>
          <p>{description}</p>
          <div>
            {#each tags as tag}
              <a class="bg-sky-500 py-0.5 px-3 rounded-full mr-1 last:m-0" href={`/`}>
                <span class="align-top text-sm">{tag}</span>
              </a>
            {/each}
          </div>
        </a>
      </li>
    {:else}
      <p>No blogs found...</p>
    {/each}
  </ul>
</div>
