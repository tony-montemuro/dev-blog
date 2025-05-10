<script lang="ts">
  import Image2Ascii from '$lib/assets/image2ascii.png';
  import type { ResponsiveWidth } from '$lib/types/responsive-width.svelte';

  let { mobileWidth, desktopWidth }: ResponsiveWidth = $props();
</script>

<img
  src={Image2Ascii}
  alt="image2ascii logo"
  class="h-auto md:hidden"
  style="width: {mobileWidth}px"
/>
<img
  src={Image2Ascii}
  alt="image2ascii logo"
  class="hidden h-auto md:block"
  style="width: {desktopWidth}px"
/>
