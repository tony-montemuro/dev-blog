<script lang="ts">
  import CategoryButtons from '$lib/components/category-buttons.svelte';
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
  <CategoryButtons categories={data.categories} />
  <PostList posts={data.posts} />
</PostListContainer>
