<script>
  import Card from "$lib/card.svelte";
  import ShieldBadgeButton from "$lib/shield_badge_button.svelte";
  import SocialMediaBadges from "./_social_media_badges.svelte";
</script>

<h1>Contact</h1>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
  <Card>
    <h2>Social Media</h2>
    <hr />
    <SocialMediaBadges />
  </Card>
  <Card>
    <h2>Other Contact</h2>
    <hr />
    <div class="flex flex-wrap justify-around align-middle">
      <ShieldBadgeButton
        url="mailto:contact@technickel.dev"
        badge="contact@technickel.dev-D14836"
        logo="gmail"
        alt="Email Badge for Technickel"
      />
    </div>
  </Card>
</div>
