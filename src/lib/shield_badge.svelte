<script>
  /** @type {{badge: any, style?: string, logo: any, logoColor?: string, alt?: string}} */
  let {
    badge,
    style = "for-the-badge",
    logo,
    logoColor = "white",
    alt = "Badge"
  } = $props();
</script>

<img
  src="https://img.shields.io/badge/{badge}?style={style}&logo={logo}&logoColor={logoColor}"
  {alt}
/>
