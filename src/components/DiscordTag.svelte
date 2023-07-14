<script lang="ts">
  import { slideFromLeft } from "$lib/transitions";

  let showCopiedMsg = false;

  const handleClick = async () => {
    await navigator.clipboard.writeText("iamkneel");
    showCopiedMsg = true;
    setTimeout(() => (showCopiedMsg = false), 1000);
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex gap-1 items-center">
  <i
    role="button"
    class="fa-brands fa-discord interactive"
    on:click={handleClick}
  />
  {#if showCopiedMsg}
    <p transition:slideFromLeft class="text-sm text-neutral-300">
      username copied!
    </p>
  {/if}
</div>
