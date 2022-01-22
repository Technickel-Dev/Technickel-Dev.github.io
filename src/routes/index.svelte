<script>
  import CoinSpinner from "$lib/coin_spinner.svelte";
</script>

<svelte:head>
  <title>Home - Technickel</title>
</svelte:head>

<div class="flex-1 flex flex-col sm:flex-row -m-8">
  <div class="flex-1 flex items-center justify-center">
    <CoinSpinner />
  </div>
  <div
    class="flex-1 flex flex-col items-center justify-center bg-gradient-to-r from-neutral-600 to-neutral-800"
  >
    <h1 class="glow text-4xl">TECHNICKEL</h1>
    <p class="italic text-2xl font-light text-center">Just a guy's five<br />cents on tech.</p>
  </div>
</div>
