<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import Reel from "./reel.svelte";

  // Slots Credits: Jos Faber https://codepen.io/josfabre/pen/abReBvP

  const DEFAULT_NAME = "hello-world";

  let username: string;
  let reelOne: Reel;
  let reelTwo: Reel;
  let reelThree: Reel;
  let lever: HTMLDivElement;

  let queue = [];
  let currentName = DEFAULT_NAME;

  onMount(async () => {
    username = $page.url.searchParams.get("username");

    connectToTwitchChat();
  });

  const connectToTwitchChat = () => {
    const client = new window.tmi.Client({
      channels: [username]
    });

    client.connect();

    client.on("message", (_channel, tags, message, _self) => {
      let name = tags["display-name"];
      console.log(`${name}: ${message}`);

      if (message == "!slots") {
        if (queue.length == 0) {
          // No auto queue, push and start one
          queue.push(name);
          rollAll();
        } else {
          // Add current request to a queue
          queue.push(name);
        }
      }
    });
  };

  const rollAll = async () => {
    const pullLeverKeyframes: Keyframe[] = [
      { transform: "rotateX(0)" },
      { transform: "rotateX(180deg)" },
      { transform: "rotateX(0)" }
    ];

    const animationOptions: KeyframeAnimationOptions = {
      duration: 2000,
      easing: "ease-out"
    };

    lever.animate(pullLeverKeyframes, animationOptions);

    currentName = queue[0];

    if (currentName == undefined) {
      currentName = DEFAULT_NAME;
    }

    await Promise.all([reelOne.roll(), reelTwo.roll(), reelThree.roll()]);

    queue.shift();

    if (queue.length > 0) {
      rollAll();
    }
  };
</script>

<svelte:head>
  <script src="/tarot/tmi.min.js"></script>
</svelte:head>

<div class="container">
  <div class="semi-circle">
    <div class="name">{currentName}</div>
  </div>
  <div class="slots">
    <Reel bind:this={reelOne} />
    <Reel bind:this={reelTwo} spinOffset={1} />
    <Reel bind:this={reelThree} spinOffset={2} />
  </div>
  <div class="mount" />
  <div
    class="lever"
    bind:this={lever}
    on:click={rollAll}
    on:keypress={rollAll}
    role="button"
    tabindex="0"
  >
    <div class="arm" />
    <div class="ball" />
  </div>
  <div class="console">
    <div class="instructions">Type !slots to spin the wheel</div>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 270px;
  }

  .slots {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 190px;
    height: 150px;
    background: linear-gradient(45deg, grey 0%, lightgray 100%);
    padding: 20px;
  }

  .slots::before,
  .slots::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 5px;
    background-color: black;
  }

  .slots::before {
    left: 35px;
  }

  .slots::after {
    left: 241px;
  }

  .semi-circle {
    width: 230px;
    height: 50px;
    background: linear-gradient(45deg, #dc2626 0%, #f87171 100%);
    border-radius: 100% 100% 0 0;
    position: relative;
    border: 5px solid goldenrod;
  }

  .console {
    width: 270px;
    height: 50px;
    background: linear-gradient(45deg, #dc2626 0%, #f87171 100%);
    border: 5px solid goldenrod;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .name {
    position: absolute;
    top: 75%;
    left: 11%;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 30px;
    background-color: white;
    text-align: center;
    width: 150px;
    font-weight: bolder;
    text-transform: uppercase;
    border: 5px solid goldenrod;
  }

  .instructions {
    text-align: center;
    background-color: white;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 30px;
    border: 5px solid goldenrod;
  }

  .mount {
    position: absolute;
    width: 20px;
    height: 40px;
    left: 255px;
    top: 140px;
    background: linear-gradient(45deg, #dc2626 0%, #f87171 100%);
    border: 5px solid goldenrod;
  }

  .arm {
    background-color: lightslategray;
    position: absolute;
    width: 10px;
    height: 50px;
  }

  .ball {
    background-color: red;
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 25px;
    top: -15px;
    left: -7px;
  }

  .lever {
    position: absolute;
    width: 25px;
    height: 50px;
    left: 265.5px;
    top: 115px;
    transform-origin: bottom;
    cursor: pointer;
  }
</style>
