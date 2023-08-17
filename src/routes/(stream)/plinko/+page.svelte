<script lang="ts">
  import { Engine, Events, Render, Runner, type IEventCollision, Composite } from "matter-js";
  import { onMount } from "svelte";
  import { createBoundary } from "./boundary";
  import { createPegs } from "./peg";
  import { createPuck } from "./puck";
  import { page } from "$app/stores";

  const ROWS = 5;
  const COLS = 11;
  const PEG_RADIUS = 6;
  const PEG_COLOR = "#0EA5E9";
  const PUCK_RADIUS = 24;
  let pegs = [];

  let canvas: HTMLCanvasElement;

  let engine = Engine.create();
  engine.timing.timeScale = 0.5;

  let runner = Runner.create();
  let render: Render;

  onMount(() => {
    render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        wireframes: false // Important to allow style
      }
    });

    pegs = createPegs(engine.world, render.canvas.width, COLS, ROWS, PEG_RADIUS, PEG_COLOR);
    createBoundary(engine.world, PEG_COLOR);

    // Run the renderer
    Render.run(render);

    // Run the engine
    Runner.run(runner, engine);

    let username = $page.url.searchParams.get("username");
    connectToTwitchChat(username);
  });

  const connectToTwitchChat = (username: string) => {
    const client = new window.tmi.Client({
      channels: [username]
    });

    client.connect();

    client.on("message", (_channel, tags, message, _self) => {
      let name = tags["display-name"];
      console.log(`${name}: ${message}`);

      if (message == "!plinko") {
        createPuck(engine.world, render.canvas.width, name, PUCK_RADIUS);
      }
    });
  };

  const handleCollision = (event: IEventCollision<Engine>) => {
    let pairs = event.pairs;

    for (let i = 0; i < pairs.length; i++) {
      let bodyA = pairs[i].bodyA;
      let bodyB = pairs[i].bodyB;
      if (
        (bodyA.label == "cupBottom" && bodyB.label == "puck") ||
        (bodyA.label == "puck" && bodyB.label == "cupBottom")
      ) {
        let body = bodyB;
        if (bodyA.label == "puck") {
          body = bodyA;
        }

        body.label = "donePuck";
        setTimeout(() => {
          Composite.remove(engine.world, body);
        }, 5000);
      }
    }
  };

  Events.on(engine, "collisionStart", handleCollision);
</script>

<svelte:head>
  <script src="/tarot/tmi.min.js"></script>
</svelte:head>

<canvas
  bind:this={canvas}
  on:mousedown={() => {
    createPuck(engine.world, render.canvas.width, "Test", PUCK_RADIUS);
  }}
/>
<div class="text-container"><p>Type !plinko to send a puck down</p></div>

<style>
  .text-container {
    font-family: "Inknut Antiqua", sans-serif;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
