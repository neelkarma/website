<script lang="ts">
  import { browser } from "$app/environment";
  import { onDestroy, onMount } from "svelte";
  import { cubicOut } from "svelte/easing";
  import { tweened } from "svelte/motion";

  let circleCoords = tweened(
    { x: 0, y: 0 },
    {
      duration: 600,
      easing: cubicOut,
    }
  );

  let circleSize = tweened(0, {
    duration: 600,
    easing: cubicOut,
  });

  let circleInvert = tweened(0, {
    duration: 600,
    easing: cubicOut,
  });

  let dotCoords = tweened(
    { x: 50, y: 50 },
    { duration: 100, easing: cubicOut }
  );

  $: if (browser) {
    document.body.style.backgroundPosition = `${$circleCoords.x * -0.1}px ${
      $circleCoords.y * -0.1
    }px, ${$circleCoords.x * -0.1 + 25}px ${$circleCoords.y * -0.1 + 25}px`;
  }

  const handleMouseMove = (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest(".interactable") !== null) {
      circleInvert.set(100);
    } else {
      circleInvert.set(0);
    }
    circleCoords.set({
      x: e.clientX,
      y: e.clientY,
    });
    dotCoords.set({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseDown = (e: MouseEvent) => {
    circleSize.set(70);
  };

  const handleMouseUp = (e: MouseEvent) => {
    circleSize.set(100);
  };

  onMount(() => {
    circleSize.set(100);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
  });
  onDestroy(() => {
    if (browser) {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    }
  });
</script>

<div
  class="circle"
  style:left={`${$circleCoords.x}px`}
  style:top={`${$circleCoords.y}px`}
  style:width={`${$circleSize}px`}
  style:height={`${$circleSize}px`}
  style:backdrop-filter={`invert(${$circleInvert}%)`}
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
