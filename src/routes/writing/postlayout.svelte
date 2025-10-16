<script lang="ts">
  import type { Snippet } from "svelte";
  import { DATE_FORMAT } from ".";
  import TextLink from "$lib/components/TextLink.svelte";

  type Props = {
    title: string;
    date: string;
    children?: Snippet;
  };

  let { title, date: dateString, children }: Props = $props();

  let date = $derived(new Date(dateString));
</script>

<div class="mb-4">
  <TextLink href="/writing">Back to writing</TextLink>
</div>

<div class="space-y-4">
  <h1 class="font-header text-2xl font-bold">{title}</h1>
  <h3 class="text-zinc-400">{DATE_FORMAT.format(date)}</h3>

  <article
    class="prose prose-zinc prose-invert prose-headings:font-header prose-headings:text-zinc-200 prose-a:text-zinc-300 prose-a:decoration-zinc-600 prose-a:underline-offset-4 prose-a:hover:decoration-zinc-200"
  >
    {@render children?.()}
  </article>
</div>
