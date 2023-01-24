import { cubicOut } from "svelte/easing";
import type { TransitionConfig } from "svelte/transition";

export const slideFromLeft = (
  node: Element,
  { delay = 0, duration = 400, easing = cubicOut } = {}
): TransitionConfig => {
  const style = getComputedStyle(node);
  const width = parseFloat(style.width);

  return {
    delay,
    duration,
    easing,
    css: (t) =>
      "overflow: hidden;" + `white-space: nowrap;` + `width: ${t * width}px;`,
  };
};
