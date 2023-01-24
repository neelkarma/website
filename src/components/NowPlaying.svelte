<script lang="ts">
  import { onMount } from "svelte";
  import type { ClientNowPlaying } from "../routes/api/spotify/types";

  let promise: Promise<ClientNowPlaying>;

  onMount(() => {
    promise = fetch("/api/spotify").then(
      (res) => res.json() as Promise<ClientNowPlaying>
    );
  });
</script>

<div class="flex gap-2 items-center text-neutral-300">
  <i class="fa-brands fa-spotify text-lg" />
  {#if promise}
    {#await promise}
      loading...
    {:then res}
      {#if res.isPlaying}
        <a href={res.url} class="interactable"
          >currently listening to {res.title} by {res.artist}</a
        >
      {:else}
        nothing playing right now
      {/if}
    {/await}
  {:else}
    loading...
  {/if}
</div>
