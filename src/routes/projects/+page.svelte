<script>
  import TextLink from "$lib/components/TextLink.svelte";
  import ProjectCard from "./ProjectCard.svelte";
  import emuRoboticsWebsiteImage from "./emu-robotics-website/emu-robotics-website.png";
  import handiworkImage from "./handiwork/handiwork.jpg";
</script>

<svelte:head>
  <title>iamkneel | projects</title>
</svelte:head>

<div class="mb-4">
  <TextLink href="/">Back to index</TextLink>
</div>

<div class="space-y-4">
  <h2 class="font-header text-2xl font-bold">projects</h2>
  <p>
    This list is not extensive - you might find some more interesting things on my <TextLink
      href="https://github.com/neelkarma">GitHub</TextLink
    >
  </p>
  <div class="grid grid-cols-2 gap-3">
    <ProjectCard href="/projects/emu-robotics-website" image={emuRoboticsWebsiteImage}>
      EMU Robotics Website
    </ProjectCard>
    <ProjectCard href="/projects/handiwork" image={handiworkImage}>Handiwork</ProjectCard>
  </div>
  <p>More to be added in the near future&trade;...</p>
</div>
