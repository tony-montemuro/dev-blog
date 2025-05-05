<script lang="ts">
  import type { Technology } from '$lib/types/technology.svelte';
  import LinkButton from './link-button.svelte';

  interface Props {
    name: string;
    technologies: Technology[];
  }

  let { name, technologies }: Props = $props();
</script>

<div class="flex flex-col gap-1">
  <h3 class="text-xl">{name}</h3>
  <div class="flex flex-wrap gap-2">
    {#each technologies as technology}
      <LinkButton href={technology.url} isNewTab>
        <technology.icon />
        <span class="text-sm md:text-base">{technology.name}</span>
      </LinkButton>
    {/each}
  </div>
</div>
