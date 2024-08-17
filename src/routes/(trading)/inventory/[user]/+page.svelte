<script lang="ts">
  import Card from "./card.svelte";
  import Drawer from "./drawer.svelte";
  import Search from "./search.svelte";
  import { filteredCards, setAssets, addCard } from "../cardsStore";

  /** @type {import('./$types').PageData} */
  export let data;

  $: setAssets(data.assets, data.descriptions);
</script>

<svelte:head>
  <title>Inventory - Technickel</title>
</svelte:head>

<div class="w-full h-full flex flex-col p-4">
  <h2 class="pb-4">Cards</h2>
  <div class="flex flex-wrap justify-center gap-4">
    {#each $filteredCards as trackedCard (trackedCard.card.description?.classid)}
      <Card
        cardId={trackedCard.card.description?.classid}
        count={trackedCard.card.count}
        onClick={() => {
          if (!trackedCard.card.description) return;
          addCard(trackedCard.card);
        }}
      />
    {:else}
      No Cards
    {/each}
  </div>
</div>

<Search />

<Drawer />
