<script lang="ts">
  import SmbElite from './svg/smb-elite.svelte';
  import ScrollButton from './scroll-button.svelte';
  import Image2Ascii from './image/image2ascii.svelte';
  import Elenchus from './svg/elenchus.svelte';
</script>

<div id="project-directory" class="h-app flex snap-start snap-always flex-col p-(--app-padding)">
  <div class="flex flex-col gap-5">
    <h1 class="h-fit text-7xl sm:text-8xl">Projects</h1>
    <em class="text-2xl sm:text-3xl">Click on each project to learn more:</em>
  </div>
  <div class="flex h-full w-full items-center justify-center">
    <div
      class="animate-floatin flex w-fit flex-col justify-between gap-4 lg:w-full lg:flex-row lg:gap-0"
    >
      <ScrollButton sectionId="smb-elite" bg="bg-smb-elite-bg" minWidth={225} maxHeight={100}>
        <SmbElite mobileWidth={125} desktopWidth={125} />
      </ScrollButton>
      <ScrollButton sectionId="elenchus" bg="bg-orange-400" maxHeight={100} maxWidth={200}>
        <Elenchus mobileWidth={170} desktopWidth={170} />
      </ScrollButton>
      <ScrollButton
        sectionId="image2ascii"
        bg="bg-white"
        minHeight={100}
        maxHeight={100}
        maxWidth={225}
      >
        <Image2Ascii mobileWidth={200} desktopWidth={200} />
      </ScrollButton>
    </div>
  </div>
</div>
