<script>
  import Card from "$lib/card.svelte";
  import BackButton from "../_back_button.svelte";
</script>

<div class="flex flex-col justify-center">
  <div class="flex justify-center mb-4">
    <BackButton />
  </div>
  <Card classes="px-4 md:px-16 py-8">
    <article class="prose prose-invert">
      <slot />
    </article>
  </Card>
  <div class="flex justify-center mt-4">
    <BackButton />
  </div>
</div>
