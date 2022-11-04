<script lang="ts">
  import { bounce } from "$lib/bounce";
  import type { ClientNowPlaying } from "src/routes/api/spotify/types";

  let promise = fetch("/api/spotify").then(
    (res) => res.json() as Promise<ClientNowPlaying>
  );
</script>

{#await promise then res}
  {#if res.isPlaying}
    <h3>
      <a href={res.url} use:bounce
        >currently listening to {res.title?.toLowerCase()} by {res.artist?.toLowerCase()}</a
      >
    </h3>
  {:else}
    <h3 use:bounce>currently listening to nothing</h3>
  {/if}
{/await}
