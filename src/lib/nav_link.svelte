<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let url;
  export let title;
  export let isOpen;

  const handleNav = () => {
    dispatch("nav");
  };
</script>

<a
  href={url}
  on:click={handleNav}
  class="mt-4 {isOpen
    ? 'block'
    : 'hidden sm:inline-block'} sm:mt-0 text-sky-200 hover:text-white mr-4"
>
  {title}
</a>
