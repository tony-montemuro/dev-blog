<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="animate-floatin flex justify-center p-(--app-padding)">
  <div
    class="flex w-200 flex-col gap-4 rounded-2xl border-2 border-neutral-300/80 bg-neutral-600/70 p-(--app-padding)"
  >
    {@render children()}
  </div>
</div>
