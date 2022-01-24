<script>
  import Card from "$lib/card.svelte";
  import BackButton from "../_back_button.svelte";
</script>

<div class="flex-1 flex flex-col justify-center">
  <div class="flex justify-center mb-4">
    <BackButton />
  </div>
  <div class="max-w-4xl m-auto">
    <Card>
      <slot />
    </Card>
  </div>
  <div class="flex justify-center mt-4">
    <BackButton />
  </div>
</div>
