<script lang="ts">
  import type { Component } from "svelte";
  import Fa7BrandsCodepen from "~icons/fa7-brands/codepen";
  import Fa7BrandsDiscord from "~icons/fa7-brands/discord";
  import Fa7BrandsGithub from "~icons/fa7-brands/github";
  import Fa7BrandsLinkedin from "~icons/fa7-brands/linkedin";

  let showDiscordCopiedTimeout = $state<number | null>(null);
  function handleCopyDiscord() {
    navigator.clipboard.writeText("iamkneel");
    if (showDiscordCopiedTimeout) clearTimeout(showDiscordCopiedTimeout);
    showDiscordCopiedTimeout = setTimeout(() => (showDiscordCopiedTimeout = null), 1000);
  }
</script>

{#snippet link(Icon: Component, label: string, href: string)}
  <a {href} class="group flex max-w-fit items-center gap-2">
    <Icon />
    <span class="underline decoration-zinc-600 underline-offset-4 group-hover:decoration-zinc-200"
      >{label}</span
    >
  </a>
{/snippet}

<div class="space-y-4">
  <h2 class="text-2xl font-bold">where to reach me</h2>

  <ul class="space-y-1">
    <li>
      <button onclick={handleCopyDiscord} class="group flex cursor-pointer items-center gap-2">
        <Fa7BrandsDiscord />
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
      {@render link(Fa7BrandsGithub, "neelkarma", "https://github.com/neelkarma")}
    </li>
    <li>
      {@render link(
        Fa7BrandsLinkedin,
        "Neel Sharma",
        "https://www.linkedin.com/in/neel-sharma-233645257/",
      )}
    </li>
    <li>
      {@render link(Fa7BrandsCodepen, "iamkneel", "https://codepen.io/iamkneel")}
    </li>
  </ul>
</div>
