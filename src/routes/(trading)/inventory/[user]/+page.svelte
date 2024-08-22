<script lang="ts">
  import Card from "./card.svelte";
  import Drawer from "./drawer.svelte";
  import Search from "./search.svelte";
  import { filteredCards, setAssets, addCard } from "../cardsStore";
  import CurrencySelect from "./currency-select.svelte";
  import { onMount } from "svelte";
  import { DEFAULT_CURRENCY } from "../../market/market";
  import { db } from "../db";

  /** @type {import('./$types').PageData} */
  export let data;

  $: setAssets(data.assets, data.descriptions);

  let currency: string;

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    currency = params.get("currency") || DEFAULT_CURRENCY;

    // DB TTL
    const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;
    const THIRTY_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000;

    db.prices
      .where("createdAt")
      .below(Date.now() - ONE_DAY_IN_MS)
      .delete();
    db.badges
      .where("createdAt")
      .below(Date.now() - THIRTY_DAYS_IN_MS)
      .delete();
  });
</script>

<svelte:head>
  <title>Inventory - Technickel</title>
</svelte:head>

<div class="w-full h-full flex flex-col p-4">
  <h2 class="pb-4">Cards</h2>
  <CurrencySelect />
  <div class="flex flex-wrap justify-center gap-4">
    {#each $filteredCards as trackedCard (trackedCard.card.description?.classid)}
      {#if trackedCard.card.description}
        <Card
          currency={+currency}
          classid={+trackedCard.card.description.classid}
          appid={trackedCard.card.description.market_fee_app}
          count={trackedCard.card.count}
          onClick={() => {
            if (!trackedCard.card.description) return;
            addCard(trackedCard.card);
          }}
        />
      {/if}
    {:else}
      No Cards
    {/each}
  </div>
</div>

<Search />

<Drawer />
