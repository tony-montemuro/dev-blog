<script lang="ts">
  import { onMount, type Snippet } from 'svelte';

  interface Props {
    sectionId: string;
    bg: string;
    children: Snippet;
  }

  let { sectionId, bg, children }: Props = $props();
  const buttonId = `button-${sectionId}`;

  onMount(() => {
    document.getElementById(buttonId)?.addEventListener('click', function () {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
</script>

<button
  id={buttonId}
  type="button"
  class="flex items-center rounded-full border border-transparent {bg} cursor-pointer transition-colors duration-300 ease-in-out hover:border-green-400"
>
  <div class="flex w-fit flex-row items-center gap-1.5 rounded-full p-6">
    {@render children()}
  </div>
</button>
