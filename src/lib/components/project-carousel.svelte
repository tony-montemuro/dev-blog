<script lang="ts">
  import ArrowLeft from './svg/arrow-left.svelte';
  import ArrowRight from './svg/arrow-right.svelte';
  import type { Image } from '$lib/types/image.svelte';

  interface Props {
    images: Image[];
  }

  let { images }: Props = $props();
  let active = $state<number>(0);

  const slide = (e: MouseEvent & { currentTarget: HTMLButtonElement }) => {
    const target = e.currentTarget;
    const isLeft = target.classList.contains('left');

    const slides = isLeft ? target.nextElementSibling : target.previousElementSibling;
    if (!slides) {
      return;
    }

    const nextSlideIndex = Math.abs(active + (isLeft ? -1 : 1)) % images.length;
    const slideWidth = slides?.querySelector('.slide')?.clientWidth;
    slides.scrollTo({
      top: 0,
      left: nextSlideIndex * (slideWidth ?? 1),
      behavior: 'smooth'
    });
    active = nextSlideIndex;
  };
</script>

<!-- <div class="flex h-full items-center"> -->
<div class="relative h-full overflow-hidden">
  <button
    type="button"
    class="left absolute top-0 bottom-0 left-0 z-10 m-auto h-80 cursor-pointer rounded-full bg-gray-400/20 p-2 transition-colors duration-200 hover:bg-gray-400/40"
    onclick={slide}
  >
    <ArrowLeft />
  </button>

  <ul
    class="slides absolute top-0 left-2 m-0 flex h-full w-full list-none items-center overflow-scroll scroll-smooth p-0"
    tabindex="-1"
  >
    {#each images as image}
      <li class="slide w-full flex-shrink-0 flex-grow-1 basis-full">
        <img
          src={image.src}
          alt={image.alt}
          class="h-auto max-h-full w-auto max-w-full object-cover"
        />
        <em>{image.caption}</em>
      </li>
    {/each}
  </ul>

  <button
    type="button"
    class="right absolute top-0 right-0 bottom-0 z-10 m-auto h-80 cursor-pointer rounded-full bg-gray-400/20 p-2 transition-colors duration-200 hover:bg-gray-400/40"
    onclick={slide}
  >
    <ArrowRight />
  </button>
</div>
