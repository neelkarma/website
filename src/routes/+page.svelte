<script>
  import Contact from "$lib/components/Contact.svelte";
  import TextLink from "$lib/components/TextLink.svelte";
  import emuRoboticsWebsiteImage from "./projects/emu-robotics-website/emu-robotics-website.png";
  import handiworkImage from "./projects/handiwork/handiwork.jpg";
  import ProjectCard from "./projects/ProjectCard.svelte";
  import { DATE_FORMAT } from "./writing";

  let { data } = $props();
  let { post } = data;
</script>

<svelte:head>
  <title>iamkneel</title>
</svelte:head>

<p class="text-lg">🇦🇺 Self-Taught Developer, Engineer, Teacher, and Student</p>

<div class="space-y-4">
  <h2 class="font-header text-2xl font-bold">projects</h2>
  <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
    <ProjectCard href="/projects/emu-robotics-website" image={emuRoboticsWebsiteImage}>
      EMU Robotics Website
    </ProjectCard>
    <ProjectCard href="/projects/handiwork" image={handiworkImage}>Handiwork</ProjectCard>
  </div>
  <TextLink href="/projects">See more projects</TextLink>
</div>

<div class="space-y-4">
  <h2 class="font-header text-2xl font-bold">latest writing</h2>

  <!-- TODO: switch to more compact list style? date and title on same line, no description -->
  <div class="mb-4">
    <a href="/writing/{post.slug}" class="group space-y-1">
      <h2
        class="font-header text-xl underline decoration-zinc-600 underline-offset-4 group-hover:decoration-zinc-200"
      >
        {post.title}
      </h2>
      <p>{DATE_FORMAT.format(post.date)} - {post.description}</p>
    </a>
  </div>

  <TextLink href="/writing">See more writing</TextLink>
</div>

<Contact />
