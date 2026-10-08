<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  /** @type {{url: any, title: any, isOpen: any}} */
  let { url, title, isOpen } = $props();

  const handleNav = () => {
    dispatch("nav");
  };
</script>

<a
  href={url}
  onclick={handleNav}
  class="mt-4 {isOpen
    ? 'block'
    : 'hidden sm:inline-block'} sm:mt-0 text-sky-200 hover:text-white mr-4"
>
  {title}
</a>
