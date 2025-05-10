<script lang="ts">
  import type { Image } from '$lib/types/image.svelte';
  import type { Component, Snippet } from 'svelte';
  import type { ResponsiveWidth } from '$lib/types/responsive-width.svelte';
  import Github from '$lib/components/svg/github.svelte';
  import ProjectCarousel from './project-carousel.svelte';

  interface Props {
    id: string;
    color: { bgPrimary: string; bgSecondary: string; github: string };
    href: { website: string; github: string };
    logo: { Logo: Component<ResponsiveWidth>; width: ResponsiveWidth };
    images: Image[];
    children: Snippet;
  }

  let { id, color, href, logo, images, children }: Props = $props();
</script>

<div
  {id}
  class="h-app {color.bgPrimary} {color.bgSecondary} relative flex snap-start snap-always bg-radial-[at_20%_15%]"
>
  <div class="absolute top-8 right-8 z-20">
    <a href={href.github} target="_blank">
      <Github
        class="h-12 w-12 opacity-50 transition-opacity duration-200 hover:opacity-100 sm:h-16 sm:w-16"
        fillColor={color.github}
      />
    </a>
  </div>
  <div class="flex flex-4 flex-col gap-8 p-(--app-padding)">
    <div class="flex items-center justify-between">
      <div class="flex w-fit items-center justify-center">
        <a href={href.website} target="_blank" class="w-fit">
          <logo.Logo mobileWidth={logo.width.mobileWidth} desktopWidth={logo.width.desktopWidth} />
        </a>
      </div>
    </div>

    <div class="text-md flex flex-col gap-8 overflow-y-auto sm:text-xl md:text-2xl">
      {@render children()}
    </div>
  </div>
  <div class="h-app hidden flex-6 p-(--app-padding) lg:block">
    <ProjectCarousel {images} />
  </div>
</div>
