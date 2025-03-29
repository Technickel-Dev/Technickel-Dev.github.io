<script lang="ts">
  import Card from "$lib/card.svelte";
  import BlogBackButton from "./blog_back_button.svelte";

  interface Props {
    data: any;
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="flex flex-col justify-center">
  <div class="flex justify-center mb-4">
    <BlogBackButton />
  </div>
  <Card classes="px-4 md:px-16 py-8 break-all md:break-normal">
    <article class="prose prose-invert">
      <data.content />
    </article>
  </Card>
  <div class="flex justify-center mt-4">
    <BlogBackButton />
  </div>
</div>
