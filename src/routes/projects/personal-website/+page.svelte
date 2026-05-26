<script lang="ts">
  import TextLink from "$lib/components/TextLink.svelte";
  import websiteImage from "./personal-website.png";
</script>

<svelte:head>
  <title>Neel Sharma - Personal Website</title>
</svelte:head>

<div class="mb-4">
  <TextLink href="/projects">Back to projects</TextLink>
</div>

<div class="space-y-4">
  <img class="rounded-lg" alt="Screenshot of Neel Sharma's personal website" src={websiteImage} />

  <div class="flex flex-col gap-1.5">
    <h1 class="text-2xl font-bold">Personal Website</h1>

    <a
      href="https://github.com/neelkarma/website"
      class="group flex max-w-fit items-center gap-1.5"
    >
      <iconify-icon icon="lucide:code-xml"></iconify-icon>
      <span
        class="underline decoration-zinc-600 underline-offset-4 group-hover:decoration-zinc-200"
      >
        Browse Source
      </span>
    </a>
  </div>

  <p>My personal website!</p>

  <ul class="list-inside list-disc space-y-1.5">
    <li>
      Statically built with the <TextLink href="https://svelte.dev/docs/kit/introduction"
        >SvelteKit</TextLink
      > framework and
      <TextLink href="https://typescriptlang.org">TypeScript</TextLink> language
    </li>
    <li>Styled using <TextLink href="https://tailwindcss.com">TailwindCSS</TextLink></li>
    <li>Features a markdown-powered blogging system with automatic RSS feed generation</li>
  </ul>
</div>
