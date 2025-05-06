<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    href: string;
    children: Snippet;
    bg?: string;
    padding?: 3 | 6;
    isNewTab?: boolean;
  }

  let {
    href,
    children,
    bg = 'bg-gray-400/30 hover:bg-gray-400/60',
    padding = 3,
    isNewTab = false
  }: Props = $props();
</script>

<a
  {href}
  target={isNewTab ? '_blank' : '_self'}
  class="flex items-center rounded-full border border-transparent {bg} transition-colors duration-300 ease-in-out hover:border-green-400"
>
  <div class="flex w-fit flex-row items-center gap-1.5 rounded-full p-{padding}">
    {@render children()}
  </div>
</a>
