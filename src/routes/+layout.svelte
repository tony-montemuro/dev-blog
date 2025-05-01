<script lang="ts">
  import GitHub from '$lib/components/svg/github.svelte';
  import LinkedIn from '$lib/components/svg/linkedin.svelte';
  import '../app.css';
  let { children } = $props();
</script>

<header class="flex items-center justify-between bg-blue-400 px-2 py-3">
  <div>
    <a href="/">Tony Montemuro</a>
  </div>
  <div class="flex gap-3">
    <a href="/projects">Projects</a>
    <a href="/blog">Blog</a>
  </div>
  <div class="flex gap-3">
    <a href="https://github.com/tony-montemuro/"><GitHub class="h-8 w-8" /></a>
    <a href="https://www.linkedin.com/in/tony-montemuro/"><LinkedIn class="h-8 w-8" /></a>
  </div>
</header>

<main class="font-text p-2 text-stone-100">
  {@render children()}
</main>
