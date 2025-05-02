<script lang="ts">
  import Technologies from '$lib/components/technologies.svelte';
  import { backend, frontend, tools } from '$lib/types/technology.svelte';
</script>

<div class="flex flex-col gap-2 p-8">
  <Technologies name="Frontend" technologies={frontend} />
  <Technologies name="Backend" technologies={backend} />
  <Technologies name="Tools" technologies={tools} />
</div>
