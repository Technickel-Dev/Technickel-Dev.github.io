<script>
  import Card from "$lib/card.svelte";
  import ProjectCard from "./project_card.svelte";
  import projects from "./projects.json";
</script>

<svelte:head>
  <title>Projects - Technickel</title>
</svelte:head>

<div class="flex flex-col">
  <h1>Projects</h1>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr grid-flow-row-dense"
  >
    {#each projects as { name, type, description, imageSrc, url }, index}
      <Card>
        <ProjectCard {imageSrc} title={name} subTitle={type} text={description} {url} {index} />
      </Card>
    {/each}
  </div>
</div>
