<script lang="ts">
  import { onMount, type Snippet } from 'svelte';

  interface Props {
    sectionId: string;
    bg: string;
    padding?: 'small' | 'large';
    minWidth?: number | undefined;
    maxWidth?: number | undefined;
    minHeight?: number | undefined;
    maxHeight?: number | undefined;
    children: Snippet;
  }

  let {
    sectionId,
    bg,
    padding = 'large',
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    children
  }: Props = $props();
  const buttonId = `button-${sectionId}`;

  let styles: string[] = [];
  if (minHeight) {
    styles.push(`min-height: ${minHeight}px`);
  }
  if (maxHeight) {
    styles.push(`max-height: ${maxHeight}px`);
  }
  if (minWidth) {
    styles.push(`min-width: ${minWidth}px`);
  }
  if (maxWidth) {
    styles.push(`max-width: ${maxWidth}px`);
  }

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
  class="flex items-center justify-center rounded-full border border-transparent {bg} cursor-pointer transition-colors duration-300 ease-in-out hover:border-green-400"
  style={styles.join(';')}
>
  <div
    class="flex w-fit flex-row items-center gap-1.5 rounded-full {padding === 'small'
      ? 'p-3'
      : 'p-6'}"
  >
    {@render children()}
  </div>
</button>
