<script lang="ts">
  import { onMount } from "svelte";

  interface Props {
    src: string;
    name: string;
  }

  let { src, name }: Props = $props();
  let imageUrl: string = $state("");
  let observer: IntersectionObserver;
  let imageElement: HTMLImageElement = $state();

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
