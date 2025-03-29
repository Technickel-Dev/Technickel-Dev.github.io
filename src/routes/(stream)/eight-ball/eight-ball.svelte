<script lang="ts">
  import { randomNumber, sleep } from "$lib/utils";
  import { fade } from "svelte/transition";

  const FADE_DURATION = 3000;
  const FADE_DELAY = 3000;
  const SHAKE_DURATION = 3000;

  const ANSWERS = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];

  let currentAnswer: string | undefined = $state();
  let shake = $state(false);

  const shakeAnimation = async () => {
    shake = true;
    await sleep(SHAKE_DURATION);
    shake = false;
  };

  export const roll = async (): Promise<void> => {
    return new Promise(async (resolve, _) => {
      shakeAnimation();

      let rolledIndex = randomNumber(0, ANSWERS.length - 1);
      currentAnswer = ANSWERS[rolledIndex];

      await sleep(SHAKE_DURATION + FADE_DURATION);

      shakeAnimation();
      currentAnswer = undefined;

      await sleep(SHAKE_DURATION + FADE_DURATION);

      resolve();
    });
  };
</script>

<div class="outer-circle" class:shake>
  <div class="inner-circle">
    {#if currentAnswer == undefined}
      <div
        class="eight"
        in:fade={{ delay: FADE_DELAY, duration: FADE_DURATION }}
        out:fade={{ duration: FADE_DURATION }}
      >
        8
      </div>
    {:else}
      <div
        class="answer"
        in:fade={{ delay: FADE_DELAY, duration: FADE_DURATION }}
        out:fade={{ duration: FADE_DURATION }}
      >
        {currentAnswer}
      </div>
    {/if}
  </div>
</div>

<style>
  .outer-circle {
    height: 400px;
    width: 400px;
    background: radial-gradient(circle at 65% 15%, white 1px, grey 5%, black 60%, grey 100%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inner-circle {
    height: 200px;
    width: 200px;
    background-color: white;
    border-radius: 50%;
    display: grid;
  }

  .eight {
    font-size: 200px;
    width: 100%;
    text-align: center;
    line-height: 200px;
    grid-column: 1/2;
    grid-row: 1/2;
  }

  .answer {
    font-size: 25px;
    text-align: center;
    margin: auto;
    width: 100%;
    grid-column: 1/2;
    grid-row: 1/2;
  }

  .shake {
    animation: vertical-shaking 0.35s 8;
  }

  @keyframes vertical-shaking {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(10px);
    }
    50% {
      transform: translateY(-10px);
    }
    75% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
