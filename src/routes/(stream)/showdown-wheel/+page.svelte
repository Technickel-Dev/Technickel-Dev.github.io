<script lang="ts">
  import { page } from "$app/state";
  import { onMount } from "svelte";
  import Wheel from "./wheel.svelte";
  import "@fontsource/dseg14-modern";
  import { sleep } from "$lib/utils";
  import CircularProgress from "$lib/circularProgress.svelte";
  import type { Client } from "tmi.js";

  const DEFAULT_NAME = "None";
  const NUMBERS = [100, 5, 90, 25, 70, 45, 10, 65, 30, 85, 50, 95, 55, 75, 40, 20, 60, 35, 80, 15];

  let username: string | null;
  let wheel: Wheel = $state();
  let progressBar: CircularProgress = $state();

  let queue: string[] = [];
  let currentName: string = $state(DEFAULT_NAME);
  let currentScore: number = $state(0);
  let topUser: string = $state(DEFAULT_NAME);
  let topScore: number = $state(0);
  let spinAgain: boolean = false;
  let manualSpinCount: number = 0;
  var progressBarValue: number = 0;

  onMount(async () => {
    username = page.url.searchParams.get("username");

    connectToTwitchChat();
  });

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

      if (message == "!wheel") {
        if (queue.length == 0) {
          // No auto queue, push and start one
          queue.push(name);
          spinWheel();
        } else {
          // Add current request to a queue
          queue.push(name);
        }
      }

      if (message == "!spinagain") {
        if (name == currentName) {
          spinAgain = true;
        }
      }
    });
  };

  const manualSpin = () => {
    if (manualSpinCount > 0) {
      spinAgain = true;
      manualSpinCount = 0;
    } else {
      manualSpinCount = 1;
      spinWheel();
    }
  };

  const spinWheel = async () => {
    currentName = queue[0];

    if (currentName == undefined) {
      currentName = DEFAULT_NAME;
    }

    let index = await wheel.spin();
    currentScore = NUMBERS[index];

    // Wait for user to be able to decide
    progressBar.timedProgress(15000);
    await sleep(15000);

    if (spinAgain == true) {
      index = await wheel.spin();
      currentScore += NUMBERS[index];
    }

    if (currentScore > topScore && currentScore <= 100) {
      topUser = currentName;
      topScore = currentScore;
    } else if (currentScore == topScore) {
      queue.unshift(currentName);
      queue.unshift(topUser);
      topUser = DEFAULT_NAME;
      topScore = 0;
    }

    queue.shift();

    currentScore = 0;
    currentName = DEFAULT_NAME;
    spinAgain = false;

    if (queue.length > 0) {
      spinWheel();
    }
  };
</script>

<svelte:head>
  <script src="/tarot/tmi.min.js"></script>
</svelte:head>

<div
  class="container"
  onclick={() => manualSpin()}
  onkeypress={() => manualSpin()}
  role="button"
  tabindex="0"
>
  <Wheel bind:this={wheel} />
</div>
<div class="arrow"></div>
<div class="screen top">
  <p class="underline">Top</p>
  <p>{topUser || DEFAULT_NAME} - {topScore || 0}</p>
</div>

<div class="screen current">
  <div class="progress-container">
    <CircularProgress bind:this={progressBar} value={progressBarValue} />
  </div>
  <div class="current-text">
    <p class="underline">Current</p>
    <p>{currentName || DEFAULT_NAME} - {currentScore || 0}</p>
  </div>
</div>

<div class="instructions">
  <p>Type !wheel to spin the wheel</p>
  <p>Type !spinagain to spin again after first</p>
  <p>Ties top make both people go again!</p>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80px;
    height: 325px;
  }

  .progress-container {
    width: 50px;
    height: 50px;
    margin-left: 10px;
  }

  .instructions {
    position: absolute;
    top: 145px;
    left: 120px;
    text-align: center;
  }

  .instructions > p {
    margin: 0;
  }

  .arrow {
    position: absolute;
    top: 145px;
    left: 75px;
    width: 0;
    height: 0;
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;
    border-right: 30px solid crimson;
  }

  .screen {
    position: absolute;
    width: 250px;
    height: 100px;
    background-color: black;
    left: 120px;
    font-family: "DSEG14 Modern", sans-serif;
    color: white;
  }

  .top {
    top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .current {
    top: 210px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
  }

  .underline {
    text-decoration: underline;
  }
</style>
