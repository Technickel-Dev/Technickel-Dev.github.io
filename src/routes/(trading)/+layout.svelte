<script>
  import { Toaster } from "svelte-french-toast";
  import "../../app.css";
  /** @type {{children?: import('svelte').Snippet}} */
  let { children } = $props();
</script>

{@render children?.()}

<Toaster />
