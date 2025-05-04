<script lang="ts">
  import { onMount } from 'svelte';
  import type { Point } from '$lib/types/point.svelte';
  import Structure from './structure.svelte';
  import Line from './line.svelte';
  import Background from './background.svelte';
  import { SnakeEngine } from '$lib/classes/snake-engine.svelte';

  const width = 30;
  const height = 17;

  let gridPoints = $state<any[]>([]);
  let gridLines = $derived.by<any[]>((): any[] => {
    let gridLines: any[] = [];

    if (gridPoints.length > 0) {
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width - 1; x++) {
          gridLines.push({
            p1: gridPoints[y][x],
            p2: gridPoints[y][x + 1]
          });
        }
      }

      for (let y = 0; y < height - 1; y++) {
        for (let x = 0; x < width; x++) {
          gridLines.push({
            p1: gridPoints[y][x],
            p2: gridPoints[y + 1][x]
          });
        }
      }
    }

    return gridLines;
  });
  let snakeEngine = $derived.by<SnakeEngine | null>((): SnakeEngine | null =>
    gridLines.length > 0 ? new SnakeEngine(gridPoints, 1000) : null
  );

  onMount(() => {
    window.addEventListener('resize', updateGridPoints);
    updateGridPoints();
  });

  function updateGridPoints() {
    const pointElements = document.querySelectorAll('.grid-point');

    // map of grid point coordinates to true HTML coordinates
    const points = new Array(height);
    for (let i = 0; i < points.length; i++) {
      points[i] = new Array(width);
    }

    pointElements.forEach((element) => {
      const [_, x, y] = element.id.split('-').map((p) => parseInt(p));
      const rect = element.getBoundingClientRect();
      const navHeight = window.getComputedStyle(document.body).getPropertyValue('--navbar-height');

      const point: Point = {
        x: rect.left,
        y: rect.top - Number.parseInt(navHeight)
      };
      points[y][x] = point;
    });

    gridPoints = points;
  }

  $inspect(gridPoints);
  $inspect(gridLines);
  $inspect(snakeEngine?.getSnake());
</script>

<Structure {width} {height} />
<Background points={gridPoints}>
  {#each gridLines as line}
    {#key line}
      <Line {line} />
    {/key}
  {/each}
  {#each snakeEngine?.getSnake() ?? [] as line (line.id)}
    <Line stroke="white" {line} fadeInTime={1000} fadeOutTime={20000} />
  {/each}
</Background>
