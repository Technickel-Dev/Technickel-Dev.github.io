<script lang="ts">
  import toast from "svelte-french-toast";
  import LazyImage from "./lazy-image.svelte";
  import type { PriceInfo, SteamCard } from "./steam";
  import { cards, updateCardPrice } from "../cardsStore";

  export let count;
  export let cardId: string | undefined;
  export let onClick: any;

  $: card = $cards.find((trackedCard) => {
    return trackedCard.card.description?.classid === cardId;
  })?.card;

  $: strippedType = stripType(card);

  const stripType = (card: SteamCard | undefined) => {
    if (card == undefined || card.description == null) return;

    let stripped = card.description.type;

    stripped = stripped.replace("Trading Card", "");
    stripped = stripped.replace("Foil", "");

    return stripped;
  };

  const fetchPrice = async () => {
    if (card == null || card.price != "?" || card.description == null) return;

    let res = await fetch(`/market?market_hash_name=${card.description.market_hash_name}`);

    if (res.status === 429) {
      card.price = "?";
      toast.error("Rate limited 😵‍💫, please try again later!");
      return;
    }

    let priceInfo: PriceInfo = await res.json();

    updateCardPrice(
      card.description.classid,
      priceInfo.lowest_price || priceInfo.median_price || "N/A"
    );
  };
</script>

{#if card != null}
  <button class="flex flex-col items-center" on:click={onClick} tabindex="0">
    <div class="relative">
      <LazyImage
        src={`https://community.akamai.steamstatic.com/economy/image/${card.description?.icon_url}/128fx128f`}
        name={card.description?.name || ""}
      />
      <span
        class="absolute top-0 right-0 transform -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
      >
        {count}
      </span>
    </div>
    <div class="w-full text-center" on:mouseover={fetchPrice} on:focus={fetchPrice} role="banner">
      {card.price}
    </div>
    <div class="w-32 text-xs break-words text-center">
      {card.description?.name} - {strippedType}
    </div>
  </button>
{/if}
