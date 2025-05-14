<script lang="ts">
  import type { Post } from '$lib/types/post.svelte';

  interface Props {
    post: Post;
  }

  let { post }: Props = $props();
</script>

<a
  href={`/blog/${post.slug}`}
  class="flex cursor-pointer flex-col rounded border p-2 text-white/80 hover:text-white"
>
  <strong class="text-3xl">{post.title}</strong>
  <span>{post.created} by Tony Montemuro</span>
  <span>Updated: {post.updated}</span>
</a>
