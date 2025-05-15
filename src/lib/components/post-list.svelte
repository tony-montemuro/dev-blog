<script lang="ts">
  import type { Post } from '$lib/types/post.svelte';
  import PostMetadata from './post-metadata.svelte';

  interface Props {
    posts: Post[];
  }

  let { posts }: Props = $props();
</script>

<div class="flex flex-col gap-3">
  {#each posts as post}
    <PostMetadata {post} />
  {/each}
</div>
