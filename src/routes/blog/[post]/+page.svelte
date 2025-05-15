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

<article class="prose prose-invert lg:prose-xl animate-floatin mx-auto p-(--app-padding)">
  <div class="mb-10">
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
  <Content />
</article>
