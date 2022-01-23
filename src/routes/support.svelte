<script>
  import Card from "$lib/card.svelte";
  import MutedText from "$lib/muted_text.svelte";
  import ShieldBadgeButton from "$lib/shield_badge_button.svelte";
  import SocialMediaBadges from "$lib/social_media_badges.svelte";
</script>

<svelte:head>
  <title>Support - Technickel</title>
</svelte:head>

<div class="flex-1 flex flex-col">
  <h1>Support</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
    <Card>
      <h2>Follow</h2>
      <MutedText text="Something as simple as a follow really helps me out!" />
      <hr />
      <SocialMediaBadges />
    </Card>
    <Card>
      <h2>Donate</h2>
      <MutedText text="Funding my work helps me afford wacky projects!" />
      <hr />
      <div class="grid flex-cols-1 gap-4 place-items-center">
        <ShieldBadgeButton
          url="https://www.buymeacoffee.com/pIvCSjDLo"
          badge="Buy_Me_A_Coffee-FFDD00"
          logo="buy-me-a-coffee"
          logoColor="black"
          alt="BuyMeACoffee Badge"
        />
        <ShieldBadgeButton
          url="https://whatisbat.com/2018/12/19/how-to-tip-a-website-using-brave-bat/"
          badge="BAT-FB542B"
          logo="Brave"
          alt="Brave Badge"
        />
      </div>
    </Card>
    <div class="md:col-span-2">
      <Card>
        <h2>Sign Up</h2>
        <MutedText
          text="Signing up using any of my referral links is another way you could support me!"
        />
        <hr class="my-4" />
        <p>
          Publish0x is a platform where you can earn crypto for reading AND publishing articles.
          Sign up using my
          <a href="https://www.publish0x.com?a=l9avxW5dG1" class="text-sky-600 hover:text-sky-700">
            Publish0x referral link
          </a>
        </p>
      </Card>
    </div>
  </div>
</div>
