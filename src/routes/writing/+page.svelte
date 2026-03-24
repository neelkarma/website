<script>
  import TextLink from "$lib/components/TextLink.svelte";
  import { DATE_FORMAT } from ".";

  let { data } = $props();
</script>

<svelte:head>
  <title>Neel Sharma | Writing</title>
</svelte:head>

<div class="mb-4">
  <TextLink href="/">Back to index</TextLink>
</div>

<div class="space-y-4">
  <h1 class="text-2xl font-bold">writing</h1>
  <p>This blog is also available as an <TextLink href="/writing/rss.xml">RSS Feed</TextLink></p>
</div>

<div class="flex flex-col gap-3">
  {#each data.posts as { date, slug, title }}
    <a href="/writing/{slug}" class="group space-y-1 text-zinc-400">
      <h2>
        <span
          class="text-zinc-200 underline decoration-zinc-600 underline-offset-4 group-hover:decoration-zinc-200"
          >{title}</span
        >
        - {DATE_FORMAT.format(date)}
      </h2>
    </a>
  {/each}
</div>
