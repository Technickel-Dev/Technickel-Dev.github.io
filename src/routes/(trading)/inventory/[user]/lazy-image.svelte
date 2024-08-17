<script lang="ts">
  import { onMount } from "svelte";

  export let src: string;
  export let name: string;
  let imageUrl: string = "";
  let observer: IntersectionObserver;
  let imageElement: HTMLImageElement;

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
</script>

<img class="w-32 h-32" bind:this={imageElement} src={imageUrl} alt="Lazy Loaded Image {name}" />
