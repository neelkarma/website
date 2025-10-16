<script lang="ts">
  import TextLink from "$lib/components/TextLink.svelte";
  import handiworkImage from "./handiwork.jpg";
</script>

<div class="mb-4">
  <TextLink href="/projects">Back to projects</TextLink>
</div>

<div class="space-y-4">
  <img class="rounded-lg" alt="Hands pinching a rectangle into existence" src={handiworkImage} />

  <div class="flex flex-col gap-1.5">
    <h1 class="font-header text-2xl font-bold">Handiwork</h1>

    <a
      href="https://github.com/neelkarma/handiwork"
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

  <p>A collection of hand detection UX experiments.</p>

  <!-- TODO: add some videos or something -->

  <ul class="list-inside list-disc space-y-1.5">
    <li>Built in Python with OpenCV and Google Mediapipe Solutions</li>
    <li>Over 10 different demos!</li>
  </ul>
</div>
