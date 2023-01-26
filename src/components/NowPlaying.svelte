<script lang="ts">
  import type { ClientNowPlaying } from "$lib/spotify/types";

  export let data: ClientNowPlaying;
</script>

<div class="flex gap-2 items-center text-neutral-300">
  <i class="fa-brands fa-spotify text-lg" />
  {#if data.isPlaying}
    <a href={data.url} class="interactable"
      >currently listening to {data.title} by {data.artists?.join(", ")}</a
    >
  {:else}
    nothing playing right now
  {/if}
</div>
