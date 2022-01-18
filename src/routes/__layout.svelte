<script>
  import Nav from "$lib/nav.svelte";
  import "../app.css";
</script>

<div class="h-full flex flex-col">
  <Nav />
  <div class="flex-1 m-8">
    <slot />
  </div>
</div>
