<script lang="ts">
  import { page } from "$app/stores";
  import CircularProgress from "$lib/circularProgress.svelte";
  import "@fontsource/inknut-antiqua";
  import { fade } from "svelte/transition";
  import { cards } from "./tarot_cards.json";
  import { onMount } from "svelte";
  import type { Client } from "tmi.js";

  // Card Flip Credits: Coding With Russ https://www.youtube.com/watch?v=NCLdf661ILE

  type Card = {
    name: string;
    image: string;
    description: string;
    reverseDescription: string;
  };

  const SECONDS_TO_MILLISECONDS = 1000;
  const DEFAULT_DELAY = 20000;
  const ANIMATION_DELAY = 1500;
  const TOTAL_ANIMATION_DELAY = 2 * ANIMATION_DELAY;

  let username: string | null;
  let userDelaySeconds = 0;
  let active = false;
  let reverse = false;
  let cardInitialized = false;
  let timeInitialized = false;
  let queue: string[] = [];
  let currentName = "hello-world";
  let currentCard: Card = cards[0];
  let currentTime = 0;
  let endTime = 0;
  $: progressBarValue = (100 - ((endTime - currentTime) / totalDelayMilliSeconds) * 100) | 0;
  $: totalDelayMilliSeconds = setDrawDelay(userDelaySeconds);

  onMount(async () => {
    username = $page.url.searchParams.get("username");
    let delay = $page.url.searchParams.get("cardDelaySeconds");

    if (delay != null) {
      userDelaySeconds = parseInt(delay);
    }

    connectToTwitchChat();
  });

  const setDrawDelay = (providedDelay: number) => {
    if (providedDelay) {
      let userDelay = providedDelay * SECONDS_TO_MILLISECONDS;
      return userDelay > TOTAL_ANIMATION_DELAY ? userDelay : DEFAULT_DELAY;
    }

    return DEFAULT_DELAY;
  };

  const showTarotCard = () => {
    active = true;
  };

  const hideTarotCard = () => {
    active = false;
  };

  const getCard = (cards: Card[]) => {
    const randIndex = Math.floor(Math.random() * cards.length);
    return cards[randIndex];
  };

  const randomizeTarotCard = () => {
    let percentReverseChance = Math.random() * 100;

    console.log("Reverse Chance:", percentReverseChance);

    reverse = percentReverseChance < 25 ? true : false;

    currentCard = getCard(cards);
  };

  const drawTarot = () => {
    currentTime = Date.now();

    if (!timeInitialized) {
      endTime = currentTime + totalDelayMilliSeconds;
      timeInitialized = true;
      console.log("Inititalize time");
    }

    let timeLeft = endTime - currentTime;

    if (active && timeLeft > totalDelayMilliSeconds - ANIMATION_DELAY) {
      // Hide the currently shown card
      hideTarotCard();
      console.log("Hide card");
    } else if (
      !cardInitialized &&
      timeLeft > ANIMATION_DELAY &&
      timeLeft <= totalDelayMilliSeconds - ANIMATION_DELAY
    ) {
      currentName = queue[0];
      randomizeTarotCard();
      cardInitialized = true;
      console.log("Initialize card");
    } else if (
      !active &&
      timeLeft > ANIMATION_DELAY &&
      timeLeft <= totalDelayMilliSeconds - ANIMATION_DELAY
    ) {
      // Show a new card
      showTarotCard();
      console.log("Show card");
    }

    if (timeLeft <= 0) {
      // Remove request from queue
      queue.shift();

      // Reset for next run
      cardInitialized = false;
      timeInitialized = false;

      // Either start a new request or finish current one
      if (queue.length > 0) {
        console.log("Next in queue");
        setTimeout(drawTarot, 100);
      } else {
        console.log("All out of cards, STOOOOOP");
        hideTarotCard();
      }

      return;
    }

    setTimeout(drawTarot, 100);
  };

  const connectToTwitchChat = () => {
    const client: Client = new window.tmi.Client({
      channels: [username]
    });

    client.connect();

    client.on("message", (_channel, tags, message, _self) => {
      let name = tags["display-name"];
      if (name === undefined) {
        return;
      }

      console.log(`${name}: ${message}`);

      if (message == "!tarot") {
        if (queue.length == 0) {
          // No auto queue, push and start one
          queue.push(name);
          drawTarot();
        } else {
          // Add current request to a queue
          queue.push(name);
        }
      }
    });
  };
</script>

<svelte:head>
  <script src="/tarot/tmi.min.js"></script>
</svelte:head>

<div class="container" on:mouseenter={showTarotCard} on:mouseleave={hideTarotCard} role="main">
  <div class="progress-container">
    <CircularProgress value={progressBarValue} />
  </div>

  <div class:active class="card">
    <div class="front">
      <img class:reverse src="/tarot/{currentCard.image}.jpg" alt="Tarot Card" />
    </div>
    <div class="back"><p class="back-text">Type !tarot to get a reading</p></div>
  </div>
</div>
<div class="text-container">
  {#if active}
    <div class="name" transition:fade>{currentName}</div>
    <div class="card-name" class:reverse transition:fade>{currentCard.name}</div>
    <div class="card-description" transition:fade>
      {reverse ? currentCard.reverseDescription : currentCard.description}
    </div>
  {/if}
</div>

<style>
  .container {
    font-family: "Inknut Antiqua", sans-serif;
    line-height: 2rem;
    position: relative;
    width: 128px;
    height: 216px;
    perspective: 800px;
    cursor: pointer;
  }

  .active {
    transform: rotateY(180deg);
  }

  .reverse {
    transform: scaleX(-1) rotateX(180deg);
    bottom: 0;
  }

  .card {
    height: 100%;
    width: 100%;
    position: relative;
    transition: transform 1500ms;
    transform-style: preserve-3d;
  }

  .front,
  .back {
    height: 100%;
    width: 100%;
    box-shadow: 0 0 5px 2px rgba(50, 50, 50, 0.25);
    position: absolute;
    backface-visibility: hidden;
  }

  .front,
  .back,
  img {
    border-radius: 0.5rem;
  }

  .back {
    background-image: linear-gradient(45deg, blue, red);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
  }

  .back-text {
    padding: 1rem;
  }

  .front {
    transform: rotateY(180deg);
  }

  .name {
    font-weight: bolder;
    text-transform: uppercase;
    text-align: center;
  }

  .card-name {
    font-size: smaller;
    font-weight: bold;
  }

  .card-description {
    max-width: 128px;
    text-align: center;
    font-size: x-small;
  }

  .text-container {
    font-family: "Inknut Antiqua", sans-serif;
    color: white;
    line-height: 1.5rem;
    font-size: small;
    height: auto;
    width: 128px;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-wrap: break-word;
  }

  .progress-container {
    position: absolute;
    bottom: -15px;
    right: -15px;
    height: 30px;
    width: 30px;
    z-index: 1;
  }
</style>
