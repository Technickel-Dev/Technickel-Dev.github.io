<script>
  /** @type {{bgColor?: string, classes?: string, children?: import('svelte').Snippet}} */
  let { bgColor = "bg-neutral-600", classes = "", children } = $props();
</script>

<div class="p-4 rounded overflow-hidden shadow-lg {bgColor} {classes}">
  {@render children?.()}
</div>
