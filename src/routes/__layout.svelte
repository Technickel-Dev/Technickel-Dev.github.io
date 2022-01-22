<script>
  import Nav from "$lib/nav.svelte";
  import "../app.css";
</script>

<div class="flex-1 flex flex-col">
  <Nav />
  <div class="flex-1 flex p-8">
    <slot />
  </div>
</div>
