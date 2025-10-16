<script>
  import TextLink from "$lib/components/TextLink.svelte";
  import { DATE_FORMAT } from ".";

  let { data } = $props();
</script>

<svelte:head>
  <title>iamkneel | writing</title>
</svelte:head>

<div class="space-y-4">
  <h1 class="font-header text-2xl font-bold">writing</h1>
  <p>This blog is also available as an <TextLink href="/writing/rss.xml">RSS Feed</TextLink></p>
</div>

{#each data.posts as { date, slug, title, description }}
  <a href="/writing/{slug}" class="group space-y-1">
    <h2
      class="font-header text-xl underline decoration-zinc-600 underline-offset-4 group-hover:decoration-zinc-200"
    >
      {title}
    </h2>
    <p>{DATE_FORMAT.format(date)} - {description}</p>
  </a>
{/each}
