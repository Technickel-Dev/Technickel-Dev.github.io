<script lang="ts">
  import { onMount } from "svelte";
  import { randomNumber, waitForAnimations } from "$lib/utils";

  // Desandro https://3dtransforms.desandro.com/carousel
  // Slots Credits: Jos Faber https://codepen.io/josfabre/pen/abReBvP
  // Mr JD https://stackoverflow.com/questions/7466070/how-can-i-achieve-a-slot-machine-spinning-effect-with-css3-jquery

  export let spinOffset = 0;
  let animationDuration = 4000 + spinOffset * 1000;
  let reel: HTMLDivElement;

  onMount(() => {
    initReel();
  });

  const initReel = () => {
    let emojis = reel.querySelectorAll("div");

    let theta = 360 / emojis.length;
    let radius = Math.round(emojis[0].offsetHeight / 2 / Math.tan(Math.PI / emojis.length));

    emojis.forEach((emoji, i) => {
      let angle = theta * i;

      (emoji as HTMLElement).style.transform = `rotateX(${angle}deg) translateZ(${radius}px)`;
    });
  };

  export const roll = (): Promise<number> => {
    let emojis = reel.querySelectorAll("div");
    let theta = 360 / emojis.length;
    let radius = Math.round(emojis[0].offsetHeight / 2 / Math.tan(Math.PI / emojis.length));

    let rolledIndex = randomNumber(0, emojis.length - 1);

    const DEFAULT_NUMBER_SPINS = 5;
    let spins = DEFAULT_NUMBER_SPINS + spinOffset;

    // Return promise so we can await rolling finish
    return new Promise(async (resolve, _) => {
      // Set transition properties ==> https://cubic-bezier.com/#.41,-0.01,.63,1.09
      reel.style.transition = `all ${animationDuration}ms cubic-bezier(.41,-0.01,.63,1.09)`;

      // Full revolutions for flair plus the degrees for actual result
      let angle = spins * 360 + rolledIndex * theta;
      reel.style.transform = `translateZ(${-radius}px) rotateX(${-angle}deg)`;

      await waitForAnimations(reel);

      // Reset position, so that it doesn't get higher without limit
      reel.style.transition = `none`;
      angle = angle % 360;
      reel.style.transform = `translateZ(${-radius}px) rotateX(${-angle}deg)`;

      // Resolve this promise
      resolve(rolledIndex);
    });
  };
</script>

<div class="container">
  <div bind:this={reel} class="reel">
    <div class="emogi">👾</div>
    <div class="emogi">💎</div>
    <div class="emogi">💰</div>
    <div class="emogi">🍒</div>
    <div class="emogi">🍊</div>
    <div class="emogi">🍋</div>
    <div class="emogi">🍉</div>
    <div class="emogi">🍌</div>
    <div class="emogi">🍆</div>
  </div>
</div>

<style>
  .container {
    position: relative;
    width: 50px;
    height: 50px;
    perspective: 1000px;
  }

  .reel {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .emogi {
    position: absolute;
    font-size: 30px;
    text-align: center;
    width: 50px;
    height: 50px;
    line-height: 50px;
    background-color: #0ea5e9;
  }

  .emogi::after {
    content: "";
    width: 50px;
    display: block;
    border-top: 2px solid #075985;
    border-bottom: 2px solid #075985;
  }
</style>
