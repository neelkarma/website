<script lang="ts">
  let showDiscordCopiedTimeout = $state<number | null>(null);
  function handleCopyDiscord() {
    navigator.clipboard.writeText("iamkneel");
    if (showDiscordCopiedTimeout) clearTimeout(showDiscordCopiedTimeout);
    showDiscordCopiedTimeout = setTimeout(() => (showDiscordCopiedTimeout = null), 1000);
  }
</script>

{#snippet link(icon: string, label: string, href: string)}
  <a {href} class="group flex max-w-fit items-center gap-2">
    <iconify-icon {icon}></iconify-icon>
    <span class="underline decoration-zinc-600 underline-offset-4 group-hover:decoration-zinc-200"
      >{label}</span
    >
  </a>
{/snippet}

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
      {@render link("fa7-brands:github", "neelkarma", "https://github.com/neelkarma")}
    </li>
    <li>
      {@render link(
        "fa7-brands:linkedin",
        "Neel Sharma",
        "https://www.linkedin.com/in/neel-sharma-233645257/",
      )}
    </li>
    <li>
      {@render link("fa7-brands:codepen", "iamkneel", "https://codepen.io/iamkneel")}
    </li>
  </ul>
</div>
