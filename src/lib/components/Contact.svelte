<script lang="ts">
  let showDiscordCopiedTimeout = $state<number | null>(null);
  function handleCopyDiscord() {
    if (showDiscordCopiedTimeout) clearTimeout(showDiscordCopiedTimeout);
    showDiscordCopiedTimeout = setTimeout(() => (showDiscordCopiedTimeout = null), 1000);
  }
</script>

<div class="space-y-4">
  <h2 class="font-header text-2xl font-bold">where to reach me</h2>

  <ul class="space-y-1">
    <li>
      <button onclick={handleCopyDiscord} class="group flex cursor-pointer items-center gap-2">
        <iconify-icon icon="fa7-brands:discord"></iconify-icon>
        <span
          class="underline decoration-zinc-600 underline-offset-4 group-hover:decoration-zinc-200"
        >
          {#if showDiscordCopiedTimeout}
            copied!
          {:else}
            iamkneel
          {/if}
        </span>
      </button>
    </li>
    <li>
      <a href="https://github.com/neelkarma" class="group flex max-w-fit items-center gap-2">
        <iconify-icon icon="fa7-brands:github"></iconify-icon>
        <span
          class="underline decoration-zinc-600 underline-offset-4 group-hover:decoration-zinc-200"
          >neelkarma</span
        >
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/neel-sharma-233645257/"
        class="group flex max-w-fit items-center gap-2"
      >
        <iconify-icon icon="fa7-brands:linkedin"></iconify-icon>
        <span
          class="underline decoration-zinc-600 underline-offset-4 group-hover:decoration-zinc-200"
          >Neel Sharma</span
        >
      </a>
    </li>
    <li>
      <a href="https://codepen.io/iamkneel" class="group flex max-w-fit items-center gap-2">
        <iconify-icon icon="fa7-brands:codepen"></iconify-icon>
        <span
          class="underline decoration-zinc-600 underline-offset-4 group-hover:decoration-zinc-200"
          >iamkneel</span
        >
      </a>
    </li>
  </ul>
</div>
