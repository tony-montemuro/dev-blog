<script lang="ts">
  import headshot from '$lib/assets/headshot.jpg';
</script>

<div class="flex items-center p-8">
  <div class="flex flex-col gap-3">
    <h1 class="text-7xl">Tony Montemuro</h1>
    <div class="flex flex-col gap-2">
      <h2 class="text-2xl">
        👋 Hello! I am a <span class="text-green-400">Full Stack Web Developer,</span> passionate about
        creating intuitive, performant software.
      </h2>
      <h2 class="text-2xl">
        👨‍💻 I seek to embrace the <span class="text-green-400">ever-evolving</span> nature of tech,
        without losing sight of the <span class="text-green-400">fundamentals.</span>
      </h2>
      <h2 class="text-2xl">
        🗨️ A proponent of <span class="text-green-400">clear communication</span> as a foundation for
        building for precise, reliable systems.
      </h2>
    </div>
  </div>
  <div class="flex flex-grow justify-center">
    <div class="flex h-96 w-96 items-center justify-center">
      <img src={headshot} alt="Tony Montemuro headshot" />
    </div>
  </div>
</div>
