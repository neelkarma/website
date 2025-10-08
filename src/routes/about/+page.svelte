<script>
  import Contact from "$lib/components/Contact.svelte";
  import TextLink from "$lib/components/TextLink.svelte";
</script>

<svelte:head>
  <title>iamkneel | about</title>
</svelte:head>

<ul class="list-inside list-disc space-y-1.5">
  <li>19, Self-Taught Developer, Engineer, Teacher, and Student</li>
  <li>I like making computers do cool stuff!</li>
  <li>Studying Computer Science + Electrical Engineering @ UNSW</li>
  <li>Teaching programming and robotics @ St Catherine's High School and EMU Robotics</li>
  <li>Proficient in C, Python, JavaScript, TypeScript, Go, Java, and more&trade;</li>
  <li>
    Daily driving Arch Linux <span class="text-gray-500">(btw)</span>
  </li>
  <li>Always learning more</li>
  <li><TextLink href="/resume.pdf">Here's my resume</TextLink></li>
</ul>

<Contact />
