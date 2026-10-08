<script>
  import "../../../app.css";
  /** @type {{children?: import('svelte').Snippet}} */
  let { children } = $props();
</script>

<div class="flex-1 flex flex-col">
  <div class="flex-1 flex md:p-4 lg:p-8 justify-center">
    {@render children?.()}
  </div>
</div>
