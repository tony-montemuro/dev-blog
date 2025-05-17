<script lang="ts">
  import Grid from '$lib/components/grid.svelte';
  import PostListContainer from '$lib/components/post-list-container.svelte';
  import PostList from '$lib/components/post-list.svelte';
  import type { Post } from '$lib/types/post.svelte';
  import ArrowLeft from '$lib/components/svg/arrow-left.svelte';
  import { page } from '$app/state';

  interface Props {
    data: { posts: Post[]; category: string };
  }

  let { data }: Props = $props();
  let { posts, category } = data;

  const href = page.url.href;
  const title = `${category} | Tony Montemuro`;
  const description = `Explore blogs posts within the ${category} category. Learn pratical knowledge and solutions from my hands-on experience.`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" {href} />

  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={href} />

  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
</svelte:head>

<Grid />
<PostListContainer>
  <h1 class="text-7xl">{category}</h1>
  <a href="/blog" class="flex w-fit items-center gap-1 text-white/80 hover:text-white">
    <ArrowLeft />
    <span class="underline underline-offset-2">Back to all blogs</span>
  </a>
  <PostList {posts} />
</PostListContainer>
