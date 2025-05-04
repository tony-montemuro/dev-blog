<script lang="ts">
  import type { Line } from '$lib/types/line.svelte';

  interface Props {
    line: Line;
    stroke?: string;
    isAnimated?: boolean;
  }

  let { line, stroke = 'grey', isAnimated = false }: Props = $props();
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
  class:animated={isAnimated}
  style="--line-length: {lineLength}px;"
/>

<style>
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }

  .animated {
    stroke-dashoffset: var(--line-length);
    animation: dash 1s ease-in-out forwards;
  }
</style>
