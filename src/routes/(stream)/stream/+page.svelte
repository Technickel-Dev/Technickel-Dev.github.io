<script lang="ts">
  import { facts } from './beaver_facts.json';

  const getFact = (facts) => {
    const randIndex = Math.floor(Math.random() * facts.length)
    return facts[randIndex]
  }
  
  $: fact = getFact(facts)
</script>

<main class="flex flex-col w-full justify-center items-center gap-4">
  <h1 class="glow text-9xl">TECHNICKEL</h1>
  <h2 class="text-4xl">STREAM STARTING SOON...</h2>
  <div class="flex flex-col justify-center items-center gap-4 bg-neutral-600 p-4 rounded-xl">
    <h3 class="text-3xl text-sky-500 font-bold">Beaver Fact of the Day:</h3>
    <div class="text-xl">{fact.fact}</div>
    <div class="text-xs text-neutral-400">({fact.source})</div>
  </div>
</main>
