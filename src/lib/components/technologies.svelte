<script lang="ts">
  import type { Technology } from '$lib/types/technology.svelte';

  interface Props {
    name: string;
    technologies: Technology[];
  }

  let { name, technologies }: Props = $props();
</script>

<div class="flex flex-col gap-1">
  <h3 class="text-xl">{name}</h3>
  <div class="flex gap-2">
    {#each technologies as technology}
      <div class="flex w-fit flex-row items-center gap-1.5 rounded-full border p-3">
        <technology.icon />
        <a href={technology.url} target="_blank">{technology.name}</a>
      </div>
    {/each}
  </div>
</div>
