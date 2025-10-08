<script lang="ts">
  import type { HTMLAnchorAttributes } from "svelte/elements";

  interface Props extends HTMLAnchorAttributes {}

  let props: Props = $props();

  let { children } = props;
</script>

<a
  {...props}
  class="underline decoration-zinc-600 underline-offset-4 hover:decoration-zinc-200 {props.class}"
  >{@render children?.()}</a
>
