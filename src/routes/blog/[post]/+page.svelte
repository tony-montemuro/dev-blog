<script lang="ts">
  import type { Post } from '$lib/types/post.svelte';
  import type { Component } from 'svelte';
  import { formatDate } from '$lib/scripts/date';

  interface Props {
    data: { Content: Component; meta: Post };
  }

  let { data }: Props = $props();
  let { meta, Content } = data;
</script>

<article class="prose prose-invert lg:prose-xl animate-floatin mx-auto p-(--app-padding)">
  <div class="mb-10">
    <h1>{meta.title}</h1>
    <div class="flex flex-col text-sm">
      <span>{formatDate(meta.created)}</span>
      <span>Tony Montemuro</span>
    </div>
  </div>
  <Content />
</article>
