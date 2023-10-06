<script lang="ts">
  import type { Post } from "./post";

  /** @type {import('./$types').PageData} */
  export let data;

  let searchQuery = "";
  let filteredPosts: Post[] = [];

  $: {
    if (searchQuery) {
      filteredPosts = data.posts.filter((post: Post) => {
        // Case insensive search
        searchQuery = searchQuery.toLowerCase();

        return (
          // Search for posts based on title or description
          post.metadata.title.toLowerCase().includes(searchQuery) ||
          post.metadata.description.toLowerCase().includes(searchQuery)
        );
      });
    } else {
      filteredPosts = [...data.posts];
    }
  }
</script>

<svelte:head>
  <title>Blog - Technickel</title>
</svelte:head>

<div class="flex flex-col flex-grow">
  <h1>Posts</h1>
  <div class="p-4 rounded overflow-hidden shadow-lg bg-neutral-600 mb-4">
    <input
      type="text"
      class="w-full rounded-md text-md p-2 border-4 border-sky-500 text-black focus:outline-none"
      placeholder="Search All Posts"
      bind:value={searchQuery}
    />
  </div>

  <ul class="list-none m-0">
    {#each filteredPosts as { slug, metadata }}
      <li>
        <a
          class="p-4 rounded overflow-hidden shadow-lg bg-neutral-600 flex flex-col bg- gap-2 mb-4 text-white hover:text-stone-300"
          href={`/blog/${slug}`}
        >
          <h2>{metadata.title}</h2>
          <p>{metadata.description}</p>
          <div>
            {#each metadata.tags as tag}
              <a
                class="bg-sky-500 py-0.5 px-3 rounded-full mr-1 last:m-0 text-white hover:text-stone-300"
                href={`/`}
              >
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
