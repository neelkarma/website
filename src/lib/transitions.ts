import { cubicOut } from "svelte/easing";
import { fly, type TransitionConfig } from "svelte/transition";

export const slideFromLeft = (
  node: Element,
  { delay = 0, duration = 400, easing = cubicOut } = {}
): TransitionConfig => {
  const width = parseFloat(getComputedStyle(node).width);

  return {
    delay,
    duration,
    easing,
    css: (t) =>
      "overflow: hidden;" + "white-space: nowrap;" + `width: ${t * width}px;`,
  };
};

export const enter = (
  node: Element,
  { stagger = 0 } = {}
): TransitionConfig => {
  return fly(node, {
    y: 30,
    delay: stagger * 150,
    duration: 800,
    easing: cubicOut,
  });
};
