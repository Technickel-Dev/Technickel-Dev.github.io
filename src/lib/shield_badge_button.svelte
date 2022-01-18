<script>
  import ShieldBadge from "./shield_badge.svelte";

  export let url;
  export let badge;
  export let logo;
  export let alt;
</script>

<a href={url}>
  <ShieldBadge {badge} {logo} {alt} />
</a>
