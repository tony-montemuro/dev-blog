<script lang="ts">
  import type { Snippet } from 'svelte';
  import type Point from '$lib/types/point.svelte';

  interface Props {
    points: Point[][];
    children: Snippet;
  }

  let { points, children }: Props = $props();
</script>

{#if points.length}
  <div class="top-nav h-app animate-fadein fixed right-0 bottom-0 left-0 -z-10">
    <svg class="pointer-events-none absolute inset-0 h-full w-full">
      {@render children()}
    </svg>
  </div>
{/if}
