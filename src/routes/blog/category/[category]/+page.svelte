<script lang="ts">
  import Grid from '$lib/components/grid.svelte';
  import PostListContainer from '$lib/components/post-list-container.svelte';
  import PostList from '$lib/components/post-list.svelte';
  import type { Post } from '$lib/types/post.svelte';
  import ArrowLeft from '$lib/components/svg/arrow-left.svelte';

  interface Props {
    data: { posts: Post[]; category: string };
  }

  let { data }: Props = $props();
  let { posts, category } = data;
</script>

<Grid />
<PostListContainer>
  <h1 class="text-7xl">{category}</h1>
  <a href="/blog" class="flex w-fit items-center gap-1 text-white/80 hover:text-white">
    <ArrowLeft />
    <span class="underline underline-offset-2">Back to all blogs</span>
  </a>
  <PostList {posts} />
</PostListContainer>
