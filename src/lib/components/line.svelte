<script lang="ts">
  import Point from '$lib/types/point.svelte';

  interface Props {
    p1: Point;
    p2: Point;
  }

  let { p1, p2 }: Props = $props();
  let lineLength = $derived(Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p2.x, 2)));
</script>

<svg class="pointer-events-none absolute inset-0 h-full w-full">
  <line
    x1={p1.x}
    y1={p1.y}
    x2={p2.x}
    y2={p2.y}
    stroke="grey"
    stroke-opacity="0.3"
    stroke-width="2"
    stroke-dasharray={lineLength}
    stroke-dashoffset="0"
  />
</svg>
