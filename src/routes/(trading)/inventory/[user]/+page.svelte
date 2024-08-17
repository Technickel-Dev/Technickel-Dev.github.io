<script lang="ts">
  import Card from "./card.svelte";
  import Search from "./search.svelte";

  /** @type {import('./$types').PageData} */
  export let data;

  interface Tag {
    category: string;
    internal_name: string;
    localized_category_name: string;
    localized_tag_name: string;
  }

  let searchQuery = "";

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
      const description = getNameAndTypeByClassid(classid, data.descriptions);
      return { count, description, classid };
    })
    .filter((card) =>
      card.description.tags.some((tag: Tag) => tag.localized_tag_name === "Trading Card")
    );

  $: filteredCards = sortedByType
    .filter((card) => {
      if (searchQuery == "") return true;

      return (
        card.description.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.description.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    })
    .sort((a, b) => a.description.type.localeCompare(b.description.type));
</script>

<svelte:head>
  <title>Inventory - Technickel</title>
</svelte:head>

<div class="w-full h-full flex flex-col p-4">
  <h2 class="pb-4">Cards</h2>
  <div class="flex flex-wrap justify-center gap-4">
    {#each filteredCards as card (card.classid)}
      <Card
        iconUrl={card.description.icon_url}
        count={card.count}
        name={card.description.name}
        type={card.description.type}
      />
    {:else}
      No Cards
    {/each}
  </div>
</div>

<Search bind:searchQuery />
