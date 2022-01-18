<script>
  export let title = undefined;
  export let subTitle = undefined;
  export let text = "Lorem ipsum here";
  export let imageSrc = undefined;
  export let alt = "Card image";
</script>

{#if imageSrc}
  <img class="w-full" src={imageSrc} {alt} />
{/if}
<div class={imageSrc ? "mt-4" : ""}>
  <div class="font-bold text-xl mb-1">{title}</div>
  <div class="mb-2 text-xs text-neutral-300">{subTitle}</div>
  <p class="text-base text-center">
    {text}
  </p>
</div>
