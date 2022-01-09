<script>
  export let title = undefined;
  export let subTitle = undefined;
  export let text = "Lorem ipsum here";
  export let imageSrc = undefined;
  export let alt = "Card image";
  export let textColor = "text-white";
  export let bgColor = "bg-neutral-600";
</script>

<div class="w-full rounded overflow-hidden shadow-lg {bgColor}">
  {#if imageSrc}
    <img class="w-full" src={imageSrc} {alt} />
  {/if}
  <div class="px-6 py-4">
    {#if title}
      <div class="font-bold text-xl mb-2 {textColor}">{title}</div>
    {/if}
    {#if subTitle}
      <div class="mb-2 {textColor}">{subTitle}</div>
    {/if}
    <slot name="content">
      <p class="{textColor} text-base">
        {text}
      </p>
    </slot>
  </div>
</div>
