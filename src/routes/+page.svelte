<script lang="ts">
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";
  import Container from "../components/Container.svelte";
  import CursorTrail from "../components/CursorTrail.svelte";
  import DiscordTag from "../components/DiscordTag.svelte";
  import GlitchHeading from "../components/GlitchHeading.svelte";
  import NowPlaying from "../components/NowPlaying.svelte";

  let animate = false;
  onMount(() => (animate = true));
</script>

<head>
  <title>iamkneel</title>
</head>

<CursorTrail />
<Container>
  {#if animate}
    <div in:slide={{ duration: 600 }}>
      <GlitchHeading content="iamkneel" />
    </div>
    <p in:slide={{ duration: 600, delay: 200 }} class="text-xl font-bold">
      swiss army developer.
    </p>
    <div in:slide={{ duration: 600, delay: 400 }}>
      <NowPlaying />
    </div>
    <div
      in:slide={{ duration: 600, delay: 600 }}
      class="flex gap-3 text-2xl items-center"
    >
      <a class="interactable" href="https://github.com/neelkarma"
        ><i class="fa-brands fa-github interactable" /></a
      >
      <DiscordTag />
    </div>
  {/if}
</Container>
