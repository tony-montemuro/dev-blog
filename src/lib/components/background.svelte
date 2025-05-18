<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="top-nav h-app animate-fadein fixed right-0 bottom-0 left-0 -z-10">
  {@render children()}
</div>
