<script>
  import Card from "$lib/card.svelte";
</script>

<div class="flex justify-center">
  <div class="max-w-4xl">
    <Card>
      <slot />
    </Card>
  </div>
</div>
