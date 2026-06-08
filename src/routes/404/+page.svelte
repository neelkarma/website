<script lang="ts">
  const messages = [
    "It's not you, it's the URL.",
    "You must be lost. Want a map? Too bad, I don't have one.",
    "The bits you're looking for are in another castle.",
    "This page went on vacation and never came back.",
    "Dead end. Try turning back before the zombies get you.",
    "A wild 404 appeared! It's super effective.",
    "You've reached the edge of the internet. Beyond here there be dragons.",
    "Page not found. I'd blame the intern, but I am the intern.",
    "Plot twist: the page was the friends we made along the way.",
    "The server said no. It didn't even say it nicely.",
  ];
  let message = $state("");
  $effect(() => {
    message = messages[Math.floor(Math.random() * messages.length)];
  });
</script>

<svelte:head>
  <title>Neel Sharma | 404</title>
</svelte:head>

<div class="space-y-4">
  <h1 class="text-2xl font-bold">Error 404</h1>
  <p>{message}</p>
  <a href="/" class="underline decoration-zinc-600 underline-offset-4 hover:decoration-zinc-200"
    >Go home</a
  >
</div>
