import { quartOut } from "svelte/easing";
import type { TransitionConfig } from "svelte/transition";

export const slideFromLeft = (
  node: Element,
  { delay = 0, duration = 400, easing = quartOut } = {}
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

export const enter = (_: Element, { stagger = 0 } = {}): TransitionConfig => {
  const y = 30;

  return {
    delay: stagger * 200,
    duration: 1200,
    easing: quartOut,
    css: (t, u) => `transform: translateY(${u * y}px);` + `opacity: ${t}`,
  };
};
