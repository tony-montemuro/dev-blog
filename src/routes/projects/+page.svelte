<script lang="ts">
  import Grid from '$lib/components/grid.svelte';
  import Image2Ascii from '$lib/components/image2ascii.svelte';
  import ProjectDirectory from '$lib/components/project-directory.svelte';
  import SmbElite from '$lib/components/smb-elite.svelte';
  import Wip from '$lib/components/wip.svelte';
</script>

<Grid />
<div class="h-app snap-y snap-mandatory overflow-y-scroll">
  <ProjectDirectory />
  <SmbElite />
  <Image2Ascii />
  <Wip />
</div>
