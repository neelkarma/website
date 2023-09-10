<script lang="ts">
  import { readable } from "svelte/store";

  const formatter = Intl.DateTimeFormat([], {
    timeZone: "Australia/Sydney",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  let time = readable(formatter.format(new Date()), (set) => {
    const update = () => set(formatter.format(new Date()).toUpperCase());
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  });
</script>

<p class="text-gray-400 italic">{$time} AEST</p>
