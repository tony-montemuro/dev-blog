<script lang="ts">
  import headshot from '$lib/assets/headshot.png';
  import LinkButton from './link-button.svelte';
</script>

<div class="flex items-center gap-8 p-8">
  <div class="animate-floatin flex flex-col gap-3">
    <h1 class="text-5xl md:text-7xl">Tony Montemuro</h1>
    <div class="flex flex-col gap-2">
      <h2 class="text-xl md:text-2xl">
        👋 Hello! I am a <span class="text-green-400">Full Stack Web Developer,</span> passionate about
        creating intuitive, performant software.
      </h2>
      <h2 class="text-xl md:text-2xl">
        👨‍💻 I seek to embrace the <span class="text-green-400">ever-evolving</span> nature of tech,
        without losing sight of the <span class="text-green-400">fundamentals.</span>
      </h2>
      <h2 class="text-xl md:text-2xl">
        🗨️ A proponent of <span class="text-green-400">clear communication</span> as a foundation for
        building for precise, reliable systems.
      </h2>
    </div>
    <div class="flex flex-wrap gap-2">
      <LinkButton href="/projects">
        <span class="text-sm md:text-base">🚧</span>
        <span class="text-sm md:text-base">My Projects</span>
      </LinkButton>
      <LinkButton href="/blog">
        <span class="text-sm md:text-base">✍️</span>
        <span class="text-sm md:text-base">My Blog</span>
      </LinkButton>
      <LinkButton href="/contact">
        <span class="text-sm md:text-base">✉️</span>
        <span class="text-sm md:text-base">Contact Me!</span>
      </LinkButton>
    </div>
  </div>
  <div class="animate-floatin hidden flex-grow justify-center lg:flex">
    <div
      class="flex w-80 items-end justify-center rounded-2xl border-3 bg-conic/oklab from-green-100/70 via-green-700/80 to-green-100/70"
    >
      <img src={headshot} alt="Tony Montemuro headshot" />
    </div>
  </div>
</div>
