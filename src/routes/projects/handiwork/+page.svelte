<script lang="ts">
  import TextLink from "#lib/components/TextLink.svelte";
  import handiworkImage from "./handiwork.jpg";
  import ballVideo from "./ball.mp4";
  import drawVideo from "./draw.mp4";
  import musicVideo from "./music.mp4";
  import rectVideo from "./rect.mp4";
  import scrollVideo from "./scroll.mp4";
  import sliderVideo from "./slider.mp4";

  // silent clips autoplay on loop; clips with audio get controls
  const silentDemos = [
    { src: rectVideo, label: "Pinching a rectangle into existence" },
    { src: drawVideo, label: "Drawing in the air" },
    { src: ballVideo, label: "Throwing a ball around" },
    { src: scrollVideo, label: "Scrolling with hand gestures" },
  ];

  const audioDemos = [
    { src: musicVideo, label: "Making music with hand gestures" },
    { src: sliderVideo, label: "Controlling a slider with hand gestures" },
  ];
</script>

<svelte:head>
  <title>Neel Sharma - Handiwork</title>
</svelte:head>

<div class="mb-4">
  <TextLink href="/projects">Back to projects</TextLink>
</div>

<div class="space-y-4">
  <img
    class="rounded-lg"
    alt="Hands pinching a rectangle into existence"
    src={handiworkImage}
  />

  <div class="flex flex-col gap-1.5">
    <h1 class="text-2xl font-bold">Handiwork</h1>

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

  <ul class="list-inside list-disc space-y-1.5 mb-5">
    <li>Built in Python with OpenCV and Google Mediapipe Solutions</li>
    <li>Over 10 different demos!</li>
  </ul>

  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    {#each silentDemos as { src, label } (src)}
      <video
        class="w-full rounded-lg"
        {src}
        aria-label={label}
        autoplay
        muted
        loop
        playsinline
      ></video>
    {/each}
  </div>

  {#each audioDemos as { src, label } (src)}
    <video
      class="w-full rounded-lg"
      {src}
      aria-label={label}
      controls
      playsinline
      preload="metadata"
    ></video>
  {/each}
</div>
