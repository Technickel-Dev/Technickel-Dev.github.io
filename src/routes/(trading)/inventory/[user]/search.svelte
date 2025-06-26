<script>
  import { run } from 'svelte/legacy';

  import { searchQuery, sortByBadgeSize, sortDirection } from "../cardsStore";

  /** @type {{query?: string}} */
  let { query = $bindable("") } = $props();

  run(() => {
    searchQuery.set(query);
  });
</script>

<div class="fixed top-0 right-0 text-white p-2 flex justify-end">
  <div class="mr-4 flex items-center">
    <label for="sortByBadgeSizeToggle" class="flex items-center cursor-pointer relative">
      <input type="checkbox" id="sortByBadgeSizeToggle" bind:checked={$sortByBadgeSize} class="sr-only" />
      <div class="block w-14 h-8 rounded-full transition"
           class:bg-sky-500={$sortByBadgeSize}
           class:bg-neutral-600={!$sortByBadgeSize}>
      </div>
      <div class="absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform"
           class:translate-x-full={$sortByBadgeSize}>
      </div>
    </label>
    <div class="ml-3 text-gray-300 font-medium">
      Sort by badge size
      {#if $sortByBadgeSize}
        <button class="ml-1" onclick={() => sortDirection.update(n => n * -1)}>
          {#if $sortDirection === 1}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
            </svg>
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          {/if}
        </button>
      {/if}
    </div>
  </div>
  <input
    type="text"
    placeholder="Search..."
    bind:value={query}
    class="w-1/2 p-2 border rounded-md bg-neutral-600"
  />
  <button class="font-bold btn ml-4" onclick={() => (query = "")}> Clear </button>
</div>
