<script lang="ts">
  import { onMount } from 'svelte';
  import type { Point } from '$lib/types/point.svelte';
  import Structure from './structure.svelte';
  import Line from './line.svelte';
  import Background from './background.svelte';

  const width = 30;
  const height = 17;

  let points = $state<any[]>([]);
  let snake = $state<any[]>([]);

  onMount(() => {
    window.addEventListener('resize', updateGridPoints);
    updateGridPoints();

    setTimeout(() => {
      const p1: Point = {
        x: points[15][15].x,
        y: points[15][15].y
      };
      const p2: Point = {
        x: points[15][16].x,
        y: points[15][16].y
      };
      snake.push(p1);
      snake.push(p2);
      console.log('should be rendered lol');
    }, 1000);
  });

  function updateGridPoints() {
    const gridPointElements = document.querySelectorAll('.grid-point');

    // map of grid point coordinates to true HTML coordinates
    const gridPoints = new Array(height);
    for (let i = 0; i < gridPoints.length; i++) {
      gridPoints[i] = new Array(width);
    }

    gridPointElements.forEach((element) => {
      const [_, x, y] = element.id.split('-').map((p) => parseInt(p));
      const rect = element.getBoundingClientRect();
      const navHeight = window.getComputedStyle(document.body).getPropertyValue('--navbar-height');

      const point: Point = {
        x: rect.left,
        y: rect.top - Number.parseInt(navHeight)
      };
      gridPoints[y][x] = point;
    });

    points = gridPoints;
  }

  $inspect(points);
</script>

<Structure {width} {height} />
<Background {points}>
  <!-- Horizontal Lines -->
  {#each { length: height } as _, y}
    {#each { length: width - 1 } as _, x}
      <Line p1={points[y][x]} p2={points[y][x + 1]} />
    {/each}
  {/each}

  <!-- Vertical Lines -->
  {#each { length: height - 1 } as _, y}
    {#each { length: width } as _, x}
      <Line p1={points[y][x]} p2={points[y + 1][x]} />
    {/each}
  {/each}

  <!-- Snake -->
  {#each { length: snake.length - 1 } as _, i}
    <Line p1={snake[i]} p2={snake[i + 1]} stroke="white" isAnimated />
  {/each}
</Background>
