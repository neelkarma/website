<script lang="ts">
  export let content: string;
</script>

<h1 class="glitch font-mono text-5xl">
  <span aria-hidden="true">{content}</span>
  {content}
  <span aria-hidden="true">{content}</span>
</h1>

<style>
  /* Courtesy of https://codepen.io/cbanlawi/pen/xxRBeMY */

  :root {
    --glitch-1: #00fffc;
    --glitch-2: #fc00ff;
    --glitch-3: #fffc00;
  }

  .glitch {
    position: relative;
    text-shadow: 0.05em 0 0 var(--glitch-1), -0.03em -0.04em 0 var(--glitch-2),
      0.025em 0.04em 0 var(--glitch-3);
    animation: glitch 725ms infinite;
    font-weight: normal;
  }

  .glitch span {
    position: absolute;
    top: 0;
    left: 0;
  }

  .glitch span:first-child {
    animation: glitch 500ms infinite;
    clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
    transform: translate(-0.04em, -0.03em);
    opacity: 0.75;
  }

  .glitch span:last-child {
    animation: glitch 375ms infinite;
    clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
    transform: translate(0.04em, 0.03em);
    opacity: 0.75;
  }

  @keyframes glitch {
    0% {
      text-shadow: 0.05em 0 0 var(--glitch-1), -0.03em -0.04em 0 var(--glitch-2),
        0.025em 0.04em 0 var(--glitch-3);
    }
    15% {
      text-shadow: 0.05em 0 0 var(--glitch-1), -0.03em -0.04em 0 var(--glitch-2),
        0.025em 0.04em 0 var(--glitch-3);
    }
    16% {
      text-shadow: -0.05em -0.025em 0 var(--glitch-1),
        0.025em 0.035em 0 var(--glitch-2), -0.05em -0.05em 0 var(--glitch-3);
    }
    49% {
      text-shadow: -0.05em -0.025em 0 var(--glitch-1),
        0.025em 0.035em 0 var(--glitch-2), -0.05em -0.05em 0 var(--glitch-3);
    }
    50% {
      text-shadow: 0.05em 0.035em 0 var(--glitch-1), 0.03em 0 0 var(--glitch-2),
        0 -0.04em 0 var(--glitch-3);
    }
    99% {
      text-shadow: 0.05em 0.035em 0 var(--glitch-1), 0.03em 0 0 var(--glitch-2),
        0 -0.04em 0 var(--glitch-3);
    }
    100% {
      text-shadow: -0.05em 0 0 var(--glitch-1),
        -0.025em -0.04em 0 var(--glitch-2), -0.04em -0.025em 0 var(--glitch-3);
    }
  }
</style>
