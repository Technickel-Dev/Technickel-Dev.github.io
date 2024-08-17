<script lang="ts">
  import Card from "./card.svelte";
  import Search from "./search.svelte";
  import type { Asset, Description, Tag } from "./steam";

  /** @type {import('./$types').PageData} */
  export let data;

  let searchQuery = "";

  const getClassidCounts = (assets: Asset[]) => {
    if (!assets) return {}; // Return an empty object if assets is null or undefined

    return assets.reduce<Record<string, number>>((acc, asset) => {
      const { classid } = asset;
      acc[classid] = (acc[classid] || 0) + 1;
      return acc;
    }, {});
  };

  // Function to get the name and type based on classid
  const getNameAndTypeByClassid = (classid: string, descriptions: Description[]) => {
    const description = descriptions.find((description) => description.classid === classid);
    return description ? description : null;
  };
  // Reactive variable that calls the function
  $: classidCounts = getClassidCounts(data.assets);

  $: sortedByType = Object.entries(classidCounts)
    .map(([classid, count]) => {
      const description = getNameAndTypeByClassid(classid, data.descriptions);
      return { count, description, classid };
    })
    .filter((card) => {
      if (!card.description) return true;
      return card.description.tags.some((tag: Tag) => tag.localized_tag_name === "Trading Card");
    });

  $: filteredCards = sortedByType
    .filter((card) => {
      if (searchQuery == "") return true;
      if (!card.description) return false;

      return (
        card.description.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.description.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (!a.description || !b.description) return 0;

      return a.description.type.localeCompare(b.description.type);
    });
</script>

<svelte:head>
  <title>Inventory - Technickel</title>
</svelte:head>

<div class="w-full h-full flex flex-col p-4">
  <h2 class="pb-4">Cards</h2>
  <div class="flex flex-wrap justify-center gap-4">
    {#each filteredCards as card (card.classid)}
      <Card
        description={card.description}
        iconUrl={card.description?.icon_url || ""}
        count={card.count}
        name={card.description?.name || "Unknown Name"}
        type={card.description?.type || "Unknown Type"}
      />
    {:else}
      No Cards
    {/each}
  </div>
</div>

<Search bind:searchQuery />
