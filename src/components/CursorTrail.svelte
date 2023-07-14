<script lang="ts">
  import { browser } from "$app/environment";
  import { cubicOut } from "svelte/easing";
  import { tweened } from "svelte/motion";

  let coords = tweened(
    { x: 0, y: 0 },
    {
      duration: 600,
      easing: cubicOut,
    }
  );

  let dotCoords = tweened(
    { x: 50, y: 50 },
    { duration: 100, easing: cubicOut }
  );

  let size = tweened(100, {
    duration: 300,
    easing: cubicOut,
  });

  let invert = tweened(0, {
    duration: 300,
    easing: cubicOut,
  });

  $: if (browser) {
    document.body.style.backgroundPosition = `${$coords.x * -0.1}px ${
      $coords.y * -0.1
    }px, ${$coords.x * -0.1 + 25}px ${$coords.y * -0.1 + 25}px`;
  }

  const handleMouseMove = (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest(".interactive") !== null) {
      invert.set(100);
      size.set(130);
    } else {
      invert.set(0);
      size.set(100);
    }
    coords.set({
      x: e.clientX,
      y: e.clientY,
    });
    dotCoords.set({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseDown = (e: MouseEvent) => {
    size.set(70);
  };

  const handleMouseUp = (e: MouseEvent) => {
    size.set(100);
  };
</script>

<svelte:window
  on:mousemove={handleMouseMove}
  on:mousedown={handleMouseDown}
  on:mouseup={handleMouseUp}
/>

<div
  class="circle"
  style:left={`${$coords.x}px`}
  style:top={`${$coords.y}px`}
  style:width={`${$size}px`}
  style:height={`${$size}px`}
  style:backdrop-filter={`invert(${$invert}%)`}
/>

<div
  class="dot"
  style:left={`${$dotCoords.x}px`}
  style:top={`${$dotCoords.y}px`}
/>

<style>
  .circle {
    position: absolute;
    transform: translate(-50%, -50%);
    border-radius: 50% 50%;
    border: 2px solid white;
    pointer-events: none;
    z-index: 10001;
  }

  .dot {
    position: absolute;
    width: 10px;
    height: 10px;
    transform: translate(-50%, -50%);
    border-radius: 50% 50%;
    background-color: white;
    pointer-events: none;
    z-index: 10000;
  }
</style>
