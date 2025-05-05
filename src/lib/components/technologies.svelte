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
      <a
        href={technology.url}
        target="_blank"
        class="rounded-full border border-transparent bg-gray-400/30 transition-colors duration-300 ease-in-out hover:border-green-400 hover:bg-gray-400/60"
      >
        <div class="flex w-fit flex-row items-center gap-1.5 rounded-full p-3">
          <technology.icon />
          <span>{technology.name}</span>
        </div>
      </a>
    {/each}
  </div>
</div>
