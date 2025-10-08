<script lang="ts">
  import "../app.css";
  import "@fontsource/rubik";
  import "@fontsource/fira-mono/500";
  import "iconify-icon";

  let { children } = $props();
</script>

<svelte:head>
  <title>iamkneel</title>
</svelte:head>

<div
  class="mx-auto space-y-8 bg-zinc-800 p-4 md:mt-12 md:max-w-2/3 md:rounded-lg md:p-8 lg:max-w-1/2"
>
  <div class="flex flex-col gap-1.5 md:flex-row md:items-center">
    <a
      href="/"
      class="max-w-fit bg-blue-600 px-2 py-1 font-header text-2xl font-bold text-white hover:bg-blue-800"
      >iamkneel</a
    >
    <span class="md:grow"></span>
    <div class="flex gap-3 md:flex-row md:gap-4">
      <a
        href="/about"
        class="underline decoration-zinc-600 underline-offset-4 hover:decoration-zinc-200">/about</a
      >
      <a
        href="/projects"
        class="underline decoration-zinc-600 underline-offset-4 hover:decoration-zinc-200"
        >/projects</a
      >
      <a
        href="/writing"
        class="underline decoration-zinc-600 underline-offset-4 hover:decoration-zinc-200"
        >/writing</a
      >
    </div>
  </div>

  {@render children?.()}
</div>
