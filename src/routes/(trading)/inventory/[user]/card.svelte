<script lang="ts">
  import toast from "svelte-french-toast";
  import LazyImage from "./lazy-image.svelte";
  import type { PriceInfo, SteamCard } from "./steam";
  import { cards } from "../cardsStore";
  import { db } from "../db";
  import { liveQuery } from "dexie";
  import { onDestroy } from "svelte";

  interface Props {
    count: any;
    classid: number;
    appid: number;
    onClick: any;
    currency: number;
    showBadges: boolean;
  }

  let {
    count,
    classid,
    appid,
    onClick,
    currency,
    showBadges
  }: Props = $props();
  let intervals: NodeJS.Timeout[] = [];
  let isLongPress = false;

  const startPress = () => {
    isLongPress = true;

    setTimeout(() => {
      if (isLongPress) {
        intervals.push(
          setInterval(onClick, 200)
        ); // Repeat every interval
      }
    }, 500);
  };

  const cancelPress = () => {
    isLongPress = false;

    intervals.map((interval) => {
      clearInterval(interval);
    });
  };

  let price = liveQuery(() => db.prices.where({ classid, currency }).first());
  let badge = liveQuery(() => db.badges.where({ appid }).first());



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

    let url = `/market?market_hash_name=${encodeURIComponent(
      card.description.market_hash_name
    )}&currency=${currency}&appid=${card.description!!.appid}`;

    let res = await fetch(url);

    if (res.status === 429) {
      toast.error("Rate limited 😵‍💫, please try again later!");
      return;
    }

    let priceInfo: PriceInfo = await res.json();

    await db.prices.add({
      classid: +card.description.classid,
      lowest_price: priceInfo.lowest_price,
      median_price: priceInfo.median_price,
      success: priceInfo.success,
      currency: +currency,
      createdAt: Date.now()
    });
  };

  const fetchBadgeNumber = async () => {
    if (card == null || card.description == null) return;

    let badge = await db.badges.where({ appid: card.description.market_fee_app }).first();

    if (badge != undefined) return;

    let res = await fetch(`/badge?appid=${card.description.market_fee_app}`);

    let badgeNumber = await res.json();

    db.badges.add({
      appid: card.description.market_fee_app,
      numberOfCards: badgeNumber,
      createdAt: Date.now()
    });
  };

  onDestroy(() => {
    intervals.map((interval) => {
      clearInterval(interval);
    });
  });
  let card = $derived($cards.find((trackedCard) => {
    return +trackedCard.card.description?.classid!! === classid;
  })?.card);
  let strippedType = $derived(stripType(card));
</script>

{#if card && currency}
  <button
    class="flex flex-col items-center"
    onclick={onClick}
    onmousedown={startPress}
    onmouseup={cancelPress}
    onmouseleave={cancelPress}
    ontouchstart={startPress}
    ontouchend={cancelPress}
    ontouchcancel={cancelPress}
    tabindex="0"
  >
    <div class="relative">
      <LazyImage
        src={`https://community.akamai.steamstatic.com/economy/image/${card.description?.icon_url}/128fx128f`}
        name={card.description?.name || ""}
      />

      {#if showBadges}
        <span
          onmouseover={fetchBadgeNumber}
          onfocus={fetchBadgeNumber}
          role="banner"
          class="absolute top-0 left-0 transform -translate-y-1/2 bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
        >
          {$badge?.numberOfCards || "-1"}
        </span>
      {/if}
      <span
        class="absolute top-0 right-0 transform -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
      >
        {count}
      </span>
    </div>
    <div class="w-full text-center" onmouseover={fetchPrice} onfocus={fetchPrice} role="banner">
      {$price ? $price?.lowest_price || $price?.median_price || "N/A" : "?"}
    </div>
    <div class="w-32 text-xs break-words text-center">
      {card.description?.name} - {strippedType}
    </div>
  </button>
{/if}
