<script>
  export let badge;
  export let style = "for-the-badge";
  export let logo;
  export let logoColor = "white";
  export let alt = "Badge";
</script>

<img
  src="https://img.shields.io/badge/{badge}?style={style}&logo={logo}&logoColor={logoColor}"
  {alt}
/>
