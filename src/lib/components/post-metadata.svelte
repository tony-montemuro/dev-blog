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
  class="flex cursor-pointer flex-col gap-2 rounded border-2 border-neutral-300/80 p-3 text-white/80 transition-colors duration-200 hover:border-green-400 hover:bg-green-200/20 hover:text-white"
>
  <div class="flex items-center sm:gap-4">
    {#if post.image}
      <div class="w-0 sm:w-48 md:w-64 lg:w-96">
        <img
          src={post.image}
          alt="Blog preview"
          class="border-netural-300/80 hidden h-auto w-full rounded-xl border-2 sm:block"
        />
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

  <hr class="text-neutral-400 opacity-80" />

  <div>
    <span>{post.description}</span>
  </div>
</a>
