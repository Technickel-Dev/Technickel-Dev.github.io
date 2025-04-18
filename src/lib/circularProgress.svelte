<script lang="ts">
  // Circular Progress Credit: Stephane Vanraes https://github.com/stephane-vanraes/svelte-progresscircle

  interface Props {
    value?: number;
    max?: number;
  }

  let { value = $bindable(0), max = 100 }: Props = $props();

  let progressPath = $derived(() => {
    if (value <= 0) {
      return "";
    } else if (value >= max) {
      return "M50,5A45 45 0 1 1 49.9999 5";
    } else {
      const angle = Math.PI * 2 * (value / max);
      const x = 50 + Math.cos(angle - Math.PI / 2) * 45;
      const y = 50 + Math.sin(angle - Math.PI / 2) * 45;

      let path = "M50,5";

      if (angle > Math.PI) {
        path += "A45 45 0 0 1 50 95";
      }

      path += `A45 45 0 0 1 ${x} ${y}`;

      return path;
    }
  });

  export const timedProgress = (ms: number) => {
    let intervalCounter = 0;
    const INTERVAL_AMOUNT = 100;

    let interval = setInterval(() => {
      if (intervalCounter >= ms) {
        clearInterval(interval);
        value = 0;
        return;
      }

      intervalCounter += INTERVAL_AMOUNT;
      value += (100 * INTERVAL_AMOUNT) / ms;
    }, INTERVAL_AMOUNT);
  };
</script>

<svg viewBox="0 0 100 100">
  <path d="M50,5A45 45 0 1 1 49.9999 5" />
  <path d={progressPath()} />
</svg>

<style>
  svg {
    width: 100%;
    height: 100%;
    fill: var(--progress-fill, transparent);
    stroke-linecap: var(--progress-linecap, round);
  }
  path:first-child {
    stroke: var(--progress-trackcolor, grey);
    stroke-width: var(--progress-trackwidth, 9px);
  }
  path:last-child {
    stroke: var(--progress-color, lightgreen);
    stroke-width: var(--progress-width, 10px);
  }
</style>
