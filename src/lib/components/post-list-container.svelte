<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="animate-floatin flex justify-center p-(--app-padding)">
  <div class="flex w-200 flex-col gap-4 rounded-2xl bg-gray-400/20 p-(--app-padding)">
    {@render children()}
  </div>
</div>
