<script lang="ts">
  import LazyImage from "./lazy-image.svelte";

  export let iconUrl;
  export let name;
  export let count;
  export let type: string;

  $: strippedType = stripType();

  const stripType = () => {
    let stripped = type;

    stripped = stripped.replace("Trading Card", "");
    stripped = stripped.replace("Foil", "");

    return stripped;
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
  <div class="w-32 text-xs break-words text-center">{name} - {strippedType}</div>
</div>
