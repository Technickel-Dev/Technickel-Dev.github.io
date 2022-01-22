<script>
  import Card from "$lib/card.svelte";
  import MutedText from "$lib/muted_text.svelte";
  import ShieldBadgeButton from "$lib/shield_badge_button.svelte";
  import SocialMediaBadges from "../../lib/social_media_badges.svelte";
</script>

<div class="flex-1 flex flex-col">
  <h1>Contact</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
    <Card>
      <h2>Social Media</h2>
      <MutedText
        text="My social media is the best place to ask random questions or even just say hi!"
      />
      <hr />
      <SocialMediaBadges />
    </Card>
    <Card>
      <h2>Other Contact</h2>
      <MutedText text="Here are other ways to get in touch or make business enquiries!" />
      <hr />
      <div class="flex flex-col gap-4 items-center">
        <ShieldBadgeButton
          url="mailto:contact@technickel.dev"
          badge="contact@technickel.dev-D14836"
          logo="gmail"
          alt="Email Badge for Technickel Contact"
        />
        <ShieldBadgeButton
          url="mailto:business@technickel.dev"
          badge="business@technickel.dev-D14836"
          logo="gmail"
          alt="Email Badge for Technickel business"
        />
      </div>
    </Card>
  </div>
</div>
