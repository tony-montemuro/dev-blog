<script lang="ts">
  import '../app.css';
  let { children } = $props();
</script>

<header class="flex justify-between bg-blue-400 px-2 py-3">
  <div>Tony Montemuro</div>
  <div class="flex gap-3">
    <a href="/about">Projects</a>
    <a href="/blog">Blog</a>
  </div>
  <div class="flex gap-3">
    <div>GitHub</div>
    <div>LinkedIn</div>
  </div>
</header>

<main class="p-2">
  {@render children()}
</main>
