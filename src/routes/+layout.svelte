<script lang="ts">
  import "@fontsource/jetbrains-mono";
  import "inter-ui/inter.css";
  import "@fortawesome/fontawesome-free/css/brands.css";
  import "@fortawesome/fontawesome-free/css/fontawesome.css";
  import Container from "$lib/components/Container.svelte";
  import CursorTrail from "$lib/components/CursorTrail.svelte";
  import "../styles.css";
</script>

<CursorTrail />
<Container>
  <slot />
</Container>
