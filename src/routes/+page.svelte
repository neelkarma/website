<script>
  import Construction from "$lib/components/Construction.svelte";
  import Contact from "$lib/components/Contact.svelte";
</script>

<svelte:head>
  <title>iamkneel</title>
</svelte:head>

<p class="text-lg">19 🇦🇺, Self-Taught Developer, Engineer, Teacher, and Student</p>

<div class="space-y-4">
  <h2 class="font-header text-2xl font-bold">projects</h2>
  <div class="grid grid-cols-2">
    <div class="flex flex-col rounded-lg">
      <p class="font-bold">EMU Robotics Website</p>
      <div class="flex gap-2">
        <a href="https://emu-robotics.au" aria-label="EMU Robotics Website Link">
          <iconify-icon icon="lucide:external-link"></iconify-icon>
        </a>
        <a
          href="https://github.com/EMU4729/emu4729-website"
          aria-label="EMU Robotics Website Repository"
        >
          <iconify-icon icon="lucide:code-xml"></iconify-icon>
        </a>
      </div>
    </div>
  </div>
</div>

<div class="space-y-4">
  <h2 class="font-header text-2xl font-bold">latest writing</h2>
  <Construction />
</div>

<Contact />
