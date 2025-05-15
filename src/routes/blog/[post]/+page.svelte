<script lang="ts">
  import type { Post } from '$lib/types/post.svelte';
  import type { Component } from 'svelte';
  import { formatDate } from '$lib/scripts/date';
  import CategoryButtons from '$lib/components/category-buttons.svelte';

  interface Props {
    data: { Content: Component; meta: Post };
  }

  let { data }: Props = $props();
  let { meta, Content } = data;
</script>

<div class="top-nav h-app animate-fadein fixed right-0 bottom-0 left-0 -z-10">
  <div class="h-full w-full bg-radial-[at_50%_0%] from-green-400/10 to-black/80"></div>
</div>
<article class="prose prose-invert lg:prose-xl animate-floatin mx-auto p-(--app-padding)">
  <div class="mb-3">
    <h1>{meta.title}</h1>
    <div class="text-md flex flex-col">
      <span>
        {formatDate(meta.created)}
        <em>
          {#if meta.updated}(Updated {formatDate(meta.updated)}){/if}
        </em>
      </span>
      <span>Tony Montemuro</span>
    </div>
  </div>
  <div class="mb-10">
    <CategoryButtons categories={meta.categories} />
  </div>
  <div class="mb-10">
    <hr />
  </div>
  <Content />
</article>
