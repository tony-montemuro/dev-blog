<script lang="ts">
  import type { Line, Timers } from '$lib/types/line.svelte';

  interface Props {
    line: Line;
    stroke?: string;
    timers?: Timers;
    opacity?: number;
  }

  let {
    line,
    stroke = 'grey',
    timers = { fadeInTimer: 0, fadeOutTimer: 0 },
    opacity = 0.3
  }: Props = $props();
  let { p1, p2 }: Line = line;
  let lineLength = $derived(Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)));
  let { fadeInTimer, fadeOutTimer }: Timers = timers;
</script>

<line
  x1={p1.x}
  y1={p1.y}
  x2={p2.x}
  y2={p2.y}
  {stroke}
  stroke-opacity={opacity}
  stroke-width="2"
  stroke-dasharray={lineLength}
  class:animated={fadeInTimer > 0}
  style="--line-length: {lineLength}px; --fadeInTime: {fadeInTimer}ms; --fadeOutTime: {fadeOutTimer}ms"
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
