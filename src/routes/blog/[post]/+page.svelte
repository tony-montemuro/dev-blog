<script lang="ts">
  import type { Post } from '$lib/types/post.svelte';
  import type { Component } from 'svelte';

  interface Props {
    data: { Content: Component; meta: Post };
  }

  let { data }: Props = $props();
  let { meta, Content } = data;
</script>

<Content />
