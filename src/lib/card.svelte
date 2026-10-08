<script>
  export let bgColor = "bg-neutral-600";
  export let classes = "";
</script>

<div class="p-4 rounded-sm overflow-hidden shadow-lg {bgColor} {classes}">
  <slot />
</div>
