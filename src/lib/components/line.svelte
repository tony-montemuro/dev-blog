<script lang="ts">
  import type { Line } from '$lib/types/line.svelte';

  interface Props {
    line: Line;
    stroke?: string;
    fadeInTime?: number;
    fadeOutTime?: number;
  }

  let { line, stroke = 'grey', fadeInTime = 0, fadeOutTime = 0 }: Props = $props();
  let { p1, p2 }: Line = line;
  let lineLength = $derived(Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p2.x, 2)));
</script>

<line
  x1={p1.x}
  y1={p1.y}
  x2={p2.x}
  y2={p2.y}
  {stroke}
  stroke-opacity="0.3"
  stroke-width="2"
  stroke-dasharray={lineLength}
  class:animated={fadeInTime > 0}
  style="--line-length: {lineLength}px; --fadeInTime: {fadeInTime}ms; --fadeOutTime: {fadeOutTime}ms"
/>

<style>
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .animated {
    stroke-dashoffset: var(--line-length);
    animation:
      dash var(--fadeInTime) ease-in forwards,
      fadeOut var(--fadeOutTime) ease-out forwards;
    animation-delay: 0ms, var(--fadeInTime);
  }
</style>
