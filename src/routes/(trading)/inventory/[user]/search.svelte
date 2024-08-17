<script>
  export let searchQuery = "";
</script>

<div class="fixed top-0 right-0 text-white p-2 flex justify-end">
  <input
    type="text"
    placeholder="Search..."
    bind:value={searchQuery}
    class="w-1/2 p-2 border rounded-md bg-neutral-600"
  />
  <button class="font-bold btn ml-4" on:click={() => (searchQuery = "")}> Clear </button>
</div>
