<script lang="ts">
  import LinkButton from './link-button.svelte';
  import SmbElite from './svg/smb-elite.svelte';
  import Image2Ascii from '$lib/assets/image2ascii.png';
</script>

<div class="flex flex-col gap-5">
  <h1 class="h-fit text-8xl">Projects</h1>
  <em class="text-3xl">Click on each project to learn more:</em>
</div>
<div class="animate-floatin flex justify-between pt-40">
  <LinkButton href="/projects#smb-elite" bg="bg-smb-elite-bg" padding={6}>
    <SmbElite />
  </LinkButton>
  <LinkButton href="/projects#image2ascii" bg="bg-white">
    <img src={Image2Ascii} alt="image2ascii Logo" class="w-[220px]" />
  </LinkButton>
  <LinkButton href="/projects#wip" bg="bg-orange-400">
    <div class="flex w-[220px] justify-center text-6xl">WIP...</div>
  </LinkButton>
</div>
