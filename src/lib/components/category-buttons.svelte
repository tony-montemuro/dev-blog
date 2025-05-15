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
      class="rounded-2xl border px-3 py-2 no-underline transition-colors duration-150 hover:bg-gray-200/20"
    >
      {category}
    </a>
  {/each}
</div>
