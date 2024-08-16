<script lang="ts">
  import LazyImage from "./lazy-image.svelte";

  /** @type {import('./$types').PageData} */
  export let data;

  function getClassidCounts(assets) {
    if (!assets) return {}; // Return an empty object if assets is null or undefined

    return assets.reduce((acc, asset) => {
      const { classid } = asset;
      acc[classid] = (acc[classid] || 0) + 1;
      return acc;
    }, {});
  }

  // Function to get the name and type based on classid
  function getNameAndTypeByClassid(classid, descriptions) {
    const description = descriptions.find((desc) => desc.classid === classid);
    return description ? description : { name: "Unknown", type: "Unknown" };
  }
  // Reactive variable that calls the function
  $: classidCounts = getClassidCounts(data.assets);

  $: sortedByType = Object.entries(classidCounts)
    .map(([classid, count]) => {
      console.log(classid);

      const { name, type, icon_url } = getNameAndTypeByClassid(classid, data.descriptions);
      return { count, name, type, icon_url };
    })
    .sort((a, b) => a.type.localeCompare(b.type));
</script>

<svelte:head>
  <title>Inventory - Technickel</title>
</svelte:head>

<div class="w-full h-full flex flex-col p-4">
  <h2 class="pb-4">Cards</h2>
  <div class="flex flex-wrap justify-center gap-4">
    {#each sortedByType as { count, name, icon_url }}
      <div class="flex flex-col items-center">
        <div class="relative">
          <LazyImage
            src={`https://community.akamai.steamstatic.com/economy/image/${icon_url}/128fx128f`}
            {name}
          />
          <span
            class="absolute top-0 right-0 transform -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
          >
            {count}
          </span>
        </div>
        <div class="w-32 text-xs break-words text-center">{name}</div>
      </div>
    {/each}
  </div>
</div>
