<script>
  import Card from "$lib/card.svelte";
  import ProjectCard from "./_project_card.svelte";

  let projects = [
    {
      name: "Technickel.dev",
      type: "Web",
      description:
        "This is the website you are on right now! Its purpose is to provide information about me and my projects. It includes what I do, how we can get in contact and how you can support me!",
      url: "https://technickel.dev/"
    },
    {
      name: "Battlesnakes: Danger Noodle",
      type: "Application",
      description:
        "Application built to play the game snake competitively against other developers around the world.",
      url: "https://play.battlesnake.com/u/technickel/"
    },
    {
      name: "Drone Roof Inspections",
      type: "Application",
      description:
        "Startup that I co-founded with the goal of providing automatic roof inspections using drones and machine learning."
    },
    {
      name: "Augmented Municipality",
      type: "Mobile",
      description:
        "An AR app designed to communicate urban design to over 240,000 citizens by letting them see what current and future municipal developments look like in real life."
    },
    {
      name: "Low Poly",
      type: "Web",
      description:
        "This is a React based website that takes advantage of WASM to generate digital art inspired by low poly art styles.",
      url: "https://lowpoly.tripleresolution.com/"
    },
    {
      name: "Triangulation",
      type: "Web",
      description:
        "Triangulation is a SvelteKit based website that automates the workflow I would use to generate digital art inspired by low poly / triangle / geometric art styles.",
      url: "https://triangulation.tripleresolution.com/"
    },
    {
      name: "Plannit",
      type: "Mobile",
      description:
        "A space themed Android app that helps you and your friends plan schedules and find free time."
    },
    {
      name: "NPC Bot",
      type: "Application",
      description:
        "A project I worked on with a buddy during a local hackathon. It's a conversational bot that plays NPCs for your DnD campaigns."
    },
    {
      name: "FreebieMapp",
      type: "Mobile",
      description:
        "FreebieMapp was a startup I co-founded with two other peers. The premise of the project was the value of new customers to small businesses. By having someone new try your business you gain a value greater than the value lost by giving away something for free. FreebieMapp provided this link, allowing new customers to find freebies and become potential reoccurring customers."
    },
    {
      name: "Cookie Cover",
      type: "Application",
      description:
        "A script designed to write my cover letters for me when I was applying to jobs in co-op.",
      url: "https://github.com/Technickel-Dev/cookie-cover"
    },
    {
      name: "Pablo the Manipulator",
      type: "Robotics",
      description:
        "Pablo is a Bluetooth electromyography (EMG) controlled, servo actuated robotic arm.",
      url: "https://github.com/Technickel-Dev/pablo-the-manipulator"
    },
    {
      name: "Shuttle",
      type: "Open Source Contributions",
      description:
        "Merged contributions to open source app Shuttle Music Player, a local Android music player.",
      url: "https://shuttlemusicplayer.com/"
    },
    {
      name: "Dogfight",
      type: "Game",
      description:
        "Dogfight is a game I'm making in Unity. The core of the game is based on old dogfight arcade games. All art assets are being hand made in pixel art style and the game is currently in its early stages."
    }
  ];
</script>

<svelte:head>
  <title>Projects - Technickel</title>
</svelte:head>

<div class="flex flex-col">
  <h1>Projects</h1>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr grid-flow-row-dense"
  >
    {#each projects as { name, type, description, imageSrc, url }, index}
      <Card>
        <ProjectCard {imageSrc} title={name} subTitle={type} text={description} {url} {index} />
      </Card>
    {/each}
  </div>
</div>
