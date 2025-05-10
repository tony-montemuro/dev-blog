<script lang="ts">
  import type { Width } from '$lib/types/width.svelte';
  import Image2Ascii from '$lib/assets/image2ascii.png';

  let { width }: Width = $props();
</script>

<img src={Image2Ascii} alt="image2ascii logo" class="h-auto" style="width: {width}px" />
