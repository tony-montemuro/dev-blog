<script lang="ts">
  import Technologies from '$lib/components/technologies.svelte';
  import { frontend } from '$lib/types/technology.svelte';
</script>

<div class="p-8">
  <Technologies name="Frontend" technologies={frontend} />
  <!-- <Technologies name="Backend"> -->
  <!--   <span>Go</span> -->
  <!--   <span>PHP</span> -->
  <!--   <span>Python</span> -->
  <!-- </Technologies> -->
  <!-- <Technologies name="Tools"> -->
  <!--   <span>Neovim</span> -->
  <!--   <span>Tmux</span> -->
  <!--   <span>Bash</span> -->
  <!-- </Technologies> -->
</div>
