<script lang="ts">
  import SmbElite from './svg/smb-elite.svelte';
  import Image2Ascii from '$lib/assets/image2ascii.png';
  import ScrollButton from './scroll-button.svelte';
</script>

<div class="h-app flex snap-start snap-always flex-col p-8">
  <div class="flex flex-col gap-5">
    <h1 class="h-fit text-8xl">Projects</h1>
    <em class="text-3xl">Click on each project to learn more:</em>
  </div>
  <div class="animate-floatin flex justify-between pt-40">
    <ScrollButton sectionId="smb-elite" bg="bg-smb-elite-bg">
      <SmbElite />
    </ScrollButton>
    <ScrollButton sectionId="image2ascii" bg="bg-white">
      <img src={Image2Ascii} alt="image2ascii Logo" class="w-[220px]" />
    </ScrollButton>
    <ScrollButton sectionId="wip" bg="bg-orange-400">
      <div class="flex w-[220px] justify-center text-6xl">WIP...</div>
    </ScrollButton>
  </div>
</div>
