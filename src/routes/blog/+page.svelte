<script lang="ts">
  import Grid from '$lib/components/grid.svelte';
  import PostListContainer from '$lib/components/post-list-container.svelte';
  import PostList from '$lib/components/post-list.svelte';
  import type { Post } from '$lib/types/post.svelte';

  interface Props {
    data: { posts: Post[]; categories: string[] };
  }

  let { data }: Props = $props();
</script>

<Grid />
<PostListContainer>
  <h1 class="text-7xl">Blog</h1>
  <div class="flex gap-3">
    {#each data.categories as category}
      <a
        href={`/blog/category/${category}`}
        class="rounded-2xl border p-2 transition-colors duration-150 hover:bg-gray-200/20"
        >{category}</a
      >
    {/each}
  </div>
  <hr />
  <PostList posts={data.posts} />
</PostListContainer>
