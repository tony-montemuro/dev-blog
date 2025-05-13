<script lang="ts">
  import Grid from '$lib/components/grid.svelte';
  import type { Post } from '$lib/types/post.svelte';

  interface Props {
    data: { posts: Post[] };
  }

  let { data }: Props = $props();
</script>

<Grid />
<div class="flex justify-center p-(--app-padding)">
  <div class="flex w-200 flex-col rounded-2xl bg-gray-400/20 p-(--app-padding)">
    <h1 class="text-7xl">Posts</h1>
    {#each data.posts as post}
      <div class="flex gap-3">
        <span>Title: {post.title}</span>
        <span>Slug: {post.slug}</span>
        <span>Created: {post.created}</span>
        <span>Updated: {post.updated}</span>
      </div>
    {/each}
  </div>
</div>
