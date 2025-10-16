<script lang="ts">
  import type { HTMLAnchorAttributes } from "svelte/elements";

  interface Props extends HTMLAnchorAttributes {
    image: string;
  }

  let props: Props = $props();

  let { children, image } = props;
</script>

<a
  {...props}
  class="group flex h-48 flex-col justify-end rounded-lg bg-cover bg-center transition-transform duration-200 ease-out hover:scale-[102%] {props.class}"
  style="background-image: url({image})"
>
  <p
    class="m-2 w-fit rounded-lg bg-zinc-800/80 p-2 font-bold backdrop-blur-sm group-hover:bg-zinc-800"
  >
    {@render children?.()}
  </p>
</a>
