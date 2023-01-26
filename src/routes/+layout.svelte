<script lang="ts">
  import "@fontsource/inter";
  import "@fontsource/jetbrains-mono";
  import "@fortawesome/fontawesome-free/css/brands.css";
  import "@fortawesome/fontawesome-free/css/fontawesome.css";
  import Container from "../components/Container.svelte";
  import CursorTrail from "../components/CursorTrail.svelte";
  import "../styles.css";
</script>

<CursorTrail />
<Container>
  <slot />
</Container>
