<script lang="ts">
  import { enter } from "$lib/transitions";
  import { onMount } from "svelte";
  import Clock from "../components/Clock.svelte";
  import DiscordTag from "../components/DiscordTag.svelte";
  import GlitchHeading from "../components/GlitchHeading.svelte";
  import NowPlaying from "../components/NowPlaying.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  let animate = false;
  onMount(() => (animate = true));
</script>

<svelte:head>
  <title>iamkneel</title>
</svelte:head>

{#if animate}
  <div in:enter>
    <Clock />
  </div>
  <div in:enter={{ stagger: 1 }}>
    <GlitchHeading content="iamkneel" />
  </div>
  <p in:enter={{ stagger: 2 }} class="text-xl font-bold">
    i push <s>big red</s> buttons and stuff happens.
  </p>
  <div in:enter={{ stagger: 3 }}>
    <NowPlaying data={data.spotify} />
  </div>
  <div in:enter={{ stagger: 4 }} class="flex gap-3 text-2xl items-center">
    <a class="interactive" href="https://github.com/neelkarma"
      ><i class="fa-brands fa-github" /></a
    >
    <a class="interactive" href="https://codepen.io/iamkneel"
      ><i class="fa-brands fa-codepen" /></a
    >
    <DiscordTag />
  </div>
{/if}
