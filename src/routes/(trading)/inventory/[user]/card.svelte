<script lang="ts">
  import toast from "svelte-french-toast";
  import LazyImage from "./lazy-image.svelte";
  import { CANADIAN_CURRENCY, type Description, type PriceInfo } from "./steam";

  export let iconUrl;
  export let name;
  export let count;
  export let type: string;
  export let description: Description | null;
  let price = "?";

  $: strippedType = stripType();

  const stripType = () => {
    let stripped = type;

    stripped = stripped.replace("Trading Card", "");
    stripped = stripped.replace("Foil", "");

    return stripped;
  };

  const fetchPrice = async () => {
    if (price != "?" || description == null) return;

    let res = await fetch(`/market?market_hash_name=${description.market_hash_name}`);

    if (res.status === 429) {
      price = "?";
      toast.error("Rate limited 😵‍💫, please try again later!");
      return;
    }

    let priceInfo: PriceInfo = await res.json();

    price = priceInfo.median_price || priceInfo.lowest_price;
  };
</script>

<div class="flex flex-col items-center">
  <div class="relative">
    <LazyImage
      src={`https://community.akamai.steamstatic.com/economy/image/${iconUrl}/128fx128f`}
      {name}
    />
    <span
      class="absolute top-0 right-0 transform -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
    >
      {count}
    </span>
  </div>
  <div class="w-full text-center" on:mouseover={fetchPrice} on:focus={fetchPrice} role="banner">
    {price}
  </div>
  <div class="w-32 text-xs break-words text-center">{name} - {strippedType}</div>
</div>
