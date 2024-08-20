<script lang="ts">
  import toast from "svelte-french-toast";
  import LazyImage from "./lazy-image.svelte";
  import type { PriceInfo, SteamCard } from "./steam";
  import { cards, updateNumberOfCardsInBadge } from "../cardsStore";
  import { onMount } from "svelte";
  import { db } from "../db";
  import { liveQuery } from "dexie";

  export let count;
  export let classid: number;
  export let onClick: any;
  export let currency: number;

  let price = liveQuery(() => db.prices.where({ classid, currency }).first());

  onMount(async () => {
    await fetchNumberOfCardsInBadgeFromCache();
  });

  const fetchNumberOfCardsInBadgeFromCache = async () => {
    if (card == null || card.numberOfCardsInBadge != -1 || card.description == null) return;
    let res = await fetch(`/badge?appid=${card.description.market_fee_app}`, {
      cache: "only-if-cached",
      mode: "same-origin"
    }).catch((e: Error) => {
      console.log(e);
      if (e.name == "TypeError") return;
    });
    if (!res) return;
    // Too many requests (429) or any other error we can just default because we didn't actually get a valid response from cache
    if (res.status !== 200) {
      card.numberOfCardsInBadge = -1;
      return;
    }
    let badgeNumber = await res.json();
    updateNumberOfCardsInBadge(card.description.market_fee_app, badgeNumber);
  };

  $: card = $cards.find((trackedCard) => {
    return +trackedCard.card.description?.classid!! === classid;
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
    if (card == null || card.description == null) return;

    let price = await db.prices.where({ classid: +card.description!!.classid, currency }).first();

    if (price != undefined) return;

    let res = await fetch(
      `/market?market_hash_name=${card.description.market_hash_name}&currency=${currency}`
    );

    if (res.status === 429) {
      card.price = "?";
      toast.error("Rate limited 😵‍💫, please try again later!");
      return;
    }

    let priceInfo: PriceInfo = await res.json();

    await db.prices.add({
      classid: +card.description.classid,
      lowest_price: priceInfo.lowest_price,
      median_price: priceInfo.median_price,
      success: priceInfo.success,
      currency: +currency
    });
  };

  const fetchBadgeNumber = async () => {
    if (card == null || card.numberOfCardsInBadge != -1 || card.description == null) return;

    let res = await fetch(`/badge?appid=${card.description.market_fee_app}`);

    let badgeNumber = await res.json();

    updateNumberOfCardsInBadge(card.description.market_fee_app, badgeNumber);
  };
</script>

{#if card && currency}
  <button class="flex flex-col items-center" on:click={onClick} tabindex="0">
    <div class="relative">
      <LazyImage
        src={`https://community.akamai.steamstatic.com/economy/image/${card.description?.icon_url}/128fx128f`}
        name={card.description?.name || ""}
      />

      <span
        on:mouseover={fetchBadgeNumber}
        on:focus={fetchBadgeNumber}
        role="banner"
        class="absolute top-0 left-0 transform -translate-y-1/2 bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
      >
        {card.numberOfCardsInBadge}
      </span>
      <span
        class="absolute top-0 right-0 transform -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
      >
        {count}
      </span>
    </div>
    <div class="w-full text-center" on:mouseover={fetchPrice} on:focus={fetchPrice} role="banner">
      {$price ? $price?.lowest_price || $price?.median_price || "N/A" : "?"}
    </div>
    <div class="w-32 text-xs break-words text-center">
      {card.description?.name} - {strippedType}
    </div>
  </button>
{/if}
