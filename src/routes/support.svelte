<script>
  import Card from "$lib/card.svelte";
  import MutedText from "$lib/muted_text.svelte";
</script>

<h1>Support</h1>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
  <Card>
    <h2>Follow</h2>
    <MutedText text="Something as simple as a follow really helps me out!" />
    <hr />
  </Card>
  <Card>
    <h2>Donate</h2>
    <MutedText text="Funding my work helps me afford wacky projects!" />

    <hr />
  </Card>
  <div class="md:col-span-2">
    <Card>
      <h2>Sign Up</h2>
      <MutedText
        text="Signing up using any of my referral links is another way you could support me!"
      />
      <hr class="my-4" />
    </Card>
  </div>
</div>
