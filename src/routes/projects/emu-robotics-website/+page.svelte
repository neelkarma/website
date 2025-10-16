<script lang="ts">
  import TextLink from "$lib/components/TextLink.svelte";
  import emuRoboticsWebsiteImage from "./emu-robotics-website.png";
</script>

<div class="mb-4">
  <TextLink href="/projects">Back to projects</TextLink>
</div>

<div class="space-y-4">
  <img
    class="rounded-lg"
    alt="A screenshot of EMU Robotics' website."
    src={emuRoboticsWebsiteImage}
  />

  <div class="flex flex-col gap-1.5">
    <h1 class="font-header text-2xl font-bold">EMU Robotics Website</h1>

    <div class="flex gap-2">
      <a href="https://emu-robotics.au" class="group flex max-w-fit items-center gap-1.5">
        <iconify-icon icon="lucide:external-link"></iconify-icon>
        <span
          class="underline decoration-zinc-600 underline-offset-4 group-hover:decoration-zinc-200"
        >
          View Deployment
        </span>
      </a>
      <span class="text-zinc-600">&bull;</span>
      <a
        href="https://github.com/emu4729/emu4729-website"
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
  </div>

  <p>The official website for UNSW EMU Robotics.</p>

  <ul class="list-inside list-disc space-y-1.5">
    <li>
      Built with <TextLink href="https://astro.build">Astro</TextLink> and <TextLink
        href="https://tailwindcss.com">Tailwind CSS</TextLink
      >.
    </li>
    <li>Supports user-configurable dark mode.</li>
  </ul>
</div>
