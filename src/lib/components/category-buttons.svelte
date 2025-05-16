<script lang="ts">
  interface Props {
    categories: string[];
  }

  let { categories }: Props = $props();
</script>

<div class="flex gap-3">
  {#each categories as category}
    <a
      href={`/blog/category/${category}`}
      class="rounded-2xl border-2 border-green-800/80 bg-green-400/80 px-3 py-2 text-black no-underline transition-colors duration-150 hover:border-green-800 hover:bg-green-400"
    >
      {category}
    </a>
  {/each}
</div>
