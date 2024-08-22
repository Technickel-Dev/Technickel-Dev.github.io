<script lang="ts">
  import { onMount } from "svelte";
  import { selectedCards, removeCard, totalPrice } from "../cardsStore";
  import Card from "./card.svelte";
  import { CURRENCIES, DEFAULT_CURRENCY } from "../../market/market";

  let isOpen = false;
  let currencyDenomination: string;
  let currency: string;

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    currency = params.get("currency") || DEFAULT_CURRENCY;
    currencyDenomination = CURRENCIES[currency].label;
  });
</script>

<div class="fixed bottom-0 left-0 w-full mx-auto text-white">
  <div class="bg-neutral-500 shadow-lg rounded-t-lg">
    <button
      on:click={() => (isOpen = !isOpen)}
      class="w-full p-4 text-left bg-neutral-600 hover:bg-neutral-700 focus:outline-none rounded-t-lg"
    >
      <div class="flex items-center justify-between">
        {#await $totalPrice(+currency)}
          <p>Calculating...</p>
        {:then price}
          <span class="font-bold">Selected Inventory ({price} {currencyDenomination})</span>
        {/await}
        <svg
          class={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </button>

    <div
      class={`transition-max-height duration-500 ease-in-out overflow-y-scroll ${
        isOpen ? "max-h-96" : "max-h-0"
      }`}
    >
      <div class="p-4">
        <div class="flex flex-wrap justify-center gap-4">
          {#each $selectedCards as selectedCard (selectedCard.card.description?.classid)}
            {#if selectedCard.card.description}
              <Card
                classid={+selectedCard.card.description.classid}
                appid={+selectedCard.card.description.market_fee_app}
                currency={+currency}
                count={selectedCard.numberSelected}
                onClick={() => removeCard(selectedCard.card)}
              />
            {/if}
          {:else}
            No Cards
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
