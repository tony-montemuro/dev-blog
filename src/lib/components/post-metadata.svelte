<script lang="ts">
  import type { Post } from '$lib/types/post.svelte';
  import { formatDate } from '$lib/scripts/date';

  interface Props {
    post: Post;
  }

  let { post }: Props = $props();
</script>

<a
  href={`/blog/${post.slug}`}
  class="flex cursor-pointer flex-col gap-2 rounded border p-3 text-white/80 transition-colors duration-200 hover:bg-gray-200/20 hover:text-white"
>
  <div class="flex items-center gap-4">
    {#if post.image}
      <div class="w-96">
        <img src={post.image} alt="Blog preview" class="h-auto w-full rounded-xl border-2" />
      </div>
    {/if}

    <div class="flex flex-7 flex-col">
      <strong class="text-2xl">{post.title}</strong>
      <span>Tony Montemuro</span>
      <div class="flex flex-col text-sm text-gray-200/80">
        <span>{formatDate(post.created)}</span>
        {#if post.updated}<em>Last Updated {formatDate(post.updated)}</em>{/if}
      </div>
    </div>
  </div>

  <hr class="opacity-80" />

  <div>
    <span>{post.description}</span>
  </div>
</a>
