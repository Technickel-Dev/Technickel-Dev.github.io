<script>
  /** @type {{title?: any, subTitle?: any, text?: string, imageSrc?: any, alt?: string, url?: any, index?: any}} */
  let {
    title = undefined,
    subTitle = undefined,
    text = "Lorem ipsum here",
    imageSrc = undefined,
    alt = "Card image",
    url = undefined,
    index = undefined
  } = $props();

  let check_out_options = [
    "Check out",
    "Take a look at",
    "See",
    "Take a peek at",
    "Explore",
    "Delve into",
    "Learn more about",
    "Peer into",
    "Witness",
    "Gaze upon",
    "Dig into",
    "Browse",
    "Take a tour of"
  ];
</script>

{#if imageSrc}
  <img class="w-full" src={imageSrc} {alt} />
{/if}
<div class:mt-4={imageSrc} class="h-full flex flex-col justify-between">
  <div class="flex flex-col justify-center">
    <div class="font-bold text-xl mb-1">{title}</div>
    <div class="mb-2 text-sm text-neutral-300">{subTitle}</div>
    <p class="text-base text-center" class:mb-4={url}>
      {text}
    </p>
  </div>
  {#if url}
    <a class="btn" href={url}>
      {check_out_options[index % check_out_options.length]}
      {title} here!
    </a>
  {/if}
</div>
