<script lang="ts">
  import type { ClientNowPlaying } from "$lib/spotify/types";

  export let data: ClientNowPlaying;
</script>

<a class="flex gap-2 items-center text-neutral-300 interactive" href={data.url}>
  <i class="fa-brands fa-spotify text-lg" />
  {#if data.isPlaying}
    {data.artists?.join(", ")} - {data.title}
  {:else}
    nothing playing right now
  {/if}
</a>
