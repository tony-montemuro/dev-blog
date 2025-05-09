<script lang="ts">
  import ArrowLeft from './svg/arrow-left.svelte';
  import ArrowRight from './svg/arrow-right.svelte';
  import type { Image } from '$lib/types/image.svelte';

  interface Props {
    images: Image[];
  }

  let { images }: Props = $props();
  let active = $state<number>(0);

  const modulo = (n: number, m: number): number => {
    return ((n % m) + m) % m;
  };

  const slide = (e: MouseEvent & { currentTarget: HTMLButtonElement }) => {
    const target = e.currentTarget;
    const isLeft = target.classList.contains('left');

    const slides = isLeft ? target.nextElementSibling : target.previousElementSibling;
    if (!slides) {
      return;
    }

    active = Math.abs(modulo(active + (isLeft ? -1 : 1), images.length));
    const slideWidth = slides?.querySelector('.slide')?.clientWidth;
    console.log(active, slideWidth, active * (slideWidth ?? 1));
    slides.scrollTo({
      top: 0,
      left: active * (slideWidth ?? 1),
      behavior: 'smooth'
    });
  };
</script>

<div class="relative h-full overflow-hidden">
  <button
    type="button"
    class="left absolute top-0 bottom-0 left-5 z-10 m-auto h-40 cursor-pointer rounded-full bg-black/60 p-2 transition-colors duration-200 hover:bg-black/80"
    onclick={slide}
  >
    <ArrowLeft />
  </button>

  <ul
    class="slides absolute top-0 m-0 flex h-full w-full list-none items-center overflow-x-scroll scroll-smooth p-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    tabindex="-1"
  >
    {#each images as image}
      <li
        class="slide flex h-full w-full flex-shrink-0 flex-col justify-center gap-1 overflow-hidden"
      >
        <img src={image.src} alt={image.alt} class="max-h-full w-auto object-contain" />
        <em class="text-sm">{image.caption}</em>
      </li>
    {/each}
  </ul>

  <button
    type="button"
    class="right absolute top-0 right-5 bottom-0 z-10 m-auto h-40 cursor-pointer rounded-full bg-black/60 p-2 transition-colors duration-200 hover:bg-black/80"
    onclick={slide}
  >
    <ArrowRight />
  </button>
</div>
