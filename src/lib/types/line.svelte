<script lang="ts" context="module">
  import type { Point } from './point.svelte';

  export interface Line {
    p1: Point;
    p2: Point;
    id?: number;
  }
</script>
