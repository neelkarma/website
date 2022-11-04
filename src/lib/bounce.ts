import type { Action } from "svelte/action";

const COLORS = [
  "#be00ff",
  "#00feff",
  "#ff8300",
  "#fffa01",
  "#ff2600",
  "#ff008b",
];

export const bounce: Action<HTMLElement> = (node) => {
  const width = node.clientWidth;
  const height = node.clientHeight;
  const screenHeight = document.body.clientHeight;
  const screenWidth = document.body.clientWidth;

  const vx = Math.random() * 2;
  const vy = Math.random() * 2;
  let x = Math.floor(Math.random() * (screenWidth - width - vx));
  let y = Math.floor(Math.random() * (screenHeight - height - vy));
  let dx = Math.random() < 0.5 ? 1 : -1;
  let dy = Math.random() < 0.5 ? 1 : -1;
  let prevColorIndex = Math.floor(Math.random() * COLORS.length);

  node.style.left = x + "px";
  node.style.top = y + "px";
  node.style.color = COLORS[prevColorIndex];

  const getRandomColor = (): string => {
    const choices = [...Array(COLORS.length).keys()];
    choices.splice(prevColorIndex, 1);
    const chosen = choices[Math.floor(Math.random() * choices.length)];
    prevColorIndex = chosen;
    return COLORS[chosen];
  };

  const animate = () => {
    const width = node.clientWidth;
    const height = node.clientHeight;
    const screenHeight = document.body.clientHeight;
    const screenWidth = document.body.clientWidth;

    if (y + height + dy * vy >= screenHeight || y + dy * vy < 0) {
      dy *= -1;
      node.style.color = getRandomColor();
    }
    if (x + width + dx * vx >= screenWidth || x + dx * vx < 0) {
      dx *= -1;
      node.style.color = getRandomColor();
    }

    x += dx * vx;
    y += dy * vy;

    node.style.left = x + "px";
    node.style.top = y + "px";

    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);

  return {};
};
