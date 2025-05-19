<script lang="ts">
  import Line from './line.svelte';
  import { SnakeEngine } from '$lib/classes/snake-engine.svelte';
  import type { Line as LineType } from '$lib/types/line.svelte';
  import type { Grid } from '$lib/types/grid.svelte';
  import type { Quadrant } from '$lib/types/quadrant.svelte';

  interface Props {
    numLineSegments?: number;
    tickRate?: number;
    color?: string;
    targetCellLength?: number;
    lineOpacity?: number;
  }

  let {
    numLineSegments = 25,
    tickRate = 400,
    color = 'green',
    targetCellLength = 40,
    lineOpacity = 0.7
  }: Props = $props();

  let width = $state<number>(0);
  let height = $state<number>(0);

  let grid = $state<Grid>({
    rows: 0,
    cols: 0,
    rowsGap: 0,
    colsGap: 0
  });

  const snakeEngines = $derived.by<SnakeEngine[]>((): SnakeEngine[] => {
    if (width <= 0 && height <= 0) {
      return [];
    }

    let quadrants: Quadrant[];
    let padding: number;

    if (grid.rows < 12 || grid.cols < 12) {
      quadrants = [2, 4];
      padding = 2;
    } else {
      quadrants = [1, 2, 3, 4];
      padding = 3;
    }

    return quadrants.map(
      (quadrant) => new SnakeEngine(grid, tickRate, numLineSegments, quadrant, padding)
    );
  });

  let backgroundLines = $derived.by<LineType[]>((): LineType[] => {
    if (width <= 0 && height <= 0) {
      return [];
    }

    const lines: LineType[] = [];
    for (let dx = 0; dx < grid.cols; dx++) {
      const x = dx * grid.colsGap;
      lines.push({
        p1: { x, y: 0 },
        p2: { x, y: height }
      });
    }

    for (let dy = 0; dy < grid.rows; dy++) {
      const y = dy * grid.rowsGap;
      lines.push({
        p1: { x: 0, y },
        p2: { x: width, y }
      });
    }

    return lines;
  });

  function updateGrid() {
    const rows = Math.floor(height / targetCellLength) + 1;
    const cols = Math.floor(width / targetCellLength) + 1;
    const rowsGap = height / (rows - 1);
    const colsGap = width / (cols - 1);

    grid = { rows, cols, rowsGap, colsGap };
  }

  $effect(() => {
    if (width > 0 && height > 0) {
      updateGrid();
    }
  });
</script>

<div bind:offsetWidth={width} bind:offsetHeight={height} class="pointer-events-none h-full w-full">
  <svg class="h-full w-full">
    {#each backgroundLines as line}
      {#key line}
        <Line {line} />
      {/key}
    {/each}
    {#each snakeEngines as snakeEngine}
      {#each snakeEngine.getSnake() as line (line.id)}
        <Line
          stroke={color}
          {line}
          timers={{
            dashTimer: tickRate,
            fadeOutTimer: (tickRate - 1) * numLineSegments
          }}
          opacity={lineOpacity}
        />
      {/each}
    {/each}
  </svg>
</div>
