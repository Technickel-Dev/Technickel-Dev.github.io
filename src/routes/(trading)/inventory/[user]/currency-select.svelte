<script lang="ts">
  import { onMount } from "svelte";
  import { CURRENCIES, DEFAULT_CURRENCY } from "../../market/market";

  let selectedCurrency = DEFAULT_CURRENCY; // Default to CAD

  function handleSelect(event: any) {
    const value = event.target.value;
    selectedCurrency = value;

    const url = new URL(window.location.href);
    url.searchParams.set("currency", value);
    window.location.href = url.toString(); // Reload page with query param
  }

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    const currency = params.get("currency");
    if (currency) {
      selectedCurrency = currency;
    } else {
      // Default to CAD if no currency is selected
      const url = new URL(window.location.href);
      url.searchParams.set("currency", selectedCurrency);
    }
  });
</script>

<select
  on:change={handleSelect}
  bind:value={selectedCurrency}
  class="rounded-md bg-neutral-600 p-2 mb-8 text-white"
>
  <option value="" disabled>Select a currency</option>
  {#each Object.entries(CURRENCIES) as [key, currency]}
    <option value={key}>
      {currency.label} - {currency.long}
    </option>
  {/each}
</select>
