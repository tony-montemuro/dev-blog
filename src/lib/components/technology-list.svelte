<script lang="ts">
  import Technologies from '$lib/components/technologies.svelte';
  import { backend, frontend, tools } from '$lib/types/technology.svelte';
</script>

<div class="flex flex-col gap-2 p-(--app-padding)">
  <h2 class="text-3xl md:text-4xl">Technical Skills</h2>
  <div class="animate-floatin flex flex-col gap-2">
    <Technologies name="Frontend" technologies={frontend} />
    <Technologies name="Backend" technologies={backend} />
    <Technologies name="Tools" technologies={tools} />
  </div>
</div>
