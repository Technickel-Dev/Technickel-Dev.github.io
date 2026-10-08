<script>
  import ShieldBadge from "./shield_badge.svelte";

  /** @type {{url: any, badge: any, logo: any, alt: any, logoColor?: string}} */
  let {
    url,
    badge,
    logo,
    alt,
    logoColor = "white"
  } = $props();
</script>

<a href={url}>
  <ShieldBadge {badge} {logo} {alt} {logoColor} />
</a>
