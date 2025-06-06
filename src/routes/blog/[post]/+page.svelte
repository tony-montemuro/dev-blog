<script lang="ts">
  import type { Post } from '$lib/types/post.svelte';
  import type { Component } from 'svelte';
  import { formatDate } from '$lib/scripts/date';
  import CategoryButtons from '$lib/components/category-buttons.svelte';
  import { page } from '$app/state';
  import Background from '$lib/components/background.svelte';

  interface Props {
    data: { Content: Component; meta: Post };
  }

  let { data }: Props = $props();
  let { meta, Content } = data;
  let href = page.url.href;
</script>

<svelte:head>
  <title>{meta.title}</title>
  <meta name="description" content={meta.description} />
  <link rel="canonical" {href} />

  <meta property="og:type" content="article" />
  <meta property="og:title" content={meta.title} />
  <meta property="og:description" content={meta.description} />
  <meta property="og:url" content={href} />
  <meta property="og:image" content={meta.image} />
  <meta property="og:image:alt" content="Featured image for {meta.title}" />

  <meta property="article:published_time" content={meta.created} />
  <meta property="article:modified_time" content={meta.updated} />
  <meta property="article:author" content="Tony Montemuro" />
  {#each meta.categories as category}
    <meta property="article:tag" content={category} />
  {/each}

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={meta.title} />
  <meta name="twitter:description" content={meta.description} />
  <meta name="twitter:image:src" content={meta.image} />
  <meta name="twitter:image:alt" content="Featured image for {meta.title}" />
  <meta name="twitter:widgets:new-embed-design" content="on" />
</svelte:head>

<Background>
  <div class="h-full w-full bg-radial-[at_50%_0%] from-green-400/10 to-black/80"></div>
</Background>
<article class="prose prose-invert lg:prose-xl animate-fadein mx-auto p-(--app-padding)">
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
        <img
          src={meta.image}
          class="rounded-2xl border-2 border-slate-500/60"
          alt="Featured image for {meta.title}"
        />
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
