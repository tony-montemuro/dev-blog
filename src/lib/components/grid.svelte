<script lang="ts">
  import { onMount } from 'svelte';
  import type { Point } from '$lib/types/point.svelte';
  import Line from './line.svelte';

  const width = 30;
  const height = 17;

  let points = $state<any[]>([]);

  onMount(() => {
    window.addEventListener('resize', updateGridPoints);
    updateGridPoints();
  });

  function updateGridPoints() {
    console.log('?');
    const gridPointElements = document.querySelectorAll('.grid-point');

    // map of grid point coordinates to true HTML coordinates
    const gridPoints = new Array(height);
    for (let i = 0; i < gridPoints.length; i++) {
      gridPoints[i] = new Array(width);
    }

    gridPointElements.forEach((element) => {
      const [_, x, y] = element.id.split('-').map((p) => parseInt(p));
      const rect = element.getBoundingClientRect();
      const point: Point = {
        x: rect.left,
        y: rect.top
      };
      gridPoints[y][x] = point;
    });

    points = gridPoints;
  }

  $inspect(points);
</script>

<div class="top-nav fixed right-0 bottom-0 left-0 -z-10 min-h-screen">
  <div class="flex min-h-screen flex-col justify-between">
    {#each { length: height } as _, y}
      <div class="flex justify-between">
        {#each { length: width } as _, x}
          <span class="grid-point" id="square-{x}-{y}"></span>
        {/each}
      </div>
    {/each}
  </div>
</div>

{#if points.length}
  <div class="fixed top-0 right-0 bottom-0 left-0 -z-10 min-h-screen">
    <div class="flex min-h-screen flex-col justify-between">
      {#each { length: height } as _, y}
        <div class="flex justify-between">
          {#each { length: width - 1 } as _, x}
            <Line p1={points[y][x]} p2={points[y][x + 1]} />
          {/each}
        </div>
      {/each}
    </div>
  </div>
{/if}

{#if points.length}
  <div class="fixed top-0 right-0 bottom-0 left-0 -z-10 min-h-screen">
    <div class="flex min-h-screen flex-col justify-between">
      {#each { length: height - 1 } as _, y}
        <div class="flex justify-between">
          {#each { length: width } as _, x}
            <Line p1={points[y][x]} p2={points[y + 1][x]} />
          {/each}
        </div>
      {/each}
    </div>
  </div>
{/if}
