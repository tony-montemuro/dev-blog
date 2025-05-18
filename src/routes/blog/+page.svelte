<script lang="ts">
  import CategoryButtons from '$lib/components/category-buttons.svelte';
  import PostListContainer from '$lib/components/post-list-container.svelte';
  import PostList from '$lib/components/post-list.svelte';
  import type { Post } from '$lib/types/post.svelte';
  import { page } from '$app/state';
  import GridBackground from '$lib/components/grid-background.svelte';

  interface Props {
    data: { posts: Post[]; categories: string[] };
  }

  let { data }: Props = $props();

  const href = page.url.href;
  const title = 'Blog | Tony Montemuro';
  const description =
    'Explore my technical blog, featuring full stack insights: frontend, backend, and developer tools. Learn pratical knowledge and solutions from my hands-on experience.';
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

<GridBackground />
<PostListContainer>
  <h1 class="text-7xl">Blog</h1>
  <CategoryButtons categories={data.categories} />
  <PostList posts={data.posts} />
</PostListContainer>
