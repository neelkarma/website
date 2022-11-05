<script lang="ts">
  import { bounce } from "$lib/bounce";

  let content = "discord";

  const handleClick = async () => {
    await navigator.clipboard.writeText("iamkneel#2359");
    content = "tag copied";
    setTimeout(() => (content = "discord"), 1000);
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<h2 role="button" use:bounce on:click={handleClick}>{content}</h2>

<style>
  h2 {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
