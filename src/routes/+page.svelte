<script lang="ts">
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";
  import DiscordTag from "../components/DiscordTag.svelte";
  import GlitchHeading from "../components/GlitchHeading.svelte";
  import NowPlaying from "../components/NowPlaying.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  let animate = false;
  onMount(() => (animate = true));
</script>

<head>
  <title>iamkneel</title>
</head>

{#if animate}
  <div in:slide={{ duration: 800 }}>
    <GlitchHeading content="iamkneel" />
  </div>
  <p in:slide={{ duration: 800, delay: 300 }} class="text-xl font-bold">
    swiss army developer.
  </p>
  <div in:slide={{ duration: 800, delay: 500 }}>
    <NowPlaying data={data.spotify} />
  </div>
  <div
    in:slide={{ duration: 800, delay: 700 }}
    class="flex gap-3 text-2xl items-center"
  >
    <a class="interactable" href="https://github.com/neelkarma"
      ><i class="fa-brands fa-github interactable" /></a
    >
    <DiscordTag />
  </div>
{/if}
