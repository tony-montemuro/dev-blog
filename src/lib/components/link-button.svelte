<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    href: string;
    children: Snippet;
    isNewTab?: boolean;
  }

  let { href, children, isNewTab = false }: Props = $props();
</script>

<a
  {href}
  target={isNewTab ? '_blank' : '_self'}
  class="rounded-full border border-transparent bg-gray-400/30 transition-colors duration-300 ease-in-out hover:border-green-400 hover:bg-gray-400/60"
>
  <div class="flex w-fit flex-row items-center gap-1.5 rounded-full p-3">
    {@render children()}
  </div>
</a>
