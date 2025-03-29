<script lang="ts">
  import Matter from "matter-js";
  import { onMount } from "svelte";
  import { createBoundary } from "./boundary";
  import { createPegs } from "./peg";
  import { createPuck } from "./puck";
  import { page } from "$app/state";
  import type { Client } from "tmi.js";

  const ROWS = 5;
  const COLS = 11;
  const PEG_RADIUS = 6;
  const PEG_COLOR = "#0EA5E9";
  const PUCK_RADIUS = 24;

  let canvas: HTMLCanvasElement = $state();

  let engine = $state(Matter.Engine.create());
  engine.timing.timeScale = 0.5;

  let runner = Matter.Runner.create();
  let render: Matter.Render = $state();

  onMount(() => {
    render = Matter.Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        wireframes: false // Important to allow style
      }
    });

    createPegs(engine.world, render.canvas.width, COLS, ROWS, PEG_RADIUS, PEG_COLOR);
    createBoundary(engine.world, PEG_COLOR);

    // Run the renderer
    Matter.Render.run(render);

    // Run the engine
    Matter.Runner.run(runner, engine);

    let username = page.url.searchParams.get("username");
    connectToTwitchChat(username);
  });

  const connectToTwitchChat = (username: string | null) => {
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

      if (message == "!plinko") {
        createPuck(engine.world, render.canvas.width, name, PUCK_RADIUS);
      }
    });
  };

  const handleCollision = (event: Matter.IEventCollision<Matter.Engine>) => {
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
          Matter.Composite.remove(engine.world, body);
        }, 5000);
      }
    }
  };

  Matter.Events.on(engine, "collisionStart", handleCollision);
</script>

<svelte:head>
  <script src="/tarot/tmi.min.js"></script>
</svelte:head>

<canvas
  bind:this={canvas}
  onmousedown={() => {
    createPuck(engine.world, render.canvas.width, "Test", PUCK_RADIUS);
  }}
></canvas>
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
