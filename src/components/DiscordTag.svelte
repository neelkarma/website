<script lang="ts">
  import { slideFromLeft } from "$lib/slideFromLeft";

  let showCopiedMsg = false;

  const handleClick = async () => {
    await navigator.clipboard.writeText("iamkneel#2359");
    showCopiedMsg = true;
    setTimeout(() => (showCopiedMsg = false), 1000);
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex gap-1 items-center">
  <i
    role="button"
    class="fa-brands fa-discord interactable"
    on:click={handleClick}
  />
  {#if showCopiedMsg}
    <p transition:slideFromLeft class="text-lg text-neutral-300">tag copied!</p>
  {/if}
</div>
