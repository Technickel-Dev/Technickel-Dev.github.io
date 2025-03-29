<script>
  import Nav from "$lib/nav.svelte";
  import "../../app.css";
  /** @type {{children?: import('svelte').Snippet}} */
  let { children } = $props();
</script>

<div class="flex-1 flex flex-col">
  <Nav />
  <div class="flex-1 flex p-4 md:p-8 justify-center">
    {@render children?.()}
  </div>
</div>
