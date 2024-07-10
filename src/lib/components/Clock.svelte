<script lang="ts">
  import { onMount } from "svelte";

  const formatter = Intl.DateTimeFormat([], {
    timeZone: "Australia/Sydney",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  let time = new Date();
  $: formatted = formatter.format(time);

  onMount(() => {
    const interval = setInterval(() => (time = new Date()));
    return () => clearInterval(interval);
  });
</script>

<p class="text-gray-400 italic">{formatted} AEST</p>
