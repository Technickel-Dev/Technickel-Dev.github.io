<script>
  import { onMount } from "svelte";

  export let src;
  export let name;
  let imageUrl = "";
  let observer;

  onMount(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imageUrl = src;
          observer.disconnect(); // Stop observing once the image is loaded
        }
      });
    });

    observer.observe(imageElement);
  });

  let imageElement;
</script>

<img class="w-32 h-32" bind:this={imageElement} src={imageUrl} alt="Lazy Loaded Image {name}" />
