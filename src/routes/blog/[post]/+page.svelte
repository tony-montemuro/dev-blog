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
      <div class="flex justify-between">
        <span class="text-md sm:text-xl">Tony Montemuro</span>
        <div class="flex flex-col">
          <span class="text-right text-xs sm:text-sm">
            {formatDate(meta.created)}
          </span>
          <em class="text-right text-xs sm:text-sm">
            {#if meta.updated}Last Updated {formatDate(meta.updated)}{/if}
          </em>
        </div>
      </div>
      {#if meta.image}
        <img src={meta.image} class="rounded-2xl border-2 border-slate-500/60" alt="Blog" />
      {:else}
        <div class="my-4"></div>
      {/if}
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
