<script>
  import Contact from "$lib/components/Contact.svelte";
  import TextLink from "$lib/components/TextLink.svelte";
</script>

<svelte:head>
  <title>iamkneel | about</title>
</svelte:head>

<div class="mb-4">
  <TextLink href="/">Back to index</TextLink>
</div>

<ul class="list-inside list-disc space-y-1.5">
  <li>🇦🇺 Self-Taught Developer, Engineer, Teacher, and Student</li>
  <li>I like making computers do cool stuff!</li>
  <li>
    Studying Computer Science + Electrical Engineering @ <TextLink href="https://www.unsw.edu.au"
      >UNSW</TextLink
    >
  </li>
  <li>
    Teaching programming and robotics @ <TextLink href="https://www.stcatherines.nsw.edu.au/"
      >St Catherine's High School</TextLink
    > and <TextLink href="https://emu-robotics.au">EMU Robotics</TextLink>
  </li>
  <li>Proficient in C, Python, JavaScript, TypeScript, Go, Java, and more&trade;</li>
  <li>
    Daily driving Arch Linux <span class="text-gray-500">(btw)</span>
  </li>
  <li>Always learning more</li>
  <li><TextLink href="/resume.pdf">Here's my resume</TextLink></li>
</ul>

<Contact />
