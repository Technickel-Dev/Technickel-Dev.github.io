<script>
  export let title = undefined;
  export let subTitle = undefined;
  export let text = "Lorem ipsum here";
  export let imageSrc = undefined;
  export let alt = "Card image";
  export let url = undefined;
</script>

{#if imageSrc}
  <img class="w-full" src={imageSrc} {alt} />
{/if}
<div class:mt-4={imageSrc} class="flex flex-col justify-center">
  <div class="font-bold text-xl mb-1">{title}</div>
  <div class="mb-2 text-xs text-neutral-300">{subTitle}</div>
  <p class="text-base text-center" class:mb-4={url}>
    {text}
  </p>
  {#if url}
    <a class="btn" href={url}>Check it out here!</a>
  {/if}
</div>
