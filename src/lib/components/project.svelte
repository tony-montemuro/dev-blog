<script lang="ts">
  import type { Image } from '$lib/types/image.svelte';
  import type { Component, Snippet } from 'svelte';
  import type { Width } from '$lib/types/width.svelte';
  import Github from '$lib/components/svg/github.svelte';
  import ProjectCarousel from './project-carousel.svelte';

  interface Props {
    id: string;
    color: { bgPrimary: string; bgSecondary: string; github: string };
    href: { website: string; github: string };
    logo: { Logo: Component<Width>; width: number };
    images: Image[];
    children: Snippet;
  }

  let { id, color, href, logo, images, children }: Props = $props();
</script>

<div
  {id}
  class="h-app {color.bgPrimary} {color.bgSecondary} relative flex snap-start snap-always bg-radial-[at_20%_15%]"
>
  <div class="flex basis-2/5 flex-col gap-8 p-(--app-padding)">
    <div class="flex items-center justify-between">
      <div class="flex w-fit items-center justify-center">
        <a href={href.website} target="_blank" class="w-fit">
          <logo.Logo width={logo.width} />
        </a>
      </div>
      <a href={href.github} target="_blank">
        <Github
          class="h-16 w-16 opacity-50 transition-opacity duration-200 hover:opacity-100"
          fillColor={color.github}
        />
      </a>
    </div>

    <div class="flex flex-col gap-8 text-2xl">
      {@render children()}
    </div>
  </div>
  <div class="h-app basis-3/5 p-(--app-padding)">
    <ProjectCarousel {images} />
  </div>
</div>
