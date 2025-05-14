<script lang="ts">
  import Grid from '$lib/components/grid.svelte';
  import PostMetadata from '$lib/components/post-metadata.svelte';
  import type { Post } from '$lib/types/post.svelte';

  interface Props {
    data: { posts: Post[]; categories: string[] };
  }

  let { data }: Props = $props();
</script>

<Grid />
<div class="animate-floatin flex justify-center p-(--app-padding)">
  <div class="flex w-200 flex-col gap-4 rounded-2xl bg-gray-400/20 p-(--app-padding)">
    <h1 class="text-7xl">Blog</h1>
    <div class="flex gap-3">
      {#each data.categories as category}
        <div class="rounded-2xl border p-2">{category}</div>
      {/each}
    </div>
    <hr />
    {#each data.posts as post}
      <PostMetadata {post} />
    {/each}
  </div>
</div>
