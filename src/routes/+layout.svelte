<script lang="ts">
  import GitHub from '$lib/components/svg/github.svelte';
  import LinkedIn from '$lib/components/svg/linkedin.svelte';
  import Contact from '$lib/components/svg/contact.svelte';
  import '../app.css';
  import Logo from '$lib/components/svg/logo.svelte';
  let { children } = $props();
</script>

<header class="h-nav sticky top-0 z-50 flex items-center justify-between bg-green-400 px-2">
  <div title="Home">
    <a href="/"><Logo class="h-8 w-8" /></a>
  </div>
  <div class="flex gap-3">
    <a href="/projects" title="Projects">Projects</a>
    <a href="/blog" title="Blog">Blog</a>
  </div>
  <div class="flex gap-3">
    <a href="/contact" title="Contact Me"><Contact class="h-8 w-8" /></a>
    <a href="https://github.com/tony-montemuro/" title="GitHub"><GitHub class="h-8 w-8" /></a>
    <a href="https://www.linkedin.com/in/tony-montemuro/" title="LinkedIn"
      ><LinkedIn class="h-8 w-8" /></a
    >
  </div>
</header>

<main class="font-text text-stone-100">
  {@render children()}
</main>
