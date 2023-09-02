<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import EightBall from "./eight-ball.svelte";

  const DEFAULT_NAME = "None";
  const DEFAULT_MESSAGE = "None";
  const TRIGGER_STRING = "!8ball ";
  let username: string;
  let queue: Request[] = [];

  let eightBall: EightBall;
  let currentName: string = DEFAULT_NAME;
  let currentMessage: string = DEFAULT_MESSAGE;

  type Request = {
    name: string;
    message: string;
  };

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

      if (message.includes(TRIGGER_STRING)) {
        if (queue.length == 0) {
          // No auto queue, push and start one
          queue.push({ name, message });
          rollEightBall();
        } else {
          // Add current request to a queue
          queue.push({ name, message });
        }
      }
    });
  };

  const rollEightBall = async () => {
    currentName = queue[0].name;
    currentMessage = queue[0].message;

    if (currentName == undefined) {
      currentName = DEFAULT_NAME;
    }

    await eightBall.roll();

    queue.shift();

    if (queue.length > 0) {
      eightBall.roll();
    }
  };
</script>

<svelte:head>
  <script src="/tarot/tmi.min.js"></script>
</svelte:head>

<div
  on:click={() => eightBall.roll()}
  on:keydown={() => eightBall.roll()}
  role="button"
  tabindex="0"
  class="container"
>
  <div class="instructions">
    {"Type '!8ball <<yes or no question here>>' to have the eight ball predict the future"}
  </div>
  <EightBall bind:this={eightBall} />

  <div class="description">
    {currentName} - {currentMessage.replace(TRIGGER_STRING, "")}
  </div>
</div>

<style>
  .container {
    width: 400px;
    display: grid;
  }

  .description {
    display: flex;
    align-items: center;
    justify-self: center;
    margin-top: 20px;
  }

  .instructions {
    text-align: center;
    margin-bottom: 20px;
  }
</style>
