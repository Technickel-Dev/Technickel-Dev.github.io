<script lang="ts">
  import { onMount } from "svelte";
  import { DEFAULT_INVENTORY, INVENTORIES } from "../../market/market";

  let selectedInventory = DEFAULT_INVENTORY; // Default to Steam

  function handleSelect(event: any) {
    const value = event.target.value;
    selectedInventory = value;

    const url = new URL(window.location.href);
    url.searchParams.set("inventory", value);
    window.location.href = url.toString(); // Reload page with query param
  }

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    const inventory = params.get("inventory");
    if (inventory) {
      selectedInventory = inventory;
    } else {
      // Default to Steam if no inventory is selected
      const url = new URL(window.location.href);
      url.searchParams.set("inventory", selectedInventory);
    }
  });
</script>

<select
  on:change={handleSelect}
  bind:value={selectedInventory}
  class="rounded-md bg-neutral-600 p-2 mb-8 text-white"
>
  <option value="" disabled>Select an inventory</option>
  {#each Object.entries(INVENTORIES) as [key, inventory]}
    <option value={key}>
      {inventory.label}
    </option>
  {/each}
</select>
