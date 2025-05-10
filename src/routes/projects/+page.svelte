<script lang="ts">
  import Grid from '$lib/components/grid.svelte';
  import Image2Ascii from '$lib/components/image2ascii.svelte';
  import ProjectDirectory from '$lib/components/project-directory.svelte';
  import ScrollButton from '$lib/components/scroll-button.svelte';
  import SmbElite from '$lib/components/smb-elite.svelte';
  import Top from '$lib/components/svg/top.svelte';
  import Wip from '$lib/components/wip.svelte';
  import { onMount } from 'svelte';

  let page: HTMLDivElement;

  onMount(() => page.focus());
</script>

<Grid />
<div class="absolute bottom-8 left-8 z-10">
  <ScrollButton sectionId="project-directory" bg="bg-black/40" padding="small">
    <Top />
  </ScrollButton>
</div>
<div bind:this={page} class="h-app snap-y snap-mandatory overflow-y-scroll">
  <ProjectDirectory />
  <SmbElite />
  <Image2Ascii />
  <Wip />
</div>
