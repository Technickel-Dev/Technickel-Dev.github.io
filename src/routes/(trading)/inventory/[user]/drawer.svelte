<script lang="ts">
  import { selectedCards, removeCard, totalPrice } from "../cardsStore";
  import Card from "./card.svelte";

  let isOpen = false;
</script>

<div class="fixed bottom-0 left-0 w-full mx-auto text-white">
  <div class="bg-neutral-500 shadow-lg rounded-t-lg">
    <button
      on:click={() => (isOpen = !isOpen)}
      class="w-full p-4 text-left bg-neutral-600 hover:bg-neutral-700 focus:outline-none rounded-t-lg"
    >
      <div class="flex items-center justify-between">
        <span class="font-bold">Selected Inventory (${$totalPrice} CAD)</span>
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
            <Card
              cardId={selectedCard.card.description?.classid}
              count={selectedCard.numberSelected}
              onClick={() => removeCard(selectedCard.card)}
            />
          {:else}
            No Cards
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
