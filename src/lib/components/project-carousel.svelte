<script lang="ts">
  import ArrowLeft from './svg/arrow-left.svelte';
  import ArrowRight from './svg/arrow-right.svelte';
  import type { Image } from '$lib/types/image.svelte';
  import { onMount } from 'svelte';

  interface Props {
    images: Image[];
  }

  let { images }: Props = $props();
  let active = $state<number>(0);

  let carouselElement: HTMLElement;
  let leftBtn: HTMLButtonElement;
  let rightBtn: HTMLButtonElement;

  // Function that responds when `element` goes on / off screen
  function respondToVisbility(element: HTMLElement, callback: (visible: boolean) => void) {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [0.0, 0.2]
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        callback(entry.intersectionRatio > 0);
      });
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element), observer.disconnect();
    };
  }

  onMount(() => {
    if (!carouselElement) return;

    function keybinds(e: KeyboardEvent) {
      const key: string = e.key;
      if (key === 'ArrowLeft') {
        e.preventDefault();
        leftBtn.click();
      }

      if (key === 'ArrowRight') {
        e.preventDefault();
        rightBtn.click();
      }
    }

    const cleanup = respondToVisbility(carouselElement, (visible) => {
      if (visible) {
        window.addEventListener('keydown', keybinds);
      } else {
        window.removeEventListener('keydown', keybinds);
      }
    });

    return cleanup;
  });

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
    slides.scrollTo({
      top: 0,
      left: active * (slideWidth ?? 1),
      behavior: 'smooth'
    });
  };
</script>

<div bind:this={carouselElement} class="relative h-full overflow-hidden" tabindex="-1">
  <button
    type="button"
    class="left absolute top-0 bottom-0 left-5 z-10 m-auto h-40 cursor-pointer rounded-full bg-black/60 p-2 transition-colors duration-200 hover:bg-black/80"
    onclick={slide}
    bind:this={leftBtn}
  >
    <ArrowLeft />
  </button>

  <ul
    class="slides absolute top-0 m-0 flex h-full w-full list-none items-center overflow-x-scroll scroll-smooth p-0 outline-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
    bind:this={rightBtn}
  >
    <ArrowRight />
  </button>
</div>
