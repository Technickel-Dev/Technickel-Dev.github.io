<script>
  import Nav from "$lib/nav.svelte";
  import "../app.css";
</script>

<div class="h-full">
  <Nav />
  <div class="max-h-full py-4 px-4">
    <slot />
  </div>
</div>
