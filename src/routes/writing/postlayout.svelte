<script lang="ts">
  import type { Snippet } from "svelte";
  import { DATE_FORMAT } from ".";

  type Props = {
    title: string;
    date: string;
    children?: Snippet;
  };

  let { title, date: dateString, children }: Props = $props();

  let date = $derived(new Date(dateString));
</script>

<div class="space-y-4">
  <h1 class="font-header text-2xl font-bold">{title}</h1>
  <h3 class="text-zinc-400">{DATE_FORMAT.format(date)}</h3>
</div>

<div class="prose prose-zinc prose-invert prose-headings:font-header prose-headings:text-zinc-200">
  {@render children?.()}
</div>
