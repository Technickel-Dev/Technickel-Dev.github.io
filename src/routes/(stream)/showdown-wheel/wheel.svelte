<script lang="ts">
  import { onMount } from "svelte";
  import "@fontsource/teko";
  import { randomNumber } from "$lib/utils";

  // Credits:
  // Desandro https://3dtransforms.desandro.com/carousel
  // Jos Faber https://codepen.io/josfabre/pen/abReBvP
  // Mr JD https://stackoverflow.com/questions/7466070/how-can-i-achieve-a-slot-machine-spinning-effect-with-css3-jquery

  const ANIMATION_DURATION = 4000;
  const DEFAULT_NUMBER_SPINS = 5;

  let wheel: HTMLDivElement;

  onMount(() => {
    initWheel();
  });

  const initWheel = () => {
    let cells = wheel.querySelectorAll("div");

    let theta = 360 / cells.length;
    let radius = Math.round(cells[0].offsetHeight / 2 / Math.tan(Math.PI / cells.length));

    cells.forEach((cell, i) => {
      let angle = theta * i;

      (cell as HTMLElement).style.transform = `rotateX(${angle}deg) translateZ(${radius}px)`;
    });

    wheel.style.transform = `translateZ(${-radius}px) rotateX(0deg)`;
  };

  export const spin = (): Promise<number> => {
    let cells = wheel.querySelectorAll("div");
    let theta = 360 / cells.length;
    let radius = Math.round(cells[0].offsetHeight / 2 / Math.tan(Math.PI / cells.length));

    let rolledIndex = randomNumber(0, cells.length - 1);

    // Return promise so we can await rolling finish
    return new Promise((resolve, _) => {
      // Set transition properties ==> https://cubic-bezier.com/#.34,-0.21,.51,1.02
      wheel.style.transition = `all ${ANIMATION_DURATION}ms cubic-bezier(.34,-0.21,.51,1.02)`;

      // Don't make it land in center, make it land somewhere in between
      // Since it lands in middle we take half of theta and either subtract or add it
      // +-1 for avoiding edges
      let spinRandomness = randomNumber((-theta / 2) + 1, theta / 2 - 1);

      // Full revolutions for flair plus the degrees for actual result
      let angle = DEFAULT_NUMBER_SPINS * 360 + rolledIndex * theta + spinRandomness;

      wheel.style.transform = `translateZ(${-radius}px) rotateX(${-angle}deg)`;

      // After animation
      setTimeout(() => {
        // Reset position, so that it doesn't get higher without limit
        wheel.style.transition = `none`;
        angle = angle % 360;
        wheel.style.transform = `translateZ(${-radius}px) rotateX(${-angle}deg)`;

        // Resolve this promise
        resolve(rolledIndex);
      }, ANIMATION_DURATION);
    });
  };
</script>

<div class="container">
  <div bind:this={wheel} class="wheel">
    <div class="cell dollar">100</div>
    <div class="cell green">5</div>
    <div class="cell">90</div>
    <div class="cell">25</div>
    <div class="cell">70</div>
    <div class="cell">45</div>
    <div class="cell">10</div>
    <div class="cell">65</div>
    <div class="cell">30</div>
    <div class="cell">85</div>
    <div class="cell">50</div>
    <div class="cell">95</div>
    <div class="cell">55</div>
    <div class="cell">75</div>
    <div class="cell">40</div>
    <div class="cell">20</div>
    <div class="cell">60</div>
    <div class="cell">35</div>
    <div class="cell">80</div>
    <div class="cell green">15</div>
  </div>
</div>

<style>
  .container {
    position: relative;
    width: 50px;
    height: 50px;
    perspective: 1000px;
  }

  .wheel {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .cell {
    position: absolute;
    font-size: 60px;
    text-align: center;
    width: 80px;
    height: 50px;
    line-height: 63px;
    background-color: black;
    color: white;
    -webkit-text-stroke: 0.2px goldenrod;
    font-weight: bolder;
    font-family: "Teko", sans-serif;
    text-shadow: 1px 1px 1px black;
  }

  .cell::after {
    content: "";
    display: block;
    width: 80px;
    position: absolute;
    top: 0;
    border-top: 3px solid lightgrey;
    border-bottom: 3px solid lightgrey;
  }

  .dollar {
    color: crimson;
  }

  .green {
    background-color: forestgreen;
  }
</style>
